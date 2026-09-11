import Brand from './Brand';

const explore = [
  { label: 'Home', href: '/' },
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
              AI assisted tools designed to help you analyse markets, understand trends and make
              more informed trading decisions.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-wider text-ondark">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {explore.map((i) => (
                <li key={i.href}>
                  <a href={i.href} className="text-sm text-ondark-muted no-underline hover:text-ondark hover:underline">
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-wider text-ondark">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legal.map((i) => (
                <li key={i.href}>
                  <a href={i.href} className="text-sm text-ondark-muted no-underline hover:text-ondark hover:underline">
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-7 md:flex-row md:items-start md:justify-between">
          <p className="max-w-3xl text-xs leading-relaxed">
            Trader AI provides informational tools and market research. Trading and investing
            involve risk, including the possible loss of capital. Nothing on this website is
            financial advice, and past performance does not guarantee future results. Always do
            your own research and consider seeking professional advice before making any financial
            decision.
          </p>
          <p className="shrink-0 text-xs">© {year} Trader AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
