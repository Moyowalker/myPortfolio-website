import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const svgTextStyle = { fontFamily: "Sora, sans-serif" };

const sceneConfigs = {
  "Expense-AI": {
    type: "analytics",
    accent: "#d9b272",
    title: "SPEND SIGNAL",
    subtitle: "Adaptive expense lens",
    metrics: [
      { label: "Alerts", value: "18" },
      { label: "Confidence", value: "94%" },
      { label: "Budget", value: "Stable" },
    ],
    path: "M34 192C82 152 128 126 170 138C214 150 246 176 294 146C324 126 354 94 384 88",
    points: [
      [82, 152],
      [170, 138],
      [294, 146],
      [384, 88],
    ],
    tags: ["nudges", "patterns", "clarity"],
  },
  InvoiceEase: {
    type: "analytics",
    accent: "#c9986b",
    title: "INVOICE FLOW",
    subtitle: "Reconciliation in motion",
    metrics: [
      { label: "Queued", value: "284" },
      { label: "Exceptions", value: "12" },
      { label: "Recovered", value: "$120k" },
    ],
    path: "M34 186C88 160 126 108 176 118C218 126 244 184 294 172C332 162 354 112 384 82",
    points: [
      [88, 160],
      [176, 118],
      [294, 172],
      [384, 82],
    ],
    tags: ["billing", "review", "cashflow"],
  },
  Schoollynk: {
    type: "mobile",
    accent: "#d4ad7e",
    title: "SCHOOL LOOP",
    subtitle: "Realtime parent engagement",
    leftTitle: "Attendance",
    rightTitle: "Payments",
    leftValue: "97%",
    rightValue: "On time",
    chips: ["push", "voice", "offline"],
  },
  DreamLens: {
    type: "mobile",
    accent: "#e3c392",
    title: "DREAM FLOW",
    subtitle: "Guided AI reflection",
    leftTitle: "Mood",
    rightTitle: "Interpret",
    leftValue: "Calm",
    rightValue: "Ready",
    chips: ["journal", "tone", "safety"],
  },
  MCRE: {
    type: "pipeline",
    accent: "#ba8862",
    title: "CONTENT ENGINE",
    subtitle: "Prompt orchestration with review",
    steps: ["Capture", "Transform", "Review", "Ship"],
    footer: "Editor in the loop",
  },
  SubTrack: {
    type: "analytics",
    accent: "#d0ae82",
    title: "SPEND MAP",
    subtitle: "Renewal pressure and visibility",
    metrics: [
      { label: "Renewals", value: "31" },
      { label: "Waste", value: "-40%" },
      { label: "Owners", value: "12" },
    ],
    path: "M34 176C74 126 126 94 178 110C230 126 246 176 290 182C334 188 362 132 384 108",
    points: [
      [74, 126],
      [178, 110],
      [290, 182],
      [384, 108],
    ],
    tags: ["renewals", "alerts", "owners"],
  },
  "Cost Automation Platform": {
    type: "pipeline",
    accent: "#d7b17c",
    title: "COST ROUTER",
    subtitle: "Approval and exception control",
    steps: ["Ingest", "Route", "Approve", "Audit"],
    footer: "Operational audit trail",
  },
  FastClaim: {
    type: "operations",
    accent: "#cb8e69",
    title: "CLAIMS DESK",
    subtitle: "Handler workbench",
    rows: [
      ["FNOL-284", "Docs complete"],
      ["SLA risk", "Escalated"],
      ["Customer", "Notified"],
    ],
    callout: "2-way updates",
  },
  "NFT Marketing Platform": {
    type: "commerce",
    accent: "#b67c63",
    title: "LAUNCH RADAR",
    subtitle: "Creator and campaign coordination",
    cards: ["Drop plan", "Creators", "Community"],
    route: [
      [86, 158],
      [178, 90],
      [280, 138],
      [352, 82],
    ],
    footer: "Momentum tracking",
  },
  TVMS: {
    type: "operations",
    accent: "#c9ad84",
    title: "COMMAND GRID",
    subtitle: "Traceability under pressure",
    rows: [
      ["Records", "Verified"],
      ["Escalation", "Owner set"],
      ["Audit", "Ready"],
    ],
    callout: "Structured follow-through",
  },
  Grubmo: {
    type: "commerce",
    accent: "#d29d6b",
    title: "DELIVERY MAP",
    subtitle: "Local commerce, local routing",
    cards: ["Merchants", "Orders", "Riders"],
    route: [
      [72, 166],
      [158, 104],
      [248, 154],
      [346, 96],
    ],
    footer: "ETA confidence",
  },
};

