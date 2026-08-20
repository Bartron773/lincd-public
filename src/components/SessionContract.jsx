import { Bot, Check, FileText, LockKeyhole, Settings2, Wrench } from 'lucide-react';

const MODES = ['Thoughtful', 'Quick', 'Creative', 'Private'];

export default function SessionContract({ contract, onChange }) {
  const update = patch => onChange({ ...contract, ...patch });
  return <main className="page-shell os-page session-page">
    <header className="os-heading"><div><p className="eyebrow">Set the terms before AI enters</p><h1>Session Contract</h1><p>This agreement controls one AI interaction. Nothing receives permanent access.</p></div><div className="contract-status"><Check size={16} /> Ready</div></header>
    <section className="glass contract-card">
      <ContractRow icon={Settings2} title="Mode" description="How Linc(d) should approach this session"><div className="mode-picker">{MODES.map(mode => <button className={contract.mode === mode ? 'active' : ''} onClick={() => update({ mode })} key={mode}>{mode}</button>)}</div></ContractRow>
      <ContractRow icon={Bot} title="Model" description="Who answers"><select value={contract.model} onChange={event => update({ model: event.target.value })}><option>Best available reasoning model</option><option>Fast everyday model</option><option>Local private model</option></select></ContractRow>
      <ContractRow icon={FileText} title="Context access" description="What Linc(d) may assemble"><select value={contract.contextAccess} onChange={event => update({ contextAccess: event.target.value })}><option>ContextCore + current project</option><option>ContextCore only</option><option>Current project only</option><option>No personal context</option></select></ContractRow>
      <ContractRow icon={LockKeyhole} title="Memory write access" description="What may be remembered"><select value={contract.memoryAccess} onChange={event => update({ memoryAccess: event.target.value })}><option>Ask first</option><option>Do not remember</option><option>Save approved insights</option></select></ContractRow>
      <ContractRow icon={Wrench} title="Tools" description="Capabilities available"><div className="tool-toggles">{['Documents', 'Calendar', 'Web', 'Connected apps'].map(tool => <button className={contract.tools.includes(tool) ? 'active' : ''} onClick={() => update({ tools: contract.tools.includes(tool) ? contract.tools.filter(item => item !== tool) : [...contract.tools, tool] })} key={tool}>{tool}</button>)}</div></ContractRow>
      <div className="contract-boundary"><LockKeyhole size={18} /><div><b>Privacy boundary</b><span>{contract.privacy}</span></div></div>
    </section>
    <button className="primary-button contract-start">Start with this contract</button>
    <p className="prototype-note">AI conversation wiring comes after the permission layer; this milestone saves and displays the contract locally.</p>
  </main>;
}

function ContractRow({ icon: Icon, title, description, children }) {
  return <div className="contract-row"><Icon size={20} /><div className="contract-label"><b>{title}</b><span>{description}</span></div><div className="contract-control">{children}</div></div>;
}
