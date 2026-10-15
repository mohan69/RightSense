import type { MetadataRoute } from "next";
import { primaryNav, siteConfig } from "@/lib/content";
import { processCases } from "@/lib/process-redesign";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [...primaryNav, { href: "/order-execution-demo" }, ...processCases.map(c => ({ href: `/manufacturing-use-cases/${c.slug}` }))]
    .filter((item) => item.href.startsWith("/"))
    .map((item) => ({
      url: new URL(item.href, siteConfig.url).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: item.href === "/" ? 1.0 : 0.8,
    }));
}
