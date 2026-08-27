import { DEFAULT_LOCALE, SUPPORTED_LOCALES, normalizeLocale } from './config.js';

const NON_PAGE_PREFIXES = ['/images/', '/videos/', '/_next/', '/fonts/'];

function splitHref(value) {
  const input = String(value || '/');
  const hashIndex = input.indexOf('#');
  const queryIndex = input.indexOf('?');
  const suffixIndex = [hashIndex, queryIndex].filter((index) => index >= 0).sort((a, b) => a - b)[0];
  return suffixIndex === undefined
    ? { pathname: input, suffix: '' }
    : { pathname: input.slice(0, suffixIndex), suffix: input.slice(suffixIndex) };
}

export function parseLocalizedPath(value = '/') {
  const { pathname, suffix } = splitHref(value);
  const normalizedPath = pathname.startsWith('/') ? pathname : '/' + pathname;
  const segments = normalizedPath.split('/').filter(Boolean);
  const possibleLocale = segments[0]?.toLowerCase();
  const hasLocale = SUPPORTED_LOCALES.includes(possibleLocale);
  const locale = hasLocale ? possibleLocale : DEFAULT_LOCALE;
  const remaining = hasLocale ? segments.slice(1) : segments;
  const basePath = remaining.length ? '/' + remaining.join('/') : '/';
  return { locale, basePath, suffix, hasLocale };
}

export function stripLocalePrefix(value = '/') {
  const parsed = parseLocalizedPath(value);
  return parsed.basePath + parsed.suffix;
}

export function localeFromPath(value = '/') {
  return parseLocalizedPath(value).locale;
}

export function localizedPath(value, locale = DEFAULT_LOCALE) {
  if (typeof value !== 'string' || !value) return value;
  if (
    value.startsWith('#')
    || value.startsWith('//')
    || /^[a-z][a-z\d+.-]*:/i.test(value)
    || NON_PAGE_PREFIXES.some((prefix) => value.startsWith(prefix))
    || ['/robots.txt', '/sitemap.xml', '/favicon.ico'].includes(value)
  ) return value;

  const targetLocale = normalizeLocale(locale);
  const { basePath, suffix } = parseLocalizedPath(value);
  if (targetLocale === DEFAULT_LOCALE) return basePath + suffix;
  const prefix = basePath === '/' ? '/' + targetLocale : '/' + targetLocale + basePath;
  return prefix + suffix;
}

export function basePathForComparison(value = '/') {
  const basePath = parseLocalizedPath(value).basePath;
  return basePath.length > 1 ? basePath.replace(/\/+$/, '') : '/';
}
