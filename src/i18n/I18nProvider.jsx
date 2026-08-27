'use client';

import React from 'react';
import { getByPath, interpolate, mergeWithEnglish } from './catalog.js';
import { commonCatalog } from './locales/common.js';
import { DEFAULT_LOCALE, normalizeLocale, writeLanguagePreference } from './config.js';
import { localeFromPath, localizedPath } from './paths.js';

const I18nContext = React.createContext(null);

export function I18nProvider({ initialLocale = DEFAULT_LOCALE, children }) {
  const [locale, setLocale] = React.useState(() => normalizeLocale(initialLocale));

  const value = React.useMemo(() => {
    const t = (key, variables) => {
      const localized = getByPath(commonCatalog[locale], key);
      const english = getByPath(commonCatalog.en, key);
      const resolved = localized ?? english;
      return typeof resolved === 'string' ? interpolate(resolved, variables) : '';
    };

    const hrefForLocale = (href, requestedLocale = locale) => localizedPath(href, requestedLocale);
    const switchLocale = (nextLocale) => {
      const normalized = normalizeLocale(nextLocale);
      if (typeof window === 'undefined') return;
      writeLanguagePreference(window.localStorage, normalized, 'manual');
      const destination = localizedPath(
        window.location.pathname + window.location.search + window.location.hash,
        normalized,
      );
      window.location.assign(destination);
    };

    return { locale, t, hrefForLocale, switchLocale };
  }, [locale]);

  React.useEffect(() => {
    const pathLocale = localeFromPath(window.location.pathname);
    if (pathLocale !== locale) {
      const frame = window.requestAnimationFrame(() => setLocale(pathLocale));
      return () => window.cancelAnimationFrame(frame);
    }
    document.documentElement.lang = locale;
    return undefined;
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = React.useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}

export function useLocalizedCopy(catalog) {
  const { locale } = useI18n();
  return React.useMemo(
    () => mergeWithEnglish(catalog?.en || {}, catalog?.[locale] || {}),
    [catalog, locale],
  );
}
