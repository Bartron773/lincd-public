import { BrainCircuit, Cable, ClipboardList, Home, SlidersHorizontal } from 'lucide-react';

const items = [
  ['home', 'Home', Home],
  ['context', 'ContextCore', BrainCircuit],
  ['connections', 'Connections', Cable],
  ['session', 'Session', SlidersHorizontal],
  ['assessment', 'Assessment', ClipboardList],
];

export default function OSNav({ view, onChange }) {
  return <nav className="os-nav glass" aria-label="Linc(d) sections">{items.map(([id, label, Icon]) => <button className={view === id ? 'active' : ''} onClick={() => onChange(id)} key={id}><Icon size={18} /><span>{label}</span></button>)}</nav>;
}
