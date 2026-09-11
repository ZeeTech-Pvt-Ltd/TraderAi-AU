import Button from './Button';

export default function CtaBand({ title, lead, primary = { label: 'Get Started', href: '/register/' }, secondary }) {
  return (
    <div
      className="relative overflow-hidden rounded-[28px] bg-navy-800 px-6 py-12 text-center md:px-16 md:py-16"
      style={{
        backgroundImage:
          'radial-gradient(720px 320px at 80% 0%, rgba(23,105,224,0.3), transparent 60%), radial-gradient(640px 300px at 12% 100%, rgba(15,167,158,0.22), transparent 55%)',
      }}
    >
      <h2 className="mx-auto max-w-[22ch] text-3xl text-ondark md:text-4xl">{title}</h2>
      {lead && <p className="mx-auto mt-4 max-w-[46ch] text-ondark-muted">{lead}</p>}
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button href={primary.href} size="lg" icon>
          {primary.label}
        </Button>
        {secondary && (
          <Button href={secondary.href} variant="ghost-light" size="lg">
            {secondary.label}
          </Button>
        )}
      </div>
    </div>
  );
}
