import type { Metadata } from "next";
import { siteConfig } from "./content";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
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
  const description = overrides.description ?? siteConfig.description;
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
