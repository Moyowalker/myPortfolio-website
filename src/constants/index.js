export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "case-studies", title: "Case Studies" },
  { id: "insights", title: "AI Q&A" },
  { id: "contact", title: "Contact" },
];

export const heroContent = {
  headlineTop: "I build products that",
  headlineBottom: "ship, scale, and stick.",
  statement:
    "Technical Product Manager and Full-Stack Developer with 9+ years turning complex problems into working software. From enterprise platforms to funded startups — I do the strategy, the architecture, and the delivery.",
  ctas: [
    { label: "See My Work", href: "#projects", variant: "primary" },
    { label: "View Experience", href: "#experience", variant: "secondary" },
  ],
  roles: [
    "Technical Product Manager",
    "Full-Stack Developer",
    "Product Builder",
    "Startup Founder",
  ],
};

export const aboutSummary =
  "I'm a Technical Product Manager and Full-Stack Developer with 9+ years building products people actually use. I've worked across fintech, insurtech, enterprise automation, edtech, and AI — always doing both sides: the product thinking and the engineering. I understand what makes systems hold under pressure and what makes users keep coming back. My work lives in the space between a good idea and something that ships.";

export const pillars = [
  {
    title: "Product Strategy",
    description:
      "Turning business goals into clear roadmaps, prioritized bets, and delivery plans that engineering teams can actually execute.",
    indicator: "bg-cyan-300/70",
  },
  {
    title: "Full-Stack Engineering",
    description:
      "Building end-to-end — React, Node.js, MongoDB, APIs, and cloud deployment. I write the code and understand the full system.",
    indicator: "bg-amber-300/70",
  },
  {
    title: "AI & Automation",
    description:
      "Designing products and workflows that use AI as a real capability — LLM pipelines, intelligent tooling, and automation that scales.",
    indicator: "bg-emerald-300/70",
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
    title: "Manager, Products Development & Innovation",
    company: "Emocom Technologies & Consulting Ltd",
    date: "Sept 2024 – Present",
    bullets: [
      "Lead product vision and delivery of enterprise digital platforms — Cost Automation, E-Procurement, and Odoo–Xero integration — from concept to production.",
      "Drive AI adoption and innovation sprints across internal teams, running workshops and rapid MVPs that move from whiteboard to shipped feature.",
      "Work directly with stakeholders, engineering teams, and business units to translate ambiguous requirements into roadmaps that teams can actually execute.",
    ],
  },
  {
    title: "Lead Application Developer",
    company: "Arravo",
    date: "Nov 2018 – Aug 2024",
    bullets: [
      "Led the transition from paper-based operations to full digital enterprise systems — one of the more consequential things I've built.",
      "Managed a 5-person development team and delivered enterprise software that generated over $650k in revenue.",
      "Built automation tools and internal systems that made operations measurably faster and reduced manual overhead across the business.",
    ],
  },
  {
    title: "Lead Software Engineer",
    company: "FastClaim (Insurtech)",
    date: "Apr 2022 – May 2023",
    bullets: [
      "Built and launched a claims automation platform for Nigeria and Ghana, reaching 2,000+ downloads within the first 6 months.",
      "Led API architecture decisions and introduced Scrum workflows that improved team velocity and release cadence.",
      "Drove the product from prototype to live — spanning engineering, insurance workflow design, and go-to-market simultaneously.",
    ],
  },
  {
    title: "Application Developer",
    company: "Business Connexion (BCX)",
    date: "Feb 2016 – Sept 2017",
    bullets: [
      "Built invoicing software and integrated MDM solutions for enterprise telecom clients including MTN and 9Mobile.",
      "Improved device management and security systems at scale for some of Nigeria's largest telecom deployments.",
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

