import Container from '../components/Container';
import Button from '../components/Button';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import Callout from '../components/Callout';
import CtaBand from '../components/CtaBand';
import FaqList from '../components/FaqList';
import HeroDashboard from '../components/HeroDashboard';
import Checklist from '../components/Checklist';
import ProcessFlow from '../components/ProcessFlow';
import Steps from '../components/Steps';
import { ValueCard, FeatureCard } from '../components/cards';
import {
  Activity,
  BarChart3,
  Check,
  ClipboardList,
  Clock,
  Cpu,
  Database,
  Eye,
  FileText,
  Lightbulb,
  LineChart,
  List,
  MousePointer2,
  Search,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

const heroNotes = [
  'Information and analysis, not financial advice',
  'You stay in control of your decisions',
  'Clear risk information included',
];

const trustCards = [
  { icon: LineChart, title: 'Market Analysis', text: 'Bring market information together so you can see the bigger picture without digging through endless charts.' },
  { icon: Activity, tone: 'accent', title: 'Pattern Recognition', text: 'Spot possible patterns and setups that are easy to miss when you review markets by hand.' },
  { icon: TrendingUp, title: 'Trend Insights', text: 'Understand the general direction of a market with clear, easy to read signals.' },
  { icon: ShieldCheck, tone: 'accent', title: 'Risk Awareness', text: 'See potential risk factors before you act, so your decisions are more considered.' },
  { icon: Search, title: 'Trading Research', text: 'Organise your research in one place and spend less time chasing scattered information.' },
  { icon: FileText, tone: 'accent', title: 'Clear Information', text: 'Plain language summaries that help you understand what the data is actually telling you.' },
];

const steps = [
  { title: 'Explore The Market', text: 'Look through the markets and stocks that interest you, and get comfortable with the layout.' },
  { title: 'Analyse Market Patterns', text: "Use the platform's tools to review price patterns and market structure." },
  { title: 'Review AI Based Insights', text: 'Read the AI assisted summaries and signals to understand what the data suggests.' },
  { title: 'Consider Risk', text: 'Think about the downside, not just the upside, before you take any action.' },
  { title: 'Make Your Own Decision', text: "Use everything you've learned to make a choice that suits your own goals and circumstances." },
];

const features = [
  {
    icon: Activity,
    title: 'Pattern Recognition',
    text: 'AI can scan price data for repeating shapes and structures that may signal a possible market setup. It helps you notice patterns you might otherwise miss, so you can decide whether they\'re worth acting on.',
    bullets: ['Spot possible chart patterns', 'Review setups faster', 'Use patterns as a starting point'],
  },
  {
    icon: ShieldCheck,
    tone: 'accent',
    title: 'Risk Management',
    text: 'Good trading is as much about managing downside as chasing upside. Trader AI helps you consider potential risk before you commit, so your decisions are grounded in the full picture.',
    bullets: ['Consider risk before acting', 'Understand possible downside', 'Trade with more confidence'],
  },
  {
    icon: ClipboardList,
    title: 'AI Stock Analysis',
    text: 'AI assisted analysis can help you review stock and market information in one place. Instead of jumping between sources, you get a clearer, organised view of the data that matters.',
    bullets: ['Review stocks efficiently', 'Bring data together', 'Clear, organised summaries'],
  },
  {
    icon: TrendingUp,
    tone: 'accent',
    title: 'AI Trend Projection',
    text: 'Trend tools help you understand the possible direction of a market based on recent price behaviour. Projections are informational, never guaranteed, and always worth combining with your own research.',
    bullets: ['Understand market direction', 'Spot momentum shifts', 'Informational, not guaranteed'],
  },
];

const whyCards = [
  { icon: Clock, title: 'Faster Market Research', text: 'Cover more ground in less time and focus on the opportunities that look most relevant.' },
  { icon: BarChart3, tone: 'accent', title: 'Pattern Analysis', text: 'Let AI scan for patterns so you can spend your time thinking, not sorting.' },
  { icon: List, title: 'Better Organisation', text: 'Keep your research in one clear, structured place instead of scattered across tabs.' },
  { icon: Eye, tone: 'accent', title: 'Trend Monitoring', text: 'Stay aware of how markets are moving without constant manual checking.' },
  { icon: ShieldCheck, title: 'Risk Awareness', text: 'Bring risk into the conversation early, before you make a decision.' },
  { icon: ClipboardList, tone: 'accent', title: 'Structured Decisions', text: 'Follow a clearer process instead of reacting to market noise.' },
];

const processNodes = [
  { icon: Database, title: 'Market Data', text: 'The platform gathers and organises market information.' },
  { icon: Cpu, tone: 'accent', title: 'AI Analysis', text: 'AI reviews the data for patterns, trends and signals.' },
  { icon: Lightbulb, title: 'Trading Insights', text: 'You get clear, plain language insights to review.' },
  { icon: MousePointer2, tone: 'accent', title: 'Your Decision', text: 'You decide what to do, based on your own research and risk.' },
];

const faqs = [
  {
    q: 'What Types Of Investors Is Trader AI Suitable For?',
    a: 'Trader AI is built for people who want a clearer, more organised way to research markets. It can suit beginners who are still learning how markets work, and more experienced traders who want to speed up their research. The tools focus on information and analysis, not automatic trading decisions.',
  },
  {
    q: 'Is Trader AI Legit?',
    a: 'Trader AI is a provider of informational tools for market research and analysis. It is not a broker and it does not hold or trade your money on your behalf. As with any financial tool, it is worth doing your own research and reading the risk disclaimer before you start. We do not guarantee profits or claim that any specific outcome is certain.',
  },
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
  {
    q: 'How Do I Get Started With Trader AI?',
    a: 'Start by exploring the platform and the resources on this site. Read through how the tools work, review the features that matter to you, and make sure you understand the risks. When you are ready, get in touch through the contact page and our team can point you in the right direction.',
  },
  {
    q: 'Do I Need Experience To Use AI Trading Tools?',
    a: 'No. Trader AI is designed to present market information in plain, clear language, so you do not need a finance background to get value from it. It is still important to understand the basics of trading and risk before you commit real money. The tools are here to support your research, not to make decisions for you.',
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
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
              <span className="mb-4 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="h-0.5 w-5 rounded bg-accent" aria-hidden="true" />
                AI Assisted Trading Tools
              </span>
              <h1 className="text-4xl font-bold text-ondark md:text-5xl lg:text-[3.35rem]">
                Trader AI <span className="text-accent">Australia</span>
              </h1>
              <p className="mt-4 max-w-md text-lg text-ondark-muted">
                AI powered tools designed to help you analyse markets, understand trends, and make
                more informed trading decisions.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/register/" size="lg" icon>
                  Get Started
                </Button>
                <Button href="/ai-trading/" variant="ghost-light" size="lg">
                  Explore AI Trading
                </Button>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ondark-muted">
                {heroNotes.map((n) => (
                  <li key={n} className="flex items-center gap-2">
                    <Check className="h-[18px] w-[18px] text-accent" aria-hidden="true" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
            <HeroDashboard />
          </div>
        </Container>
      </section>

      {/* 2. Trust & value */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Why Explore Trader AI"
              title="Practical Tools For Clearer Market Decisions"
              lead="Trader AI is built around one idea: making market research easier to understand, so you can act with more confidence."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trustCards.map((c) => (
              <Reveal key={c.title}>
                <ValueCard icon={c.icon} tone={c.tone} title={c.title}>
                  {c.text}
                </ValueCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. What Is Trader AI */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div>
                <SectionHead
                  eyebrow="What Is Trader AI"
                  title="What Is Trader AI?"
                  align="left"
                  className="mb-4"
                />
                <div className="space-y-4 text-ink-500">
                  <p>
                    Trader AI is a set of AI assisted tools that help you research and understand
                    financial markets. Instead of scrolling through endless charts and headlines,
                    the platform organises market data, highlights possible patterns, and presents
                    it in plain English.
                  </p>
                  <p>
                    It focuses on three things: bringing market information together, spotting
                    possible patterns and trends, and flagging risk so you can make more informed
                    choices.
                  </p>
                  <p>
                    You can use it to review stocks, market trends and price movements, depending
                    on the data sources available. The platform supports your research. It doesn't
                    make decisions for you.
                  </p>
                </div>
                <Checklist
                  items={[
                    'Tools for research, not financial advice',
                    'You always make the final call',
                    'Plain language, no walls of jargon',
                  ]}
                />
              </div>
            </Reveal>
            <Reveal>
              <img
                src="/assets/img/img-1.png"
                alt="Trader AI platform illustration"
                width={1274}
                height={1234}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 4. How to use (steps) */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Getting Started"
              title="How To Use Trader AI To Trade Stocks In Australia"
              lead="Five simple steps. The tools support your research, but every decision stays with you."
            />
          </Reveal>
          <Reveal>
            <Steps items={steps} />
          </Reveal>
          <Reveal>
            <div className="mt-8">
              <Callout variant="caution">
                <p>
                  <strong className="text-ink-900">AI tools provide information and analysis.</strong>{' '}
                  You remain responsible for your own decisions, and trading always involves risk.
                </p>
              </Callout>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 5. Key features */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Key Features"
              title="A Focused Set Of Research Tools"
              lead="Built around patterns, trends, risk and clear analysis. Nothing more than you need."
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
                Explore All Features
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 6. AI Trading */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div>
                <SectionHead eyebrow="AI Trading" title="What Is AI Trading?" align="left" className="mb-4" />
                <div className="space-y-4 text-ink-500">
                  <p>
                    AI trading means using artificial intelligence to help with market research and
                    analysis. Instead of a person manually reviewing every chart, AI can process
                    large amounts of market information quickly and highlight the parts that might
                    matter.
                  </p>
                  <p>
                    AI tools can assist with pattern recognition, trend analysis and organising
                    data. They can process far more information than a person realistically could,
                    and they can surface it in a way that's easier to act on.
                  </p>
                  <p>
                    But AI can't see the future. Markets are unpredictable, and no tool can
                    guarantee an outcome. AI provides information and analysis. The decision, and
                    the risk, always sit with you.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/ai-trading/">Explore AI Trading</Button>
                  <Button href="/how-it-works/" variant="ghost-dark">
                    See How It Works
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div>
                <img
                  src="/assets/img/img-2.png"
                  alt="AI trading tools illustration"
                  width={1277}
                  height={1231}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
                <div className="mt-4">
                  <Callout variant="caution">
                    <p>
                      <strong className="text-ink-900">No certainties here.</strong> AI can assist
                      with analysis, but it can't predict the market. Every trade carries risk.
                    </p>
                  </Callout>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 7. Why use AI trading tools */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="The Benefits"
              title="Why Use AI Trading Tools?"
              lead="AI trading tools don't replace your judgement. They help you do your best thinking, faster."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((c) => (
              <Reveal key={c.title}>
                <ValueCard icon={c.icon} tone={c.tone} title={c.title}>
                  {c.text}
                </ValueCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. How Trader AI works */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="The Process"
              title="How Trader AI Works"
              lead="Four simple stages, from raw market data to your own informed decision."
            />
          </Reveal>
          <Reveal>
            <ProcessFlow nodes={processNodes} />
          </Reveal>
        </Container>
      </section>

      {/* 9. Review preview */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Trader AI Review Australia"
              title="Want A Closer Look First?"
              lead="Our review page walks through what Trader AI is, how it works, who it's for, and the things worth considering. It's an honest look at the platform, not a sales pitch."
            />
          </Reveal>
          <Reveal>
            <div className="text-center">
              <Button href="/trader-ai-review-australia/" size="lg" icon>
                Read The Trader AI Review
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 10. Australian audience */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div>
                <SectionHead
                  eyebrow="Made For Australia"
                  title="Built With Australian Investors In Mind"
                  align="left"
                  className="mb-4"
                />
                <p className="text-ink-500">
                  Australian investors approach the market in their own way, and Trader AI reflects
                  that. The platform is designed for people who want to understand the Australian
                  share market, research local and global stocks, and make considered decisions.
                </p>
                <Checklist
                  items={[
                    'Australian share market focus',
                    'Research tools for local and global stocks',
                    'Plain language with Australian spelling and context',
                    'Risk awareness built into the experience',
                  ]}
                />
              </div>
            </Reveal>
            <Reveal>
              <div>
                <img
                  src="/assets/img/img-3.png"
                  alt="Australian market analysis illustration"
                  width={1277}
                  height={1231}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full"
                />
                <div className="mt-4">
                  <Callout variant="caution">
                    <p>
                      <strong className="text-ink-900">Trader AI is an informational platform.</strong>{' '}
                      It is not a licensed financial adviser, and nothing on this website is
                      personal financial advice. Always consider your own circumstances.
                    </p>
                  </Callout>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 11. FAQ */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead eyebrow="Common Questions" title="Frequently Asked Questions" />
          </Reveal>
          <Reveal>
            <FaqList items={faqs} />
          </Reveal>
          <Reveal>
            <div className="mt-8 text-center">
              <Button href="/faq/" variant="ghost-dark">
                See All FAQs
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* 12. Final CTA */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <CtaBand
              title="Ready To Explore AI Trading?"
              lead="Discover practical AI powered tools for market analysis and trading research."
              primary={{ label: 'Get Started', href: '/register/' }}
              secondary={{ label: 'Learn More', href: '/how-it-works/' }}
            />
          </Reveal>
        </Container>
      </section>

      {/* 13. Disclaimer */}
      <section className="bg-soft py-12">
        <Container>
          <Reveal>
            <Callout variant="caution">
              <p>
                <strong className="text-ink-900">Risk Disclaimer.</strong> Trading and investing
                involve risk, including the possible loss of the money you put in. Past performance
                does not guarantee future results. AI generated information is not guaranteed
                financial advice. You should do your own research, consider your own financial
                circumstances, and seek professional advice where appropriate. Read our full{' '}
                <a href="/risk-disclaimer/" className="text-primary underline-offset-2">
                  Risk Disclaimer
                </a>
                .
              </p>
            </Callout>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
