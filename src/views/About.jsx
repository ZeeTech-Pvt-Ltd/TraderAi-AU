import Link from 'next/link';
import Container from '../components/Container';
import Button from '../components/Button';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import CtaBand from '../components/CtaBand';
import Checklist from '../components/Checklist';
import Callout from '../components/Callout';
import ProsCons from '../components/ProsCons';
import { ValueCard } from '../components/cards';
import { Activity, FileText, MapPin, ShieldCheck } from 'lucide-react';

const focus = [
  {
    icon: FileText,
    title: 'Clear Information',
    text: 'Summaries you can read in a couple of minutes, with the points that matter brought forward.',
  },
  {
    icon: Activity,
    tone: 'accent',
    title: 'Pattern And Trend Research',
    text: 'Tools that scan price data for possible patterns and shifts, so you spend less time sorting and more time thinking.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Awareness',
    text: 'The downside stays part of the conversation, instead of becoming an afterthought once you have already acted.',
  },
  {
    icon: MapPin,
    tone: 'accent',
    title: 'Australian Context',
    text: 'Designed with Australian investors in mind, with plain language and local market context.',
  },
];

export default function About() {
  return (
    <>
      <section
        className="relative flex min-h-[480px] items-center overflow-hidden border-b border-white/10 bg-navy-900 text-ondark"
        style={{
          backgroundImage:
            'radial-gradient(900px 400px at 80% -10%, rgba(23,105,224,0.22), transparent 60%), radial-gradient(700px 360px at 5% 110%, rgba(15,167,158,0.16), transparent 55%)',
        }}
      >
        <Container>
          <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className="text-4xl text-ondark md:text-5xl">About Trader AI</h1>
              <p className="mt-4 max-w-[46ch] text-lg text-ondark-muted">
                Trader AI is built for people who want a clearer way to research markets. Here's
                what the platform is, what it stands for, and how it fits into your own decision
                making.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/register/">Get Started</Button>
                <Button href="/features/" variant="ghost-light">
                  Explore Features
                </Button>
              </div>
            </div>
            <img
              src="/assets/img/img-3.webp"
              alt="Australian market analysis illustration"
              width={640}
              height={617}
              loading="eager"
              decoding="async"
              className="mx-auto max-h-[360px] w-full object-contain"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div>
                <SectionHead
                  eyebrow="Our Reason"
                  title="Why Trader AI Exists"
                  align="left"
                  className="mb-4"
                />
                <div className="space-y-4 text-ink-500">
                  <p>
                    Markets generate more information than any person can reasonably review. Prices,
                    headlines, charts and opinion all compete for your attention, and it's easy to
                    lose the thread.
                  </p>
                  <p>
                    Trader AI was built to make that information easier to work with. It brings
                    market data together, highlights possible patterns and trends, and presents what
                    it finds in plain language.
                  </p>
                  <p>
                    The aim isn't to tell you what to do. It's to help you understand what you're
                    looking at, so you can make your own call with a clearer head.
                  </p>
                </div>
                <Checklist
                  items={[
                    'Market information in one organised place',
                    'Plain language summaries, not walls of jargon',
                    'Risk kept in the conversation from the start',
                  ]}
                />
              </div>
            </Reveal>
            <Reveal>
              <img
                src="/assets/img/img-1.webp"
                alt="Trader AI platform illustration"
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

      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="What Guides Us"
              title="What We Focus On"
              lead="Four ideas shape the way the platform is built and the way it presents information."
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focus.map((c) => (
              <Reveal key={c.title}>
                <ValueCard icon={c.icon} tone={c.tone} title={c.title}>
                  {c.text}
                </ValueCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <img
                src="/assets/img/img-2.webp"
                alt="AI trading tools illustration"
                width={640}
                height={617}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </Reveal>
            <Reveal>
              <div>
                <SectionHead
                  eyebrow="The Limits"
                  title="How We Think About AI"
                  align="left"
                  className="mb-4"
                />
                <div className="space-y-4 text-ink-500">
                  <p>
                    AI is useful for sorting information and spotting patterns at a scale no person
                    could manage by hand. It isn't a crystal ball. A signal can be wrong, a pattern
                    can fail, and unexpected news can move a market in ways no model saw coming.
                  </p>
                  <p>
                    That's why every tool here is framed as information to review, not a decision
                    to follow. The thinking always stays with you.
                  </p>
                </div>
                <Checklist
                  items={[
                    'AI surfaces possibilities, not certainties',
                    'You review the information and decide',
                    'Your own research stays central',
                  ]}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="The Straight Answer"
              title="What You Can Expect"
              lead="A clear picture of what the platform does, and what it doesn't do."
            />
          </Reveal>
          <Reveal>
            <ProsCons
              prosTitle="What We Aim To Do"
              pros={[
                'Give you clear, organised market information',
                'Show possible patterns and trends, not predictions',
                'Keep risk visible before you make a decision',
                'Explain things in plain language',
              ]}
              consTitle="What We Don't Do"
              cons={[
                "We don't promise profits or guaranteed returns",
                "We don't trade on your behalf or hold your money",
                "We don't provide personal financial advice",
                "We don't pretend AI can predict the market",
              ]}
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <SectionHead eyebrow="Before You Start" title="A Note On Risk" />
              <Callout variant="caution">
                <p>
                  <strong className="text-ink-900">Trading involves risk.</strong> The value of
                  investments can go down as well as up, and you could lose the money you put in.
                  Trader AI provides information and analysis, not advice. Read our{' '}
                  <Link href="/risk-disclaimer/" className="text-primary underline-offset-2">
                    Risk Disclaimer
                  </Link>{' '}
                  and make sure the decision fits your own situation.
                </p>
              </Callout>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-soft py-16 md:py-24">
        <Container>
          <Reveal>
            <CtaBand
              title="Start With A Clearer View"
              lead="Explore the platform and see whether Trader AI fits the way you like to research markets."
              primary={{ label: 'Get Started', href: '/register/' }}
              secondary={{ label: 'Read The Trader AI Review', href: '/trader-ai-review-australia/' }}
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
