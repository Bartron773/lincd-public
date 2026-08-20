import { useState } from 'react';
import { Cable, ChevronDown, FileUp, Lightbulb, RefreshCw, Shield, Unplug } from 'lucide-react';
import { INTAKE_IDEAS } from '../data/os';

export default function Connections({ connections, onUpdate }) {
  const [openIdea, setOpenIdea] = useState('reading');
  return <main className="page-shell os-page">
    <header className="os-heading"><div><p className="eyebrow">Bring your world</p><h1>Sources & connections</h1><p>Your taste is context too—what you read, watch, hear, save, make, and return to.</p></div><button className="secondary-button"><FileUp size={17} /> Choose files</button></header>
    <section className="glass intake-guide">
      <div className="intake-intro"><p className="kicker"><Lightbulb size={15} /> Not sure what to bring?</p><h2>Start with the things that feel most like you.</h2><p>Exports and uploads are welcome. Linc(d) reviews them in a Context Inbox before proposing anything about you.</p></div>
      <div className="intake-grid">{INTAKE_IDEAS.map(idea => <article className={openIdea === idea.id ? 'open' : ''} key={idea.id}>
        <button className="intake-heading" onClick={() => setOpenIdea(openIdea === idea.id ? null : idea.id)}><span>{idea.icon}</span><div><b>{idea.title}</b><small>{idea.description}</small></div><ChevronDown size={17} /></button>
        {openIdea === idea.id && <div className="intake-details"><div><b>Good things to upload</b><div className="idea-chips">{idea.examples.map(example => <span key={example}>{example}</span>)}</div></div><div><b>Context it may suggest</b><ul>{idea.signals.map(signal => <li key={signal}>{signal}</li>)}</ul></div><div><b>Think</b><p>{idea.names.join(' · ')}</p></div><button className="mini-upload"><FileUp size={15} /> Add something from this category</button></div>}
      </article>)}</div>
      <p className="intake-footnote">A screenshot, exported list, folder of PDFs, playlist file, or plain text note is enough to begin. Perfect formatting is not required.</p>
    </section>
    <div className="connection-section-heading"><div><p className="kicker">Connection receipts</p><h2>Sources you can manage</h2></div><p>Live authorization will be added service by service. These controls are prototypes and currently send nothing.</p></div>
    <div className="connection-list">{connections.map(connection => <article className="glass connection-receipt" key={connection.id}>
      <header><div className="connection-icon">{connection.initials}</div><div><h2>{connection.name}</h2><span className={connection.status === 'Connected' ? 'connected' : ''}>{connection.status}</span></div><button className="receipt-menu" aria-label={`More options for ${connection.name}`}><ChevronDown size={18} /></button></header>
      <dl><div><dt>Access</dt><dd>{connection.access}</dd></div><div><dt>Purpose</dt><dd>{connection.purpose}</dd></div><div><dt>Sync</dt><dd>{connection.sync}</dd></div><div><dt>Last accessed</dt><dd>{connection.lastAccessed}</dd></div><div><dt>Context created</dt><dd>{connection.confirmed} confirmed, {connection.pending} awaiting review</dd></div><div className="ai-boundary"><dt><Shield size={14} /> AI access</dt><dd>{connection.aiAccess}</dd></div></dl>
      <footer>{connection.status === 'Connected' ? <><button><RefreshCw size={15} /> Sync now</button><button onClick={() => onUpdate(connection.id, { status: 'Not connected', lastAccessed: 'Disconnected' })}><Unplug size={15} /> Disconnect</button></> : <button className="connect-button" onClick={() => onUpdate(connection.id, { status: 'Connected', lastAccessed: 'Just now' })}><Cable size={15} /> {connection.id === 'archive-import' ? 'Choose files' : `Connect ${connection.name}`}</button>}<small>Prototype connection—no external data is requested yet.</small></footer>
    </article>)}</div>
  </main>;
}
