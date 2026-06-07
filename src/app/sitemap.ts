import type { MetadataRoute } from "next";
import { primaryNav, siteConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return primaryNav
    .filter((item) => item.href.startsWith("/"))
    .map((item) => ({
      url: new URL(item.href, siteConfig.url).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: item.href === "/" ? 1.0 : 0.8,
    }));
}
