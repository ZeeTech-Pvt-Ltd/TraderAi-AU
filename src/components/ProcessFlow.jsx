import { Fragment } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProcessFlow({ nodes }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
      {nodes.map((n, i) => (
        <Fragment key={n.title}>
          <div className="flex-1 rounded-2xl border border-line bg-white p-6 text-center">
            <div
              className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-[13px] ${
                n.tone === 'accent' ? 'bg-accent-soft text-accent-600' : 'bg-primary-soft text-primary'
              }`}
            >
              <n.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="text-base">{n.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{n.text}</p>
          </div>
          {i < nodes.length - 1 && (
            <div className="flex shrink-0 items-center justify-center text-accent" aria-hidden="true">
              <ArrowRight className="h-6 w-6 rotate-90 md:rotate-0" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
