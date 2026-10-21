import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileCheck2, ShieldCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { diagnostic } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "48-Hour Outcome Diagnostic",
  description:
    "A focused, founder-led diagnostic for one manufacturing or project-business problem, with an evidence map, KPI baseline, illustrative value model and 30-day proof plan.",
  path: "/48-hour-diagnostic",
});

const scope = [
  {
    title: "One business boundary",
    description: "One plant, project, product family, order cohort or proposal workflow—not an enterprise-wide transformation review.",
  },
  {
    title: "One management decision",
    description: "A specific revenue, margin, delivery, cash or productivity decision with a named executive sponsor and operating owner.",
  },
  {
    title: "Up to three initial sources",
    description: "Read-only exports, reports or approved documents from the systems that contain the minimum relevant evidence.",
  },
  {
    title: "Up to five stakeholder interviews",
    description: "Short working interviews with the people who own the evidence, make the decision and verify the outcome.",
  },
];

const requiredInputs = [
  "A one-paragraph description of the problem and the decision leadership needs to make",
  "A named executive sponsor and day-to-day operating owner",
  "A representative baseline period or cohort for comparison",
  "Approved exports or documents from up to three initial evidence sources",
  "Existing KPI definitions, even if teams currently calculate them differently",
  "Known security, customer, contractual or regulatory constraints",
];

const exclusions = [
  "No production-system writeback or autonomous operational control",
  "No full ERP, MES, PLM or CRM implementation",
  "No ISO certification, legal opinion, statutory audit or regulatory approval",
  "No guaranteed savings, revenue uplift, delivery improvement or platform fit",
];

export default function Diagnostic48Page() {
  return (
    <>
      <PageHero
        eyebrow="Focused entry offer · Powered by PulseIQ"
        title="The 48-Hour Outcome Diagnostic"
        subtitle="Bring one economically important manufacturing or project-business problem. Leave with a defensible scope, evidence map, KPI baseline, illustrative value model and a decision on the smallest proof worth running."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="Scope"
            title="Narrow enough to finish. Specific enough to act on."
            subtitle="The 48-hour clock starts after the scope, owners and agreed inputs are available. Calendar scheduling and customer-side access delays are outside the 48-hour working window."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {scope.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-line bg-canvas p-6">
                <span className="text-xs font-bold tracking-[0.14em] text-brand-700">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Working inputs</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900">What we need to begin</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                Start with available evidence. Gaps are documented rather than disguised with assumptions.
              </p>
            </div>
            <ul className="grid gap-3">
              {requiredInputs.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-line bg-white p-5 text-sm leading-relaxed text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader eyebrow="Working plan" title="The 48-hour arc" />
          <ol className="mt-12 grid gap-4 lg:grid-cols-5">
            {diagnostic.steps.map((step) => (
              <li key={step.num} className="rounded-2xl border border-line bg-canvas p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">{step.num}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">{step.window}</span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-line bg-white p-8">
              <div className="flex items-center gap-3 text-brand-700"><FileCheck2 className="h-6 w-6" /><span className="text-xs font-semibold uppercase tracking-[0.14em]">Deliverables</span></div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900">What you receive</h2>
              <ul className="mt-7 space-y-4">
                {diagnostic.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success-600" /> {item}
                  </li>
                ))}
                <li className="flex items-start gap-3 text-sm leading-relaxed text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success-600" /> Founder-led readout and a proceed / pause / stop recommendation
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-white p-8">
              <div className="flex items-center gap-3 text-brand-700"><ShieldCheck className="h-6 w-6" /><span className="text-xs font-semibold uppercase tracking-[0.14em]">Boundaries</span></div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900">What is not included</h2>
              <ul className="mt-7 space-y-4">
                {exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700">
                    <Target className="mt-0.5 h-5 w-5 shrink-0 text-ink-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-brand-200 bg-brand-50 p-7 sm:flex-row sm:items-center">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-ink-900"><Clock className="h-4 w-4 text-brand-700" /> Ready to test the fit?</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">Send the problem, company and preferred contact details. The form prepares an email directly to a RightSense co-founder; phone and email are also available on the contact page.</p>
            </div>
            <Link href="/contact?source=48-hour-diagnostic" className="shrink-0">
              <Button size="lg">Start the diagnostic conversation <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="One problem. One evidence boundary. One decision on what to do next."
        subtitle="No platform commitment is required for the diagnostic. If the evidence does not support a credible proof, the recommendation can be to stop."
        primaryCta={{ label: "Prepare a Diagnostic Request", href: "/contact?source=48-hour-diagnostic" }}
        secondaryCta={{ label: "Email Mohan Directly", href: "mailto:mohan@rightsense.in?subject=RightSense%2048-Hour%20Outcome%20Diagnostic" }}
      />
    </>
  );
}
