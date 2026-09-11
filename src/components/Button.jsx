import { ArrowRight } from 'lucide-react';

const variants = {
  primary:
    'bg-primary text-white shadow-[0_6px_18px_rgba(23,105,224,0.28)] hover:bg-primary-600 hover:shadow-[0_8px_22px_rgba(23,105,224,0.34)]',
  teal: 'bg-accent text-white shadow-[0_6px_18px_rgba(15,167,158,0.26)] hover:bg-accent-600',
  'ghost-light':
    'border border-white/15 text-ondark hover:bg-white/5 hover:border-ondark-muted',
  'ghost-dark':
    'border border-line-strong text-ink-900 hover:bg-tint hover:border-ink-500',
};

const sizes = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-5 py-3 text-[15px]',
  lg: 'px-6 py-4 text-base',
};

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  children,
  ...rest
}) {
  const cls = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-semibold no-underline transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      {children}
      {icon && <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
