import { Download } from 'lucide-react';
import { ASSESSMENTS, REFLECTION_PROMPTS } from '../data/assessments';
import { calculateScores, getBigFiveProfile, getTopStrengths } from '../lib/assessment';

export default function Results({ responses, reflections, onViewContext }) {
  const scores = calculateScores(responses);
  const viaTop = getTopStrengths(responses, 'via', 7);
  const cliftonTop = getTopStrengths(responses, 'clifton', 10);
  const profile = getBigFiveProfile(scores);
  return <main className="page-shell results-page">
    <header className="section-heading"><p className="eyebrow">Your complete portrait</p><h1>Your Results</h1><p>This is your cognitive and emotional architecture.</p></header>
    <div className="results-grid">
      <section className="glass result-card"><h2 style={{ color: ASSESSMENTS.via.color }}>VIA Character Strengths</h2><p className="kicker">Your top strengths</p><ol>{viaTop.map(({ item, score }) => <li key={item}><span>{item}</span><b>{score}/3</b></li>)}</ol>{!viaTop.length && <p className="muted">Complete this section to reveal your strengths.</p>}</section>
      <section className="glass result-card"><h2 style={{ color: ASSESSMENTS.bigFive.color }}>Big Five Profile</h2><div className="profile-list">{Object.entries(profile).map(([trait, level]) => <div key={trait}><span>{trait}</span><b data-level={level}>{level}</b></div>)}</div></section>
    </div>
    <section className="glass result-card score-card"><h2>Section Scores</h2>{Object.entries(ASSESSMENTS).map(([key, assessment]) => <div className="score-group" key={key}><h3 style={{ color: assessment.color }}>{assessment.title}</h3>{Object.entries(scores[key].sections).map(([section, data]) => <div className="score-row" key={section}><span>{section}</span><div className="progress"><i style={{ width: `${data.percentage}%`, background: assessment.color }} /></div><b>{data.percentage.toFixed(1)}%</b></div>)}</div>)}</section>
    <section className="glass result-card"><h2 style={{ color: ASSESSMENTS.clifton.color }}>CliftonStrengths Top Talents</h2><ol>{cliftonTop.map(({ item, score }) => <li key={item}><span>{item.split(':')[0]}</span><b>{score}/3</b></li>)}</ol>{!cliftonTop.length && <p className="muted">Complete this section to reveal your talents.</p>}</section>
    {Object.keys(reflections).length > 0 && <section className="glass result-card"><h2>Your Reflections</h2>{REFLECTION_PROMPTS.map((prompt, index) => reflections[index] && <article className="reflection-result" key={prompt.title}><h3>{prompt.title}</h3><p>{reflections[index]}</p></article>)}</section>}
    <div className="result-actions"><button className="primary-button" onClick={onViewContext}>Review ContextCore proposals</button><button className="secondary-button" onClick={() => window.print()}><Download size={18} /> Print / Save as PDF</button></div>
  </main>;
}
