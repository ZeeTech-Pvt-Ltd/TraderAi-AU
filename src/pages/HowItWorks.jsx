import Container from '../components/Container';
import Button from '../components/Button';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import ProcessFlow from '../components/ProcessFlow';
import Steps from '../components/Steps';
import { ValueCard } from '../components/cards';
import { Check, ClipboardList, Cpu, Database, Lightbulb, MousePointer2 } from 'lucide-react';

const processNodes = [
  { icon: Database, title: 'Market Data', text: 'The platform gathers and organises market information.' },
  { icon: Cpu, tone: 'accent', title: 'AI Analysis', text: 'AI reviews the data for patterns, trends and signals.' },
  { icon: Lightbulb, title: 'Trading Insights', text: 'You get clear, plain language insights to review.' },
  { icon: MousePointer2, tone: 'accent', title: 'Your Decision', text: 'You decide what to do, based on your own research and risk.' },
];

const journey = [
  { title: 'Get Familiar', text: "Spend a little time exploring the platform and how it's laid out." },
  { title: 'Choose A Market', text: 'Pick the stocks or markets you want to research.' },
  { title: 'Review AI Insights', text: 'Read the patterns, trends and signals the AI has surfaced.' },
  { title: 'Consider Risk', text: 'Think about the downside and how it fits your own situation.' },
  { title: 'Make Your Decision', text: 'Decide what to do, on your own terms and at your own pace.' },
];

const expectations = [
  { icon: Check, title: 'No Guaranteed Outcomes', text: "We don't promise profits or certain results. You'll always get an honest view of what AI can and can't do." },
  { icon: MousePointer2, tone: 'accent', title: 'You Stay In Control', text: 'Nothing happens without your input. The platform supports your decisions, it never makes them for you.' },
  { icon: ClipboardList, title: 'Support For Your Research', text: 'Every feature is built to make your research clearer and faster, not to replace your own thinking.' },
];

export default function HowItWorks() {
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
              <h1 className="text-4xl text-ondark md:text-5xl">How Trader AI Works</h1>
              <p className="mt-4 max-w-[46ch] text-lg text-ondark-muted">
                Trader AI turns market data into clear, plain language insights. Here's the full
                journey, from your first look to your final decision.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/register/">Get Started</Button>
                <Button href="/features/" variant="ghost-light">
                  Explore Features
                </Button>
              </div>
            </div>
            <img
              src="/assets/img/image5.webp"
              alt="Trader AI platform illustration"
              width={1121}
              height={1403}
              loading="eager"
              decoding="async"
              className="mx-auto max-h-[360px] w-full object-contain"
            />
          </div>
        </Container>
      </section>

      {/* The Simple Flow */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="The Simple Flow"
              title="Four Stages, From Data To Decision"
              lead="Everything Trader AI does follows the same simple path."
            />
          </Reveal>
          <Reveal>
            <ProcessFlow nodes={processNodes} />
          </Reveal>
        </Container>
      </section>

      {/* Step by step journey */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Your Journey"
              title="Your Step By Step Journey"
              lead="Here's what it looks like from your side, one step at a time."
            />
          </Reveal>
          <Reveal>
            <Steps items={journey} />
          </Reveal>
        </Container>
      </section>

      {/* What To Expect */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead eyebrow="What To Expect" title="A Clear, Honest Experience" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expectations.map((c) => (
              <Reveal key={c.title}>
                <ValueCard icon={c.icon} tone={c.tone} title={c.title}>
                  {c.text}
                </ValueCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <CtaBand
              title="See The Process In Action"
              lead="Explore the features that power the Trader AI journey and decide if it's right for you."
              primary={{ label: 'Get Started', href: '/register/' }}
              secondary={{ label: 'Read The FAQ', href: '/faq/' }}
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
