import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { FitWithPlatform } from "@/types/site";

type FitCalloutProps = FitWithPlatform & {
  cta?: { label: string; href: string };
};

export function FitCallout({ title, body, cta }: FitCalloutProps) {
  return (
    <div className="rounded-2xl border border-brand-200 bg-brand-50/40 p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
        Fit with the platform family
      </p>
      <h3 className="mt-3 text-xl font-semibold text-ink-900">{title}</h3>
      <p className="mt-3 text-base text-ink-700 leading-relaxed">{body}</p>
      {cta ? (
        <Link
          href={cta.href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          {cta.label}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      ) : null}
    </div>
  );
}
