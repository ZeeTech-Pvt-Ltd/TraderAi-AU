import Link from 'next/link';
import Brand from './Brand';

const explore = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about/' },
  { label: 'AI Trading', href: '/ai-trading/' },
  { label: 'Features', href: '/features/' },
  { label: 'How It Works', href: '/how-it-works/' },
  { label: 'Trader AI Review', href: '/trader-ai-review-australia/' },
  { label: 'FAQ', href: '/faq/' },
];

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms And Conditions', href: '/terms-and-conditions/' },
  { label: 'Risk Disclaimer', href: '/risk-disclaimer/' },
  { label: 'Contact', href: '/contact/' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 pb-8 pt-16 text-ondark-muted">
      <div className="mx-auto w-full max-w-[1160px] px-6 md:px-10">
        <div className="mb-11 grid gap-9 md:grid-cols-3">
          <div>
            <Brand />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Researched trade ideas with clear entry, stop-loss and take-profit levels, so you
              know your next move before you make it.
            </p>
          </div>
          <div>
            <div className="mb-4 font-display text-xs font-semibold uppercase tracking-wider text-ondark">
              Explore
            </div>
            <ul className="space-y-2.5">
              {explore.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-sm text-ondark-muted no-underline hover:text-ondark hover:underline">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-4 font-display text-xs font-semibold uppercase tracking-wider text-ondark">
              Legal
            </div>
            <ul className="space-y-2.5">
              {legal.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-sm text-ondark-muted no-underline hover:text-ondark hover:underline">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-7 md:flex-row md:items-start md:justify-between">
          <p className="max-w-3xl text-xs leading-relaxed">
            Trading involves significant risk, and you may lose some or all of your money. Trader
            AI signals are general information only and do not take into account your personal
            objectives, financial situation or needs. Past performance is not a reliable indicator
            of future results.
          </p>
          <p className="shrink-0 text-xs" suppressHydrationWarning>
            © {year} Trader AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
