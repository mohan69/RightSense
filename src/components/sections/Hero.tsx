import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-50 via-white to-white"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(ellipse_at_top,rgba(28,71,216,0.10),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[640px] [background-image:linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />

      <div className="mx-auto max-w-5xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-1.5 text-sm font-medium text-ink-700 shadow-soft backdrop-blur">
          <Compass className="h-3.5 w-3.5 text-brand-600" />
          {hero.eyebrow}
        </div>

        <h1 className="mt-7 text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-ink-900 text-balance leading-[1.1]">
          {hero.headline}
        </h1>

        <p className="mt-6 text-lg text-ink-600 max-w-3xl mx-auto leading-relaxed">
          {hero.subheadline}
        </p>

        <p className="mt-4 text-base text-ink-500 max-w-3xl mx-auto leading-relaxed">
          {hero.support}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href={hero.primaryCta.href}>
            <Button size="lg" className="px-7">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={hero.secondaryCta.href}>
            <Button variant="outline" size="lg" className="px-7">
              {hero.secondaryCta.label}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
