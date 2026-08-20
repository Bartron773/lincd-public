import { ASSESSMENTS, REFLECTION_PROMPTS } from '../data/assessments';
import { calculateScores, getBigFiveProfile, getTopStrengths } from './assessment';

function contextItem(id, statement, category, source, confidence = .8) {
  return { id, statement, category, source, confidence, status: 'pending', sharing: 'approved_models', updatedAt: new Date().toISOString() };
}

export function createContextProposals(responses, reflections, existing = []) {
  const hasResponses = Object.keys(responses).length > 0;
  if (!hasResponses && !Object.keys(reflections).length) return existing;
  const scores = calculateScores(responses);
  const proposals = [];

  getTopStrengths(responses, 'via', 5).forEach(({ item }, index) => {
    proposals.push(contextItem(`via-${index}-${item}`, item, 'strengths', ASSESSMENTS.via.title, .9));
  });
  getTopStrengths(responses, 'clifton', 5).forEach(({ item }, index) => {
    proposals.push(contextItem(`clifton-${index}-${item}`, item, 'working_style', ASSESSMENTS.clifton.title, .86));
  });

  if (responses.bigFive) {
    Object.entries(getBigFiveProfile(scores)).forEach(([trait, level]) => {
      proposals.push(contextItem(`big-five-${trait}`, `${trait} currently presents as ${level.toLowerCase()} in this self-assessment.`, 'personality', ASSESSMENTS.bigFive.title, .78));
    });
  }

  Object.entries(reflections).forEach(([index, text]) => {
    if (text.trim()) proposals.push(contextItem(`reflection-${index}`, text.trim(), 'reflection', REFLECTION_PROMPTS[index].title, 1));
  });

  const byId = new Map(existing.map(item => [item.id, item]));
  proposals.forEach(item => { if (!byId.has(item.id)) byId.set(item.id, item); });
  return [...byId.values()];
}

export function contextSummary(items) {
  const confirmed = items.filter(item => item.status === 'confirmed').length;
  const pending = items.filter(item => item.status === 'pending').length;
  const stage = confirmed >= 12 ? 'Useful working context established' : confirmed >= 5 ? 'Learning your patterns' : 'Just introduced';
  return { confirmed, pending, stage };
}
