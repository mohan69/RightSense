import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { MetricCard } from "@/components/sections/MetricCard";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { pulseiqPage } from "@/lib/content";
import { pulseiqIcons } from "@/lib/icons";
import { pageMetadata } from "@/lib/seo";

const decisionTrustSteps = [
  { label: "Explain", description: "Show the reasoning, confidence, and business consequence behind the recommendation." },
  { label: "Source", description: "Trace the approved evidence, freshness, and source-system lineage used." },
  { label: "Action", description: "Assign an owner, approval gate, milestone, and human decision record." },
  { label: "Value", description: "Carry the baseline through observed outcome, attribution, and verification." },
];

export const metadata: Metadata = pageMetadata({
  title: pulseiqPage.hero.title,
  description: pulseiqPage.hero.subtitle,
  path: "/pulseiq",
});

export default function PulseIQPage() {
  return (
    <>
      <PageHero
        eyebrow={pulseiqPage.hero.eyebrow}
        title={pulseiqPage.hero.title}
        subtitle={pulseiqPage.hero.subtitle}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="01 · Truth layer"
            title={pulseiqPage.truthMap.title}
            subtitle={pulseiqPage.truthMap.subtitle}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pulseiqPage.truthMap.layers.map((layer) => {
              const Icon =
                pulseiqIcons[layer.icon as keyof typeof pulseiqIcons];
              return (
                <div
                  key={layer.id}
                  className="rounded-xl border border-line bg-canvas p-6 hover:border-brand-200 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-line shadow-soft">
                    <Icon className="h-5 w-5 text-brand-600" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink-900">
                    {layer.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="08 · Decision trust"
            title="Explain → Source → Action → Value"
            subtitle="PulseIQ is designed so leadership can inspect why a recommendation exists, what supports it, what happens next, and whether value was actually created."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {decisionTrustSteps.map((step, index) => (
              <div key={step.label} className="rounded-2xl border border-line bg-white p-6 shadow-soft">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent-600">0{index + 1}</span>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">{step.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-brand-200 bg-brand-50 p-6 text-sm leading-relaxed text-ink-700">
            <strong className="text-ink-900">v1 implementation boundary:</strong> Industrial Decision Graph, Outcome Pattern Library, and Value Ledger records remain tenant-scoped, provenance-backed, read-only, and human-approved. No customer data is promoted into generalized patterns without anonymization and comparable governed evidence.
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="02 · Leadership view"
            title={pulseiqPage.cockpit.title}
            subtitle={pulseiqPage.cockpit.subtitle}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pulseiqPage.cockpit.metrics.map((m) => (
              <MetricCard key={m.label} metric={m} />
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-ink-500 leading-relaxed">
            {pulseiqPage.cockpit.topRisksNote}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="03 · Forecast horizons"
            title={pulseiqPage.forecasting.title}
            subtitle={pulseiqPage.forecasting.subtitle}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {pulseiqPage.forecasting.horizons.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-line bg-canvas p-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                  {h.label}
                </p>
                <p className="mt-3 text-base text-ink-700 leading-relaxed">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="04 · Scenario testing"
            title={pulseiqPage.whatIf.title}
            subtitle={pulseiqPage.whatIf.subtitle}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {pulseiqPage.whatIf.scenarios.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-line bg-white p-5 hover:border-brand-200 transition-colors"
              >
                <p className="text-sm font-semibold text-ink-900">
                  {s.label}
                </p>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="05 · AI recommendation engine"
            title={pulseiqPage.recommendationEngine.title}
            subtitle={pulseiqPage.recommendationEngine.subtitle}
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pulseiqPage.recommendationEngine.fields.map((f, i) => (
              <li
                key={f.label}
                className="rounded-xl border border-line bg-canvas p-5"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-bold tracking-[0.14em] text-brand-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-sm font-semibold text-ink-900">
                    {f.label}
                  </h4>
                </div>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {f.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="06 · First deployment"
            title={pulseiqPage.deployment.title}
            subtitle={pulseiqPage.deployment.subtitle}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {pulseiqPage.deployment.options.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-line bg-white p-7"
              >
                <h3 className="text-lg font-semibold text-ink-900">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                  {o.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="07 · Connector roadmap"
            title={pulseiqPage.connectorRoadmap.title}
            subtitle={pulseiqPage.connectorRoadmap.subtitle}
          />
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pulseiqPage.connectorRoadmap.connectors.map((c) => (
              <li
                key={c}
                className="rounded-xl border border-line bg-canvas px-4 py-3.5 text-sm font-medium text-ink-700"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title={pulseiqPage.cta.title}
        subtitle={pulseiqPage.cta.subtitle}
        primaryCta={pulseiqPage.cta.primaryCta}
        secondaryCta={pulseiqPage.cta.secondaryCta}
      />
    </>
  );
}
