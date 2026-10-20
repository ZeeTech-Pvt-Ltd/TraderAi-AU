import PrivacyPolicy from '@/views/PrivacyPolicy';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Privacy Policy | Trader AI',
  description:
    'Read the Trader AI privacy policy. Learn what information we collect, how we use it, and the choices you have about your personal data.',
  path: '/privacy-policy/',
  ogDescription:
    'Learn what information we collect, how we use it, and the choices you have about your personal data.',
  twitterDescription:
    'Learn what information we collect, how we use it, and the choices you have.',
});

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
