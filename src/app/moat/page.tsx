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
