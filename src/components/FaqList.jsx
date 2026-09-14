import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqList({ items }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item, i) => {
        const isOpen = open === i;
        const contentId = `faq-panel-${i}`;
        return (
          <div
            key={item.q}
            className={`mb-3 overflow-hidden rounded-2xl border bg-white transition-colors ${
              isOpen ? 'border-line-strong shadow-[0_1px_2px_rgba(10,22,38,0.06)]' : 'border-line'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-semibold transition-colors ${
                isOpen ? 'text-primary' : 'text-ink-900 hover:text-primary'
              }`}
            >
              <span>{item.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-ink-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div id={contentId} className="faq-body px-5 pb-5 text-[15px] leading-relaxed text-ink-500">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
