import Container from '../components/Container';
import Button from '../components/Button';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import Checklist from '../components/Checklist';
import Callout from '../components/Callout';
import HeroDashboard from '../components/HeroDashboard';
import ProcessFlow from '../components/ProcessFlow';
import Steps from '../components/Steps';
import FaqList from '../components/FaqList';
import { ValueCard } from '../components/cards';
import {
  ArrowLeftRight,
  Bell,
  Bitcoin,
  Briefcase,
  Building2,
  Clock,
  Cpu,
  Database,
  Gem,
  Globe,
  GraduationCap,
  Headset,
  LayoutDashboard,
  Lightbulb,
  LineChart,
  Lock,
  MessageSquare,
  MousePointer2,
  ShieldCheck,
  Star,
  StarHalf,
  Target,
  Wallet,
} from 'lucide-react';

const signalSteps = [
  {
    icon: Database,
    title: 'Market research',
    text: 'Our analysts track price action, trend direction and economic news across every market we cover.',
  },
  {
    icon: Cpu,
    tone: 'accent',
    title: 'Setup confirmed',
    text: 'A signal is created only when a trade meets our entry rules and offers a sensible risk-to-reward balance.',
  },
  {
    icon: Bell,
    title: 'Alert delivered',
    text: 'You receive the market, direction, entry, stop-loss, take-profit and a short “why” straight to your device.',
  },
  {
    icon: MousePointer2,
    tone: 'accent',
    title: 'Your decision',
    text: 'Take the trade as it is, adjust it to suit your strategy or let it pass.',
  },
];

const highlights = [
  'Crypto, forex, shares and commodities in a single account',
  'A clear reason behind every alert',
  'Trade from your phone, tablet or laptop',
  'Your own risk limits on every position',
];

const whyCards = [
  {
    icon: MessageSquare,
    title: 'No confusing language',
    text: 'Every trade idea is explained in plain English, without the jargon.',
  },
  {
    icon: Clock,
    tone: 'accent',
    title: 'Hours back in your week',
    text: 'We handle the chart analysis, and you get the finished idea in seconds.',
  },
  {
    icon: Bell,
    title: 'Timely alerts',
    text: 'Opportunities reach you while they are still worth acting on.',
  },
  {
    icon: Headset,
    tone: 'accent',
    title: 'A support team that helps',
    text: 'Real people answer your questions over live chat and email.',
  },
];

const setupSteps = [
  { title: 'Sign up', text: 'Enter your name, email address and mobile number.' },
  { title: 'Verify your ID', text: 'A quick identity check protects your account and your money.' },
  { title: 'Make a deposit', text: 'Fund your account with the payment option you prefer.' },
  { title: 'Get your first signal', text: 'Pick your markets, set your limits and check your first alert.' },
];

const markets = [
  {
    icon: Bitcoin,
    title: 'Crypto',
    text: 'Signals on popular coins, including Bitcoin and Ethereum.',
  },
  {
    icon: ArrowLeftRight,
    tone: 'accent',
    title: 'Forex',
    text: 'Major currency pairs such as AUD/USD, EUR/USD and GBP/USD.',
  },
  {
    icon: Building2,
    title: 'Shares',
    text: 'Opportunities in leading Australian companies on the ASX, alongside big global names.',
  },
  {
    icon: Gem,
    tone: 'accent',
    title: 'Commodities',
    text: 'Price moves in gold, silver and oil.',
  },
];

const features = [
  {
    icon: Lightbulb,
    title: 'Signals with reasons',
    text: 'Know what to trade and the thinking behind it.',
  },
  {
    icon: Target,
    tone: 'accent',
    title: 'A built-in exit plan',
    text: 'Stop-loss and take-profit levels are ready before you open a position.',
  },
  {
    icon: Bell,
    title: 'Price level alerts',
    text: 'Pick a price and get notified as soon as the market touches it.',
  },
  {
    icon: LayoutDashboard,
    tone: 'accent',
    title: 'One-screen dashboard',
    text: 'Your balance, open trades and results at a glance.',
  },
  {
    icon: Globe,
    title: 'No app download',
    text: 'Log in from any browser and you are ready to trade.',
  },
];

