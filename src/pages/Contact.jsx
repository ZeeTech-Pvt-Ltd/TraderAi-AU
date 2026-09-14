import Container from '../components/Container';
import Reveal from '../components/Reveal';
import RegisterForm from '../components/RegisterForm';

export default function Contact() {
  return (
    <>
      <section
        className="relative overflow-hidden border-b border-white/10 bg-navy-900 text-ondark"
        style={{
          backgroundImage:
            'radial-gradient(900px 400px at 80% -10%, rgba(23,105,224,0.22), transparent 60%), radial-gradient(700px 360px at 5% 110%, rgba(15,167,158,0.16), transparent 55%)',
        }}
      >
        <Container>
          <div className="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className="text-4xl text-ondark md:text-5xl">Get Started With Trader AI</h1>
              <p className="mt-4 max-w-[46ch] text-lg text-ondark-muted">
                Enter your details below and our team will be in touch with the next steps to access
                the platform.
              </p>
            </div>
            <img
              src="/assets/img/traderimg1.png"
              alt="Trader AI platform illustration"
              width={1254}
              height={1254}
              loading="eager"
              decoding="async"
              className="h-auto w-full max-w-[420px]"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-xl">
            <Reveal>
              <div className="text-center">
                <h2 className="text-3xl">Create Your Free Account</h2>
                <p className="mt-3 text-ink-500">
                  Quick to set up. No payment required, and your details are only used to get your
                  account ready.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="mt-8">
                <RegisterForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
