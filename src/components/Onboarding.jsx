import { ArrowRight, Database, Eye, LockKeyhole } from 'lucide-react';

export default function Onboarding({ onComplete }) {
  return <main className="page-shell onboarding">
    <section className="glass glass-large onboarding-hero">
      <p className="eyebrow">Your context belongs to you</p>
      <h1>Linc(d) does not assume it knows you.</h1>
      <p className="onboarding-lede">It learns with your participation, shows its sources, and asks before turning information into personal context.</p>
      <div className="principle-grid">
        <article><Database size={20} /><h2>You bring the context</h2><p>Assessments, documents, archives, connected services, or simply what you choose to say.</p></article>
        <article><Eye size={20} /><h2>You review the meaning</h2><p>Imported material creates proposals—not silent claims about who you are.</p></article>
        <article><LockKeyhole size={20} /><h2>You set every boundary</h2><p>Context is not shared with an AI unless a Session Contract allows it.</p></article>
      </div>
      <label className="acknowledgement"><input type="checkbox" id="setup-acknowledgement" /><span>I understand that Linc(d) needs some setting up, and that I control what it learns, remembers, and shares.</span></label>
      <button className="primary-button" onClick={() => {
        const checkbox = document.getElementById('setup-acknowledgement');
        if (checkbox.checked) onComplete(); else checkbox.focus();
      }}>Enter my Linc(d) <ArrowRight size={18} /></button>
    </section>
  </main>;
}
