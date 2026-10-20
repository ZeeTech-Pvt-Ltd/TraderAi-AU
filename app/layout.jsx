import { Inter, Sora } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Self-hosted at build time, so the font files ship from this origin and
// there is no render-blocking request to fonts.googleapis.com.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'optional',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-sora',
  display: 'optional',
});

export const metadata = {
  metadataBase: new URL('https://traderai-au.com'),
  applicationName: 'Trader AI',
  formatDetection: { telephone: false, address: false, email: false },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/img/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'PzVRvBdoqh3n-yc4RjDAa-3_8vQHmw-UfCiETEnwrtQ',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a1626',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YXW8W4E0SV"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YXW8W4E0SV');
        `}</Script>
      </body>
    </html>
  );
}
