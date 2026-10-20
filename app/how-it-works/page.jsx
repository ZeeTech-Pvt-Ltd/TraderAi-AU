import HowItWorks from '@/views/HowItWorks';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'How Trader AI Works | Setup Guide for Beginners',
  description:
    'See how Trader AI works, from market analysis to trading insights. Learn how the platform helps Australian users explore trading opportunities.',
  path: '/how-it-works/',
  twitterDescription:
    'See how Trader AI works, from market data and AI analysis to clear trading insights.',
});

export default function HowItWorksPage() {
  return <HowItWorks />;
}
