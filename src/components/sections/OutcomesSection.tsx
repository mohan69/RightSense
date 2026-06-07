import { outcomeIcons } from "@/lib/icons";
import { outcomes, outcomesSection } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function OutcomesSection() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeader
          eyebrow="The seven numbers that matter"
          title={outcomesSection.title}
          subtitle={outcomesSection.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {outcomes.map((o) => {
            const Icon =
              outcomeIcons[o.icon as keyof typeof outcomeIcons];
            return (
              <div
                key={o.id}
                className="rounded-xl border border-line bg-white p-6 hover:border-brand-200 hover:shadow-soft transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                  <Icon className="h-5 w-5 text-brand-600" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {o.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
