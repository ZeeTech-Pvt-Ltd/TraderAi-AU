import Container from '../components/Container';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import FaqList from '../components/FaqList';

const faqs = [
  {
    q: 'What is Trader AI?',
    a: 'Trader AI is a trading signals platform that sends you clear buy or sell alerts with entry, stop-loss and take-profit levels, plus the reason behind each one.',
  },
  {
    q: 'How are Trader AI signals created?',
    a: 'Our analysts study price charts and market news, and a signal goes out only when a setup meets our entry rules.',
  },
  {
    q: 'Is Trader AI available across Australia?',
    a: 'Yes. You can sign up and receive signals from any state or territory, on any device with an internet connection.',
  },
  {
    q: 'Do I need trading experience?',
    a: 'No. Each alert is written in simple language, so beginners can follow along and learn as they go.',
  },
  {
    q: 'Will Trader AI place trades for me?',
    a: 'No. You review every signal and choose whether to act on it.',
  },
  {
    q: 'Which markets are covered?',
    a: 'Crypto, forex, shares and commodities, all from one account.',
  },
  {
    q: 'Do I need to download an app?',
    a: 'No. Trader AI runs in your web browser on phone, tablet or computer.',
  },
  {
    q: 'What is the minimum deposit?',
    a: 'You can get started with A$250.',
  },
  {
    q: 'How long do withdrawals take?',
    a: 'Withdrawal times depend on your payment method. Contact our support team for the current processing time before you request one.',
  },
  {
    q: 'Can I lose money?',
    a: 'Yes. All trading carries risk, so only trade with money you can afford to lose.',
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
              <h1 className="text-4xl text-ondark md:text-5xl">FAQs</h1>
            </div>
            <img
              src="/assets/img/faq-illustration.webp"
              alt="FAQ illustration with question mark and help icons"
              width={720}
              height={540}
              loading="eager"
              decoding="async"
              className="mx-auto max-h-[360px] w-full object-contain"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <FaqList items={faqs} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-soft py-16 md:py-24">
        <Container>
          <CtaBand
            title="Ready to Trade With More Confidence?"
            lead="Join Trader AI and start receiving clear, explained trade ideas, with every decision left in your hands."
            primary={{ label: 'Start Free Today', href: '/register/' }}
          />
          <p className="mt-4 text-center text-sm text-ink-500">
            2-minute sign-up · No joining fee
          </p>
        </Container>
      </section>
    </>
  );
}
