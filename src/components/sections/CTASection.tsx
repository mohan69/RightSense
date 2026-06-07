import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CtaLink } from "@/types/site";

type CTASectionProps = {
  title: string;
  subtitle: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
};

function CtaButton({ cta }: { cta: CtaLink }) {
  const isExternal = cta.href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex"
      >
        <Button
          size="lg"
          className="px-7 bg-white text-ink-900 hover:bg-ink-100"
        >
          {cta.label}
          <ExternalLink className="h-4 w-4" />
        </Button>
      </a>
    );
  }

  return (
    <Link href={cta.href} className="inline-flex">
      <Button
        size="lg"
        className="px-7 bg-white text-ink-900 hover:bg-ink-100"
      >
        {cta.label}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Link>
  );
}

function SecondaryCtaButton({ cta }: { cta: CtaLink }) {
  const isExternal = cta.href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex"
      >
        <Button
          variant="outline"
          size="lg"
          className="px-7 border-white/20 text-white bg-white/5 hover:bg-white/10"
        >
          {cta.label}
          <ExternalLink className="h-4 w-4" />
        </Button>
      </a>
    );
  }

  return (
    <Link href={cta.href} className="inline-flex">
      <Button
        variant="outline"
        size="lg"
        className="px-7 border-white/20 text-white bg-white/5 hover:bg-white/10"
      >
        {cta.label}
      </Button>
    </Link>
  );
}

export function CTASection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:60px_60px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(28,71,216,0.30),transparent_60%)]"
      />

      <div className="relative mx-auto max-w-4xl px-6 py-24 sm:py-28 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-white text-balance leading-[1.15]">
          {title}
        </h2>
        <p className="mt-5 text-lg text-ink-200 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <CtaButton cta={primaryCta} />
          {secondaryCta ? <SecondaryCtaButton cta={secondaryCta} /> : null}
        </div>
      </div>
    </section>
  );
}
