# AXY website localization

## Languages and URLs

- English (en) is the default and keeps the existing unprefixed URLs, such as /pricing/.
- Italian (it) uses /it/…
- German (de) uses /de/…
- French (fr) uses /fr/…

The site does not publish a duplicate /en/ tree. English canonicals and x-default point to the existing unprefixed routes.

## Architecture

- src/i18n/config.js defines supported locales, browser mapping and the versioned storage key.
- src/i18n/paths.js parses and creates localized links while preserving queries and fragments.
- src/i18n/I18nProvider.jsx supplies locale, common lookup and recursive English fallback.
- src/i18n/LocalizedLink.jsx keeps internal navigation in the active language.
- src/components/LanguagePicker.jsx stores a manual choice and opens the equivalent current route.
- src/i18n/locales/common.js stores shared copy.
- src/i18n/locales/pages/*.js stores page copy.
- app/seo-locales.ts stores localized SEO and Open Graph copy.

Every catalog has en, it, de and fr branches with the same shape. Missing localized values fall back to English. Missing common keys render an empty string rather than a raw key.

## Detection and persistence

The pre-hydration bootstrap in app/layout.tsx only detects language on unprefixed URLs:

1. Read axy-language-v1 from local storage.
2. If absent, inspect navigator.languages and then navigator.language.
3. Map Italian, German and French variants to it, de and fr; map everything else to English.
4. Save the detected choice with source “detected”.
5. Redirect a non-English visitor once to the equivalent prefixed route.

Opening /it, /de or /fr directly always respects the URL. The picker saves source “manual”, preventing later automatic switching. No GPS, location permission or country lookup is used.

## Static SEO

The static export generates all 24 routes in four languages. Indexable pages emit locale-specific canonical, reciprocal en/it/de/fr hreflang, x-default to English, localized title and description, and localized Open Graph/Twitter metadata. The sitemap contains 21 indexable routes in four languages (84 entries). Login, meeting confirmation and legal pages retain their noindex policy.

scripts/finalize-static-export.mjs writes the correct HTML lang attribute into each localized export.

## External or manual localization

- HubSpot controls the contact form, Product Support form and Meetings scheduler fields, validation and calendar UI. This repository localizes their surrounding copy and accessible labels; locale-specific HubSpot assets still need manual configuration.
- Registration and login continue on app.axy.net, which requires its own localization.
- Text embedded in screenshots and the promotional video requires separate localized media.
- Privacy Policy and Terms & Conditions are approved English modules protected by a digest test. Localized shells explain that English is authoritative. Counsel-reviewed IT/DE/FR legal modules are required before translating the legal body.

## Adding a language

1. Add the code to SUPPORTED_LOCALES in src/i18n/config.js and extend the Locale type in app/seo-locales.ts.
2. Add the locale branch to src/i18n/locales/common.js and every page catalog.
3. Add localized SEO metadata and the Open Graph locale.
4. Verify the shared bootstrap and export finalizer recognize it; both read the central runtime locale configuration.
5. Extend locale, catalog, route, sitemap and rendered-metadata tests.
6. Configure matching HubSpot assets and localized media if required.
7. Run npm test, npm run validate:artifact and responsive browser checks before publishing.
