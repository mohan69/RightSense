import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import {
  industriesDetailed,
  industriesPage,
  industriesPageCta,
} from "@/lib/content";
import { industryIcons } from "@/lib/icons";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: industriesPage.hero.title,
  description: industriesPage.hero.subtitle,
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow={industriesPage.hero.eyebrow}
        title={industriesPage.hero.title}
        subtitle={industriesPage.hero.subtitle}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-5 lg:grid-cols-2">
            {industriesDetailed.map((ind) => {
              const Icon =
                industryIcons[ind.icon as keyof typeof industryIcons];
              return (
                <div
                  key={ind.id}
                  className="rounded-2xl border border-line bg-canvas p-7"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                      <Icon className="h-5 w-5 text-brand-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-ink-900">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-ink-600 leading-relaxed">
                    {ind.summary}
                  </p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                        Common pains
                      </p>
                      <ul className="mt-3 space-y-2">
                        {ind.pains.map((pain) => (
                          <li
                            key={pain}
                            className="flex items-start gap-2 text-sm text-ink-700"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-danger-600 shrink-0" />
                            <span className="leading-relaxed">{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                        RightSense outcomes
                      </p>
                      <ul className="mt-3 space-y-2">
                        {ind.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-2 text-sm text-ink-700"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-success-600 shrink-0" />
                            <span className="leading-relaxed">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={industriesPageCta.title}
        subtitle={industriesPageCta.subtitle}
        primaryCta={industriesPageCta.primaryCta}
        secondaryCta={industriesPageCta.secondaryCta}
      />
    </>
  );
}
