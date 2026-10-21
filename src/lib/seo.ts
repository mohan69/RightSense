import type { Metadata } from "next";
import { siteConfig } from "./content";

const ecosystemDescription =
  "Enterprise AI for manufacturing, EPC, valve and pump businesses—starting with one measurable revenue, margin, delivery or cash outcome.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: ecosystemDescription,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: ecosystemDescription,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: ecosystemDescription,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export function pageMetadata(overrides: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const description = overrides.description ?? ecosystemDescription;
  const canonical = overrides.path
    ? new URL(overrides.path, siteConfig.url).toString()
    : undefined;

  return {
    title: overrides.title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: overrides.title,
      description,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: overrides.title,
      description,
    },
  };
}
