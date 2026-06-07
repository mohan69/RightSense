import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { CapabilityCard } from "@/components/sections/CapabilityCard";
import { FitCallout } from "@/components/sections/FitCallout";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { winsproposalPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: winsproposalPage.hero.title,
  description: winsproposalPage.hero.subtitle,
  path: "/winsproposal",
});

export default function WinsProposalPage() {
  return (
    <>
      <PageHero
        eyebrow={winsproposalPage.hero.eyebrow}
        title={winsproposalPage.hero.title}
        subtitle={winsproposalPage.hero.subtitle}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader title={winsproposalPage.targetUsers.title} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {winsproposalPage.targetUsers.roles.map((r) => (
              <div
                key={r.role}
                className="rounded-xl border border-line bg-canvas p-5"
              >
                <h3 className="text-sm font-semibold text-ink-900">
                  {r.role}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader title={winsproposalPage.capabilities.title} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {winsproposalPage.capabilities.items.map((c) => (
              <CapabilityCard key={c.title} capability={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <SectionHeader title={winsproposalPage.outcomes.title} />
          <ul className="mt-12 space-y-3">
            {winsproposalPage.outcomes.items.map((o, i) => (
              <li
                key={o}
                className="flex items-start gap-3 rounded-xl border border-line bg-canvas p-5"
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

      <section className="bg-canvas">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <FitCallout
            title={winsproposalPage.fitWithPulseiq.title}
            body={winsproposalPage.fitWithPulseiq.body}
            cta={{ label: "Explore PulseIQ", href: "/pulseiq" }}
          />
        </div>
      </section>

      <CTASection
        title={winsproposalPage.cta.title}
        subtitle={winsproposalPage.cta.subtitle}
        primaryCta={winsproposalPage.cta.primaryCta}
        secondaryCta={winsproposalPage.cta.secondaryCta}
      />
    </>
  );
}
