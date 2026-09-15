import Container from '../components/Container';
import Button from '../components/Button';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import FaqList from '../components/FaqList';
import ProsCons from '../components/ProsCons';
import Checklist from '../components/Checklist';
import { ValueCard, FeatureCard } from '../components/cards';
import {
  Activity,
  ClipboardList,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

const features = [
  { icon: Activity, title: 'Pattern Recognition', text: 'Scans price data for repeating shapes and structures that may signal a possible market setup.' },
  { icon: ShieldCheck, tone: 'accent', title: 'Risk Management', text: 'Helps you consider potential risk before you commit, so your decisions are grounded in the full picture.' },
  { icon: ClipboardList, title: 'AI Stock Analysis', text: 'Brings stock and market information together into a clear, organised view of the data that matters.' },
  { icon: TrendingUp, tone: 'accent', title: 'AI Trend Projection', text: 'Helps you understand the possible direction of a market based on recent price behaviour.' },
];

const benefits = [
  { icon: ClipboardList, title: 'Plain Language', text: 'Clear summaries that explain what the data is telling you, without walls of jargon.' },
  { icon: Activity, tone: 'accent', title: 'Pattern And Trend Tools', text: 'Spot possible setups and momentum shifts that are easy to miss by hand.' },
  { icon: ShieldCheck, title: 'Risk Awareness', text: 'Risk is brought into the conversation early, before you make a decision.' },
];

const faqs = [
  {
    q: 'Is Trader AI Legit?',
    a: 'Trader AI is a provider of informational tools for market research and analysis. It is not a broker and it does not hold or trade your money on your behalf. As with any financial tool, it is worth doing your own research and reading the risk disclaimer before you start.',
  },
  {
    q: 'What Does Trader AI Do?',
    a: 'Trader AI is an AI assisted platform designed to help you research and understand financial markets. It brings market information together, highlights possible patterns and trends, and presents everything in plain, clear language.',
  },
  {
    q: 'Does Trader AI Guarantee Profits?',
    a: 'No. Trader AI does not guarantee profits or promise any specific financial outcome. The platform provides information and analysis to support your own research. Trading always involves risk, and past performance does not guarantee future results.',
  },
  {
    q: 'Do I Need Experience To Use Trader AI?',
    a: 'No. Trader AI is designed to present market information in plain, clear language, so you do not need a finance background to get value from it. It is still important to understand the basics of trading and risk before you commit real money.',
  },
];

export default function Review() {
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
              <h1 className="text-4xl text-ondark md:text-5xl">Trader AI Review Australia</h1>
              <p className="mt-4 max-w-[46ch] text-lg text-ondark-muted">
                A straightforward look at Trader AI for Australian users. What the platform does,
                how it works, who it's for, and the things worth thinking about before you start.
              </p>
              <p className="mt-5 text-sm text-ondark-muted">
                This is an informational review, not personal financial advice.
              </p>
            </div>
            <img
              src="/assets/img/image7.webp"
              alt="Trader AI review illustration"
              width={640}
              height={622}
              loading="eager"
              decoding="async"
              className="mx-auto max-h-[360px] w-full object-contain"
            />
          </div>
        </Container>
      </section>

      {/* What Is Trader AI */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <img
                src="/assets/img/review-what-is.webp"
                alt="AI trading platform illustration"
                width={600}
                height={324}
                loading="lazy"
                decoding="async"
                className="mx-auto max-h-[300px] w-full object-contain"
              />
            </Reveal>
            <Reveal>
              <div>
                <SectionHead eyebrow="The Overview" title="What Is Trader AI?" align="left" className="mb-4" />
                <div className="space-y-4 text-ink-500">
                  <p>
                    Trader AI is an AI assisted platform designed to help you research and understand
                    financial markets. It brings market information together, highlights possible
                    patterns and trends, and presents everything in plain, clear language.
                  </p>
                  <p>
                    It is not a broker, and it does not trade your money on your behalf. It is a research
                    and analysis tool. Your decisions, and the risk that comes with them, stay with you.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div>
                <SectionHead eyebrow="The Flow" title="How Trader AI Works" align="left" className="mb-4" />
                <div className="space-y-4 text-ink-500">
                  <p>
                    The platform follows a simple flow. It gathers market data, runs AI analysis on
                    it, surfaces trading insights in plain language, and then leaves the final
                    decision to you.
                  </p>
                  <p>In short: information in, clarity out, and you stay in charge the whole way.</p>
                </div>
                <div className="mt-6">
                  <Button href="/how-it-works/">See The Full Process</Button>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <Checklist
                items={[
                  <><strong className="text-ink-900">Market Data</strong> is gathered and organised</>,
                  <><strong className="text-ink-900">AI Analysis</strong> scans for patterns and trends</>,
                  <><strong className="text-ink-900">Trading Insights</strong> are presented clearly</>,
                  <><strong className="text-ink-900">Your Decision</strong> stays with you</>,
                ]}
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead eyebrow="The Tools" title="Key Features" />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {features.map((f) => (
              <Reveal key={f.title}>
                <FeatureCard icon={f.icon} tone={f.tone} title={f.title}>
                  {f.text}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-9 text-center">
              <Button href="/features/" variant="ghost-dark">
                Explore Features In Detail
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Who Is Trader AI For */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div>
                <SectionHead eyebrow="The Audience" title="Who Is Trader AI For?" align="left" className="mb-4" />
                <p className="text-ink-500">
                  Trader AI is built for people who want a clearer, more organised way to research
                  markets. It can suit a wide range of investors.
                </p>
                <Checklist
                  items={[
                    <><strong className="text-ink-900">Beginners</strong> who are still learning how markets work</>,
                    <><strong className="text-ink-900">Experienced traders</strong> who want to speed up their research</>,
                    <><strong className="text-ink-900">Investors</strong> who prefer to understand why a market might move before they act</>,
                  ]}
                />
              </div>
            </Reveal>
            <Reveal>
              <img
                src="/assets/img/review-who-for.webp"
                alt="Illustration of who Trader AI is suitable for"
                width={600}
                height={360}
                loading="lazy"
                decoding="async"
                className="mx-auto max-h-[300px] w-full object-contain"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead eyebrow="What Stands Out" title="Benefits" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((c) => (
              <Reveal key={c.title}>
                <ValueCard icon={c.icon} tone={c.tone} title={c.title}>
                  {c.text}
                </ValueCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Things To Consider */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <img
                src="/assets/img/review-consider.webp"
                alt="Things to consider before trading illustration"
                width={600}
                height={324}
                loading="lazy"
                decoding="async"
                className="mx-auto max-h-[300px] w-full object-contain"
              />
            </Reveal>
            <Reveal>
              <div>
                <SectionHead eyebrow="Be Realistic" title="Things To Consider" align="left" className="mb-4" />
                <p className="mb-4 text-ink-500">Before you get started, it's worth keeping a few things in mind.</p>
                <ul className="space-y-2 text-ink-500">
                  <li>
                    <strong className="text-ink-900">AI insights are possibilities, not certainties.</strong>{' '}
                    Signals and patterns can be wrong.
                  </li>
                  <li>
                    <strong className="text-ink-900">Markets are unpredictable.</strong> Unexpected events can
                    move prices in ways no model can anticipate.
                  </li>
                  <li>
                    <strong className="text-ink-900">You stay responsible.</strong> The platform provides
                    information. You make every decision.
                  </li>
                  <li>
                    <strong className="text-ink-900">No tool can guarantee returns.</strong> Anyone who
                    promises otherwise should be treated with caution.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* AI Trading And Risk */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div>
                <SectionHead eyebrow="A Balanced View" title="AI Trading And Risk" align="left" className="mb-4" />
                <div className="space-y-4 text-ink-500">
                  <p>
                    AI can help you work with information faster, but it can't remove the risk that
                    comes with trading. Markets move on events no model can predict, and the value of
                    any investment can fall.
                  </p>
                  <p>
                    AI is a support tool. It should inform your decisions, not make them for you. The
                    more you treat it that way, the more useful it becomes.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <img
                src="/assets/img/review-risk.webp"
                alt="AI trading risk illustration"
                width={600}
                height={324}
                loading="lazy"
                decoding="async"
                className="mx-auto max-h-[300px] w-full object-contain"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Pros And Considerations */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead eyebrow="At A Glance" title="Pros And Considerations" />
          </Reveal>
          <Reveal>
            <ProsCons
              pros={[
                'Clear, plain language insights',
                'Pattern and trend recognition tools',
                'Risk awareness built in',
                'Works on most devices',
                'Organised research in one place',
              ]}
              cons={[
                'No guaranteed returns',
                'You make every decision yourself',
                'Trading always involves risk',
                'AI insights can be wrong',
              ]}
            />
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead eyebrow="Common Questions" title="Frequently Asked Questions" />
          </Reveal>
          <Reveal>
            <FaqList items={faqs} />
          </Reveal>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <CtaBand
              title="Ready To See It For Yourself?"
              lead="Explore the platform and decide whether Trader AI is a good fit for the way you like to research markets."
              primary={{ label: 'Get Started', href: '/register/' }}
              secondary={{ label: 'Explore Features', href: '/features/' }}
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
