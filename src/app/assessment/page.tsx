import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { assessmentPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: assessmentPage.hero.title,
  description: assessmentPage.hero.subtitle,
  path: "/assessment",
});

export default function AssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow={assessmentPage.hero.eyebrow}
        title={assessmentPage.hero.title}
        subtitle={assessmentPage.hero.subtitle}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <SectionHeader title={assessmentPage.whoItsFor.title} />
          <ul className="mt-10 space-y-3">
            {assessmentPage.whoItsFor.roles.map((r, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-line bg-canvas p-5"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-50 text-brand-700 text-xs font-semibold shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-ink-700 leading-relaxed">
                  {r}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader title={assessmentPage.inputs.title} />
              <ul className="mt-8 space-y-2.5">
                {assessmentPage.inputs.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader title={assessmentPage.outputs.title} />
              <ul className="mt-8 space-y-2.5">
                {assessmentPage.outputs.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-success-600 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader title={assessmentPage.process.title} />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {assessmentPage.process.steps.map((s) => (
              <li
                key={s.num}
                className="relative rounded-2xl border border-line bg-canvas p-6"
              >
                <div className="flex items-baseline gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-semibold shrink-0">
                    {s.num}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {s.label}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {s.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <div className="rounded-2xl border border-brand-200 bg-brand-50/40 p-7">
            <SectionHeader
              title={assessmentPage.commercial.title}
              titleClassName="text-2xl sm:text-3xl"
            />
            <p className="mt-4 text-base text-ink-700 leading-relaxed">
              {assessmentPage.commercial.body}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader title={assessmentPage.ninetyDayPlan.title} />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {assessmentPage.ninetyDayPlan.phases.map((p, i) => (
              <li
                key={p.phase}
                className="rounded-2xl border border-line bg-canvas p-6"
              >
                <span className="text-xs font-bold tracking-[0.14em] text-brand-700">
                  Phase {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 text-sm font-semibold text-brand-700">
                  {p.phase}
                </p>
                <h3 className="mt-3 text-base font-semibold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {p.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title={assessmentPage.cta.title}
        subtitle={assessmentPage.cta.subtitle}
        primaryCta={assessmentPage.cta.primaryCta}
      />
    </>
  );
}
