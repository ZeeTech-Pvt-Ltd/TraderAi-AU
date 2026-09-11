import Container from '../components/Container';
import Button from '../components/Button';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import Checklist from '../components/Checklist';
import { ValueCard } from '../components/cards';
import {
  Activity,
  ClipboardList,
  Eye,
  Search,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

function FeatureRow({ num, icon, tone, title, paragraphs, bullets, soft }) {
  return (
    <section id={`feature-${num}`} className={`py-16 md:py-24 ${soft ? 'bg-soft' : ''}`}>
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-0.5 w-5 rounded bg-accent" aria-hidden="true" />
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-primary">
                  Feature 0{num}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl">{title}</h2>
              <div className="mt-4 space-y-4 text-ink-500">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Checklist items={bullets} />
            </div>
          </Reveal>
          <Reveal>
            <ValueCard icon={icon} tone={tone} title="Why It Helps">
              {paragraphs[1]}
            </ValueCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default function Features() {
  return (
    <>
      <PageHero
        crumb="Features"
        title="AI Trading Features"
        lead="A focused set of tools built around patterns, trends, risk and clear analysis. Here's what each one does, and how it can help you research markets."
      >
        <div className="mt-7 flex flex-wrap gap-3">
          <Button href="/register/">Get Started</Button>
          <Button href="/how-it-works/" variant="ghost-light">
            See How It Works
          </Button>
        </div>
      </PageHero>

      <FeatureRow
        num={1}
        icon={Activity}
        title="Pattern Recognition"
        paragraphs={[
          'Pattern recognition is one of the most practical uses of AI in trading. AI can scan large amounts of price data and pick out repeating shapes and structures that might signal a possible market setup.',
          'Instead of manually studying every chart, you get a head start. The tools point out patterns worth a closer look, so you can spend your time deciding whether they matter.',
        ]}
        bullets={['Spot possible chart patterns', 'Review setups faster', 'Use patterns as a starting point']}
      />

      <FeatureRow
        num={2}
        icon={ShieldCheck}
        tone="accent"
        soft
        title="Risk Management"
        paragraphs={[
          'Good trading is as much about protecting your capital as it is about growing it. Trader AI helps you consider potential risk before you commit, so your decisions are grounded in the full picture.',
          'By bringing risk into the conversation early, the platform helps you think about the downside, not just the upside.',
        ]}
        bullets={['Consider risk before acting', 'Understand possible downside', 'Trade with more confidence']}
      />

      <FeatureRow
        num={3}
        icon={ClipboardList}
        title="AI Stock Analysis"
        paragraphs={[
          'AI assisted analysis can help you review stock and market information in one place. Instead of jumping between sources, you get a clearer, organised view of the data that matters.',
          'The goal is simple: less time hunting for information, and more time understanding it.',
        ]}
        bullets={['Review stocks efficiently', 'Bring data together', 'Clear, organised summaries']}
      />

      <FeatureRow
        num={4}
        icon={TrendingUp}
        tone="accent"
        soft
        title="AI Trend Projection"
        paragraphs={[
          'Trend tools help you understand the possible direction of a market based on recent price behaviour. Projections are informational, never guaranteed, and always worth combining with your own research.',
          'Think of it as a compass, not a crystal ball. It points out possible directions, but the journey is still yours to plan.',
        ]}
        bullets={['Understand market direction', 'Spot momentum shifts', 'Informational, not guaranteed']}
      />

      <FeatureRow
        num={5}
        icon={Eye}
        title="Market Insights"
        paragraphs={[
          'Market insights bring together what\'s happening across markets into clear, digestible summaries. Rather than reading through endless headlines, you get the key points in one place.',
          'This helps you see the bigger picture and understand how different markets are moving, without the noise.',
        ]}
        bullets={['See the bigger picture', 'Track market themes', 'Stay informed without the noise']}
      />

      <FeatureRow
        num={6}
        icon={Search}
        tone="accent"
        soft
        title="Trading Research Tools"
        paragraphs={[
          'Research tools help you organise your analysis in one place. Keep notes, review watchlists and build a clearer picture of the markets that matter to you.',
          'Good research is the foundation of every considered decision. These tools are here to make that research easier.',
        ]}
        bullets={['Organise your research', 'Keep everything in one place', 'Review at your own pace']}
      />

      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <CtaBand
              title="Ready To Try These Tools?"
              lead="See how Trader AI brings patterns, trends and risk together into one clear, organised view."
              primary={{ label: 'Get Started', href: '/register/' }}
              secondary={{ label: 'See How It Works', href: '/how-it-works/' }}
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
