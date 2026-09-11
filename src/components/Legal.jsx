import Container from './Container';
import PageHero from './PageHero';
import Reveal from './Reveal';

export default function Legal({ crumb, title, lead, children }) {
  return (
    <>
      <PageHero crumb={crumb} title={title} lead={lead} />
      <section className="py-16 md:py-20">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-sm text-ink-500">
                <strong>Last updated:</strong> 10 September 2026
              </p>
              {children}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
