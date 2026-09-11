import { Info, TriangleAlert } from 'lucide-react';

export default function Callout({ variant = 'info', children }) {
  const caution = variant === 'caution';
  const Icon = caution ? TriangleAlert : Info;
  return (
    <div
      className={`flex gap-4 rounded-2xl border border-l-4 p-5 ${
        caution
          ? 'border-amber/30 border-l-amber bg-amber-soft'
          : 'border-line border-l-primary bg-tint'
      }`}
    >
      <Icon
        className={`mt-0.5 h-5 w-5 shrink-0 ${caution ? 'text-amber' : 'text-primary'}`}
        aria-hidden="true"
      />
      <div className="text-[15px] text-ink-700">{children}</div>
    </div>
  );
}
