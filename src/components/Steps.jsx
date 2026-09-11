export default function Steps({ items }) {
  return (
    <div className="relative">
      {/* connecting line (desktop only) */}
      <span
        className="absolute left-[10%] right-[10%] top-5 hidden h-px bg-gradient-to-r from-primary/20 via-accent/45 to-primary/20 md:block"
        aria-hidden="true"
      />
      <ol className="relative grid gap-8 md:grid-cols-5 md:gap-4">
        {items.map((s, i) => (
          <li key={s.title} className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-white shadow-[0_4px_12px_rgba(23,105,224,0.28)]">
              {i + 1}
            </span>
            <div className="md:mt-4">
              <h3 className="text-base">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-500 md:mt-1.5">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
