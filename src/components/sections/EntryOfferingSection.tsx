import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EntryOfferingSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-2xl bg-brand-950 p-8 text-white sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">Initial entry offering</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Start with PulseIQ and one measurable management problem.</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-blue-100/85">
              PulseIQ connects the minimum approved evidence needed to show what is at risk, why it is happening, what action remains possible and how the resulting outcome will be measured.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "One plant, project, product family or order cohort",
                "Read-only evidence before any integration commitment",
                "Human approval for commercial and operational decisions",
                "Modeled value kept separate from verified value",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-blue-50">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?source=pulseiq-founding-cohort">
                <Button size="lg">Discuss a PulseIQ proof <ArrowRight className="h-4 w-4" /></Button>
              </Link>
              <Link href="/pulseiq" className="inline-flex items-center gap-2 px-3 text-sm font-semibold text-white hover:text-brand-200">
                Explore PulseIQ <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-line bg-canvas p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Focused founding cohort</p>
            <h3 className="mt-3 text-2xl font-semibold text-ink-900">Five manufacturing clients. Founder-led delivery.</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              RightSense is concentrating its initial execution on five manufacturing clients so discovery, data mapping, adoption and value verification stay close to the founders.
            </p>
            <div className="mt-7 border-t border-line pt-6">
              <p className="text-sm font-semibold text-ink-900">Where WinsProposal fits</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                When the priority is RFQ, proposal or pricing performance, WinsProposal provides the purpose-built workflow. Its approved pipeline, proposal and win/loss signals can feed the broader PulseIQ evidence path.
              </p>
              <Link href="/winsproposal" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
                Explore WinsProposal <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
