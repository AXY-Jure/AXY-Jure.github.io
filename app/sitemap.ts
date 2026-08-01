import type { MetadataRoute } from "next";
import { sitemapPaths } from "./site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return sitemapPaths.map((path) => ({ url: `https://axy.net${path === "/" ? "" : path}`, lastModified: now, changeFrequency: path === "/" ? "weekly" : "monthly", priority: path === "/" ? 1 : 0.7 }));
}
