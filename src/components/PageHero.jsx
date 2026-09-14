import Container from './Container';

export default function PageHero({ title, lead, children }) {
  return (
    <section
      className="flex min-h-[480px] items-center border-b border-white/10 bg-navy-900"
      style={{
        backgroundImage: 'radial-gradient(900px 400px at 80% -10%, rgba(23,105,224,0.2), transparent 60%)',
      }}
    >
      <Container>
        <h1 className="max-w-[22ch] text-4xl text-ondark md:text-5xl">{title}</h1>
        {lead && <p className="mt-4 max-w-[46ch] text-lg text-ondark-muted">{lead}</p>}
        {children}
      </Container>
    </section>
  );
}
