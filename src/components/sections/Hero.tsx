import Link from "next/link";
import { ArrowRight, Factory, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      <div aria-hidden className="absolute inset-0 -z-10 dark-hero-bg" />
      <div aria-hidden className="absolute inset-0 -z-10 dark-glow" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 dark-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent_78%)]"
      />

      <div className="mx-auto max-w-5xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white shadow-soft backdrop-blur-sm">
          <Factory className="h-3.5 w-3.5 text-brand-300" />
          Enterprise AI for manufacturing and project businesses
        </div>

        <h1 className="mt-7 text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-white text-balance leading-[1.1]">
          Enterprise AI. Measurable Business Outcomes.
        </h1>

        <p className="mt-6 text-lg text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
          RightSense helps manufacturing, EPC, valve and pump businesses connect operational evidence to the decisions that protect revenue, margin, delivery and cash.
        </p>

        <p className="mt-4 text-base text-blue-100/70 max-w-3xl mx-auto leading-relaxed">
          Start with one economically important problem. PulseIQ provides the initial evidence-to-outcome layer; our founders lead the diagnostic, proof and decision to scale.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-blue-100/80">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Read-only first</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Human decision authority</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-300" /> Value verified before scale</span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact?source=48-hour-diagnostic">
            <Button size="lg" className="px-7 shadow-lg">
              Start the 48-Hour Diagnostic
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="#featured-use-cases">
            <Button variant="outlineDark" size="lg" className="px-7">
              See Two Use Cases
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
