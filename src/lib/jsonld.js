const SITE_URL = 'https://traderai-au.com/';

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Trader AI',
  url: SITE_URL,
};

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Trader AI',
  url: SITE_URL,
  logo: 'https://traderai-au.com/favicon.svg',
  description:
    'Trader AI provides AI assisted tools for market analysis, pattern recognition and trading research.',
};

const faqPage = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(([name, text]) => ({
    '@type': 'Question',
    name,
    acceptedAnswer: { '@type': 'Answer', text },
  })),
});

const signalsFaqItems = [
  [
    'What is Trader AI?',
    'Trader AI is a trading signals platform that sends you clear buy or sell alerts with entry, stop-loss and take-profit levels, plus the reason behind each one.',
  ],
  [
    'How are Trader AI signals created?',
    'Our analysts study price charts and market news, and a signal goes out only when a setup meets our entry rules.',
  ],
  [
    'Is Trader AI available across Australia?',
    'Yes. You can sign up and receive signals from any state or territory, on any device with an internet connection.',
  ],
  [
    'Do I need trading experience?',
    'No. Each alert is written in simple language, so beginners can follow along and learn as they go.',
  ],
  [
    'Will Trader AI place trades for me?',
    'No. You review every signal and choose whether to act on it.',
  ],
  [
    'Which markets are covered?',
    'Crypto, forex, shares and commodities, all from one account.',
  ],
  [
    'Do I need to download an app?',
    'No. Trader AI runs in your web browser on phone, tablet or computer.',
  ],
  [
    'What is the minimum deposit?',
    'You can get started with A$250.',
  ],
  [
    'How long do withdrawals take?',
    'Withdrawal times depend on your payment method. Contact our support team for the current processing time before you request one.',
  ],
  [
    'Can I lose money?',
    'Yes. All trading carries risk, so only trade with money you can afford to lose.',
  ],
];

export const homeFaqLd = faqPage(signalsFaqItems);

export const aiTradingFaqLd = faqPage([
  [
    'Does AI Trading Work?',
    'AI trading tools can help you work with market information more quickly, but they do not remove risk. AI can assist with pattern recognition, trend analysis and research. What AI cannot do is predict markets with certainty.',
  ],
  [
    'Is There An AI Trading App?',
    'Trader AI is accessed through a web based platform, which means you can use it from most devices with an internet connection. For the most up to date information on device support and access options, it is best to check the platform directly.',
  ],
  [
    'Are AI Trading Apps Legit?',
    "Legitimacy varies from one product to another, so it is always worth checking a platform's terms, privacy policy and risk disclaimer before you commit. Be cautious of any platform that promises guaranteed returns or claims you can make money automatically with no risk.",
  ],
]);

export const reviewFaqLd = faqPage([
  [
    'Is Trader AI Legit?',
    'Trader AI is a provider of informational tools for market research and analysis. It is not a broker and it does not hold or trade your money on your behalf. As with any financial tool, it is worth doing your own research and reading the risk disclaimer before you start.',
  ],
  [
    'What Does Trader AI Do?',
    'Trader AI is an AI assisted platform designed to help you research and understand financial markets. It brings market information together, highlights possible patterns and trends, and presents everything in plain, clear language.',
  ],
  [
    'Does Trader AI Guarantee Profits?',
    'No. Trader AI does not guarantee profits or promise any specific financial outcome. The platform provides information and analysis to support your own research. Trading always involves risk, and past performance does not guarantee future results.',
  ],
  [
    'Do I Need Experience To Use Trader AI?',
    'No. Trader AI is designed to present market information in plain, clear language, so you do not need a finance background to get value from it. It is still important to understand the basics of trading and risk before you commit real money.',
  ],
]);

export const faqPageLd = faqPage(signalsFaqItems);
