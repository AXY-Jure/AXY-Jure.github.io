import type { Metadata } from "next";
import {
  DEFAULT_LOCALE,
  ENGLISH_PAGE_META,
  FALLBACK_PAGE_META,
  LOCALIZED_PAGE_META,
  OPEN_GRAPH_LOCALES,
  SOCIAL_IMAGE_ALT,
  SUPPORTED_LOCALES,
  type Locale,
  type PageMeta,
  type PagePath,
} from "./seo-locales";

const SITE_ORIGIN = "https://axy.net";
const SOCIAL_IMAGE = "/images/surface-sales-app.jpg";

export type ParsedPublicPath = {
  locale: Locale;
  pagePath: string;
};

export function isSupportedLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

function normalizedPath(path: string) {
  const withoutQuery = path.split(/[?#]/, 1)[0] || "/";
  const withLeadingSlash = withoutQuery.startsWith("/") ? withoutQuery : `/${withoutQuery}`;
  return withLeadingSlash.length > 1 ? withLeadingSlash.replace(/\/+$/, "") : "/";
}

export function parsePublicPath(path: string): ParsedPublicPath {
  const normalized = normalizedPath(path);
  const segments = normalized.split("/").filter(Boolean);
  const possibleLocale = segments[0]?.toLowerCase();

  if (possibleLocale && isSupportedLocale(possibleLocale) && possibleLocale !== DEFAULT_LOCALE) {
    const pagePath = segments.length === 1 ? "/" : `/${segments.slice(1).join("/")}`;
    return { locale: possibleLocale, pagePath };
  }

  return { locale: DEFAULT_LOCALE, pagePath: normalized };
}

export function isPagePath(path: string): path is PagePath {
  return Object.prototype.hasOwnProperty.call(ENGLISH_PAGE_META, path);
}

export function localizedPathForPath(path: string, locale: Locale) {
  const pagePath = normalizedPath(path);
  if (locale === DEFAULT_LOCALE) return pagePath;
  return pagePath === "/" ? `/${locale}` : `/${locale}${pagePath}`;
}

export function canonicalUrlForPath(path: string, locale?: Locale) {
  const parsed = locale ? { locale, pagePath: normalizedPath(path) } : parsePublicPath(path);
  const localizedPath = localizedPathForPath(parsed.pagePath, parsed.locale);
  return localizedPath === "/" ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${localizedPath}/`;
}

export function alternateUrlsForPath(path: string) {
  const pagePath = normalizedPath(path);
  const languages: Record<string, string> = {};

  for (const locale of SUPPORTED_LOCALES) {
    languages[locale] = canonicalUrlForPath(pagePath, locale);
  }
  languages["x-default"] = canonicalUrlForPath(pagePath, DEFAULT_LOCALE);

  return languages;
}

export function metadataForPath(path: string): Metadata {
  const { locale, pagePath } = parsePublicPath(path);
  const exists = isPagePath(pagePath);
  const englishPage = exists ? ENGLISH_PAGE_META[pagePath] as PageMeta : undefined;
  const localizedPage = exists ? LOCALIZED_PAGE_META[locale][pagePath] : FALLBACK_PAGE_META[locale];
  const index = exists && englishPage?.index !== false;
  const canonical = canonicalUrlForPath(pagePath, locale);
  const alternateLocale = SUPPORTED_LOCALES
    .filter((candidate) => candidate !== locale)
    .map((candidate) => OPEN_GRAPH_LOCALES[candidate]);

  return {
    title: localizedPage.title,
    description: localizedPage.description,
    alternates: index
      ? { canonical, languages: alternateUrlsForPath(pagePath) }
      : { canonical },
    robots: index ? undefined : { index: false, follow: false },
    openGraph: {
      type: "website",
      siteName: "AXY",
      title: localizedPage.title,
      description: localizedPage.description,
      url: canonical,
      locale: OPEN_GRAPH_LOCALES[locale],
      alternateLocale,
      images: [{
        url: SOCIAL_IMAGE,
        width: 1600,
        height: 900,
        alt: SOCIAL_IMAGE_ALT[locale],
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: localizedPage.title,
      description: localizedPage.description,
      images: [SOCIAL_IMAGE],
    },
  };
}

export const staticPagePaths = Object.keys(ENGLISH_PAGE_META) as PagePath[];

export const staticLocalizedPagePaths = staticPagePaths.flatMap((pagePath) =>
  SUPPORTED_LOCALES.map((locale) => localizedPathForPath(pagePath, locale)),
);

export const sitemapPaths = staticPagePaths.filter(
  (pagePath) => (ENGLISH_PAGE_META[pagePath] as PageMeta).index !== false,
);
