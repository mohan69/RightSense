import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DiscoveryConfigurator } from "./DiscoveryConfigurator";

export const metadata: Metadata = {
  title: "Prospect Discovery & Pilot Configurator | RightSense",
  description:
    "Internal seller workspace for turning WhatsApp lead-management discovery into a measurable RightSense pilot hypothesis.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DiscoveryConfiguratorPage() {
  return (
    <>
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <Link
            href="/revenue-agent-demo"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-600 hover:text-ink-950"
          >
            <ArrowLeft className="h-4 w-4" /> Back to reference demo
          </Link>
          <span className="text-xs font-medium text-ink-400">RightSense internal pilot tool</span>
        </div>
      </div>
      <DiscoveryConfigurator />
    </>
  );
}
