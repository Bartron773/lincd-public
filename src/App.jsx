import { useEffect, useMemo, useState } from 'react';
import { ASSESSMENTS, REFLECTION_PROMPTS } from './data/assessments';
import { DEFAULT_CONNECTIONS, DEFAULT_SESSION_CONTRACT } from './data/os';
import { createContextProposals } from './lib/context';
import { loadProgress, saveProgress } from './lib/storage';
import Assessment from './components/Assessment';
import Brand from './components/Brand';
import Connections from './components/Connections';
import ContextCore from './components/ContextCore';
import Dashboard from './components/Dashboard';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import Onboarding from './components/Onboarding';
import OSNav from './components/OSNav';
import Reflection from './components/Reflection';
import Results from './components/Results';
import SessionContract from './components/SessionContract';

const assessmentKeys = Object.keys(ASSESSMENTS);
const assessmentStages = ['intro', ...assessmentKeys, ...REFLECTION_PROMPTS.map((_, index) => `reflection-${index}`), 'results'];

function mergeConnections(savedConnections = []) {
  const savedById = new Map(savedConnections.map(connection => [connection.id, connection]));
  return DEFAULT_CONNECTIONS.map(connection => ({ ...connection, ...(savedById.get(connection.id) || {}) }));
}

export default function App() {
  const saved = useMemo(loadProgress, []);
  const [onboarded, setOnboarded] = useState(saved.onboarded || false);
  const [view, setView] = useState(saved.view || 'home');
  const [assessmentStage, setAssessmentStage] = useState(saved.assessmentStage || saved.stage || 'intro');
  const [responses, setResponses] = useState(saved.responses || {});
  const [reflections, setReflections] = useState(saved.reflections || {});
  const [contextItems, setContextItems] = useState(saved.contextItems || []);
  const [deletedContextIds, setDeletedContextIds] = useState(saved.deletedContextIds || []);
  const [connections, setConnections] = useState(() => mergeConnections(saved.connections));
  const [sessionContract, setSessionContract] = useState(saved.sessionContract || DEFAULT_SESSION_CONTRACT);
  const stageIndex = Math.max(0, assessmentStages.indexOf(assessmentStage));

  useEffect(() => {
    setContextItems(previous => createContextProposals(responses, reflections, previous).filter(item => !deletedContextIds.includes(item.id)));
  }, [responses, reflections, deletedContextIds]);

  useEffect(() => saveProgress({ onboarded, view, assessmentStage, responses, reflections, contextItems, deletedContextIds, connections, sessionContract }), [onboarded, view, assessmentStage, responses, reflections, contextItems, deletedContextIds, connections, sessionContract]);
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [view, assessmentStage]);

  const navigate = nextView => setView(nextView);
  const goToAssessmentStage = index => setAssessmentStage(assessmentStages[Math.min(assessmentStages.length - 1, Math.max(0, index))]);
  const handleResponse = (assessmentKey, section, item, value) => setResponses(previous => ({ ...previous, [assessmentKey]: { ...previous[assessmentKey], [section]: { ...(previous[assessmentKey]?.[section] || {}), [item]: value } } }));
  const handleReflection = (index, value) => setReflections(previous => ({ ...previous, [index]: value }));
  const updateContext = (id, patch) => setContextItems(previous => previous.map(item => item.id === id ? { ...item, ...patch, updatedAt: new Date().toISOString() } : item));
  const deleteContext = id => { setDeletedContextIds(previous => [...new Set([...previous, id])]); setContextItems(previous => previous.filter(item => item.id !== id)); };
  const updateConnection = (id, patch) => setConnections(previous => previous.map(item => item.id === id ? { ...item, ...patch } : item));

  if (!onboarded) return <AppFrame><Onboarding onComplete={() => setOnboarded(true)} /></AppFrame>;

  let content;
  if (view === 'home') content = <Dashboard contextItems={contextItems} connections={connections} onNavigate={navigate} />;
  else if (view === 'context') content = <ContextCore items={contextItems} onUpdate={updateContext} onDelete={deleteContext} />;
  else if (view === 'connections') content = <Connections connections={connections} onUpdate={updateConnection} />;
  else if (view === 'session') content = <SessionContract contract={sessionContract} onChange={setSessionContract} />;
  else if (assessmentStage === 'intro') content = <Intro onBegin={() => goToAssessmentStage(1)} />;
  else if (assessmentKeys.includes(assessmentStage)) content = <Assessment assessment={ASSESSMENTS[assessmentStage]} assessmentKey={assessmentStage} index={assessmentKeys.indexOf(assessmentStage)} count={assessmentKeys.length} responses={responses} onResponse={handleResponse} />;
  else if (assessmentStage.startsWith('reflection-')) {
    const index = Number(assessmentStage.split('-')[1]);
    content = <Reflection reflection={REFLECTION_PROMPTS[index]} index={index} count={REFLECTION_PROMPTS.length} value={reflections[index]} onChange={handleReflection} />;
  } else content = <Results responses={responses} reflections={reflections} onViewContext={() => navigate('context')} />;

  return <AppFrame>
    <header className="topbar"><Brand /><span>Private by design · saved on this device</span></header>
    <OSNav view={view} onChange={navigate} />
    {content}
    {view === 'assessment' && assessmentStage !== 'intro' && <Navigation index={stageIndex} total={assessmentStages.length} onBack={() => goToAssessmentStage(stageIndex - 1)} onNext={() => goToAssessmentStage(stageIndex + 1)} />}
  </AppFrame>;
}

function AppFrame({ children }) {
  return <div id="top" className="app"><div className="ambient ambient-one" /><div className="ambient ambient-two" />{children}</div>;
}
