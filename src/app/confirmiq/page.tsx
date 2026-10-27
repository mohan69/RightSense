import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "ConfirmIQ | Assisted Trade Capture & Validation",
  description:
    "ConfirmIQ turns broker confirmations into structured, CTRM-ready trade data, with exception review and approval kept with authorized people.",
  path: "/confirmiq",
});

const workflow = [
  ["Capture", "Read broker confirmation documents and extract candidate trade terms."],
  ["Structure", "Map the extracted fields into a generic, CTRM-ready trade record."],
  ["Validate", "Check required fields and surface missing, conflicting or uncertain terms as exceptions."],
  ["Review", "A named reviewer checks the source evidence, resolves exceptions and approves the record."],
  ["Handoff", "Prepare the approved record for a controlled CTRM test-environment handoff."],
];

export default function ConfirmIqPage() {
  return (
    <>
      <PageHero
        eyebrow="ConfirmIQ · RightSense"
        title="Broker confirmations to review-ready trade records."
        subtitle="ConfirmIQ is an AI-assisted trade capture and validation workflow for energy and commodity trading teams. It reduces manual rekeying while keeping exception resolution and trade approval with authorized people."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">How the workflow operates</p>
              <ol className="mt-6 space-y-4">
                {workflow.map(([title, description], i) => (
                  <li key={title} className="flex gap-4 rounded-xl border border-line bg-canvas p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">0{i + 1}</span>
                    <div>
                      <h2 className="font-semibold text-ink-900">{title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="rounded-2xl border border-brand-200 bg-brand-50 p-7">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-brand-700" />
                <h2 className="text-xl font-semibold text-ink-900">Human approval stays in control</h2>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink-700">
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />Reviewers inspect exceptions against the confirmation source.</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />Authorized people approve trade records before handoff.</li>
                <li className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" />The workflow prepares data; it does not autonomously book or approve trades.</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Architecture and pilot controls</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-ink-900">A reviewable path from document to controlled handoff.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Source evidence", "Keep the source confirmation available alongside extracted fields so reviewers can verify values."],
              ["Field validation", "Check required data, formats and internal consistency; route gaps and conflicts to an exception queue."],
              ["Human decision", "Record reviewer resolution and approval before creating the downstream trade record."],
              ["Access and audit", "For a pilot, agree access, retention, reviewer identity and change logging with the customer before data is used."],
              ["CTRM handoff", "Map approved output to the customer's agreed test schema and verify the result in a non-production environment."],
              ["Measure before scale", "Track extraction accuracy, exception rate, review time and handoff success against a baseline."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-xl border border-line bg-white p-5">
                <h3 className="font-semibold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
            Demo status: examples use synthetic data and generic CTRM mapping. No live connection to a named CTRM is claimed. Customer-specific security, accuracy and integration performance require validation in a scoped pilot.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="rounded-2xl border border-line p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Product ownership and delivery</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink-900">ConfirmIQ is a RightSense product.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-ink-600">RightSense Technologies owns and develops ConfirmIQ. Advaitha, the consulting and transformation practice of RightSense, helps shape the operating architecture, controls and adoption approach for commodity trading workflows.</p>
            <a href="https://advaitha.tech/commodity-trading" className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
              Explore Advaitha’s commodity trading architecture <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Validate ConfirmIQ on a small, redacted sample."
        subtitle="Agree representative confirmation formats, a test schema, reviewer controls and a baseline before the pilot. Then assess accuracy, exception handling, review time and CTRM test handoff."
        primaryCta={{ label: "Discuss a ConfirmIQ pilot", href: "mailto:contact@rightsense.in?subject=ConfirmIQ%20pilot" }}
        secondaryCta={{ label: "Explore Advaitha commodity trading", href: "https://advaitha.tech/commodity-trading" }}
      />
    </>
  );
}
