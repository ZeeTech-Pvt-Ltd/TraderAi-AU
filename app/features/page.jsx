import Features from '@/views/Features';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Trader AI Features | Pattern Recognition And Risk Tools',
  description:
    'Discover Trader AI features designed for smarter market analysis, trading insights & easier decision-making. See how platform works for Australian traders.',
  path: '/features/',
});

export default function FeaturesPage() {
  return <Features />;
}
