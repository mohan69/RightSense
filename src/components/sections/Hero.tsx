import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";

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
          <Compass className="h-3.5 w-3.5 text-brand-300" />
          {hero.eyebrow}
        </div>

        <h1 className="mt-7 text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-white text-balance leading-[1.1]">
          {hero.headline}
        </h1>

        <p className="mt-6 text-lg text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
          {hero.subheadline}
        </p>

        <p className="mt-4 text-base text-blue-100/70 max-w-3xl mx-auto leading-relaxed">
          {hero.support}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href={hero.primaryCta.href}>
            <Button size="lg" className="px-7 shadow-lg">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={hero.secondaryCta.href}>
            <Button variant="outlineDark" size="lg" className="px-7">
              {hero.secondaryCta.label}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
