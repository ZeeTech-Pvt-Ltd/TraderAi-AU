import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Brand from './Brand';

const NAV = [
  { label: 'Home', href: '/', key: 'home' },
  { label: 'AI Trading', href: '/ai-trading/', key: 'ai-trading' },
  { label: 'Features', href: '/features/', key: 'features' },
  { label: 'How It Works', href: '/how-it-works/', key: 'how-it-works' },
  { label: 'Trader AI Review', href: '/trader-ai-review-australia/', key: 'review' },
  { label: 'FAQ', href: '/faq/', key: 'faq' },
];

export default function Header({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-navy-900 transition-shadow ${
        scrolled ? 'shadow-[0_8px_30px_rgba(5,13,24,0.35)]' : ''
      }`}
    >
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1160px] items-center justify-between gap-4 px-6 md:px-10">
        <Brand />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <ul className="flex items-center gap-0.5">
            {NAV.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  aria-current={active === item.key ? 'page' : undefined}
                  className={`inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium no-underline transition-colors ${
                    active === item.key
                      ? 'bg-primary/15 text-ondark'
                      : 'text-ondark-muted hover:bg-white/5 hover:text-ondark'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/register/"
            className="ml-2 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 py-2 font-display text-sm font-semibold text-white no-underline transition-colors hover:bg-primary-600"
          >
            Get Started
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-ondark lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-white/10 bg-navy-900 lg:hidden">
          <nav className="px-6 pb-6 pt-2 md:px-10" aria-label="Mobile navigation">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-3 text-base font-medium no-underline ${
                      active === item.key
                        ? 'bg-primary/15 text-ondark'
                        : 'text-ondark-muted hover:bg-white/5 hover:text-ondark'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/register/"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-primary px-5 py-3 text-center font-display text-base font-semibold text-white no-underline"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
