export function getByPath(object, path) {
  return String(path || '').split('.').reduce((value, key) => value?.[key], object);
}

export function interpolate(value, variables) {
  if (typeof value !== 'string' || !variables) return value;
  return value.replace(/\{([A-Za-z0-9_]+)\}/g, (match, key) => (
    variables[key] === undefined || variables[key] === null ? match : String(variables[key])
  ));
}

export function mergeWithEnglish(english, localized) {
  if (Array.isArray(english)) {
    const translated = Array.isArray(localized) ? localized : [];
    const length = Math.max(english.length, translated.length);
    return Array.from({ length }, (_, index) => mergeWithEnglish(english[index], translated[index]));
  }
  if (!english || typeof english !== 'object') return localized ?? english;
  const result = {};
  for (const key of new Set([...Object.keys(english), ...Object.keys(localized || {})])) {
    result[key] = mergeWithEnglish(english[key], localized?.[key]);
  }
  return result;
}
