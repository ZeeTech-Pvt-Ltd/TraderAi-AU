import Legal from '../components/Legal';

export default function Terms() {
  return (
    <Legal
      crumb="Terms And Conditions"
      title="Terms And Conditions"
      lead="These terms explain how this website may be used, your responsibilities, and the limits of the information we provide."
    >
      <h2 className="mt-10 text-2xl">1. Acceptance Of Terms</h2>
      <p className="mt-3 text-ink-500">
        By using this website, you agree to these Terms And Conditions. If you do not agree, please
        stop using the site.
      </p>

      <h2 className="mt-10 text-2xl">2. About The Platform</h2>
      <p className="mt-3 text-ink-500">
        Trader AI provides informational tools and content about AI assisted trading, market
        analysis and research. The platform is not a broker, investment adviser, or financial
        services provider, and it does not execute trades or hold funds.
      </p>

      <h2 className="mt-10 text-2xl">3. No Financial Advice</h2>
      <p className="mt-3 text-ink-500">
        Nothing on this website is personal financial advice. All content is provided for general
        information only and does not take into account your personal objectives, financial
        situation or needs.
      </p>

      <h2 className="mt-10 text-2xl">4. No Guarantees</h2>
      <p className="mt-3 text-ink-500">
        We do not guarantee profits, returns, or any particular outcome from using our platform or
        the information we provide. Trading and investing involve risk.
      </p>

      <h2 className="mt-10 text-2xl">5. Your Responsibilities</h2>
      <p className="mt-3 text-ink-500">
        You are responsible for your own trading and investment decisions, and for the risk that
        comes with them. You should do your own research and, where appropriate, seek professional
        advice before acting.
      </p>

      <h2 className="mt-10 text-2xl">6. Intellectual Property</h2>
      <p className="mt-3 text-ink-500">
        All content on this website, including text, graphics, logos and design, is owned by or
        licensed to Trader AI. You may not copy or reuse it without permission, except for personal,
        non commercial use.
      </p>

      <h2 className="mt-10 text-2xl">7. Acceptable Use</h2>
      <p className="mt-3 text-ink-500">
        You agree not to misuse this website, attempt to gain unauthorised access, or use it for any
        unlawful purpose.
      </p>

      <h2 className="mt-10 text-2xl">8. Limitation Of Liability</h2>
      <p className="mt-3 text-ink-500">
        To the extent permitted by law, Trader AI is not liable for any loss or damage arising from
        your use of this website or reliance on its content.
      </p>

      <h2 className="mt-10 text-2xl">9. Third Party Services</h2>
      <p className="mt-3 text-ink-500">
        This website may reference or link to third party services. We are not responsible for those
        services or their content.
      </p>

      <h2 className="mt-10 text-2xl">10. Changes To These Terms</h2>
      <p className="mt-3 text-ink-500">
        We may update these terms from time to time. Any changes will be posted on this page with an
        updated date.
      </p>

      <h2 className="mt-10 text-2xl">11. Governing Law</h2>
      <p className="mt-3 text-ink-500">
        These terms are governed by the laws of Australia. Any disputes are subject to the
        jurisdiction of the courts of Australia.
      </p>

      <h2 className="mt-10 text-2xl">12. Contact Us</h2>
      <p className="mt-3 text-ink-500">
        If you have any questions about these terms, please reach out through our{' '}
        <a href="/contact/" className="text-primary underline-offset-2">
          contact page
        </a>
        .
      </p>
    </Legal>
  );
}
