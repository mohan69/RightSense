import type { PageHeroData } from "@/types/site";

export function PageHero({ eyebrow, title, subtitle }: PageHeroData) {
  return (
    <section className="relative overflow-hidden text-white">
      <div aria-hidden className="absolute inset-0 -z-10 dark-hero-bg" />
      <div aria-hidden className="absolute inset-0 -z-10 dark-glow" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 dark-grid [mask-image:radial-gradient(ellipse_65%_60%_at_30%_30%,black,transparent_78%)]"
      />
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-200">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-balance">
            {title}
          </h1>
           {subtitle ? (
             <p className="mt-5 text-lg text-blue-50 leading-relaxed">
               {subtitle}
             </p>
           ) : null}
        </div>
      </div>
    </section>
  );
}
