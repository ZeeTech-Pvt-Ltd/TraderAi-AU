import Legal from '../components/Legal';

export default function PrivacyPolicy() {
  return (
    <Legal
      crumb="Privacy Policy"
      title="Privacy Policy"
      lead="This policy explains what information we collect, how we use it, and the choices you have about your personal data."
    >
      <h2 className="mt-10 text-2xl">1. Who We Are</h2>
      <p className="mt-3 text-ink-500">
        Trader AI operates this website (traderai-au.com). This Privacy Policy explains how we
        handle information when you visit our site or get in touch with us. Registered business
        details are available on request through our{' '}
        <a href="/contact/" className="text-primary underline-offset-2">
          contact page
        </a>
        .
      </p>

      <h2 className="mt-10 text-2xl">2. Information We Collect</h2>
      <p className="mt-3 text-ink-500">We aim to collect as little information as possible. The information we may collect includes:</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink-500">
        <li>
          <strong>Contact details</strong> you choose to provide through our contact form, such as
          your name and email address.
        </li>
        <li>
          <strong>Usage information</strong> collected automatically, such as your device type,
          browser, approximate location, and the pages you visit.
        </li>
        <li>
          <strong>Cookies and similar technologies</strong> that help us understand how the site is
          used.
        </li>
      </ul>

      <h2 className="mt-10 text-2xl">3. How We Use Your Information</h2>
      <p className="mt-3 text-ink-500">We use the information we collect to:</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink-500">
        <li>Respond to your enquiries and messages.</li>
        <li>Improve the website and understand how it is used.</li>
        <li>Maintain the security and performance of the site.</li>
      </ul>

      <h2 className="mt-10 text-2xl">4. Cookies</h2>
      <p className="mt-3 text-ink-500">
        We use a small number of cookies to help the site function and to understand how visitors use
        it. You can control or block cookies through your browser settings. Blocking cookies may
        affect some features of the site.
      </p>

      <h2 className="mt-10 text-2xl">5. Sharing Your Information</h2>
      <p className="mt-3 text-ink-500">
        We do not sell your personal information. We may share information with trusted service
        providers who help us run the site, and where we are required to do so by law. We do not
        share your contact details with third parties for their own marketing.
      </p>

      <h2 className="mt-10 text-2xl">6. Data Security</h2>
      <p className="mt-3 text-ink-500">
        We take reasonable steps to protect your information from unauthorised access or loss.
        However, no method of transmission over the internet is completely secure, and we cannot
        guarantee absolute security.
      </p>

      <h2 className="mt-10 text-2xl">7. Data Retention</h2>
      <p className="mt-3 text-ink-500">
        We keep personal information only for as long as it is needed for the purposes described in
        this policy, or as required by law.
      </p>

      <h2 className="mt-10 text-2xl">8. Your Rights</h2>
      <p className="mt-3 text-ink-500">
        Depending on where you live, you may have the right to access, correct, or delete your
        personal information, or to object to how it is used. To make a request, contact us through
        our{' '}
        <a href="/contact/" className="text-primary underline-offset-2">
          contact page
        </a>
        .
      </p>

      <h2 className="mt-10 text-2xl">9. Third Party Links</h2>
      <p className="mt-3 text-ink-500">
        This website may link to external sites. We are not responsible for the privacy practices of
        those sites, and we encourage you to read their policies.
      </p>

      <h2 className="mt-10 text-2xl">10. Changes To This Policy</h2>
      <p className="mt-3 text-ink-500">
        We may update this policy from time to time. Any changes will be posted on this page with an
        updated date.
      </p>

      <h2 className="mt-10 text-2xl">11. Contact Us</h2>
      <p className="mt-3 text-ink-500">
        If you have any questions about this policy, please reach out through our{' '}
        <a href="/contact/" className="text-primary underline-offset-2">
          contact page
        </a>
        .
      </p>
    </Legal>
  );
}
