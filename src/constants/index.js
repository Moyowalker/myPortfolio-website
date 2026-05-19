export const navLinks = [
  { id: "projects", title: "Work" },
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "tech", title: "Capabilities" },
  { id: "case-studies", title: "Notes" },
  { id: "insights", title: "Ask" },
  { id: "contact", title: "Contact" },
];

export const heroContent = {
  eyebrow: "Product builder · Full-stack engineer · Technical product lead",
  headlineTop: "I build products",
  headlineBottom: "people actually want to use.",
  statement:
    "I turn messy operational problems into software that feels clear, credible, and worth returning to.",
  narrative:
    "Most of my range was shaped in African markets, where constraints force sharper systems, better product judgment, and less room for empty polish.",
  ctas: [
    { label: "Selected work", href: "#projects", variant: "primary" },
    {
      label: "Contact",
      href: "mailto:dev@moyosore.me",
      variant: "secondary",
    },
  ],
  roles: [
    "Full-stack engineering",
    "Technical product leadership",
    "AI-enabled workflow design",
    "0→1 product building",
  ],
  stats: [
    { value: "11", label: "products across fintech, AI, edtech, operations, and commerce" },
    { value: "Senior", label: "range across architecture, product thinking, and delivery" },
    { value: "Africa → Global", label: "quality bar shaped locally and built to travel" },
  ],
  reel: [
    {
      name: "Expense-AI",
      detail: "Finance intelligence designed to make everyday money decisions lighter and clearer.",
    },
    {
      name: "Schoollynk",
      detail: "Education infrastructure for schools, parents, and payments under local constraints.",
    },
    {
      name: "DreamLens",
      detail: "AI reflection product shaped more like an experience than a prompt response.",
    },
    {
      name: "Grubmo",
      detail: "Regional commerce product built around local routing, trust, and habit loops.",
    },
  ],
  note:
    "The portfolio spans real shipped products: InvoiceEase, MCRE, FastClaim, TVMS, SubTrack, and a cost automation platform built for operational clarity.",
  featured: {
    label: "Builder's note",
    text: "My best work lives where strong engineering meets product sensitivity: interfaces people enjoy, systems teams can trust, and ideas that survive contact with real users.",
  },
};

export const aboutSummary =
  "I started in engineering, but the work that kept pulling me forward was always bigger than code: frame the problem properly, shape the system well, and make the final product feel usable under real conditions.";

export const collaborationTracks = [
  {
    audience: "From code to product",
    description:
      "I moved into product work so architecture, scope, and user experience could be shaped together instead of in silos.",
  },
  {
    audience: "African constraints, global standard",
    description:
      "Building in African markets sharpened my judgment around trust, infrastructure, and adoption. It made the work stricter in a good way.",
  },
];

export const pillars = [
  {
    title: "Engineering depth",
    description:
      "I work comfortably across product architecture, backend systems, frontend surfaces, and integrations.",
    indicator: "bg-[#d9b272]",
  },
  {
    title: "Product taste",
    description:
      "I care about sequencing, clarity, and interaction quality so the product feels deliberate and easy to trust.",
    indicator: "bg-[#d9b272]",
  },
  {
    title: "Human-centered execution",
    description:
      "Usefulness is the bar: reduce friction, respect context, and help people act without extra ceremony.",
    indicator: "bg-[#d9b272]",
  },
];

export const techStack = [
  {
    label: "Product discovery and definition",
    blurb:
      "Frame the problem, map the workflow, and reduce ambiguity before build effort compounds.",
    items: [
      "Discovery workshops",
      "Workflow mapping",
      "Roadmapping",
      "Stakeholder alignment",
      "Service blueprinting",
    ],
  },
  {
    label: "Interface and application build",
    blurb:
      "Build product surfaces with a bias for clarity, performance, and maintainable interaction systems.",
    items: ["React", "Vite", "TailwindCSS", "Next.js", "React Native", "Framer Motion"],
  },
  {
    label: "Backend systems and data",
    blurb:
      "Design APIs, data models, and integrations that stay stable beyond the prototype phase.",
    items: ["Node.js", "Python", "MongoDB", "PostgreSQL", "Firebase", "REST APIs"],
  },
  {
    label: "Automation and AI",
    blurb:
      "Use AI where it sharpens the product or workflow, not where it weakens trust.",
    items: ["OpenAI", "Claude", "Vertex AI", "LangChain", "Automation Anywhere", "Odoo"],
  },
];

