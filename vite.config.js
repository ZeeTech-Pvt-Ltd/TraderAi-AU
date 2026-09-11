import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Multi-page build: each route is its own HTML entry so every page keeps its
// own <title>, meta description, canonical, Open Graph and JSON-LD markup.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        'ai-trading': 'ai-trading/index.html',
        features: 'features/index.html',
        'how-it-works': 'how-it-works/index.html',
        review: 'trader-ai-review-australia/index.html',
        faq: 'faq/index.html',
        register: 'register/index.html',
        'thank-you': 'thank-you/index.html',
        contact: 'contact/index.html',
        privacy: 'privacy-policy/index.html',
        terms: 'terms-and-conditions/index.html',
        risk: 'risk-disclaimer/index.html',
        notfound: '404.html',
      },
    },
  },
});
