import { Check } from 'lucide-react';

export default function Checklist({ items }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          <span className="text-ink-700">{it}</span>
        </li>
      ))}
    </ul>
  );
}
