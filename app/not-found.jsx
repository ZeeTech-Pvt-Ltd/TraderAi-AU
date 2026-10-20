import NotFound from '@/views/NotFound';
import { pageMetadata } from '@/lib/seo';

// Next marks a not-found page noindex on its own. Setting robots here as well
// emitted a second robots meta tag, so only the title/description/OG block is
// taken from the shared config, and no canonical is set.
const metadata = pageMetadata({
  title: 'Page Not Found | Trader AI',
  description:
    "The page you're looking for could not be found. Return to the Trader AI homepage or browse our most popular pages.",
});

export { metadata };

export default function NotFoundPage() {
  return <NotFound />;
}
