const STORAGE_KEY = 'lincd-os-v1';
const LEGACY_KEY = 'lincd-assessment-v1';

export function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || JSON.parse(localStorage.getItem(LEGACY_KEY)) || {};
  } catch {
    return {};
  }
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
