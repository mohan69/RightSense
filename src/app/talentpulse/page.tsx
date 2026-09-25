import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { CapabilityCard } from "@/components/sections/CapabilityCard";
import { FitCallout } from "@/components/sections/FitCallout";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { talentpulsePage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

const talentPulseTitle = "TalentPulse — AI-Native Talent Intelligence Platform";
const talentPulseSubtitle =
  "Connect talent acquisition, workforce capacity, skills, staffing readiness and productivity signals so leaders can see whether the organization has the people and capability to deliver its commitments.";

export const metadata: Metadata = pageMetadata({
  title: talentPulseTitle,
  description: talentPulseSubtitle,
  path: "/talentpulse",
});

export default function TalentPulsePage() {
  return (
    <>
      <PageHero
        eyebrow="AI-Native Talent Intelligence Platform"
        title="Know whether you have the people, skills and capacity to deliver what the business has committed to."
        subtitle={talentPulseSubtitle}
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
              <li key={o} className="flex items-start gap-3 rounded-xl border border-line bg-white p-5">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-success-50 text-success-700 text-xs font-semibold shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-ink-700 leading-relaxed">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <FitCallout
            title="Talent intelligence stays focused on workforce outcomes."
            body="TalentPulse is a standalone RightSense platform for hiring, staffing, skills, capacity and delivery-readiness decisions. PulseIQ remains the Enterprise Operating Intelligence Platform for cross-system operational and economic outcomes."
            cta={{ label: "Explore PulseIQ", href: "/pulseiq" }}
          />
        </div>
      </section>

      <CTASection
        title="See TalentPulse against a hiring, staffing or workforce-readiness problem."
        subtitle="Start with the talent outcome that is constraining delivery—candidate pipeline, staffing capacity, skills readiness, recruiter productivity or bench visibility."
        primaryCta={{ label: "Explore TalentPulse", href: "https://talentpulse.me/" }}
        secondaryCta={{ label: "Request TalentPulse Discovery", href: "/contact" }}
      />
    </>
  );
}
