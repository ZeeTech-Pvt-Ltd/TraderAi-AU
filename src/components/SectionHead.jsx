export default function SectionHead({ title, lead, align = 'center', className = '' }) {
  const centered = align !== 'left';
  return (
    <div className={`mb-12 max-w-2xl ${centered ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-lg text-ink-500">{lead}</p>}
    </div>
  );
}
