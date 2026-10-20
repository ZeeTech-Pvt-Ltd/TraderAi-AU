import Container from '../components/Container';
import Button from '../components/Button';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYou() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-accent-600">
            <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
          </div>
          <h1 className="text-3xl md:text-4xl">Thank You For Registering</h1>
          <p className="mt-4 text-lg text-ink-500">
            Your details have been received. Our team will be in touch shortly with the next steps
            to access your Trader AI account.
          </p>
          <p className="mt-4 text-ink-500">
            While you wait, take a look at how the platform works and what you can expect.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/how-it-works/">See How It Works</Button>
            <Button href="/" variant="ghost-dark">
              Back To Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
