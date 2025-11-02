export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "case-studies", title: "Case Studies" },
  { id: "insights", title: "AI Q&A" },
  { id: "contact", title: "Contact" },
];

export const heroContent = {
  headline:
    "Technical Product Manager || Full Stack Developer || Product Creator || building human-centered, AI-powered digital products.",
  subhead:
    "Passionate about blending product strategy, full-stack engineering, and emerging tech to create impactful user experiences.",
  ctas: [
    { label: "Explore Projects", href: "#projects", variant: "primary" },
    { label: "View Experience", href: "#experience", variant: "secondary" },
  ],
  highlights: [
    "AI-first product strategy",
    "Enterprise automation & operations",
    "Cross-disciplinary leadership",
  ],
};

export const aboutSummary =
  "I lead multidisciplinary teams to shape, ship, and scale products where AI, automation, and human-centered design converge. From enterprise-grade platforms to founder-led experiments, I bridge the gap between strategic bets and deployed software—balancing discovery, delivery, and the engineering rigor that keeps experiences resilient.";

export const pillars = [
  {
    title: "Product Strategy",
    description:
      "Translating business vision into validated product bets, roadmaps, and measurable outcomes across complex stakeholder groups.",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI & Automation",
    description:
      "Designing AI-assisted workflows and automation at scale using Vertex AI, Claude, OpenAI, and domain-specific LLMs.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Full-Stack Delivery",
    description:
      "Shipping resilient web and mobile products end-to-end with React, Node.js, Python, and cloud-native tooling.",
    accent: "from-emerald-500 to-lime-500",
  },
];

export const techStack = {
  core: ["React", "Vite", "TailwindCSS", "Node.js", "MongoDB", "Python"],
  ai: ["Vertex AI", "Claude API", "OpenAI", "LangChain"],
  ops: ["Firebase", "Next.js", "Express", "PostgreSQL", "Docker"],
  tooling: ["Productboard", "Linear", "Figma", "Notion"],
};

export const experiences = [
  {
    title: "Technical Product Manager",
    company: "Emocom Technologies & Consulting Limited",
    date: "2024 – Present",
    bullets: [
      "Lead cross-functional squads delivering enterprise AI and digital platforms spanning service management, ERPs, e-procurement, and customer portals.",
      "Co-designed product architecture and go-to-market strategy with partners including AutomationAnywhere, IValua, OpenText, Odoo, and MongoDB.",
      "Drive roadmap discovery, stakeholder alignment, and iterative delivery to land large-scale automation outcomes.",
    ],
  },
  {
    title: "Founder / Product Creator",
    company: "Molyntech Limited",
    date: "2022 – Present",
    bullets: [
      "Building and scaling AI-enabled SaaS products: Cost Automation Platform, InvoiceEase, MCRE, Subscription Manager, and more.",
      "Own product vision, UX strategy, and technical execution while embedding AI copilots throughout user journeys.",
      "Establish product analytics, experimentation, and monetization loops to grow adoption sustainably.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Consulting & Freelance",
    date: "2019 – 2022",
    bullets: [
      "Delivered custom web apps, APIs, and integrations for SMEs and startups across fintech, edtech, and operations.",
      "Built maintainable React and Node.js codebases with automated testing, CI/CD, and observability baked in.",
      "Advised founders on product-market fit experiments and technical hiring for growth phases.",
    ],
  },
];

export const projects = [
  {
    name: "InvoiceEase",
    summary:
      "Smart invoicing platform automating billing, receipt generation, and customer lifecycle tracking for service teams.",
    stack: ["React", "Node.js", "OpenAI API", "MongoDB"],
    links: { live: null, caseStudy: "invoiceease" },
  },
  {
    name: "Xero–Odoo Sync",
    summary:
      "Cost automation engine syncing invoices, customers, and ledgers bi-directionally between Xero and Odoo.",
    stack: ["Python", "JavaScript", "Odoo XML-RPC", "Xero SDK"],
    links: { live: null, caseStudy: "xero-odoo-sync" },
  },
  {
    name: "Subscription Manager",
    summary:
      "Centralized subscription intelligence with spend analytics, renewal alerts, and payment integrations.",
    stack: ["React", "Node.js", "Firebase"],
    links: { live: null, caseStudy: "subscription-manager" },
  },
  {
    name: "Splitting App",
    summary:
      "AI-powered expense splitter built for the Nigerian market, easing shared spending across friends and families.",
    stack: ["React Native", "Claude API", "MongoDB"],
    links: { live: null, caseStudy: "splitting-app" },
  },
  {
    name: "MCRE",
    summary:
      "Multi-Content Repurposing Engine turning long-form inputs into channel-ready assets using LLM pipelines.",
    stack: ["Node.js", "OpenAI API", "Claude API", "LangChain", "MongoDB"],
    links: { live: null, caseStudy: "mcre" },
  },
  {
    name: "DreamLens",
    summary:
      "AI-driven dream interpretation platform layering psychological signals on user narratives.",
    stack: ["React", "Node.js", "MongoDB", "Claude API", "Vertex AI"],
    links: { live: null, caseStudy: "dreamlens" },
  },
  {
    name: "Schoollynk",
    summary:
      "Communication and management hub connecting schools and parents across Nigeria.",
    stack: ["React Native", "Firebase", "Node.js"],
    links: { live: null, caseStudy: "schoollynk" },
  },
  {
    name: "FastClaim",
    summary:
      "Insurtech platform automating claims intake, adjudication, and feedback for insurers and customers.",
    stack: ["React", "Node.js", "MongoDB"],
    links: { live: "https://getfastclaim.com", caseStudy: "fastclaim" },
  },
  {
    name: "Grubmo",
    summary:
      "Food and grocery delivery experience tailored to Calabar’s merchants and households.",
    stack: ["Next.js", "Node.js", "Express", "MongoDB"],
    links: { live: null, caseStudy: "grubmo" },
  },
  {
    name: "Emocom Milestone Platform",
    summary:
      "Operations platform orchestrating OEM partnerships, pre-sales, customer success, and procurement workflows.",
    stack: ["React", "Node.js", "AutomationAnywhere", "Odoo", "MongoDB"],
    links: { live: null, caseStudy: "emocom-milestone" },
  },
];

export const testimonials = [
  {
    quote:
      "Moyosore combines technical precision with product intuition. His ability to turn complex problems into elegant user-centric solutions sets him apart.",
    name: "Tomiwa T.",
    role: "Director of Marketing & Communications",
    company: "Emocom",
  },
  {
    quote:
      "A visionary in product and tech execution. Working with him on FastClaim was both insightful and impactful.",
    name: "Uche",
    role: "Founder",
    company: "FastClaim",
  },
];

export const contactChannels = [
  {
    label: "Email",
    value: "ajayimy@gmail.com",
    href: "mailto:ajayimy@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+234 816 173 9240",
    href: "https://wa.me/2348161739240",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/moyowalker",
    href: "https://www.linkedin.com/in/moyowalker",
  },
];

export const knowledgeHighlights = [
  {
    topic: "AI Product Delivery",
    points: [
      "Designing discovery workshops to surface high-value AI automation candidates.",
      "Pairing qualitative insights with data instrumentation to measure uplift.",
      "Embedding human-in-the-loop guardrails for responsible AI outcomes.",
    ],
  },
  {
    topic: "Team Leadership",
    points: [
      "Facilitating cross-functional rituals that keep product, engineering, and GTM aligned.",
      "Mentoring product engineers to adopt product-thinking heuristics.",
      "Building repeatable delivery frameworks for rapid prototyping and scale.",
    ],
  },
];