const fallbackScene = {
  type: "analytics",
  accent: "#d9b272",
  title: "PRODUCT VIEW",
  subtitle: "Structured product signal",
  metrics: [
    { label: "Signal", value: "Live" },
    { label: "Clarity", value: "High" },
    { label: "Status", value: "Ready" },
  ],
  path: "M34 176C88 142 142 98 186 114C230 130 254 186 302 172C336 162 362 122 384 92",
  points: [
    [88, 142],
    [186, 114],
    [302, 172],
    [384, 92],
  ],
  tags: ["product", "signal", "design"],
};

const widgetAnim = (index, reducedMotion) =>
  reducedMotion
    ? undefined
    : {
        opacity: [0.72, 1, 0.72],
        y: [0, -2, 0],
        transition: {
          duration: 3.4,
          repeat: Infinity,
          delay: index * 0.18,
          ease: "easeInOut",
        },
      };

const label = (x, y, value, fill = "rgba(245,241,232,0.72)") => (
  <text x={x} y={y} fill={fill} fontSize="10" letterSpacing="1.8" style={svgTextStyle}>
    {value}
  </text>
);

const valueText = (x, y, value, fill = "#F5F1E8", size = 19) => (
  <text x={x} y={y} fill={fill} fontSize={size} fontWeight="600" style={svgTextStyle}>
    {value}
  </text>
);

const renderAnalytics = (config, reducedMotion) => (
  <svg viewBox="0 0 420 280" className="h-full w-full" aria-hidden="true">
    <rect x="18" y="18" width="384" height="244" rx="26" fill="rgba(0,0,0,0.18)" />
    {label(34, 46, config.title, config.accent)}
    {valueText(34, 76, config.subtitle, "#F5F1E8", 16)}
    {config.metrics.map((metric, index) => (
      <motion.g key={metric.label} animate={widgetAnim(index, reducedMotion)}>
        <rect
          x={34 + index * 118}
          y="96"
          width="102"
          height="58"
          rx="18"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.08)"
        />
        {label(48 + index * 118, 118, metric.label.toUpperCase(), "rgba(245,241,232,0.56)")}
        {valueText(48 + index * 118, 144, metric.value, "#F5F1E8", 18)}
      </motion.g>
    ))}
    <rect x="34" y="170" width="352" height="58" rx="22" fill="rgba(255,255,255,0.04)" />
    <path
      d={config.path}
      fill="none"
      stroke={config.accent}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {config.points.map(([cx, cy], index) => (
      <motion.circle
        key={`${cx}-${cy}`}
        cx={cx}
        cy={cy}
        r="5"
        fill={config.accent}
        animate={
          reducedMotion
            ? undefined
            : {
                opacity: [0.45, 1, 0.45],
                scale: [1, 1.18, 1],
                transition: { duration: 2.6, repeat: Infinity, delay: index * 0.22 },
              }
        }
      />
    ))}
    {config.tags.map((tag, index) => (
      <motion.g key={tag} animate={widgetAnim(index + 1, reducedMotion)}>
        <rect
          x={34 + index * 112}
          y="238"
          width="98"
          height="24"
          rx="12"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.08)"
        />
        {label(54 + index * 112, 253, tag.toUpperCase(), "rgba(245,241,232,0.6)")}
      </motion.g>
    ))}
  </svg>
);

