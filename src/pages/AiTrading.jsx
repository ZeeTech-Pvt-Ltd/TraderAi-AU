import Container from '../components/Container';
import Button from '../components/Button';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import FaqList from '../components/FaqList';
import ProsCons from '../components/ProsCons';
import { ValueCard, FeatureCard } from '../components/cards';
import {
  Activity,
  BarChart3,
  ClipboardList,
  Clock,
  Cpu,
  Database,
  List,
  Search,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

const stages = [
  { icon: Database, title: '1. Collect Market Data', text: 'AI pulls together price history, market movements and other relevant information into one place.' },
  { icon: Cpu, tone: 'accent', title: '2. Analyse For Patterns And Trends', text: 'The AI scans the data for repeating patterns, momentum shifts and possible signals.' },
  { icon: TrendingUp, title: '3. Present Clear Insights', text: 'You get plain language summaries and signals to review, so you can decide what to do next.' },
];

const benefits = [
  { icon: Clock, title: 'Faster Research', text: 'Work through far more market information in a fraction of the time it takes by hand.' },
  { icon: Activity, tone: 'accent', title: 'Pattern Detection', text: 'Notice possible patterns and setups that are easy to miss during manual review.' },
  { icon: TrendingUp, title: 'Trend Awareness', text: 'Understand the general direction of a market with clear, easy to read signals.' },
  { icon: ShieldCheck, tone: 'accent', title: 'Risk Focus', text: 'Bring potential risk into the conversation early, before you make a decision.' },
  { icon: List, title: 'Organised Information', text: 'Keep your research in one clear, structured place instead of scattered across tabs.' },
  { icon: BarChart3, tone: 'accent', title: 'Consistent Process', text: 'Follow a repeatable process instead of reacting to market noise.' },
];

const features = [
  {
    icon: ClipboardList,
    title: 'AI Stock Analysis',
    text: 'Review stock and market information in one place. AI brings the data together and presents it in a clear, organised way, so you spend less time hunting and more time understanding.',
    bullets: ['Review stocks efficiently', 'Bring data together', 'Clear, organised summaries'],
  },
  {
    icon: Activity,
    tone: 'accent',
    title: 'Pattern Recognition',
    text: 'AI scans price data for repeating shapes and structures that may signal a possible market setup. It helps you notice patterns you might otherwise miss, so you can decide whether they\'re worth acting on.',
    bullets: ['Spot possible chart patterns', 'Review setups faster', 'Use patterns as a starting point'],
  },
  {
    icon: TrendingUp,
    title: 'Trend Projection',
    text: 'Trend tools help you understand the possible direction of a market based on recent price behaviour. Projections are informational, never guaranteed, and always worth combining with your own research.',
    bullets: ['Understand market direction', 'Spot momentum shifts', 'Informational, not guaranteed'],
  },
  {
    icon: ShieldCheck,
    tone: 'accent',
    title: 'Risk Management',
    text: 'Good trading is as much about managing downside as chasing upside. Trader AI helps you consider potential risk before you commit, so your decisions are grounded in the full picture.',
    bullets: ['Consider risk before acting', 'Understand possible downside', 'Trade with more confidence'],
  },
];

const limitations = [
  { icon: Search, tone: 'accent', title: "AI Can't Predict The Future", text: 'No tool can tell you with certainty what a market will do next. Projections are estimates, not guarantees.' },
  { icon: BarChart3, title: 'Markets Are Unpredictable', text: 'Unexpected events can move markets in ways no model can anticipate. Risk is always present.' },
  { icon: Activity, tone: 'accent', title: 'AI Insights Can Be Wrong', text: 'Signals and patterns are possibilities, not facts. Always check them against your own research.' },
];

const faqs = [
  {
    q: 'Does AI Trading Work?',
    a: 'AI trading tools can help you work with market information more quickly, but they do not remove risk. AI can assist with pattern recognition, trend analysis and research. What AI cannot do is predict markets with certainty. Financial markets are unpredictable, and any tool should support your own judgement rather than replace it.',
  },
  {
    q: 'Is There An AI Trading App?',
    a: 'Trader AI is accessed through a web based platform, which means you can use it from most devices with an internet connection. For the most up to date information on device support and access options, it is best to check the platform directly.',
  },
  {
    q: 'Are AI Trading Apps Legit?',
    a: 'Legitimacy varies from one product to another, so it is always worth checking a platform\'s terms, privacy policy and risk disclaimer before you commit. A reputable AI trading tool should be clear about what it does, honest about risk, and never promise guaranteed returns. Be cautious of any platform that claims you can make money automatically or with no risk.',
  },
];

export default function AiTrading() {
  return (
    <>
      <section
        className="flex min-h-[480px] items-center border-b border-white/10 bg-navy-900 text-ondark"
        style={{
          backgroundImage: 'radial-gradient(900px 400px at 80% -10%, rgba(23,105,224,0.2), transparent 60%)',
        }}
      >
        <Container>
          <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className="text-4xl text-ondark md:text-5xl">AI Trading</h1>
              <p className="mt-4 max-w-[46ch] text-lg text-ondark-muted">
                AI trading uses technology to help you research markets faster, spot possible
                patterns, and make more informed decisions. Here's how it works, what it can do, and
                where its limits are.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/features/">Explore Features</Button>
                <Button href="/how-it-works/" variant="ghost-light">
                  See How It Works
                </Button>
              </div>
            </div>
            <img
              src="/assets/img/traderimg1.webp"
              alt="AI trading platform illustration"
              width={640}
              height={640}
              loading="eager"
              decoding="async"
              className="max-h-[360px] w-full object-contain"
            />
          </div>
        </Container>
      </section>

      {/* What Is AI Trading */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <img
                src="/assets/img/ai-analysis.png"
                alt="AI market analysis showing detected patterns and trend insights"
                width={1120}
                height={800}
                loading="lazy"
                decoding="async"
                className="mx-auto h-auto w-full max-w-md"
              />
            </Reveal>
            <Reveal>
              <div>
                <SectionHead eyebrow="The Basics" title="What Is AI Trading?" align="left" className="mb-4" />
                <div className="space-y-4 text-ink-500">
                  <p>
                    AI trading means using artificial intelligence to support the way you research
                    and understand financial markets. Rather than manually working through every
                    chart and data point, AI can process market information quickly and surface the
                    parts most likely to matter.
                  </p>
                  <p>
                    The goal is simple: help you see patterns, trends and risks more clearly, so you
                    can make decisions with better information behind them. AI trading is a support
                    tool. It does not trade for you, and it does not remove the need for your own
                    judgement.
                  </p>
                  <p>
                    At its core, AI trading is about turning a large amount of market information
                    into something clearer and easier to act on.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* How AI Trading Works */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="The Process"
              title="How AI Trading Works"
              lead="Most AI trading tools follow the same three stage process."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map((c) => (
              <Reveal key={c.title}>
                <ValueCard icon={c.icon} tone={c.tone} title={c.title}>
                  {c.text}
                </ValueCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="The Benefits"
              title="AI Trading Benefits"
              lead="AI trading tools don't replace your judgement. They help you do your best thinking, faster."
            />
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

      {/* Features */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="What You Get"
              title="AI Trading Features"
              lead="A focused set of tools built around patterns, trends, risk and clear analysis."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {features.map((f) => (
              <Reveal key={f.title}>
                <FeatureCard icon={f.icon} tone={f.tone} title={f.title} bullets={f.bullets}>
                  {f.text}
                </FeatureCard>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-9 text-center">
              <Button href="/features/" variant="ghost-dark">
                See All Features In Detail
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Limitations */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead eyebrow="The Honest Truth" title="AI Trading Limitations" align="left" className="mb-6" />
          </Reveal>
          <Reveal>
            <p className="mb-8 max-w-3xl text-ink-500">
              AI trading tools are useful, but they are not magic. It's worth being clear about what
              they can't do.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {limitations.map((c) => (
              <Reveal key={c.title}>
                <ValueCard icon={c.icon} tone={c.tone} title={c.title}>
                  {c.text}
                </ValueCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Is AI Trading right for you */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead eyebrow="A Quick Check" title="Is AI Trading Right For You?" />
          </Reveal>
          <Reveal>
            <ProsCons
              prosTitle="It Might Suit You If"
              pros={[
                'You like doing your own research before you act',
                'You want a faster way to review market information',
                'You value organised, plain language insights',
                'You understand that risk is part of trading',
              ]}
              consTitle="It Might Not Suit You If"
              cons={[
                'You expect guaranteed returns',
                'You want a tool that trades automatically for you',
                'You are not comfortable with any risk',
              ]}
            />
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead eyebrow="Common Questions" title="AI Trading FAQs" />
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
              title="Ready To Explore AI Trading?"
              lead="Discover practical AI powered tools for market analysis and trading research."
              primary={{ label: 'Get Started', href: '/register/' }}
              secondary={{ label: 'Read The Trader AI Review', href: '/trader-ai-review-australia/' }}
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
