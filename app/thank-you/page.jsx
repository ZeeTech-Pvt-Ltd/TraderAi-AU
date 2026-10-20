import ThankYou from '@/views/ThankYou';
import { pageMetadata } from '@/lib/seo';

// Post-submit confirmation: noindex + nofollow, and deliberately no canonical.
// The two signals would contradict each other.
export const metadata = pageMetadata({
  title: 'Thank You | Trader AI',
  description:
    'Thank you for registering with Trader AI. Our team will be in touch shortly with the next steps.',
  noindex: true,
});

export default function ThankYouPage() {
  return <ThankYou />;
}
