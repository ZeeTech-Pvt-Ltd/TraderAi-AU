/**
 * Static export: every route is rendered to HTML at build time so the copy
 * ships in the first response instead of behind a JS bundle.
 *
 * trailingSlash keeps the URLs identical to the existing canonicals and
 * sitemap entries, which all end in a slash. Each route is emitted as
 * `<route>/index.html`, and Vercel serves it at the same URL.
 *
 * `404.html` is emitted too, so an unknown path gets a real 404 status
 * rather than the homepage at 200.
 */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
