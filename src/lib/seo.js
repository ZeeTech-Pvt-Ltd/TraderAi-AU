export const SITE_URL = 'https://traderai-au.com';

const OG_IMAGE = {
  url: '/assets/img/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Trader AI brand mark with a rising market chart on a navy background',
};

/**
 * Build the Metadata object for a route. Sharing it keeps the title,
 * description, Open Graph and Twitter tags from drifting apart page by page.
 *
 * `path` doubles as the canonical and the og:url. Leave it out for pages that
 * must not carry a canonical (thank-you, 404).
 */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle = title,
  ogDescription = description,
  twitterTitle = title,
  twitterDescription = description,
  noindex = false,
}) {
  const metadata = {
    title,
    description,
    openGraph: {
      type: 'website',
      siteName: 'Trader AI',
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: twitterTitle,
      description: twitterDescription,
      images: [OG_IMAGE.url],
    },
  };

  if (path) {
    metadata.alternates = { canonical: path };
    metadata.openGraph.url = path;
  }

  if (noindex) {
    metadata.robots = { index: false, follow: false };
  }

  return metadata;
}
