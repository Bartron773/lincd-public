import { Check, Pencil, ShieldCheck, Trash2, X } from 'lucide-react';
import { CONTEXT_CATEGORIES } from '../data/os';
import { contextSummary } from '../lib/context';

export default function ContextCore({ items, onUpdate, onDelete }) {
  const summary = contextSummary(items);
  const pending = items.filter(item => item.status === 'pending');
  const confirmed = items.filter(item => item.status === 'confirmed');
  const rejected = items.filter(item => item.status === 'rejected').length;
  return <main className="page-shell os-page">
    <header className="os-heading"><div><p className="eyebrow">Your living self-map</p><h1>ContextCore</h1><p>Nothing becomes personal context until you confirm it.</p></div><div className="context-state"><span>{summary.stage}</span><b>{confirmed.length} confirmed · {pending.length} awaiting review</b></div></header>
    <div className="context-tabs"><span className="active">Awaiting review <b>{pending.length}</b></span><span>Confirmed <b>{confirmed.length}</b></span><span>Dismissed <b>{rejected}</b></span></div>
    {!items.length && <section className="glass empty-state"><ShieldCheck size={28} /><h2>No context proposals yet</h2><p>Complete part of the assessment or bring in a source. Linc(d) will place interpretations here for your review.</p></section>}
    {pending.map(item => <ContextCard item={item} onUpdate={onUpdate} onDelete={onDelete} key={item.id} />)}
    {!!confirmed.length && <section className="confirmed-section"><h2>Confirmed context</h2>{confirmed.map(item => <ContextCard item={item} onUpdate={onUpdate} onDelete={onDelete} key={item.id} />)}</section>}
  </main>;
}

function ContextCard({ item, onUpdate, onDelete }) {
  const category = CONTEXT_CATEGORIES[item.category] || CONTEXT_CATEGORIES.reflection;
  return <article className={`glass context-card ${item.status}`}>
    <div className="context-card-top"><span className="category-pill" style={{ '--category': category.color }}>{category.label}</span><span>{Math.round(item.confidence * 100)}% confidence</span></div>
    <p>{item.statement}</p>
    <div className="context-source"><span>Source</span><b>{item.source}</b></div>
    <div className="context-actions">
      {item.status === 'pending' && <><button className="approve" onClick={() => onUpdate(item.id, { status: 'confirmed' })}><Check size={16} /> Confirm</button><button onClick={() => onUpdate(item.id, { status: 'rejected' })}><X size={16} /> Not me</button></>}
      {item.status === 'confirmed' && <button onClick={() => onUpdate(item.id, { status: 'pending' })}><Pencil size={15} /> Review again</button>}
      <button className="icon-action" aria-label="Delete context item" onClick={() => onDelete(item.id)}><Trash2 size={15} /></button>
    </div>
  </article>;
}
