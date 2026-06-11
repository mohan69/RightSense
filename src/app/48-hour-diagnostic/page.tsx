import type { Metadata } from "next";
import { BarChart3, CheckCircle2, Layers, Percent, Shield, Target, Truck } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { diagnosticPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: diagnosticPage.hero.title,
  description: diagnosticPage.hero.subtitle,
  path: "/48-hour-diagnostic",
});

const pillarIcons = [
  <BarChart3 key="r" className="h-6 w-6 text-brand-600" />,
  <Layers key="o" className="h-6 w-6 text-brand-600" />,
  <Percent key="m" className="h-6 w-6 text-brand-600" />,
  <Shield key="c" className="h-6 w-6 text-brand-600" />,
  <Truck key="v" className="h-6 w-6 text-brand-600" />,
  <Target key="a" className="h-6 w-6 text-brand-600" />,
];

export default function Diagnostic48Page() {
  return (
    <>
      <PageHero
        eyebrow={diagnosticPage.hero.eyebrow}
        title={diagnosticPage.hero.title}
        subtitle={diagnosticPage.hero.subtitle}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            title={diagnosticPage.whoItsFor.title}
            titleClassName="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-950"
          />
          <ul className="mt-10 space-y-4">
            {diagnosticPage.whoItsFor.roles.map((r, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-line/60 bg-white/80 p-6 shadow-sm"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-semibold shrink-0">
                  {i + 1}
                </span>
                <span className="text-base text-ink-800 leading-relaxed">
                  {r}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <SectionHeader
            title={diagnosticPage.painSection.title}
            subtitle={diagnosticPage.painSection.subtitle}
            titleClassName="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-950"
          />
          <ul className="mt-12 space-y-4">
            {diagnosticPage.painSection.points.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-base text-ink-800 leading-relaxed"
              >
                <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-600 shrink-0" />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="Inputs"
            title={diagnosticPage.inputsSummary.title}
            titleClassName="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-950"
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {diagnosticPage.inputsSummary.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-line/60 bg-canvas/50 p-6"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-success-600 shrink-0" />
                <span className="text-base text-ink-800 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="Six pillars"
            title={diagnosticPage.pillarsSection.title}
            subtitle={diagnosticPage.pillarsSection.subtitle}
            titleClassName="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-950"
          />
          <div className="mt-14 space-y-8">
            {diagnosticPage.pillarsSection.pillars.map((p, i) => (
              <div
                key={p.num}
                className="rounded-2xl border border-line/60 bg-white/80 p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 shrink-0">
                    {pillarIcons[i]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-bold tracking-[0.14em] text-brand-700">
                        Pillar {p.num}
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-ink-950 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-base text-ink-600 leading-relaxed">
                      {p.summary}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {p.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-base text-ink-800 leading-relaxed"
                        >
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-600 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            title={diagnosticPage.process.title}
            titleClassName="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-950"
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {diagnosticPage.process.steps.map((s) => (
              <li
                key={s.num}
                className="relative rounded-2xl border border-line/60 bg-canvas/50 p-7 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-baseline gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-semibold shrink-0">
                    {s.num}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {s.window}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-950">
                  {s.title}
                </h3>
                <p className="mt-3 text-base text-ink-700 leading-relaxed">
                  {s.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="Deliverables"
            title={diagnosticPage.deliverables.title}
            titleClassName="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-950"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {diagnosticPage.deliverables.items.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-line/60 bg-white/80 p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold text-ink-950 tracking-tight">
                  {d.title}
                </h3>
                <p className="mt-4 text-base text-ink-700 leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="Standards coverage"
            title={diagnosticPage.standards.title}
            subtitle={diagnosticPage.standards.subtitle}
            titleClassName="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-950"
          />
          <div className="mt-14 space-y-10">
            {diagnosticPage.standards.categories.map((cat) => (
              <div key={cat.name}>
                <h3 className="text-lg font-semibold text-ink-950 tracking-tight">
                  {cat.name}
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base text-ink-800 leading-relaxed"
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-600 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50/80 p-6">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>Note:</strong> {diagnosticPage.standards.disclaimer}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="Trust and privacy"
            title={diagnosticPage.security.title}
            titleClassName="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-950"
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {diagnosticPage.security.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-4 rounded-2xl border border-line/60 bg-white/80 p-6 shadow-sm"
              >
                <Shield className="mt-0.5 h-5 w-5 text-brand-600 shrink-0" />
                <span className="text-base text-ink-800 leading-relaxed">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-8 sm:p-10">
            <p className="text-base text-amber-800 leading-relaxed">
              {diagnosticPage.disclaimer}
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title={diagnosticPage.cta.title}
        subtitle={diagnosticPage.cta.subtitle}
        primaryCta={diagnosticPage.cta.primaryCta}
        secondaryCta={diagnosticPage.cta.secondaryCta}
      />
    </>
  );
}
