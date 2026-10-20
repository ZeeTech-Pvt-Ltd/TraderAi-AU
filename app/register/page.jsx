import Register from '@/views/Register';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Register | Trader AI Australia',
  description:
    'Create your Trader AI account. Enter your details to get started with AI assisted trading tools for market analysis and research.',
  path: '/register/',
  ogDescription:
    'Create your Trader AI account and get started with AI assisted trading tools.',
});

export default function RegisterPage() {
  return <Register />;
}
