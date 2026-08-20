import { ASSESSMENTS } from '../data/assessments';

export function calculateScores(responses) {
  return Object.fromEntries(Object.entries(ASSESSMENTS).map(([key, assessment]) => {
    const sections = Object.fromEntries(Object.entries(assessment.sections).map(([name, items]) => {
      const score = Object.values(responses[key]?.[name] || {}).reduce((sum, value) => sum + (value || 0), 0);
      const max = items.length * 3;
      return [name, { score, max, percentage: max ? (score / max) * 100 : 0 }];
    }));
    const total = Object.values(sections).reduce((sum, section) => sum + section.score, 0);
    const maxTotal = Object.values(sections).reduce((sum, section) => sum + section.max, 0);
    return [key, { sections, total, maxTotal, percentage: maxTotal ? (total / maxTotal) * 100 : 0 }];
  }));
}

export function getTopStrengths(responses, assessmentKey, limit) {
  return Object.entries(ASSESSMENTS[assessmentKey].sections)
    .flatMap(([section, items]) => items.map((item, index) => ({ item, section, score: responses[assessmentKey]?.[section]?.[index] || 0 })))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .filter(({ score }) => score >= 2);
}

export function getBigFiveProfile(scores) {
  return Object.fromEntries(Object.entries(scores.bigFive.sections).map(([trait, data]) => {
    const average = data.max ? data.score / (data.max / 3) : 0;
    return [trait, average >= 2.5 ? 'High' : average >= 1.5 ? 'Medium' : 'Low'];
  }));
}
