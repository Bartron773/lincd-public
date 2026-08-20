import { ArrowRight, BrainCircuit, Cable, CircleUserRound, Sparkles } from 'lucide-react';
import { contextSummary } from '../lib/context';

export default function Dashboard({ contextItems, connections, onNavigate }) {
  const summary = contextSummary(contextItems);
  return <main className="page-shell os-page">
    <header className="os-heading"><div><p className="eyebrow"><Sparkles size={14} /> Personal context system</p><h1>Good to see you.</h1><p>Linc(d) is local, learning, and waiting for your direction.</p></div><div className="context-state"><span>{summary.stage}</span><b>{summary.confirmed} confirmed · {summary.pending} to review</b></div></header>
    <section className="dashboard-grid">
      <article className="glass dashboard-feature"><BrainCircuit size={24} /><p className="kicker">ContextCore</p><h2>Build a trustworthy picture of you.</h2><p>Review proposed patterns before they become part of your personal context.</p><button className="text-button" onClick={() => onNavigate('context')}>Review context <ArrowRight size={16} /></button></article>
      <article className="glass dashboard-card"><Cable size={22} /><h2>Sources</h2><strong>{connections.filter(item => item.status === 'Connected').length}</strong><p>connected services</p><button className="text-button" onClick={() => onNavigate('connections')}>Manage connections</button></article>
      <article className="glass dashboard-card"><CircleUserRound size={22} /><h2>Assessment</h2><strong>{contextItems.filter(item => item.source.includes('Assessment') || item.source.includes('Strengths')).length}</strong><p>context proposals generated</p><button className="text-button" onClick={() => onNavigate('assessment')}>Continue assessment</button></article>
    </section>
    <section className="glass architecture-strip"><div><span>ContextCore</span><small>who you are</small></div><i>+</i><div><span>Personal memory</span><small>what happened</small></div><i>+</i><div><span>Current project</span><small>what matters now</small></div><b>→</b><div className="highlight"><span>Approved context packet</span><small>what this session may use</small></div></section>
  </main>;
}
