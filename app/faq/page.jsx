import Faq from '@/views/Faq';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { faqPageLd } from '@/lib/jsonld';

export const metadata = pageMetadata({
  title: 'Trader AI FAQ | Answers To Common Questions',
  description:
    'Find answers to common questions about Trader AI, AI trading, market research and risk. Clear, honest information for Australian users.',
  path: '/faq/',
  ogDescription:
    'Find answers to common questions about Trader AI, AI trading, market research and risk.',
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageLd} />
      <Faq />
    </>
  );
}
