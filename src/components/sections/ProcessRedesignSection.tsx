import Link from "next/link";
import { ArrowRight, Calculator, CheckCircle2 } from "lucide-react";
import { featuredIndustryUseCases } from "@/lib/process-redesign";
import { SectionHeader } from "./SectionHeader";

export function ProcessRedesignSection() {
  return (
    <section id="featured-use-cases" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeader
          eyebrow="Two concrete starting points"
          title="Use cases with a measurable baseline—not a generic AI promise."
          subtitle="These scenarios show how the value case is structured. The assumptions are illustrative; the diagnostic replaces them with the client's actual volumes, costs, constraints and KPI definitions."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featuredIndustryUseCases.map((useCase) => (
            <article key={useCase.slug} className="flex flex-col rounded-2xl border border-line bg-canvas p-7 shadow-soft sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">{useCase.industry}</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink-900">{useCase.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">{useCase.challenge}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-800"><strong>Approach:</strong> {useCase.approach}</p>

              <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-800">
                  <Calculator className="h-4 w-4" /> {useCase.illustrativeRoi.label}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{useCase.illustrativeRoi.calculation}</p>
                <p className="mt-2 text-xl font-semibold text-ink-950">{useCase.illustrativeRoi.result}</p>
                <p className="mt-2 text-xs leading-relaxed text-ink-500">{useCase.illustrativeRoi.caveat}</p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-ink-900">KPIs to baseline and track</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {useCase.kpis.map((kpi) => (
                    <li key={kpi} className="flex items-start gap-2 text-sm leading-relaxed text-ink-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" /> {kpi}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-ink-600">{useCase.accelerator}</p>
              <Link href={`/manufacturing-use-cases/${useCase.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800">
                Review the full workflow <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
