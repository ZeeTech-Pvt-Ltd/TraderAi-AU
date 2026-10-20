import Contact from '@/views/Contact';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact Trader AI | Get Started',
  description:
    'Get in touch with the Trader AI team. Ask a question, request more information, or find out how to get started with our AI trading tools.',
  path: '/contact/',
  ogDescription:
    'Get in touch with the Trader AI team. Ask a question or find out how to get started.',
});

export default function ContactPage() {
  return <Contact />;
}