export const experiences = [
  {
    title: "Technical Product Manager",
    company: "Emocom Technologies & Consulting Limited",
    date: "2024 – Present",
    summary:
      "Lead product strategy and delivery across enterprise platforms where operational clarity, process control, and cross-functional alignment are non-negotiable.",
    metric: "Enterprise systems",
    stack: ["Product strategy", "Roadmapping", "React", "Node.js", "Odoo"],
    outcomes: [
      "Directed product across OEM operations, procurement workflows, asset control, and internal automation systems.",
      "Converted stakeholder ambiguity into scoped roadmaps, release priorities, and implementation plans engineering teams could execute.",
      "Balanced business expectations, user adoption, and system constraints in products that needed to work beyond the demo layer.",
    ],
  },
  {
    title: "Founder / Product Builder",
    company: "Molyntech Limited",
    date: "2022 – Present",
    summary:
      "Build software products from first idea through production, owning product definition, interface direction, technical architecture, and launch decisions.",
    metric: "0→1 builds",
    stack: ["Product design", "React", "Node.js", "MongoDB", "AI workflows"],
    outcomes: [
      "Shipped products across fintech, AI, enterprise automation, commerce, education, and internal tooling.",
      "Worked as both builder and decision-maker, protecting product coherence while moving quickly.",
      "Created systems that prioritize clarity, retention, and business usefulness rather than surface polish alone.",
    ],
  },
  {
    title: "Independent Product Engineer",
    company: "Consulting & Client Delivery",
    date: "2019 – 2022",
    summary:
      "Partnered with founders and operators to shape, build, and iterate software that could hold up under real use and changing business needs.",
    metric: "Cross-sector range",
    stack: ["Full-stack delivery", "Client discovery", "APIs", "React Native", "Systems design"],
    outcomes: [
      "Built across SME and growth-stage contexts in fintech, education, commerce, operations, and customer experience.",
      "Learned to navigate ambiguous asks, lean budgets, and evolving product requirements without losing delivery quality.",
      "Developed the operating range that now allows me to move comfortably between engineering depth and product leadership.",
    ],
  },
];