const renderMobile = (config, reducedMotion) => (
  <svg viewBox="0 0 420 280" className="h-full w-full" aria-hidden="true">
    <rect x="18" y="18" width="384" height="244" rx="26" fill="rgba(0,0,0,0.18)" />
    {label(34, 46, config.title, config.accent)}
    {valueText(34, 76, config.subtitle, "#F5F1E8", 16)}
    {[0, 1].map((index) => {
      const x = index === 0 ? 44 : 220;
      const title = index === 0 ? config.leftTitle : config.rightTitle;
      const value = index === 0 ? config.leftValue : config.rightValue;
      return (
        <motion.g key={title} animate={widgetAnim(index, reducedMotion)}>
          <rect
            x={x}
            y="92"
            width="154"
            height="144"
            rx="28"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.08)"
          />
          <rect x={x + 52} y="102" width="50" height="8" rx="4" fill="rgba(245,241,232,0.14)" />
          {label(x + 18, 132, title.toUpperCase(), "rgba(245,241,232,0.56)")}
          {valueText(x + 18, 160, value, config.accent, 20)}
          <rect x={x + 18} y="176" width="118" height="12" rx="6" fill="rgba(255,255,255,0.07)" />
          <rect x={x + 18} y="196" width="96" height="12" rx="6" fill="rgba(255,255,255,0.05)" />
          <rect x={x + 18} y="216" width="74" height="10" rx="5" fill={config.accent} fillOpacity="0.28" />
        </motion.g>
      );
    })}
    {config.chips.map((chip, index) => (
      <motion.g key={chip} animate={widgetAnim(index + 2, reducedMotion)}>
        <rect
          x={36 + index * 118}
          y="246"
          width="102"
          height="20"
          rx="10"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.08)"
        />
        {label(58 + index * 118, 260, chip.toUpperCase(), "rgba(245,241,232,0.6)")}
      </motion.g>
    ))}
  </svg>
);

const renderPipeline = (config, reducedMotion) => (
  <svg viewBox="0 0 420 280" className="h-full w-full" aria-hidden="true">
    <rect x="18" y="18" width="384" height="244" rx="26" fill="rgba(0,0,0,0.18)" />
    {label(34, 46, config.title, config.accent)}
    {valueText(34, 76, config.subtitle, "#F5F1E8", 16)}
    <path d="M68 152H352" stroke="rgba(255,255,255,0.12)" strokeWidth="3" strokeLinecap="round" />
    {config.steps.map((step, index) => {
      const x = 56 + index * 88;
      return (
        <motion.g key={step} animate={widgetAnim(index, reducedMotion)}>
          <circle cx={x} cy="152" r="14" fill={config.accent} fillOpacity="0.18" stroke={config.accent} />
          <circle cx={x} cy="152" r="5" fill={config.accent} />
          <rect
            x={x - 36}
            y="98"
            width="72"
            height="34"
            rx="14"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.08)"
          />
          {label(x - 18, 118, step.toUpperCase(), "rgba(245,241,232,0.65)")}
          <rect
            x={x - 44}
            y="180"
            width="88"
            height="40"
            rx="16"
            fill="rgba(255,255,255,0.05)"
          />
          <rect x={x - 28} y="194" width="54" height="8" rx="4" fill="rgba(245,241,232,0.18)" />
        </motion.g>
      );
    })}
    <rect x="34" y="236" width="160" height="22" rx="11" fill={config.accent} fillOpacity="0.14" />
    {label(48, 250, config.footer.toUpperCase(), "rgba(245,241,232,0.8)")}
  </svg>
);

const renderOperations = (config, reducedMotion) => (
  <svg viewBox="0 0 420 280" className="h-full w-full" aria-hidden="true">
    <rect x="18" y="18" width="384" height="244" rx="26" fill="rgba(0,0,0,0.18)" />
    {label(34, 46, config.title, config.accent)}
    {valueText(34, 76, config.subtitle, "#F5F1E8", 16)}
    <rect x="34" y="94" width="352" height="144" rx="22" fill="rgba(255,255,255,0.04)" />
    {config.rows.map(([left, right], index) => {
      const y = 124 + index * 34;
      return (
        <motion.g key={left} animate={widgetAnim(index, reducedMotion)}>
          <circle cx="58" cy={y - 4} r="5" fill={config.accent} />
          {valueText(74, y, left.toUpperCase(), "#F5F1E8", 13)}
          {label(270, y, right.toUpperCase(), "rgba(245,241,232,0.58)")}
          <path d={`M34 ${y + 12}H386`} stroke="rgba(255,255,255,0.08)" />
        </motion.g>
      );
    })}
    <rect x="258" y="210" width="128" height="28" rx="14" fill={config.accent} fillOpacity="0.16" />
    {label(282, 228, config.callout.toUpperCase(), "rgba(245,241,232,0.78)")}
  </svg>
);

