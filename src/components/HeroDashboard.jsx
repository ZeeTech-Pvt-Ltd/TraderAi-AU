import { ShieldAlert, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Trend', value: 'Reviewing', up: true },
  { label: 'Pattern', value: 'Recognised', up: false },
  { label: 'Risk', value: 'Check first', up: false },
];

export default function HeroDashboard() {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-700 to-navy-800 p-5 shadow-[0_18px_50px_rgba(10,22,38,0.16)]">
        <div className="dashboard-grid pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="relative flex items-center justify-between">
          <div>
            <div className="font-display text-sm font-semibold text-ondark">Market Analysis</div>
            <div className="text-xs text-ondark-muted">AI assisted overview</div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs text-ondark-muted">
            <span className="animate-pulse-ring h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Live data
          </span>
        </div>

        <div className="relative mt-4">
          <svg
            viewBox="0 0 460 230"
            className="h-auto w-full"
            role="img"
            aria-label="An illustrative line chart showing market price movement over time"
          >
            <defs>
              <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#0fa79e" stopOpacity="0.28" />
                <stop offset="1" stopColor="#0fa79e" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#1769e0" />
                <stop offset="1" stopColor="#0fa79e" />
              </linearGradient>
            </defs>
            <g stroke="#eaf1f8" strokeOpacity="0.07">
              <line x1="0" y1="40" x2="460" y2="40" />
              <line x1="0" y1="90" x2="460" y2="90" />
              <line x1="0" y1="140" x2="460" y2="140" />
              <line x1="0" y1="190" x2="460" y2="190" />
            </g>
            <path
              d="M0 178 C 52 170, 72 138, 108 146 C 142 154, 152 104, 192 112 C 230 119, 246 70, 292 80 C 332 88, 352 42, 398 50 L 460 24"
              fill="none"
              stroke="url(#heroLine)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M0 178 C 52 170, 72 138, 108 146 C 142 154, 152 104, 192 112 C 230 119, 246 70, 292 80 C 332 88, 352 42, 398 50 L 460 24 L 460 230 L 0 230 Z"
              fill="url(#heroArea)"
            />
            <circle cx="460" cy="24" r="5" fill="#0fa79e" />
            <circle cx="460" cy="24" r="10" fill="#0fa79e" opacity="0.25" />
          </svg>
        </div>

        <div className="relative mt-4 grid grid-cols-3 gap-2.5">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
              <span className="block text-[11px] uppercase tracking-wide text-ondark-muted">
                {s.label}
              </span>
              <span className={`font-display text-sm font-semibold ${s.up ? 'text-accent' : 'text-ondark'}`}>
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="animate-float absolute -right-2 -top-4 rounded-xl border border-line bg-white p-3 shadow-[0_4px_14px_rgba(10,22,38,0.08),0_12px_32px_rgba(10,22,38,0.07)] md:-right-4">
        <span className="block text-[11px] uppercase tracking-wide text-ink-500">AI Analysis</span>
        <span className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-ink-900">
          <TrendingUp className="h-4 w-4 text-accent" aria-hidden="true" />
          Pattern recognised
        </span>
      </div>

      <div
        className="animate-float absolute -bottom-5 -left-2 rounded-xl border border-line bg-white p-3 shadow-[0_4px_14px_rgba(10,22,38,0.08),0_12px_32px_rgba(10,22,38,0.07)] md:-left-4"
        style={{ animationDelay: '1.6s' }}
      >
        <span className="block text-[11px] uppercase tracking-wide text-ink-500">Risk Reminder</span>
        <span className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-ink-900">
          <ShieldAlert className="h-4 w-4 text-accent" aria-hidden="true" />
          Review before you decide
        </span>
      </div>
    </div>
  );
}
