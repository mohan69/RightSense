import type { PageHeroData } from "@/types/site";

export function PageHero({ eyebrow, title, subtitle }: PageHeroData) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink-50 via-white to-white border-b border-line">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[460px] light-glow-soft"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[460px] light-grid [mask-image:radial-gradient(ellipse_60%_55%_at_30%_30%,black,transparent_75%)]"
      />
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 sm:pt-20 sm:pb-16">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 text-balance">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 text-lg text-ink-600 leading-relaxed">{subtitle}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
