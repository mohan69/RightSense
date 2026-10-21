import { notFound } from "next/navigation";
import { Calculator, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { featuredIndustryUseCases, processCases } from "@/lib/process-redesign";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return processCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = processCases.find((item) => item.slug === slug);
  const featured = featuredIndustryUseCases.find((item) => item.slug === slug);
  return useCase
    ? pageMetadata({
        title: featured?.title ?? useCase.title,
        description: featured?.challenge ?? useCase.outcome,
        path: `/manufacturing-use-cases/${slug}`,
      })
    : {};
}

export default async function ManufacturingUseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = processCases.find((item) => item.slug === slug);
  if (!useCase) notFound();

  const featured = featuredIndustryUseCases.find((item) => item.slug === slug);

  return (
    <>
      <PageHero eyebrow={featured?.industry ?? "Illustrative manufacturing use case"} title={featured?.title ?? useCase.title} subtitle={useCase.outcome} />
      <article className="mx-auto max-w-4xl space-y-10 px-6 py-16">
        <p className="rounded-lg border border-brand-200 bg-brand-50 p-4 text-sm leading-relaxed text-brand-800">
          Proposed workflow for validation with the customer team. The design, assumptions and ROI scenarios are illustrative—not customer results, guarantees or forecasts.
        </p>

        {featured ? (
          <section className="rounded-2xl border border-line bg-canvas p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Concrete starting point</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink-900">{featured.title}</h2>
            <p className="mt-4 leading-relaxed text-ink-600">{featured.challenge}</p>
            <p className="mt-4 leading-relaxed text-ink-700"><strong>Proposed approach:</strong> {featured.approach}</p>
          </section>
        ) : null}

        {[["Current pain", useCase.pain], ["Business impact", useCase.impact]].map(([title, text]) => (
          <section key={title}>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-3 leading-relaxed text-ink-600">{text}</p>
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-semibold">Redesigned Human + AI workflow</h2>
          <ol className="mt-4 list-decimal space-y-4 pl-6 text-ink-700">
            {useCase.workflow.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </section>

        {featured ? (
          <section className="rounded-2xl border border-brand-200 bg-brand-50 p-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-800">
              <Calculator className="h-4 w-4" /> {featured.illustrativeRoi.label}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-700">{featured.illustrativeRoi.calculation}</p>
            <p className="mt-2 text-2xl font-semibold text-ink-950">{featured.illustrativeRoi.result}</p>
            <p className="mt-2 text-xs leading-relaxed text-ink-500">{featured.illustrativeRoi.caveat}</p>
          </section>
        ) : null}

        {[["Change and adoption", useCase.adoption], ["Systems and data", useCase.data]].map(([title, text]) => (
          <section key={title}>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-3 leading-relaxed text-ink-600">{text}</p>
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-semibold">KPIs with clear definitions</h2>
          {featured ? (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {featured.kpis.map((kpi) => (
                <li key={kpi} className="flex items-start gap-2 rounded-xl border border-line bg-canvas p-4 text-sm text-ink-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" /> {kpi}
                </li>
              ))}
            </ul>
          ) : null}
          <ul className="mt-5 list-disc space-y-3 pl-6 text-ink-700">
            {useCase.kpis.map((kpi) => <li key={kpi}>{kpi}</li>)}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Measurement and verification</h2>
          <p className="mt-3 leading-relaxed text-ink-600">{useCase.measurement}</p>
        </section>

        <section className="border-t border-line pt-8">
          <h2 className="text-xl font-semibold">Accelerators where relevant</h2>
          <p className="mt-3 text-ink-600">{featured?.accelerator ?? useCase.accelerator}</p>
        </section>
      </article>
      <CTASection
        title="Test this use case against your actual baseline"
        subtitle="Bring the current workflow, a named owner and the evidence available today. RightSense will confirm whether the 48-hour diagnostic is the right next step."
        primaryCta={{ label: "Start a Diagnostic Request", href: "/contact?source=48-hour-diagnostic" }}
        secondaryCta={{ label: "Explore all use cases", href: "/manufacturing-use-cases" }}
      />
    </>
  );
}
