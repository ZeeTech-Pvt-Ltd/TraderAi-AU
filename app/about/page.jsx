import About from '@/views/About';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'About Trader AI | Market Research Tools',
  description:
    'Learn what Trader AI is, how it approaches market research and what you can expect. See if the platform fits the way you work.',
  path: '/about/',
});

export default function AboutPage() {
  return <About />;
}
