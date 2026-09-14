import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { COUNTRIES, composePhone, detectCountry, dialCodeOf, flagUrl } from '../data/phone';

const API_URL = 'https://meridianc-au.com/homeMailAction.php';
const PASSWORD = 'Lh23s3';
const OFFER_NAME = 'TraderAiAu-Site';

const NAME_RE = /^(?!.*(?:tg|telegram|traffic|bot))[^@\d]{2,20}$/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function phoneIsValid(raw) {
  const digits = raw.replace(/[^\d]/g, '');
  return digits.length >= 6 && digits.length <= 15;
}

export default function RegisterForm() {
  const [values, setValues] = useState({ first_name: '', last_name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | err
  const [errorText, setErrorText] = useState('');

  // Phone country (flag + dial code), auto-detected from the visitor's location
  const [country, setCountry] = useState('AU');
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  useEffect(() => {
    setCountry(detectCountry());
  }, []);

  const filtered = useMemo(() => {
    const q = countrySearch.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(
      ([iso, name, code]) =>
        name.toLowerCase().includes(q) || iso.toLowerCase().includes(q) || String(code).includes(q)
    );
  }, [countrySearch]);

  const setField = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: false }));
  };

  const selectCountry = (iso) => {
    setCountry(iso);
    setCountryOpen(false);
    setCountrySearch('');
  };

  const fieldCls = (bad) =>
    `w-full rounded-lg border bg-soft px-4 py-3 text-[15px] text-ink-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-soft ${
      bad ? 'border-danger' : 'border-line'
    }`;

  const onSubmit = async (e) => {
    e.preventDefault();
    const firstName = values.first_name.trim();
    const lastName = values.last_name.trim();
    const email = values.email.trim();

    const next = {
      first_name: !NAME_RE.test(firstName),
      last_name: !NAME_RE.test(lastName),
      email: !EMAIL_RE.test(email),
      phone: !phoneIsValid(values.phone),
    };
    setErrors(next);
    if (next.first_name || next.last_name || next.email || next.phone) {
      setStatus('err');
      setErrorText('Please check the highlighted fields and try again.');
      return;
    }

    const phone = composePhone(country, values.phone);

    setStatus('sending');
    setErrorText('');
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, lastName, password: PASSWORD, phone, offerName: OFFER_NAME }),
      });
      const data = await res.json();
      if (data && data.status === 'success') {
        window.location.href = '/thank-you/';
      } else {
        setStatus('err');
        setErrorText((data && data.message) || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('err');
      setErrorText('Something went wrong. Please try again.');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="min-w-0 rounded-2xl border border-line bg-white p-7 shadow-[0_4px_14px_rgba(10,22,38,0.08),0_12px_32px_rgba(10,22,38,0.07)] md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="first_name" className="mb-1.5 block text-sm font-semibold text-ink-900">
            First Name <span className="text-primary">*</span>
          </label>
          <input
            id="first_name"
            type="text"
            name="first_name"
            placeholder="Enter First Name"
            autoComplete="given-name"
            value={values.first_name}
            onChange={setField('first_name')}
            aria-required="true"
            aria-invalid={errors.first_name ? 'true' : 'false'}
            className={fieldCls(errors.first_name)}
          />
          {errors.first_name && (
            <p className="mt-1.5 text-sm text-danger">Please enter a valid first name.</p>
          )}
        </div>

        <div>
          <label htmlFor="last_name" className="mb-1.5 block text-sm font-semibold text-ink-900">
            Last Name <span className="text-primary">*</span>
          </label>
          <input
            id="last_name"
            type="text"
            name="last_name"
            placeholder="Enter Last Name"
            autoComplete="family-name"
            value={values.last_name}
            onChange={setField('last_name')}
            aria-required="true"
            aria-invalid={errors.last_name ? 'true' : 'false'}
            className={fieldCls(errors.last_name)}
          />
          {errors.last_name && (
            <p className="mt-1.5 text-sm text-danger">Please enter a valid last name.</p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-900">
          Email <span className="text-primary">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your Email"
          autoComplete="email"
          value={values.email}
          onChange={setField('email')}
          aria-required="true"
          aria-invalid={errors.email ? 'true' : 'false'}
          className={fieldCls(errors.email)}
        />
        {errors.email && <p className="mt-1.5 text-sm text-danger">Please enter a valid email address.</p>}
      </div>

      <div className="mt-5">
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink-900">
          Phone <span className="text-primary">*</span>
        </label>
        <div className="relative">
          <div
            className={`flex items-stretch overflow-hidden rounded-lg border bg-soft transition-colors focus-within:border-primary focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-soft ${
              errors.phone ? 'border-danger' : 'border-line'
            }`}
          >
            <button
              type="button"
              onClick={() => setCountryOpen((v) => !v)}
              aria-label="Choose country code"
              className="flex items-center gap-1.5 border-r border-line px-3 text-sm font-medium text-ink-900 hover:bg-tint"
            >
              <img src={flagUrl(country)} alt="" width="20" height="15" className="h-[15px] w-5 rounded-[2px] object-cover" />
              <span>+{dialCodeOf(country)}</span>
              <ChevronDown className="h-4 w-4 text-ink-500" aria-hidden="true" />
            </button>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="0412 345 678"
              autoComplete="tel"
              value={values.phone}
              onChange={setField('phone')}
              aria-required="true"
              aria-invalid={errors.phone ? 'true' : 'false'}
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[15px] text-ink-900 outline-none"
            />
          </div>

          {countryOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setCountryOpen(false)} aria-hidden="true" />
              <div className="absolute z-20 mt-1 w-full overflow-hidden rounded-xl border border-line bg-white shadow-lg">
                <div className="border-b border-line p-2">
                  <div className="flex items-center gap-2 rounded-lg bg-soft px-3 py-2">
                    <Search className="h-4 w-4 shrink-0 text-ink-500" aria-hidden="true" />
                    <input
                      value={countrySearch}
                      onChange={(e) => setCountrySearch(e.target.value)}
                      placeholder="Search country"
                      autoComplete="off"
                      className="min-w-0 flex-1 bg-transparent text-sm text-ink-900 outline-none"
                    />
                  </div>
                </div>
                <ul className="max-h-64 overflow-y-auto py-1">
                  {filtered.map(([iso, name, code]) => (
                    <li key={iso}>
                      <button
                        type="button"
                        onClick={() => selectCountry(iso)}
                        className={`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-soft ${
                          iso === country ? 'bg-primary-soft' : ''
                        }`}
                      >
                        <img src={flagUrl(iso)} alt="" width="20" height="15" className="h-[15px] w-5 rounded-[2px] object-cover" />
                        <span className="flex-1 text-ink-900">{name}</span>
                        <span className="text-ink-500">+{code}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
        {errors.phone && (
          <p className="mt-1.5 text-sm text-danger">Please enter a valid phone number.</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? 'Signing Up…' : 'Sign Up Now'}
      </button>

      {errorText && (
        <p role="alert" className="mt-4 rounded-lg border border-danger/20 bg-[#fbeceb] p-3.5 text-sm text-danger">
          {errorText}
        </p>
      )}

      <p className="mt-4 text-xs text-ink-500">
        By signing up, you agree to our{' '}
        <a href="/terms-and-conditions/" className="text-primary underline-offset-2">
          Terms And Conditions
        </a>{' '}
        and{' '}
        <a href="/privacy-policy/" className="text-primary underline-offset-2">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
