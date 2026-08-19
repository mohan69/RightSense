import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { ecosystemAdvaitha, platforms, platformsPage } from "@/lib/content";
import { platformIcons } from "@/lib/icons";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: platformsPage.hero.title,
  description: platformsPage.hero.subtitle,
  path: "/platforms",
});

export default function PlatformsPage() {
  return (
    <>
      <PageHero
        eyebrow={platformsPage.hero.eyebrow}
        title={platformsPage.hero.title}
        subtitle={platformsPage.hero.subtitle}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
          <p className="text-lg text-ink-600 leading-relaxed">
            {platformsPage.portfolioIntro}
          </p>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader title={platformsPage.portfolioLogicTitle} />
          <a
            href={ecosystemAdvaitha.href}
            target="_blank"
            rel="noreferrer"
            className="mt-10 block rounded-2xl border border-brand-200 bg-brand-50 p-7 shadow-soft transition-shadow hover:shadow-elev"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Advisory & architecture</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink-900">{ecosystemAdvaitha.name}</h2>
            <p className="mt-1 text-sm font-medium text-brand-700">{ecosystemAdvaitha.summary}</p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-700">{ecosystemAdvaitha.description}</p>
          </a>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {platformsPage.portfolioLogic.map((p) => {
              const platformData = platforms.find(
                (pl) => pl.name === p.platform
              );
              const Icon = platformData?.icon
                ? platformIcons[
                    platformData.icon as keyof typeof platformIcons
                  ]
                : null;
              return (
                <div
                  key={p.platform}
                  className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-soft hover:shadow-elev transition-shadow"
                >
                  {Icon ? (
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  ) : null}
                  <h3 className="mt-5 text-xl font-semibold text-ink-900">
                    {p.platform}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-700">
                    {p.role}
                  </p>
                  <p className="mt-4 text-sm text-ink-600 leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <Link
                    href={p.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    Explore {p.platform}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
          <SectionHeader
            title={platformsPage.connectionTitle}
            subtitle={platformsPage.connectionBody}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {platformsPage.portfolioLogic.map((p, i) => (
              <div
                key={p.platform}
                className="rounded-xl border border-line bg-canvas p-5"
              >
                <span className="text-xs font-bold tracking-[0.14em] text-brand-700">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-ink-900">
                  {p.platform}
                </h3>
                <p className="mt-1 text-sm text-ink-600 leading-relaxed">
                  {p.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={platformsPage.cta.title}
        subtitle={platformsPage.cta.subtitle}
        primaryCta={platformsPage.cta.primaryCta}
        secondaryCta={platformsPage.cta.secondaryCta}
      />
    </>
  );
}
