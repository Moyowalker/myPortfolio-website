import { readFile } from "node:fs/promises";
import path from "node:path";

const knowledgePath = path.join(process.cwd(), "data", "knowledge-base.json");

async function loadKnowledgeBase() {
  try {
    const file = await readFile(knowledgePath, "utf-8");
    return JSON.parse(file);
  } catch (error) {
    return [];
  }
}

function scoreAnswer(question, entry) {
  const normalizedQuestion = question.toLowerCase();
  const keywords = entry.keywords || [];
  const prompt = entry.prompt?.toLowerCase() || "";
  let score = 0;

  keywords.forEach((word) => {
    if (normalizedQuestion.includes(word.toLowerCase())) {
      score += 2;
    }
  });

  if (prompt && normalizedQuestion.includes(prompt)) {
    score += 3;
  }

  return score;
}

async function callClaude(question) {
  const apiKey = process.env.CLAUDE_API_KEY;
  if (!apiKey) return null;

  const payload = {
    model: "claude-3-5-sonnet-20241022",
    max_tokens: 400,
    temperature: 0.2,
    system: "You are Moyosore Ajayi's AI concierge. Answer like a product operator and systems builder speaking to a serious client or collaborator. Prefer concrete, business-aware language over hype. Keep answers under 200 words.",
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
  };

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  const text = data?.content?.[0]?.text;
  return text || null;
}

async function callOpenAI(question) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  const payload = {
    model: "gpt-4o-mini",
    temperature: 0.2,
    max_completion_tokens: 400,
    messages: [
      {
        role: "system",
        content:
          "You are Moyosore Ajayi's AI concierge. Answer with a grounded, product-and-systems perspective for enterprise teams, founders, and collaborators. Prefer concrete language over hype. Keep responses under 200 words.",
      },
      { role: "user", content: question },
    ],
  };

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  const text = data?.output?.[0]?.content?.[0]?.text;
  return text || null;
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const { question } = request.body || {};
  if (!question) {
    return response.status(400).json({ error: "Question is required" });
  }

  const knowledgeBase = await loadKnowledgeBase();

  let answer = null;

  try {
    answer = await callClaude(question);
  } catch (error) {
    answer = null;
  }

  if (!answer) {
    try {
      answer = await callOpenAI(question);
    } catch (error) {
      answer = null;
    }
  }

  if (!answer && knowledgeBase.length) {
    const scored = knowledgeBase
      .map((entry) => ({
        ...entry,
        relevance: scoreAnswer(question, entry),
      }))
      .filter((entry) => entry.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance);

    if (scored.length) {
      answer = scored[0].answer;
    }
  }

  if (!answer) {
    answer =
      "The short version: I usually start by clarifying the workflow, the decision points, and the operational bottlenecks before choosing the product shape. If you want, email dev@moyosore.me and I can unpack the thinking around a specific platform or use case.";
  }

  return response.status(200).json({ answer });
}
