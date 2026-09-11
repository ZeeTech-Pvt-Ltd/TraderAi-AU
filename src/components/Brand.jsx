export default function Brand() {
  return (
    <a href="/" className="inline-flex items-center gap-2.5 text-ondark no-underline" aria-label="Trader AI home">
      <svg className="h-9 w-9 shrink-0" viewBox="0 0 34 34" aria-hidden="true" focusable="false">
        <rect width="34" height="34" rx="9" fill="#1769e0" />
        <path
          d="M8 23 L14 17 L18 20 L26 11"
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="26" cy="11" r="2.6" fill="#0fa79e" />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight text-ondark">
        Trader <span className="text-accent">AI</span>
      </span>
    </a>
  );
}
