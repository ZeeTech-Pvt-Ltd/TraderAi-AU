import { ChevronDown } from 'lucide-react';

export default function FaqList({ items }) {
  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item, i) => (
        <details
          key={item.q}
          name="faq"
          className="group mb-3 overflow-hidden rounded-2xl border border-line bg-white transition-colors open:border-line-strong open:shadow-[0_1px_2px_rgba(10,22,38,0.06)]"
        >
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-semibold text-ink-900 transition-colors hover:text-primary group-open:text-primary [&::-webkit-details-marker]:hidden">
            <span>{item.q}</span>
            <ChevronDown
              className="h-5 w-5 shrink-0 text-ink-500 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div id={`faq-panel-${i}`} className="faq-body px-5 pb-5 text-[15px] leading-relaxed text-ink-500">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
