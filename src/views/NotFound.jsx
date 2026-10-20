import Container from '../components/Container';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="text-center">
          <p className="font-display text-7xl font-bold leading-none text-primary md:text-9xl" aria-hidden="true">
            404
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl">Page Not Found</h1>
          <p className="mx-auto mt-4 max-w-[42ch] text-lg text-ink-500">
            The page you're looking for might have moved or no longer exists. Let's get you back on
            track.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="/">Back To Home</Button>
            <Button href="/faq/" variant="ghost-dark">
              Visit The FAQ
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
