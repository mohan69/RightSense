import type { MoatPillar } from "@/types/site";

export function PillarCard({ pillar }: { pillar: MoatPillar }) {
  return (
    <div className="rounded-xl border border-line bg-canvas p-6 hover:border-brand-200 transition-colors">
      <span className="text-xs font-bold tracking-[0.14em] text-brand-700">
        {pillar.num}
      </span>
      <h3 className="mt-3 text-base font-semibold text-ink-900">
        {pillar.title}
      </h3>
      <p className="mt-2 text-sm text-ink-600 leading-relaxed">
        {pillar.description}
      </p>
    </div>
  );
}
