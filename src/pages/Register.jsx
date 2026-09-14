import Container from '../components/Container';
import PageHero from '../components/PageHero';
import Callout from '../components/Callout';
import Checklist from '../components/Checklist';
import RegisterForm from '../components/RegisterForm';

export default function Register() {
  return (
    <>
      <PageHero
        crumb="Register"
        title="Create Your Trader AI Account"
        lead="Enter your details below to get started with the Trader AI platform. Our team will be in touch with the next steps."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl">Start Your Research Journey</h2>
              <p className="mt-4 text-ink-500">
                Registration is quick and gives you access to AI assisted tools for market analysis,
                pattern recognition and trend insights.
              </p>
              <Checklist
                items={[
                  'No payment required to register',
                  'Your details are used only to set up your account',
                  'Plain language tools built for Australian investors',
                ]}
              />
              <div className="mt-8">
                <Callout variant="caution">
                  <p>
                    <strong className="text-ink-900">Trading involves risk.</strong> The value of
                    investments can go down as well as up, and you could lose the money you put in.
                    Read our{' '}
                    <a href="/risk-disclaimer/" className="text-primary underline-offset-2">
                      Risk Disclaimer
                    </a>{' '}
                    before you start.
                  </p>
                </Callout>
              </div>
            </div>

            <RegisterForm />
          </div>
        </Container>
      </section>
    </>
  );
}
