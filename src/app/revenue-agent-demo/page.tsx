import type { Metadata } from "next";
import Link from "next/link";
import { SlidersHorizontal } from "lucide-react";
import { RevenueAgentDemo } from "./RevenueAgentDemo";

export const metadata: Metadata = {
  title: "Lead-to-Revenue Automation Demo | RightSense",
  description:
    "Synthetic reference demo showing how a WhatsApp enquiry can be captured, qualified, assigned, synchronized to CRM and converted into a scheduled sales action.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RevenueAgentDemoPage() {
  return (
    <>
      <div className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Seller mode</p>
            <p className="mt-1 text-sm text-ink-600">Use the reference flow as-is, or configure a prospect-specific pilot hypothesis first.</p>
          </div>
          <Link
            href="/revenue-agent-demo/discovery"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
          >
            <SlidersHorizontal className="h-4 w-4" /> Configure prospect
          </Link>
        </div>
      </div>
      <RevenueAgentDemo />
    </>
  );
}
