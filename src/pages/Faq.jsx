import Container from '../components/Container';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import FaqList from '../components/FaqList';

const groups = [
  {
    eyebrow: 'About Trader AI',
    title: 'Trader AI Questions',
    items: [
      {
        q: 'What Is Trader AI?',
        a: 'Trader AI is an AI assisted platform designed to help you research and understand financial markets. It brings market information together, highlights possible patterns and trends, and presents everything in plain, clear language.',
      },
      {
        q: 'Is Trader AI Legit?',
        a: 'Trader AI is a provider of informational tools for market research and analysis. It is not a broker and it does not hold or trade your money on your behalf. As with any financial tool, it is worth doing your own research and reading the risk disclaimer before you start.',
      },
      {
        q: 'What Types Of Investors Is Trader AI Suitable For?',
        a: 'Trader AI is built for people who want a clearer, more organised way to research markets. It can suit beginners who are still learning how markets work, and more experienced traders who want to speed up their research. The tools focus on information and analysis, not automatic trading decisions.',
      },
      {
        q: 'Is Trader AI A Broker?',
        a: 'No. Trader AI is not a broker and does not execute trades or hold your funds. It is an informational platform that provides tools for market research and analysis. To place trades, you would use a separate broker of your own choosing.',
      },
    ],
  },
  {
    eyebrow: 'AI Trading',
    title: 'AI Trading Questions',
    items: [
      {
        q: 'What Is AI Trading?',
        a: 'AI trading means using artificial intelligence to support the way you research and understand financial markets. Rather than manually working through every chart, AI can process market information quickly and surface the parts most likely to matter.',
      },
      {
        q: 'Does AI Trading Work?',
        a: 'AI trading tools can help you work with market information more quickly, but they do not remove risk. AI can assist with pattern recognition, trend analysis and research. What AI cannot do is predict markets with certainty.',
      },
      {
        q: 'Can AI Predict The Market?',
        a: 'No. AI cannot predict the market with certainty. It can identify patterns and trends and highlight possibilities, but markets are unpredictable and any AI generated signal should be treated as information, not fact.',
      },
      {
        q: 'What Are The Limits Of AI Trading?',
        a: "AI trading tools are useful, but they are not magic. They can't see the future, they can be wrong, and they can't remove risk. They work best as a support for your own judgement rather than a replacement for it.",
      },
    ],
  },
  {
    eyebrow: 'Features And Tools',
    title: 'Trading Tool Questions',
    items: [
      {
        q: 'What Features Does Trader AI Offer?',
        a: 'Trader AI includes tools for pattern recognition, risk management, AI stock analysis, trend projection, market insights and trading research. You can read about each one in detail on our Features page.',
      },
      {
        q: 'How Does Pattern Recognition Help?',
        a: "Pattern recognition scans price data for repeating shapes that may signal a possible market setup. It helps you notice patterns you might otherwise miss, so you can decide whether they're worth acting on.",
      },
      {
        q: 'How Does Risk Management Help?',
        a: 'Risk management helps you consider potential risk before you commit. By bringing the downside into the conversation early, it supports more considered, grounded decisions.',
      },
    ],
  },
  {
    eyebrow: 'Risk And Insights',
    title: 'Risk Questions',
    items: [
      {
        q: 'Does Trader AI Guarantee Profits?',
        a: 'No. Trader AI does not guarantee profits or promise any specific outcome. Trading involves risk and past performance does not guarantee future results.',
      },
      {
        q: 'Is AI Generated Information Reliable?',
        a: 'AI generated information can be useful, but it is not guaranteed to be correct or complete. Always treat AI insights as a starting point and check them against your own research before making a decision.',
      },
      {
        q: 'What Risks Should I Understand?',
        a: 'Trading and investing involve risk, including the possible loss of the money you put in. Markets are unpredictable, AI insights can be wrong, and no tool can guarantee returns. Always consider your own financial circumstances.',
      },
    ],
  },
  {
    eyebrow: 'Australia, Apps And Getting Started',
    title: 'Australia And Account Questions',
    items: [
      {
        q: 'Is Trader AI Available In Australia?',
        a: 'Yes. Trader AI is designed with Australian users in mind and is available to people in Australia through a web based platform.',
      },
      {
        q: 'Is Trader AI Regulated In Australia?',
        a: 'Trader AI is an informational platform, not a licensed financial adviser or broker. It does not provide personal financial advice. You should always consider your own circumstances and seek professional advice where appropriate.',
      },
      {
        q: 'Is There An AI Trading App?',
        a: 'Trader AI is accessed through a web based platform, which means you can use it from most devices with an internet connection. For the most up to date information on device support and access options, it is best to check the platform directly.',
      },
      {
        q: 'Are AI Trading Apps Legit?',
        a: "Legitimacy varies from one product to another, so it is always worth checking a platform's terms, privacy policy and risk disclaimer before you commit. A reputable AI trading tool should be clear about what it does, honest about risk, and never promise guaranteed returns.",
      },
      {
        q: 'Do I Need Experience To Use Trader AI?',
        a: 'No. Trader AI is designed to present market information in plain, clear language, so you do not need a finance background to get value from it. It is still important to understand the basics of trading and risk before you commit real money.',
      },
      {
        q: 'How Do I Get Started With Trader AI?',
        a: 'Start by exploring the platform and the resources on this site. Read through how the tools work, review the features that matter to you, and make sure you understand the risks. When you are ready, get in touch through the contact page and our team can point you in the right direction.',
      },
    ],
  },
];

export default function Faq() {
  return (
    <>
      <section
        className="relative flex min-h-[480px] items-center overflow-hidden border-b border-white/10 bg-navy-900 text-ondark"
        style={{
          backgroundImage: 'radial-gradient(900px 400px at 80% -10%, rgba(23,105,224,0.22), transparent 60%)',
        }}
      >
        <Container>
          <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className="text-4xl text-ondark md:text-5xl">Frequently Asked Questions</h1>
              <p className="mt-4 max-w-[46ch] text-lg text-ondark-muted">
                Clear, honest answers to the questions Australian users ask most about Trader AI,
                AI trading and market research.
              </p>
            </div>
            <img
              src="/assets/img/faq-illustration.webp"
              alt="FAQ illustration with question mark and help icons"
              width={1120}
              height={840}
              loading="eager"
              decoding="async"
              className="mx-auto max-h-[360px] w-full object-contain"
            />
          </div>
        </Container>
      </section>

      {groups.map((g, i) => (
        <section key={g.title} className={`py-16 md:py-24 ${i % 2 === 1 ? 'bg-soft' : ''}`}>
          <Container>
            <Reveal>
              <SectionHead eyebrow={g.eyebrow} title={g.title} align="center" className="mb-8" />
            </Reveal>
            <Reveal>
              <FaqList items={g.items} />
            </Reveal>
          </Container>
        </section>
      ))}

      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <CtaBand
              title="Still Have Questions?"
              lead="If you can't find the answer you're looking for, get in touch and our team will be happy to help."
              primary={{ label: 'Contact Us', href: '/contact/' }}
              secondary={{ label: 'See How It Works', href: '/how-it-works/' }}
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
