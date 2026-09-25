import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { ComparisonRow } from "@/components/sections/ComparisonRow";
import { PageHero } from "@/components/sections/PageHero";
import { PillarCard } from "@/components/sections/PillarCard";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { moatPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: moatPage.hero.title,
  description: moatPage.hero.subtitle,
  path: "/moat",
});

export default function MoatPage() {
  return (
    <>
      <PageHero
        eyebrow={moatPage.hero.eyebrow}
        title={moatPage.hero.title}
        subtitle={moatPage.hero.subtitle}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
          <p className="text-2xl sm:text-3xl font-semibold text-ink-900 text-balance leading-snug">
            {`"${moatPage.oneLine}"`}
          </p>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            title={moatPage.learningLoop.title}
            subtitle={moatPage.learningLoop.subtitle}
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {moatPage.learningLoop.steps.map((step, index) => (
              <div key={step.label} className="relative rounded-2xl border border-line bg-white p-5 shadow-soft">
                <span className="text-xs font-bold tracking-[0.14em] text-brand-700">0{index + 1}</span>
                <h3 className="mt-3 text-base font-semibold text-ink-900">{step.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
                {index < moatPage.learningLoop.steps.length - 1 ? <span aria-hidden className="hidden lg:block absolute -right-3 top-1/2 h-px w-3 bg-brand-200" /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <SectionHeader title={moatPage.coreTitle} />
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">
            {moatPage.coreBody}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            title={moatPage.pillarsTitle}
            subtitle={moatPage.pillarsSubtitle}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {moatPage.pillars.map((p) => (
              <PillarCard key={p.num} pillar={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader title={moatPage.enablersTitle} subtitle={moatPage.enablersSubtitle} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {moatPage.enablers.map((enabler) => (
              <div key={enabler.num} className="rounded-xl border border-line bg-canvas p-5">
                <span className="text-xs font-bold tracking-[0.14em] text-brand-700">{enabler.num}</span>
                <h3 className="mt-3 text-sm font-semibold text-ink-900">{enabler.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{enabler.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader title="Make every recommendation inspectable" subtitle="A practical product hook for PulseIQ and every RightSense workflow." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {moatPage.trustChain.map((item, index) => (
              <div key={item.label} className="rounded-2xl border border-line bg-white p-6">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent-600">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold text-ink-900">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            title={moatPage.comparisonsTitle}
            subtitle={moatPage.comparisonsSubtitle}
          />
          <div className="mt-12 space-y-4">
            {moatPage.comparisons.map((c) => (
              <ComparisonRow key={c.competitor} comparison={c} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={moatPage.cta.title}
        subtitle={moatPage.cta.subtitle}
        primaryCta={moatPage.cta.primaryCta}
        secondaryCta={moatPage.cta.secondaryCta}
      />
    </>
  );
}
