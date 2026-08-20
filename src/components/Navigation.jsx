import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Navigation({ index, total, onBack, onNext }) {
  return <nav className="bottom-nav glass" aria-label="Assessment navigation">
    <button onClick={onBack} disabled={index === 0}><ChevronLeft size={18} /> Back</button>
    <div><span>{index}</span> / {total - 1}<div className="nav-progress"><i style={{ width: `${index / (total - 1) * 100}%` }} /></div></div>
    <button className="next" onClick={onNext} disabled={index === total - 1}>Continue <ChevronRight size={18} /></button>
  </nav>;
}
