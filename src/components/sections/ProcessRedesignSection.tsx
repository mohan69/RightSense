import Link from "next/link";
import { processCases } from "@/lib/process-redesign";
import { SectionHeader } from "./SectionHeader";

export function ProcessRedesignSection() {
  return <section className="bg-white"><div className="mx-auto max-w-6xl px-6 py-20">
    <SectionHeader eyebrow="Human + AI operating model" title="Better work starts with a better process." subtitle="AI can assemble evidence, detect exceptions and prepare options. People bring judgment, own commitments and handle the trade-offs. We redesign the handoffs, roles and controls so the work actually moves." />
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {processCases.map((c) => <Link key={c.slug} href={`/manufacturing-use-cases/${c.slug}`} className="rounded-xl border border-line p-6 hover:border-brand-500 focus-visible:outline-2 focus-visible:outline-brand-500"><h3 className="font-semibold text-ink-900">{c.title}</h3><p className="mt-2 text-sm text-ink-600">{c.outcome}</p><span className="mt-3 block text-sm font-semibold text-brand-700">Explore the workflow →</span></Link>)}
      <Link href="/order-execution-demo" className="rounded-xl bg-brand-950 p-6 text-white md:col-span-2"><h3 className="font-semibold">Follow one order from risk to outcome</h3><p className="mt-2 text-sm text-blue-100">Order → Engineering → Procurement → Shipment. Try a guided simulation with sample data.</p><span className="mt-3 block text-sm font-semibold">Open the demo →</span></Link>
    </div>
  </div></section>;
}
