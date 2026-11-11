import Home from '@/views/Home';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { homeFaqLd, organizationLd, websiteLd } from '@/lib/jsonld';

export const metadata = pageMetadata({
  title: 'Trader AI Australia | Trading Signals Platform',
  description:
    'Trader AI sends clear buy and sell signals with entry, stop-loss and take-profit levels. See how it works and create your free account.',
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
