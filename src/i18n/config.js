export const DEFAULT_LOCALE = 'en';
export const SUPPORTED_LOCALES = Object.freeze(['en', 'it', 'de', 'fr']);
export const LANGUAGE_STORAGE_KEY = 'axy-language-v1';

export function normalizeLocale(value) {
  const language = String(value || '').trim().toLowerCase().split(/[-_]/)[0];
  return SUPPORTED_LOCALES.includes(language) ? language : DEFAULT_LOCALE;
}

export function detectBrowserLocale(languages = []) {
  const candidates = Array.isArray(languages) ? languages : [languages];
  for (const candidate of candidates) {
    const locale = String(candidate || '').trim().toLowerCase().split(/[-_]/)[0];
    if (SUPPORTED_LOCALES.includes(locale)) return locale;
  }
  return DEFAULT_LOCALE;
}

export function readLanguagePreference(storage) {
  try {
    const value = JSON.parse(storage?.getItem(LANGUAGE_STORAGE_KEY) || 'null');
    if (!value || !SUPPORTED_LOCALES.includes(value.locale)) return null;
    return { locale: value.locale, source: value.source === 'manual' ? 'manual' : 'detected' };
  } catch {
    return null;
  }
}

export function writeLanguagePreference(storage, locale, source = 'manual') {
  const normalized = normalizeLocale(locale);
  try {
    storage?.setItem(LANGUAGE_STORAGE_KEY, JSON.stringify({
      locale: normalized,
      source: source === 'manual' ? 'manual' : 'detected',
    }));
    return true;
  } catch {
    return false;
  }
}
