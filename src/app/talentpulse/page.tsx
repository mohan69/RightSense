import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { CapabilityCard } from "@/components/sections/CapabilityCard";
import { FitCallout } from "@/components/sections/FitCallout";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { talentpulsePage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: talentpulsePage.hero.title,
  description: talentpulsePage.hero.subtitle,
  path: "/talentpulse",
});

export default function TalentPulsePage() {
  return (
    <>
      <PageHero
        eyebrow={talentpulsePage.hero.eyebrow}
        title={talentpulsePage.hero.title}
        subtitle={talentpulsePage.hero.subtitle}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader title={talentpulsePage.capabilities.title} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {talentpulsePage.capabilities.items.map((c) => (
              <CapabilityCard key={c.title} capability={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <SectionHeader title={talentpulsePage.outcomes.title} />
          <ul className="mt-12 space-y-3">
            {talentpulsePage.outcomes.items.map((o, i) => (
              <li
                key={o}
                className="flex items-start gap-3 rounded-xl border border-line bg-white p-5"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-success-50 text-success-700 text-xs font-semibold shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-ink-700 leading-relaxed">
                  {o}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <FitCallout
            title={talentpulsePage.fitWithPulseiq.title}
            body={talentpulsePage.fitWithPulseiq.body}
            cta={{ label: "Explore PulseIQ", href: "/pulseiq" }}
          />
        </div>
      </section>

      <CTASection
        title={talentpulsePage.cta.title}
        subtitle={talentpulsePage.cta.subtitle}
        primaryCta={talentpulsePage.cta.primaryCta}
        secondaryCta={talentpulsePage.cta.secondaryCta}
      />
    </>
  );
}