const renderCommerce = (config, reducedMotion) => (
  <svg viewBox="0 0 420 280" className="h-full w-full" aria-hidden="true">
    <rect x="18" y="18" width="384" height="244" rx="26" fill="rgba(0,0,0,0.18)" />
    {label(34, 46, config.title, config.accent)}
    {valueText(34, 76, config.subtitle, "#F5F1E8", 16)}
    <rect x="34" y="96" width="196" height="132" rx="22" fill="rgba(255,255,255,0.04)" />
    <rect x="246" y="96" width="140" height="132" rx="22" fill="rgba(255,255,255,0.04)" />
    <path
      d={`M${config.route[0][0]} ${config.route[0][1]} C${config.route[1][0]} ${config.route[1][1]}, ${config.route[2][0]} ${config.route[2][1]}, ${config.route[3][0]} ${config.route[3][1]}`}
      fill="none"
      stroke={config.accent}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {config.route.map(([cx, cy], index) => (
      <motion.circle
        key={`${cx}-${cy}`}
        cx={cx}
        cy={cy}
        r="6"
        fill={config.accent}
        animate={widgetAnim(index, reducedMotion)}
      />
    ))}
    {config.cards.map((card, index) => (
      <motion.g key={card} animate={widgetAnim(index + 1, reducedMotion)}>
        <rect
          x="260"
          y={112 + index * 34}
          width="112"
          height="24"
          rx="12"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.08)"
        />
        {label(282, 128 + index * 34, card.toUpperCase(), "rgba(245,241,232,0.65)")}
      </motion.g>
    ))}
    <rect x="34" y="238" width="132" height="20" rx="10" fill={config.accent} fillOpacity="0.14" />
    {label(50, 252, config.footer.toUpperCase(), "rgba(245,241,232,0.8)")}
  </svg>
);

const renderScene = (config, reducedMotion) => {
  switch (config.type) {
    case "mobile":
      return renderMobile(config, reducedMotion);
    case "pipeline":
      return renderPipeline(config, reducedMotion);
    case "operations":
      return renderOperations(config, reducedMotion);
    case "commerce":
      return renderCommerce(config, reducedMotion);
    case "analytics":
    default:
      return renderAnalytics(config, reducedMotion);
  }
};

const ProductScene = ({ project }) => {
  const reducedMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springRotateX = useSpring(rotateX, { stiffness: 160, damping: 20, mass: 0.4 });
  const springRotateY = useSpring(rotateY, { stiffness: 160, damping: 20, mass: 0.4 });
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(243, 234, 219, 0.16), transparent 42%)`;

  const scene = sceneConfigs[project.name] || fallbackScene;

  const handleMove = (event) => {
    if (reducedMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width;
    const vertical = (event.clientY - bounds.top) / bounds.height;

    rotateY.set((horizontal - 0.5) * 12);
    rotateX.set((0.5 - vertical) * 12);
    glowX.set(horizontal * 100);
    glowY.set(vertical * 100);
  };

  const resetMotion = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={resetMotion}
      onFocus={resetMotion}
      style={
        reducedMotion
          ? undefined
          : {
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformPerspective: 1400,
            }
      }
      className="relative h-[15.75rem] overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0f0d0b] [transform-style:preserve-3d]"
      aria-hidden="true"
    >
      <motion.div className="absolute inset-0 opacity-70" style={reducedMotion ? undefined : { background: glow }} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_46%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.2))]" />
      {renderScene(scene, reducedMotion)}
    </motion.div>
  );
};

export default ProductScene;