import { useState } from 'react';
import Container from '../components/Container';
import SectionHead from '../components/SectionHead';
import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import Callout from '../components/Callout';
import Checklist from '../components/Checklist';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // { type: 'ok' | 'err', text }

  const setField = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: false }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {
      name: values.name.trim().length < 2,
      email: !EMAIL_RE.test(values.email.trim()),
      message: values.message.trim().length < 10,
    };
    setErrors(next);
    if (next.name || next.email || next.message) {
      setStatus({ type: 'err', text: 'Please check the highlighted fields and try again.' });
      return;
    }
    // Client-side only. Point this at a real endpoint or inbox when ready.
    setStatus({ type: 'ok', text: "Thanks for your message. We've received your enquiry and will get back to you soon." });
    setValues({ name: '', email: '', message: '' });
  };

  const fieldCls = (bad) =>
    `w-full rounded-lg border bg-soft px-4 py-3 text-[15px] text-ink-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-soft ${
      bad ? 'border-danger' : 'border-line'
    }`;

  return (
    <>
      <PageHero
        crumb="Contact"
        title="Get Started With Trader AI"
        lead="Tell us a little about what you're looking for and our team will be in touch. No commitment required."
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div>
                <SectionHead eyebrow="How To Reach Us" title="We're Here To Help" align="left" className="mb-4" />
                <p className="text-ink-500">
                  Whether you want to learn more about the platform, ask a question about AI trading,
                  or find out how to get started, we'd be glad to hear from you.
                </p>
                <Checklist
                  items={[
                    'No obligation or pressure to commit',
                    'We only use your details to respond to your enquiry',
                    <>
                      Prefer to browse first? Start with the{' '}
                      <a href="/faq/" className="text-primary underline-offset-2">
                        FAQ
                      </a>
                    </>,
                  ]}
                />
              </div>
            </Reveal>

            <Reveal>
              <form
                onSubmit={onSubmit}
                noValidate
                className="rounded-2xl border border-line bg-white p-7 shadow-[0_4px_14px_rgba(10,22,38,0.08),0_12px_32px_rgba(10,22,38,0.07)] md:p-8"
              >
                <div className="mb-5">
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink-900">
                    Full name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={values.name}
                    onChange={setField('name')}
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    className={fieldCls(errors.name)}
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-danger">Please enter your name.</p>}
                </div>

                <div className="mb-5">
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-900">
                    Email address <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={setField('email')}
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    className={fieldCls(errors.email)}
                  />
                  {errors.email && <p className="mt-1.5 text-sm text-danger">Please enter a valid email address.</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-900">
                    How can we help? <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us what you'd like to know about Trader AI"
                    value={values.message}
                    onChange={setField('message')}
                    aria-required="true"
                    aria-invalid={errors.message ? 'true' : 'false'}
                    className={`${fieldCls(errors.message)} resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-danger">
                      Please include a short message (at least 10 characters).
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-primary-600"
                >
                  Send Message
                </button>

                {status && (
                  <p
                    role="status"
                    aria-live="polite"
                    className={`mt-4 rounded-lg border p-3.5 text-sm ${
                      status.type === 'ok'
                        ? 'border-accent/25 bg-accent-soft text-accent-600'
                        : 'border-danger/20 bg-[#fbeceb] text-danger'
                    }`}
                  >
                    {status.text}
                  </p>
                )}

                <p className="mt-4 text-xs text-ink-500">
                  Your details are only used to respond to your enquiry. See our{' '}
                  <a href="/privacy-policy/" className="text-primary underline-offset-2">
                    Privacy Policy
                  </a>{' '}
                  for more information.
                </p>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-soft py-12">
        <Container>
          <Reveal>
            <Callout>
              <p>
                <strong className="text-ink-900">Before you get started,</strong> it's worth reviewing
                the{' '}
                <a href="/risk-disclaimer/" className="text-primary underline-offset-2">
                  Risk Disclaimer
                </a>
                . Trading and investing involve risk, and it's important you understand that before
                making any decisions.
              </p>
            </Callout>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
