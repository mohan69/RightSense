import type { Metadata } from "next";
import { siteConfig } from "./content";

const ecosystemDescription =
  "AI-native enterprise transformation for industrial and project-driven businesses, combining enterprise AI architecture, integration, delivery and purpose-built intelligence platforms to improve revenue, margin, cash, productivity and execution.";

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
