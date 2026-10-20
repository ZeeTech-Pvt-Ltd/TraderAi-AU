import Review from '@/views/Review';
import JsonLd from '@/components/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { reviewFaqLd } from '@/lib/jsonld';

export const metadata = pageMetadata({
  title: 'Trader AI Review Australia | Trader AI',
  description:
    'An honest, independent Trader AI review for Australian traders. What it offers, how it works, who it suits, and the key pros and cons to weigh up.',
  path: '/trader-ai-review-australia/',
  ogDescription:
    "An honest Trader AI review for Australia. Learn what the platform does, how it works, who it's for, and what to consider before you start.",
});

export default function ReviewPage() {
  return (
    <>
      <JsonLd data={reviewFaqLd} />
      <Review />
    </>
  );
}
