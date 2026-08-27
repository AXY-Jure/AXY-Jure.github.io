import type { MetadataRoute } from "next";
import {
  alternateUrlsForPath,
  canonicalUrlForPath,
  sitemapPaths,
} from "./site-metadata";
import { SUPPORTED_LOCALES } from "./seo-locales";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return sitemapPaths.flatMap((path) =>
    SUPPORTED_LOCALES.map((locale) => ({
      url: canonicalUrlForPath(path, locale),
      lastModified: now,
      changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
      alternates: { languages: alternateUrlsForPath(path) },
    })),
  );
}
