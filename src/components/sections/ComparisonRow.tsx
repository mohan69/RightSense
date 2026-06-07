import { ArrowRight } from "lucide-react";
import type { MoatComparison } from "@/types/site";

export function ComparisonRow({
  comparison,
}: {
  comparison: MoatComparison;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 lg:p-7">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            {comparison.competitor}
          </p>
          <p className="mt-2 text-sm text-ink-600 leading-relaxed">
            {comparison.competitorApproach}
          </p>
        </div>
        <div
          aria-hidden
          className="hidden lg:flex h-9 w-9 items-center justify-center rounded-full bg-brand-50"
        >
          <ArrowRight className="h-4 w-4 text-brand-700" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            RightSense
          </p>
          <p className="mt-2 text-sm font-medium text-ink-900 leading-relaxed">
            {comparison.rightsenseApproach}
          </p>
        </div>
      </div>
    </div>
  );
}
