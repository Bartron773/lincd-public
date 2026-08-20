import { ArrowRight, Clock3, Sparkles } from 'lucide-react';

export default function Intro({ onBegin }) {
  return <main className="intro page-shell">
    <section className="hero glass glass-large">
      <div className="eyebrow"><Sparkles size={15} /> Guided self-map</div>
      <h1>Comprehensive<br /><span>Self-Assessment</span></h1>
      <p className="lede">Five frameworks. One complete portrait.</p>
      <p>This assessment combines five research-backed frameworks into a single, comprehensive self-map. It reveals how you think, feel, work, and connect.</p>
      <button className="primary-button" onClick={onBegin}>Begin assessment <ArrowRight size={18} /></button>
    </section>
    <section className="intro-grid">
      <article className="glass">
        <p className="kicker">The five assessments</p>
        <ol className="framework-list">
          <li><b>VIA Character Strengths</b><span>Your core values and virtues</span></li>
          <li><b>Big Five Personality</b><span>How you process the world</span></li>
          <li><b>Emotional Intelligence (EQ-i)</b><span>How you understand and manage emotion</span></li>
          <li><b>Executive Function</b><span>How your brain organizes, plans, and executes</span></li>
          <li><b>CliftonStrengths</b><span>What you naturally do best</span></li>
        </ol>
      </article>
      <article className="glass instructions">
        <p className="kicker"><Clock3 size={16} /> 30–45 minutes</p>
        <h2>How to complete it</h2>
        <ul>
          <li>Find a quiet space and answer honestly.</li>
          <li>Rate each statement from 0 (not true) to 3 (very true).</li>
          <li>Trust your first instinct—don’t overthink.</li>
          <li>There are no wrong answers, only honest ones.</li>
        </ul>
      </article>
    </section>
  </main>;
}
