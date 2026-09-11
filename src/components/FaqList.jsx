import { ChevronDown } from 'lucide-react';

export default function FaqList({ items }) {
  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item) => (
        <details
          key={item.q}
          className="faq-item mb-3 overflow-hidden rounded-2xl border border-line bg-white transition-colors open:border-line-strong open:shadow-[0_1px_2px_rgba(10,22,38,0.06)]"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-display text-base font-semibold text-ink-900 transition-colors hover:text-primary open:text-primary">
            <span>{item.q}</span>
            <ChevronDown
              className="faq-chevron h-5 w-5 shrink-0 text-ink-500 transition-transform"
              aria-hidden="true"
            />
          </summary>
          <div className="faq-body px-5 pb-5 text-[15px] leading-relaxed text-ink-500">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
