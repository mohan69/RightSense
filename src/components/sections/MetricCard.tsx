import type { CockpitMetric } from "@/types/site";

export function MetricCard({ metric }: { metric: CockpitMetric }) {
  return (
    <div className="rounded-xl border border-line bg-white p-5 hover:border-brand-200 transition-colors">
      <div className="flex items-baseline gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
        <h3 className="text-sm font-semibold text-ink-900">{metric.label}</h3>
      </div>
      <p className="mt-2 text-sm text-ink-600 leading-relaxed">
        {metric.description}
      </p>
    </div>
  );
}
