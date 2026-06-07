import type { Capability } from "@/types/site";

type CapabilityCardProps = {
  capability: Capability;
};

export function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <div className="rounded-xl border border-line bg-white p-6 hover:border-brand-200 transition-colors">
      <div className="flex h-2 w-10 rounded-full bg-brand-100" />
      <h3 className="mt-4 text-base font-semibold text-ink-900">
        {capability.title}
      </h3>
      <p className="mt-2 text-sm text-ink-600 leading-relaxed">
        {capability.description}
      </p>
    </div>
  );
}
