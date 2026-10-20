import RiskDisclaimer from '@/views/RiskDisclaimer';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Risk Disclaimer | Trader AI',
  description:
    'Read the Trader AI risk disclaimer. Understand the risks of trading and investing, and the limits of AI generated information.',
  path: '/risk-disclaimer/',
  ogDescription:
    'Understand the risks of trading and investing, and the limits of AI generated information.',
});

export default function RiskDisclaimerPage() {
  return <RiskDisclaimer />;
}
