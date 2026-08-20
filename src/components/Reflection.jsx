export default function Reflection({ reflection, index, count, value, onChange }) {
  return <main className="page-shell narrow-page">
    <header className="section-heading"><p className="eyebrow">Reflection {index + 1} of {count}</p><h1>{reflection.title}</h1><p>Take your time. This is where data becomes insight.</p></header>
    <section className="glass glass-large reflection-card">
      <ul>{reflection.prompts.map(prompt => <li key={prompt}>{prompt}</li>)}</ul>
      <label htmlFor="reflection">Write freely — bullet points are fine.</label>
      <textarea id="reflection" value={value || ''} onChange={event => onChange(index, event.target.value)} placeholder="Your reflections here…" />
    </section>
  </main>;
}