const audience = [
  {
    icon: GraduationCap,
    title: 'Beginners',
    text: 'Build confidence with alerts that teach you as you trade.',
  },
  {
    icon: Briefcase,
    tone: 'accent',
    title: 'Busy Australians',
    text: 'Fit trading around a full-time job with just a few minutes a day.',
  },
  {
    icon: LineChart,
    title: 'Experienced traders',
    text: 'Compare our setups with your own and branch out into new markets.',
  },
];

const security = [
  {
    icon: Lock,
    title: 'Strong encryption',
    text: 'Your personal and payment details are kept safe.',
  },
  {
    icon: ShieldCheck,
    tone: 'accent',
    title: 'Two-factor login',
    text: 'A second check at sign-in keeps your account yours alone.',
  },
  {
    icon: Wallet,
    title: 'Clear pricing',
    text: 'Every fee is shown before you pay, with nothing hidden.',
  },
  {
    icon: MousePointer2,
    tone: 'accent',
    title: 'Full control',
    text: 'No trade is opened or closed without your say-so.',
  },
];

const testimonials = [
  {
    rating: 4.5,
    quote:
      'I had never used anything automated before and I expected to be lost in the settings. Each one explains what it does before you change it, so my first afternoon was far less intimidating than I had braced for.',
    name: 'Priya N.',
    city: 'Melbourne',
    // Real reviewer photo: /assets/img/testimonials/priya-n.jpg
    avatar: null,
  },
  {
    rating: 5,
    quote:
      'I work office hours, so the thing that sold me was being able to pause it. Knowing I can stop everything in one step is what made me comfortable leaving it running overnight.',
    name: 'Daniel R.',
    city: 'Brisbane',
    // Real reviewer photo: /assets/img/testimonials/daniel-r.jpg
    avatar: null,
  },
  {
    rating: 4,
    quote:
      'The part I use most is the record of what it did and what it passed on. I have learned more from reading that than from any explainer video I sat through beforehand.',
    name: 'Megan T.',
    city: 'Perth',
    // Real reviewer photo: /assets/img/testimonials/megan-t.jpg
    avatar: null,
  },
];

