const cardBase =
  'rounded-2xl border border-line bg-white transition-all duration-200 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_4px_14px_rgba(10,22,38,0.08),0_12px_32px_rgba(10,22,38,0.07)]';

function IconBox({ icon: Icon, tone, size = 'md' }) {
  const dim = size === 'lg' ? 'h-12 w-12' : 'h-11 w-11';
  return (
    <div
      className={`mb-4 flex ${dim} items-center justify-center rounded-[13px] ${
        tone === 'accent' ? 'bg-accent-soft text-accent-600' : 'bg-primary-soft text-primary'
      }`}
    >
      <Icon className={size === 'lg' ? 'h-6 w-6' : 'h-6 w-6'} aria-hidden="true" />
    </div>
  );
}

export function ValueCard({ icon, tone = 'primary', title, children }) {
  return (
    <article className={`${cardBase} p-6`}>
      <IconBox icon={icon} tone={tone} />
      <h3 className="text-lg">{title}</h3>
      <p className="text-[15px] text-ink-500">{children}</p>
    </article>
  );
}

export function FeatureCard({ icon, tone = 'primary', title, children, bullets = [] }) {
  return (
    <article className={`${cardBase} group relative overflow-hidden p-7`}>
      <span
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden="true"
      />
      <IconBox icon={icon} tone={tone} size="lg" />
      <h3 className="text-xl">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{children}</p>
      {bullets.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {bullets.map((b) => (
            <li key={b} className="relative pl-5 text-sm text-ink-700">
              <span className="absolute left-0 top-[0.45em] h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function StepCard({ num, title, children }) {
  return (
    <article className={`${cardBase} p-6`}>
      <div className="mb-3 inline-flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft font-display text-xs font-bold text-primary">
          {String(num).padStart(2, '0')}
        </span>
        <span className="font-display text-xs font-bold uppercase tracking-wide text-primary">Step</span>
      </div>
      <h3 className="text-base">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{children}</p>
    </article>
  );
}
