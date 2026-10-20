import Terms from '@/views/Terms';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Terms And Conditions | Trader AI',
  description:
    'Read the Trader AI terms and conditions. Understand how the website may be used, your responsibilities, and the limits of the information we provide.',
  path: '/terms-and-conditions/',
  ogDescription:
    'Understand how the Trader AI website may be used, your responsibilities, and the limits of the information we provide.',
  twitterDescription:
    'Understand how the Trader AI website may be used and your responsibilities.',
});

export default function TermsPage() {
  return <Terms />;
}
