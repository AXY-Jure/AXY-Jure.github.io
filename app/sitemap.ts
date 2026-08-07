import type { MetadataRoute } from "next";
import { canonicalUrlForPath, sitemapPaths } from "./site-metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return sitemapPaths.map((path) => ({
    url: canonicalUrlForPath(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
