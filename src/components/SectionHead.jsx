export default function SectionHead({ eyebrow, title, lead, align = 'center', className = '' }) {
  const centered = align !== 'left';
  return (
    <div className={`mb-12 max-w-2xl ${centered ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div className={`mb-3 flex items-center gap-2 ${centered ? 'justify-center' : ''}`}>
          <span className="h-0.5 w-5 rounded bg-accent" aria-hidden="true" />
          <span className="font-display text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-lg text-ink-500">{lead}</p>}
    </div>
  );
}
