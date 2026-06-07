import { industryIcons } from "@/lib/icons";
import { industries, industriesSection } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function IndustriesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeader
          eyebrow="Industry focus"
          title={industriesSection.title}
          subtitle={industriesSection.subtitle}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((ind) => {
            const Icon =
              industryIcons[ind.icon as keyof typeof industryIcons];
            return (
              <div
                key={ind.id}
                className="rounded-xl border border-line bg-canvas p-5 hover:border-brand-200 transition-colors"
              >
                <Icon className="h-5 w-5 text-brand-600" />
                <h3 className="mt-3 text-sm font-semibold text-ink-900">
                  {ind.name}
                </h3>
                <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">
                  {ind.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
