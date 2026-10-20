import AiTrading from '@/views/AiTrading';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { aiTradingFaqLd } from '@/lib/jsonld';

export const metadata = pageMetadata({
  title: 'What Is AI Trading & How Does It Work? | Trader AI',
  description:
    'Curious about AI trading? Learn how AI tools analyse markets, spot patterns and support trading decisions, then see the Trader AI platform in action.',
  path: '/ai-trading/',
});

export default function AiTradingPage() {
  return (
    <>
      <JsonLd data={aiTradingFaqLd} />
      <AiTrading />
    </>
  );
}
