import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { aboutPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: aboutPage.hero.title,
  description: aboutPage.hero.subtitle,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        subtitle={aboutPage.hero.subtitle}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <SectionHeader title={aboutPage.overview.title} />
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">
            {aboutPage.overview.body}
          </p>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <SectionHeader title={aboutPage.founder.title} />
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">
            {aboutPage.founder.body}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <SectionHeader title={aboutPage.whyAINative.title} />
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">
            {aboutPage.whyAINative.body}
          </p>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader title={aboutPage.principles.title} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutPage.principles.items.map((p) => (
              <div
                key={p.name}
                className="rounded-xl border border-line bg-white p-6"
              >
                <div className="flex h-2 w-10 rounded-full bg-brand-100" />
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <div className="rounded-2xl border border-line bg-canvas p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
              Company
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-900">
              {aboutPage.company.name}
            </p>
            <p className="mt-1 text-sm text-ink-600">
              {aboutPage.company.location}
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title={aboutPage.cta.title}
        subtitle={aboutPage.cta.subtitle}
        primaryCta={aboutPage.cta.primaryCta}
      />
    </>
  );
}