const initials = (name) =>
  name
    .split(' ')
    .map((part) => part.replace(/[^A-Za-z]/g, '').charAt(0))
    .join('')
    .toUpperCase();

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) {
          return <Star key={i} className="h-4 w-4 fill-amber text-amber" aria-hidden="true" />;
        }
        if (i === full && half) {
          return <StarHalf key={i} className="h-4 w-4 fill-amber text-amber" aria-hidden="true" />;
        }
        return <Star key={i} className="h-4 w-4 text-line-strong" aria-hidden="true" />;
      })}
    </div>
  );
}

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

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section
        className="relative overflow-hidden bg-navy-900 text-ondark"
        style={{
          backgroundImage:
            'radial-gradient(1100px 520px at 82% -10%, rgba(23,105,224,0.22), transparent 62%), radial-gradient(900px 480px at 8% 108%, rgba(15,167,158,0.16), transparent 60%)',
        }}
      >
        <Container>
          <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <h1 className="text-4xl font-bold text-ondark md:text-5xl lg:text-[3.35rem]">
                Trade With a Clear Plan, Not a Gut Feeling
              </h1>
              <p className="mt-4 max-w-xl text-lg text-ondark-muted">
                Trader AI gives traders across Australia researched trade ideas with set entry,
                stop-loss and take-profit levels, so you know your next move before you make it.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/register/" size="lg" icon>
                  Create Your Free Account
                </Button>
              </div>
              <p className="mt-5 text-sm text-ondark-muted">
                Quick sign-up · Upfront pricing · Private and protected
              </p>
            </div>
            <HeroDashboard />
          </div>
        </Container>
      </section>

      {/* 2. What Is Trader AI? */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div>
                <SectionHead title="What Is Trader AI?" align="left" className="mb-4" />
                <div className="space-y-4 text-ink-500">
                  <p>
                    Trader AI is a trading signals platform that tracks the crypto, forex, share and
                    commodity markets and sends you actionable buy or sell alerts, each with an
                    entry price, a stop-loss, a take-profit target and a plain explanation of the
                    reasoning, so you can decide for yourself whether to place the trade.
                  </p>
                  <p>
                    Timing is where most traders go wrong: buying too late, selling too early or
                    holding on without an exit. Trader AI takes the guesswork out of that timing.
                    Because every alert explains its reasoning, you also learn to read the market
                    yourself over time.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <img
                src="/assets/img/img-1.webp"
                alt="Trader AI trading signals platform illustration"
                width={640}
                height={620}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. How Trader AI Signals Work */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead title="How Trader AI Signals Work" />
          </Reveal>
          <Reveal>
            <ProcessFlow nodes={signalSteps} />
          </Reveal>
        </Container>
      </section>

      {/* 4. Quick Highlights */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <img
                src="/assets/img/img-3.webp"
                alt="Australian market signals illustration"
                width={640}
                height={617}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </Reveal>
            <Reveal>
              <div>
                <SectionHead title="Quick Highlights" align="left" className="mb-4" />
                <div className="rounded-2xl border border-line bg-white p-6">
                  <Checklist items={highlights} />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 5. Why Choose Us */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead title="Why Choose Us" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyCards.map((c) => (
              <Reveal key={c.title}>
                <ValueCard icon={c.icon} tone={c.tone} title={c.title}>
                  {c.text}
                </ValueCard>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-9 text-center">
              <Button href="/register/" size="lg" icon>
                Get Started With Trader AI
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 6. How to Get Started */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead title="How to Get Started" lead="Set Up Your Account in 4 Easy Steps" />
          </Reveal>
          <Reveal>
            <Steps items={setupSteps} columns={4} />
          </Reveal>
          <Reveal>
            <div className="mt-9 text-center">
              <Button href="/register/" size="lg" icon>
                Open My Account
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 7. Markets */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead title="Markets" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {markets.map((c) => (
              <Reveal key={c.title}>
                <ValueCard icon={c.icon} tone={c.tone} title={c.title}>
                  {c.text}
                </ValueCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Features */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead title="Features" />
          </Reveal>
          <div className="flex flex-wrap justify-center gap-5">
            {features.map((c) => (
              <Reveal
                key={c.title}
                className="w-full sm:w-[calc((100%_-_20px)/2)] lg:w-[calc((100%_-_40px)/3)]"
              >
                <ValueCard icon={c.icon} tone={c.tone} title={c.title}>
                  {c.text}
                </ValueCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Who It's For */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead title="Who It's For" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((c) => (
              <Reveal key={c.title}>
                <ValueCard icon={c.icon} tone={c.tone} title={c.title}>
                  {c.text}
                </ValueCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. Security & Transparency */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead title="Security & Transparency" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {security.map((c) => (
              <Reveal key={c.title}>
                <ValueCard icon={c.icon} tone={c.tone} title={c.title}>
                  {c.text}
                </ValueCard>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mx-auto mt-8 max-w-3xl">
              <Callout variant="caution">
                <p>
                  <strong className="text-ink-900">Risk notice:</strong> Trading involves
                  significant risk, and you may lose some or all of your money. Trader AI signals
                  are general information only and do not take into account your personal
                  objectives, financial situation or needs. Past performance is not a reliable
                  indicator of future results.
                </p>
              </Callout>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-8 text-center">
              <Button href="/register/" size="lg" icon>
                Sign Up Securely
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 11. Testimonials */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead title="Testimonials" />
          </Reveal>
          <div className="flex flex-wrap justify-center gap-5">
            {testimonials.map((t) => (
              <Reveal
                key={t.name}
                className="w-full sm:w-[calc((100%_-_20px)/2)] lg:w-[calc((100%_-_40px)/3)]"
              >
                <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <StarRating rating={t.rating} />
                    <span className="text-xs font-semibold text-ink-500">{t.rating} / 5</span>
                  </div>
                  <blockquote className="flex-1 text-[15px] leading-relaxed text-ink-700">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                    {t.avatar ? (
                      <img
                        src={t.avatar}
                        alt={`${t.name} avatar`}
                        width={44}
                        height={44}
                        loading="lazy"
                        decoding="async"
                        className="h-11 w-11 shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-soft font-display text-sm font-semibold text-primary"
                      >
                        {initials(t.name)}
                      </span>
                    )}
                    <div>
                      <div className="font-display text-sm font-semibold text-ink-900">{t.name}</div>
                      <div className="text-xs text-ink-500">{t.city}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 12. FAQs */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead title="FAQs" />
          </Reveal>
          <Reveal>
            <FaqList items={faqs} />
          </Reveal>
        </Container>
      </section>

      {/* 13. Final CTA */}
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
