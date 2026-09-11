import { Check, X } from 'lucide-react';

export default function ProsCons({ pros = [], cons = [], prosTitle = 'Pros', consTitle = 'Considerations' }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <div className="rounded-2xl border border-accent/25 bg-accent-soft p-7">
        <h3 className="mb-4 flex items-center gap-2 text-lg">
          <Check className="h-5 w-5 text-accent-600" aria-hidden="true" />
          {prosTitle}
        </h3>
        <ul className="space-y-2.5">
          {pros.map((p) => (
            <li key={p} className="relative pl-6 text-[15px] text-ink-700">
              <span className="absolute left-0 top-[0.4em] h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-amber/25 bg-amber-soft p-7">
        <h3 className="mb-4 flex items-center gap-2 text-lg">
          <X className="h-5 w-5 text-amber" aria-hidden="true" />
          {consTitle}
        </h3>
        <ul className="space-y-2.5">
          {cons.map((c) => (
            <li key={c} className="relative pl-6 text-[15px] text-ink-700">
              <span className="absolute left-0 top-[0.4em] h-2.5 w-2.5 rounded-[2px] bg-amber" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
