import Home from '@/views/Home';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { homeFaqLd, organizationLd, websiteLd } from '@/lib/jsonld';

export const metadata = pageMetadata({
  title: 'Trader AI Australia | AI Trading And Market Analysis',
  description:
    'Trader AI helps Australian traders analyse markets, spot patterns and track trends with AI-powered tools. Explore features and get started free today.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteLd} />
      <JsonLd data={organizationLd} />
      <JsonLd data={homeFaqLd} />
      <Home />
    </>
  );
}
