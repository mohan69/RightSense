import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { diagnostic } from "@/lib/content";

export function DiagnosticSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
              RightSense flagship
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 text-balance">
              {diagnostic.title}
            </h2>
            <p className="mt-4 text-lg text-ink-600 leading-relaxed">
              {diagnostic.subtitle}
            </p>

            <ul className="mt-8 space-y-3">
              {diagnostic.deliverables.map((d, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-ink-700"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 text-brand-700 text-[11px] font-semibold">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href={diagnostic.cta.href}>
                <Button>
                  {diagnostic.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-line bg-canvas p-7">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink-700">
                <Clock className="h-4 w-4 text-brand-600" />
                The 48-hour arc
              </div>
              <ol className="mt-7 space-y-6">
                {diagnostic.steps.map((s) => (
                  <li
                    key={s.num}
                    className="grid grid-cols-[auto_1fr] gap-4 sm:gap-5"
                  >
                    <div className="flex flex-col items-center pt-0.5">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white text-xs font-semibold">
                        {s.num}
                      </span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                        <h4 className="text-sm font-semibold text-ink-900">
                          {s.title}
                        </h4>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                          {s.window}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-ink-600 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
