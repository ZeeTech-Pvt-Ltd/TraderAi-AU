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

export const homeFaqLd = faqPage([
  [
    'What Types Of Investors Is Trader AI Suitable For?',
    'Trader AI is built for people who want a clearer, more organised way to research markets. It can suit beginners who are still learning how markets work, and more experienced traders who want to speed up their research. The tools focus on information and analysis, not automatic trading decisions.',
  ],
  [
    'Is Trader AI Legit?',
    'Trader AI is a provider of informational tools for market research and analysis. It is not a broker and it does not hold or trade your money on your behalf. As with any financial tool, it is worth doing your own research and reading the risk disclaimer before you start.',
  ],
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
  [
    'How Do I Get Started With Trader AI?',
    'Start by exploring the platform and the resources on this site. Read through how the tools work, review the features that matter to you, and make sure you understand the risks. When you are ready, get in touch through the contact page and our team can point you in the right direction.',
  ],
  [
    'Do I Need Experience To Use AI Trading Tools?',
    'No. Trader AI is designed to present market information in plain, clear language, so you do not need a finance background to get value from it. It is still important to understand the basics of trading and risk before you commit real money.',
  ],
]);

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

export const faqPageLd = faqPage([
  [
    'Is Trader AI Legit?',
    'Trader AI is a provider of informational tools for market research and analysis. It is not a broker and it does not hold or trade your money on your behalf. As with any financial tool, it is worth doing your own research and reading the risk disclaimer before you start.',
  ],
  [
    'Does AI Trading Work?',
    'AI trading tools can help you work with market information more quickly, but they do not remove risk. AI can assist with pattern recognition, trend analysis and research. What AI cannot do is predict markets with certainty.',
  ],
  [
    'Can AI Predict The Market?',
    'No. AI cannot predict the market with certainty. It can identify patterns and trends and highlight possibilities, but markets are unpredictable and any AI generated signal should be treated as information, not fact.',
  ],
  [
    'Does Trader AI Guarantee Profits?',
    'No. Trader AI does not guarantee profits or promise any specific outcome. Trading involves risk and past performance does not guarantee future results.',
  ],
  [
    'Is Trader AI Regulated In Australia?',
    'Trader AI is an informational platform, not a licensed financial adviser or broker. It does not provide personal financial advice. You should always consider your own circumstances and seek professional advice where appropriate.',
  ],
  [
    'Is There An AI Trading App?',
    'Trader AI is accessed through a web based platform, which means you can use it from most devices with an internet connection. For the most up to date information on device support and access options, it is best to check the platform directly.',
  ],
  [
    'Are AI Trading Apps Legit?',
    "Legitimacy varies from one product to another, so it is always worth checking a platform's terms, privacy policy and risk disclaimer before you commit. Be cautious of any platform that promises guaranteed returns or claims you can make money automatically with no risk.",
  ],
  [
    'How Do I Get Started With Trader AI?',
    'Start by exploring the platform and the resources on this site. Read through how the tools work, review the features that matter to you, and make sure you understand the risks. When you are ready, get in touch through the contact page and our team can point you in the right direction.',
  ],
]);
