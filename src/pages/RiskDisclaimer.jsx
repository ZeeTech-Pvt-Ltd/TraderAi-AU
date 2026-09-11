import Legal from '../components/Legal';

export default function RiskDisclaimer() {
  return (
    <Legal
      crumb="Risk Disclaimer"
      title="Risk Disclaimer"
      lead="Trading and investing involve risk. Please take a moment to understand what that means before using this website."
    >
      <h2 className="mt-10 text-2xl">Trading Involves Risk</h2>
      <p className="mt-3 text-ink-500">
        Trading and investing in financial markets involve risk, including the possible loss of all
        of the money you put in. The value of investments can go down as well as up, and you may get
        back less than you invested.
      </p>

      <h2 className="mt-10 text-2xl">Past Performance Does Not Guarantee Future Results</h2>
      <p className="mt-3 text-ink-500">
        Any past performance shown or discussed on this website is not a reliable indicator of future
        performance. Markets change, and historical results should never be treated as a promise of
        what will happen next.
      </p>

      <h2 className="mt-10 text-2xl">AI Generated Information Is Not Guaranteed Advice</h2>
      <p className="mt-3 text-ink-500">
        AI generated information, insights and signals on this website are provided for informational
        purposes only. They are not guaranteed to be accurate, complete, or suitable for your
        situation, and they should not be treated as financial advice.
      </p>

      <h2 className="mt-10 text-2xl">Do Your Own Research</h2>
      <p className="mt-3 text-ink-500">
        You should always conduct your own research before making any financial decision. The tools
        and content we provide are a starting point, not a substitute for your own judgement.
      </p>

      <h2 className="mt-10 text-2xl">Consider Your Financial Circumstances</h2>
      <p className="mt-3 text-ink-500">
        Before trading or investing, consider your own financial situation, objectives and tolerance
        for risk. Never risk money you cannot afford to lose.
      </p>

      <h2 className="mt-10 text-2xl">Professional Advice May Be Appropriate</h2>
      <p className="mt-3 text-ink-500">
        If you are unsure whether a particular investment or trading strategy is right for you,
        consider seeking advice from a licensed financial adviser or other qualified professional.
      </p>

      <h2 className="mt-10 text-2xl">No Guarantees</h2>
      <p className="mt-3 text-ink-500">
        Trader AI does not guarantee profits, returns, or any particular outcome. No automated tool
        or AI system can remove the risk that comes with financial markets.
      </p>

      <h2 className="mt-10 text-2xl">Questions</h2>
      <p className="mt-3 text-ink-500">
        If you have any questions about this disclaimer, please reach out through our{' '}
        <a href="/contact/" className="text-primary underline-offset-2">
          contact page
        </a>
        .
      </p>
    </Legal>
  );
}
