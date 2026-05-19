const BrandMark = ({ className = "h-10 w-10", withRing = true }) => {
  return (
    <svg
      viewBox="0 0 80 80"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="4" width="72" height="72" rx="24" fill="#171512" />
      <rect x="4" y="4" width="72" height="72" rx="24" stroke="rgba(255,255,255,0.12)" />
      <circle cx="58" cy="22" r="10" fill="#D9B272" fillOpacity="0.18" />
      <path
        d="M20 56V24H27.2L40 46.08L52.8 24H60V56H53.52V36.64L43.12 54.08H36.88L26.48 36.64V56H20Z"
        fill="#F8FAFC"
      />
      <path d="M52 58L61 49" stroke="#D9B272" strokeWidth="3.5" strokeLinecap="round" />
      {withRing ? (
        <rect
          x="1.5"
          y="1.5"
          width="77"
          height="77"
          rx="26.5"
          stroke="rgba(217,178,114,0.2)"
          strokeWidth="1.5"
        />
      ) : null}
    </svg>
  );
};

export default BrandMark;
