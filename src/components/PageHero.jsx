import Container from './Container';

export default function PageHero({ crumb, title, lead, children }) {
  return (
    <section
      className="border-b border-white/10 bg-navy-900 py-14 md:py-20"
      style={{
        backgroundImage: 'radial-gradient(900px 400px at 80% -10%, rgba(23,105,224,0.2), transparent 60%)',
      }}
    >
      <Container>
        <nav className="mb-4 text-sm text-ondark-muted" aria-label="Breadcrumb">
          <a href="/" className="text-ondark-muted no-underline hover:text-ondark">
            Home
          </a>
          <span className="mx-1.5 opacity-60">/</span>
          <span aria-current="page">{crumb}</span>
        </nav>
        <h1 className="max-w-[22ch] text-4xl text-ondark md:text-5xl">{title}</h1>
        {lead && <p className="mt-4 max-w-[46ch] text-lg text-ondark-muted">{lead}</p>}
        {children}
      </Container>
    </section>
  );
}