export const projects = [
  {
    name: "Expense-AI",
    year: "2024",
    status: "Concept in motion",
    category: "AI Fintech",
    summary:
      "Expense intelligence product that translates transaction noise into clear next actions for everyday money decisions.",
    purpose: "Help people understand where money is going and what to do next.",
    problem:
      "Most expense tools stop at recording activity, leaving users alone with the hardest part: interpretation and behavior change.",
    impact:
      "Combines categorisation, spending patterns, and AI-guided recommendations into a financial companion experience.",
    preview: ["AI budgeting assistant", "Behavioral nudges", "Decision-ready summaries"],
    stack: ["React", "Node.js", "OpenAI", "MongoDB"],
    links: { live: null, caseStudy: null },
  },
  {
    name: "InvoiceEase",
    year: "2023",
    status: "Production product",
    category: "B2B SaaS",
    summary:
      "Automated invoicing platform with AI-assisted reconciliation for service teams processing thousands of transactions monthly.",
    purpose: "Make invoicing faster, cleaner, and harder to get wrong.",
    problem:
      "Finance teams were stuck in brittle spreadsheets, manual approvals, and late reconciliation that slowed revenue visibility.",
    impact:
      "Reduced invoice preparation time and turned billing operations into a more observable, accountable workflow.",
    preview: ["Invoice orchestration", "Anomaly detection", "Cash projection dashboards"],
    stack: ["React", "Node.js", "MongoDB", "OpenAI"],
    links: { live: null, caseStudy: "invoiceease" },
  },
  {
    name: "Schoollynk",
    year: "2021",
    status: "Live and growing",
    category: "EdTech",
    summary:
      "Communication and management app connecting schools and parents across Nigeria with real-time engagement loops.",
    purpose: "Bring school communication, attendance, and payments into one usable product.",
    problem:
      "Schools needed a tool shaped for local infrastructure and user habits, not a generic imported platform.",
    impact:
      "Improved parent responsiveness, reduced late fee collection, and gave administrators clearer visibility into engagement.",
    preview: ["Parent engagement", "Attendance insights", "Fee reminders"],
    stack: ["React Native", "Firebase", "Node.js", "Notifications"],
    links: { live: null, caseStudy: "schoollynk" },
  },
  {
    name: "DreamLens",
    year: "2024",
    status: "Beta experience",
    category: "AI Product",
    summary:
      "Consumer web product that interprets dreams using psychological frameworks layered with LLM insights.",
    purpose: "Turn dream reflection into a calming, meaningful AI product experience.",
    problem:
      "Generic interpretations felt shallow. Users wanted emotional nuance, better safety, and something that felt more intentional.",
    impact:
      "Created a differentiated consumer AI flow with stronger guardrails, richer emotional context, and higher repeat usage.",
    preview: ["Guided journaling", "AI interpretation", "Sensitive-content safeguards"],
    stack: ["React", "Node.js", "Vertex AI", "Claude"],
    links: { live: null, caseStudy: "dreamlens" },
  },
  {
    name: "MCRE",
    year: "2023",
    status: "Active platform",
    category: "AI Platform",
    summary:
      "Multi-content repurposing engine that transforms long-form content into channel-ready assets with editorial guardrails.",
    purpose: "Help teams create more content without losing voice or quality.",
    problem:
      "Repurposing podcasts, webinars, and articles was manual, inconsistent, and too slow for modern marketing teams.",
    impact:
      "Compressed content ops from days to hours and made AI output reviewable instead of opaque.",
    preview: ["Prompt orchestration", "Editorial approvals", "Channel-specific assets"],
    stack: ["React", "Node.js", "LangChain", "Claude"],
    links: { live: null, caseStudy: "mcre" },
  },
  {
    name: "SubTrack",
    year: "2022",
    status: "Internal platform",
    category: "Product Ops",
    summary:
      "Unified dashboard for tracking SaaS spend, renewal cycles, and approval workflows across distributed teams.",
    purpose: "Give finance and operations teams a cleaner grip on software spend.",
    problem:
      "Fast-moving teams were overspending on subscriptions because renewal visibility and ownership were fragmented.",
    impact:
      "Made renewal risk visible, reduced waste, and turned subscription management into a proactive workflow.",
    preview: ["Spend visibility", "Renewal alerts", "Approval routing"],
    stack: ["React", "Node.js", "PostgreSQL", "Slack integrations"],
    links: { live: null, caseStudy: "subscription-manager" },
  },
  {
    name: "Cost Automation Platform",
    year: "2024",
    status: "Built for operations",
    category: "FinOps Automation",
    summary:
      "Workflow platform for tracking cost drivers, approvals, and exception handling across operational teams.",
    purpose: "Reduce manual financial coordination in fast-moving operational environments.",
    problem:
      "Teams were reconciling costs across disconnected tools, making approvals slow and visibility unreliable.",
    impact:
      "Brought structure to cost controls and created a clearer audit trail for high-frequency spending decisions.",
    preview: ["Approval routing", "Variance tracking", "Operational audit trail"],
    stack: ["React", "Node.js", "PostgreSQL", "Automation workflows"],
    links: { live: null, caseStudy: null },
  },
  {
    name: "FastClaim",
    year: "2020",
    status: "Live product",
    category: "Insurtech",
    summary:
      "Claims platform that automates intake, adjudication, and customer communications for insurers.",
    purpose: "Shorten the path from claim submission to settlement.",
    problem:
      "Claims operations were hidden inside siloed systems, creating slow decisions and poor communication for customers.",
    impact:
      "Improved claims visibility, sped up handling, and gave insurers configurable workflows they could adapt over time.",
    preview: ["Claims intake flows", "Handler workbench", "SLA tracking"],
    stack: ["React", "Node.js", "MongoDB", "Workflow engine"],
    links: { live: "https://getfastclaim.com", caseStudy: "fastclaim" },
  },
  {
    name: "NFT Marketing Platform",
    year: "2022",
    status: "Campaign system",
    category: "Growth Platform",
    summary:
      "Marketing workflow product built to help web3 teams launch campaigns, community drops, and creator-led activation loops.",
    purpose: "Bring structure and repeatability to high-noise campaign execution.",
    problem:
      "Growth teams were coordinating launches through spreadsheets and chat threads with little visibility into momentum or drop readiness.",
    impact:
      "Turned campaign execution into a clearer operating system with better coordination between creators, community leads, and marketers.",
    preview: ["Launch planning", "Creator coordination", "Engagement tracking"],
    stack: ["React", "Node.js", "Analytics", "Automation"],
    links: { live: null, caseStudy: null },
  },
  {
    name: "TVMS",
    year: "2021",
    status: "Workflow system",
    category: "Operations Platform",
    summary:
      "Structured management system for tracking records, escalations, approvals, and team accountability in a high-volume workflow environment.",
    purpose: "Bring visibility and order to a process that depends on precise routing and fast follow-through.",
    problem:
      "The underlying workflow needed stronger ownership, clearer handoffs, and less dependence on manual coordination.",
    impact:
      "Improved traceability and created a more disciplined process for teams operating under pressure.",
    preview: ["Case visibility", "Escalation routing", "Audit-friendly records"],
    stack: ["React", "Node.js", "MongoDB", "Role permissions"],
    links: { live: null, caseStudy: null },
  },
  {
    name: "Grubmo",
    year: "2020",
    status: "Marketplace launch",
    category: "Commerce",
    summary:
      "Food and grocery delivery marketplace tailored to Calabar's merchants, logistics realities, and customer expectations.",
    purpose: "Make local ordering and delivery feel dependable, familiar, and fast.",
    problem:
      "Regional merchants needed digital storefronts and routing logic designed for their own logistics constraints, not borrowed assumptions from larger markets.",
    impact:
      "Created a locally credible marketplace with better merchant onboarding, clearer ETAs, and stronger customer trust signals.",
    preview: ["Merchant onboarding", "Delivery routing", "Order habit loops"],
    stack: ["Next.js", "Node.js", "MongoDB", "SMS updates"],
    links: { live: null, caseStudy: "grubmo" },
  },
];

