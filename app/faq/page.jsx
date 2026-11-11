import Faq from '@/views/Faq';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { faqPageLd } from '@/lib/jsonld';

export const metadata = pageMetadata({
  title: 'Trader AI FAQs | Trading Signals Questions',
  description:
    'Answers about Trader AI signals, markets, deposits, withdrawals and risk. Read the FAQs and create your free account.',
  path: '/faq/',
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageLd} />
      <Faq />
    </>
  );
}
