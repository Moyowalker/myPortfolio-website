import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLongRightIcon,
  BoltIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import { knowledgeHighlights } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const suggestions = [
  "How do you align AI initiatives with business outcomes?",
  "What does your discovery sprint look like?",
  "How do you structure product-engineering collaboration?",
];

const InsightsBot = () => {
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Ask me about product strategy, AI automation, delivery frameworks, or any of the case studies above. I'm pulling from my recent work and cached playbooks.",
    },
  ]);

  const submitQuestion = useCallback(
    async (value) => {
      const trimmed = value.trim();
      if (!trimmed) return;

      setQuestion("");
      setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
      setIsLoading(true);

      try {
        const response = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: trimmed }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.answer ||
              "I could not reach the AI services right now. Here's what I can share based on recent work: focus on user discovery, tight feedback loops, and measurable outcomes.",
          },
        ]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I ran into an issue reaching the AI backend. Try again shortly or reach me directly via email—happy to continue the conversation there.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    const handler = (event) => {
      const { question: prompt } = event.detail || {};
      if (prompt) {
        submitQuestion(prompt);
      }
    };

    window.addEventListener("insightsbot:ask", handler);
    return () => window.removeEventListener("insightsbot:ask", handler);
  }, [submitQuestion]);

  return (
    <section id="insights" aria-labelledby="insights-heading">
      <motion.div variants={textVariant()} className="max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
          Ask me anything
        </p>
        <h2
          className="text-pretty text-3xl font-bold tracking-tight text-white sm:text-4xl"
          id="insights-heading"
        >
          AI-tuned knowledge base about my work.
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[2fr,1fr]">
        <motion.div
          variants={fadeIn("", "", 0.2, 1)}
          className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/60"
        >
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            <div className="flex flex-col gap-6">
              {messages.map((msg, index) => (
                <div
                  key={`${msg.role}-${index}`}
                  className={`flex ${
                    msg.role === "assistant" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-xl rounded-2xl border px-4 py-3 text-sm leading-relaxed shadow-sm ${
                      msg.role === "assistant"
                        ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-100"
                        : "border-slate-700 bg-slate-950 text-slate-200"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-3 text-xs uppercase tracking-[0.3em] text-indigo-100">
                    <SparklesIcon className="h-4 w-4 animate-pulse" />
                    Thinking
                  </div>
                </div>
              )}
            </div>
          </div>
          <form
            className="border-t border-slate-800/80 bg-slate-950/80 p-4"
            onSubmit={(event) => {
              event.preventDefault();
              submitQuestion(question);
            }}
          >
            <div className="flex gap-3">
              <input
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Ask about product leadership, AI automation, or a case study..."
                className="flex-1 rounded-full border border-slate-800/70 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none"
                aria-label="Ask Moyosore a question"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-100 transition hover:border-indigo-400 hover:bg-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send
                <ArrowLongRightIcon className="h-4 w-4" />
              </button>
            </div>
          </form>
        </motion.div>

        <motion.aside
          variants={fadeIn("", "", 0.25, 1)}
          className="flex flex-col gap-6"
        >
          <div className="rounded-3xl border border-slate-800/70 bg-slate-900/50 p-6 backdrop-blur-xl">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200">
              <BoltIcon className="h-4 w-4" />
              Suggested prompts
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              {suggestions.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => submitQuestion(item)}
                    className="text-left text-indigo-100 underline decoration-dotted underline-offset-4 transition hover:text-indigo-200"
                    disabled={isLoading}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800/70 bg-slate-900/50 p-6 backdrop-blur-xl">
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-200">
              Focus areas
            </h3>
            <div className="mt-4 flex flex-col gap-4 text-sm text-slate-300">
              {knowledgeHighlights.map((item) => (
                <div key={item.topic}>
                  <p className="font-semibold text-white">{item.topic}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-4">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.35em] text-slate-500">
              Responses blend cached knowledge with real-time AI calls when API keys are configured.
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default SectionWrapper(InsightsBot, "insights");
