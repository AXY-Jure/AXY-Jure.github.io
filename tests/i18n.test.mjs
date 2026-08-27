import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';
import {
  DEFAULT_LOCALE,
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LOCALES,
  detectBrowserLocale,
  readLanguagePreference,
  writeLanguagePreference,
} from '../src/i18n/config.js';
import {
  basePathForComparison,
  localizedPath,
  parseLocalizedPath,
} from '../src/i18n/paths.js';
import { commonCatalog } from '../src/i18n/locales/common.js';
import { getByPath, interpolate, mergeWithEnglish } from '../src/i18n/catalog.js';
import { languageBootstrapScript } from '../src/i18n/bootstrap.js';

function flattenKeys(value, prefix = '') {
  const keys = [];
  for (const [key, child] of Object.entries(value || {})) {
    const path = prefix ? prefix + '.' + key : key;
    if (child && typeof child === 'object' && !Array.isArray(child)) keys.push(...flattenKeys(child, path));
    else keys.push(path);
  }
  return keys.sort();
}

function memoryStorage() {
  const values = new Map();
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, String(value)),
  };
}

function runBootstrap({ pathname = '/', search = '', hash = '', languages = [], saved = null } = {}) {
  const storage = memoryStorage();
  if (saved) storage.setItem(LANGUAGE_STORAGE_KEY, JSON.stringify(saved));
  const replacements = [];
  const document = { documentElement: { lang: 'en' } };
  const window = {
    localStorage: storage,
    location: { pathname, search, hash, replace: (destination) => replacements.push(destination) },
  };
  vm.runInNewContext(languageBootstrapScript(), {
    document,
    navigator: { languages, language: languages[0] || '' },
    window,
  });
  return { document, replacements, preference: readLanguagePreference(storage) };
}

test('maps browser locales to the supported AXY language set', () => {
  assert.equal(detectBrowserLocale(['it-IT']), 'it');
  assert.equal(detectBrowserLocale(['de-DE']), 'de');
  assert.equal(detectBrowserLocale(['de-AT']), 'de');
  assert.equal(detectBrowserLocale(['de-CH']), 'de');
  assert.equal(detectBrowserLocale(['fr-FR']), 'fr');
  assert.equal(detectBrowserLocale(['fr-CH']), 'fr');
  assert.equal(detectBrowserLocale(['ja-JP']), DEFAULT_LOCALE);
  assert.equal(detectBrowserLocale(['ja-JP', 'fr-FR']), 'fr');
  assert.equal(detectBrowserLocale(['en-US', 'it-IT']), 'en');
  assert.equal(detectBrowserLocale(['ja-JP', 'en_US', 'fr-FR']), 'en');
});

test('stores and reads manual or detected preferences without throwing', () => {
  const storage = memoryStorage();
  assert.equal(readLanguagePreference(storage), null);
  assert.equal(writeLanguagePreference(storage, 'de', 'manual'), true);
  assert.deepEqual(readLanguagePreference(storage), { locale: 'de', source: 'manual' });
  assert.match(storage.getItem(LANGUAGE_STORAGE_KEY), /"locale":"de"/);
  assert.equal(writeLanguagePreference(storage, 'fr-CH', 'detected'), true);
  assert.deepEqual(readLanguagePreference(storage), { locale: 'fr', source: 'detected' });
});

test('the production bootstrap honors URL, saved, and ordered browser language signals', () => {
  const italian = runBootstrap({ pathname: '/pricing', search: '?plan=free', hash: '#builder', languages: ['it-IT'] });
  assert.deepEqual(italian.replacements, ['/it/pricing?plan=free#builder']);
  assert.deepEqual(italian.preference, { locale: 'it', source: 'detected' });

  const englishFirst = runBootstrap({ pathname: '/', languages: ['en-US', 'it-IT'] });
  assert.deepEqual(englishFirst.replacements, []);
  assert.equal(englishFirst.document.documentElement.lang, 'en');

  const savedFrench = runBootstrap({ pathname: '/about', languages: ['de-DE'], saved: { locale: 'fr', source: 'manual' } });
  assert.deepEqual(savedFrench.replacements, ['/fr/about']);

  const directGerman = runBootstrap({ pathname: '/de/pricing', languages: ['fr-FR'], saved: { locale: 'fr', source: 'manual' } });
  assert.deepEqual(directGerman.replacements, []);
  assert.equal(directGerman.document.documentElement.lang, 'de');

  const englishAlias = runBootstrap({ pathname: '/en/pricing', languages: ['it-IT'], saved: { locale: 'fr', source: 'manual' } });
  assert.deepEqual(englishAlias.replacements, ['/pricing']);
  assert.deepEqual(englishAlias.preference, { locale: 'en', source: 'manual' });
});

test('localizes paths while preserving roots, queries, hashes, and external URLs', () => {
  assert.equal(localizedPath('/', 'it'), '/it');
  assert.equal(localizedPath('/pricing', 'de'), '/de/pricing');
  assert.equal(localizedPath('/fr/pricing?plan=free#builder', 'en'), '/pricing?plan=free#builder');
  assert.equal(localizedPath('/pricing?plan=free#builder', 'fr'), '/fr/pricing?plan=free#builder');
  assert.equal(localizedPath('#schedule', 'it'), '#schedule');
  assert.equal(localizedPath('https://app.axy.net/onboarding', 'it'), 'https://app.axy.net/onboarding');
  assert.equal(localizedPath('/images/axy-logo.png', 'de'), '/images/axy-logo.png');
  assert.deepEqual(parseLocalizedPath('/de/use-cases/retail-clienteling'), {
    locale: 'de',
    basePath: '/use-cases/retail-clienteling',
    suffix: '',
    hasLocale: true,
  });
  assert.equal(basePathForComparison('/it/book-a-walkthrough/'), '/book-a-walkthrough');
});

test('missing translations fall back to English without exposing raw keys', () => {
  const merged = mergeWithEnglish(
    { title: 'English title', steps: ['First', 'Second'], nested: { action: 'Continue' } },
    { steps: ['Primo'], nested: {} },
  );

  assert.equal(merged.title, 'English title');
  assert.deepEqual(merged.steps, ['Primo', 'Second']);
  assert.equal(getByPath(merged, 'nested.action'), 'Continue');
  assert.equal(getByPath(merged, 'missing.key'), undefined);
  assert.equal(interpolate('Hello {name}', { name: 'AXY' }), 'Hello AXY');
});

test('common and page catalogs keep exact EN/IT/DE/FR key parity', async () => {
  const expectedCommonKeys = flattenKeys(commonCatalog.en);
  for (const locale of SUPPORTED_LOCALES) {
    assert.deepEqual(flattenKeys(commonCatalog[locale]), expectedCommonKeys, 'common ' + locale + ' key mismatch');
  }

  const pageDirectory = new URL('../src/i18n/locales/pages/', import.meta.url);
  const files = (await readdir(pageDirectory)).filter((file) => file.endsWith('.js'));
  assert.ok(files.length >= 1, 'at least one page catalog is required');
  for (const file of files) {
    const catalogModule = await import(new URL(file, pageDirectory));
    const catalog = catalogModule.default || Object.values(catalogModule).find((value) => value?.en && value?.it && value?.de && value?.fr);
    assert.ok(catalog, file + ' must export a four-locale catalog');
    const englishKeys = flattenKeys(catalog.en);
    assert.ok(englishKeys.length > 0, file + ' English catalog is empty');
    for (const locale of SUPPORTED_LOCALES) {
      assert.deepEqual(flattenKeys(catalog[locale]), englishKeys, file + ' ' + locale + ' key mismatch');
    }
  }
});