export const featuredCaseStudySlugs = [
  "invoiceease",
  "subscription-manager",
  "mcre",
  "dreamlens",
  "schoollynk",
  "fastclaim",
  "grubmo",
];

export const proofPoints = [
  {
    title: "I start at the system",
    description:
      "Before I reach for features, I look at the workflow beneath them. Better software usually begins with a better model of how the work actually happens.",
  },
  {
    title: "Adoption matters more than applause",
    description:
      "A product is not successful because it looks finished. It is successful when people trust it enough to change behavior around it.",
  },
  {
    title: "Taste is part of delivery",
    description:
      "I care about the emotional quality of software too: pacing, clarity, and the sense that someone thoughtful designed this for a human being.",
  },
];

export const contactChannels = [
  {
    label: "Email",
    value: "dev@moyosore.me",
    href: "mailto:dev@moyosore.me",
  },
  {
    label: "Website",
    value: "moyosore.me",
    href: "https://moyosore.me",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/moyowalker",
    href: "https://www.linkedin.com/in/moyowalker",
  },
];

export const contactFocus = [
  "Senior full-stack product execution",
  "Founding or early product builds",
  "AI and automation workflows",
  "Enterprise systems with adoption risk",
];

export const knowledgeHighlights = [
  {
    topic: "How I work",
    points: [
      "Start with workflow truth before feature scope.",
      "Make the critical path obvious for users and operators.",
      "Use AI where it improves judgment, speed, or clarity.",
    ],
  },
  {
    topic: "What I protect",
    points: [
      "Products that feel intuitive under real constraints.",
      "Systems that stay understandable as they grow.",
      "Delivery choices that help teams move with confidence.",
    ],
  },
];



export const testimonials = [
  {
    quote:
      "Moyosore combines technical precision with product intuition. His ability to turn complex problems into elegant user-centric solutions sets him apart.",
    name: "Tomiwa T.",
    role: "Director of Marketing and Communications",
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
