import { whyRightSense } from "@/lib/content";
import { whyRightSenseIcons } from "@/lib/icons";
import { SectionHeader } from "./SectionHeader";

export function WhyRightSenseSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeader
          eyebrow={whyRightSense.eyebrow}
          title={whyRightSense.title}
          subtitle={whyRightSense.subtitle}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyRightSense.points.map((point) => {
            const Icon =
              whyRightSenseIcons[point.icon as keyof typeof whyRightSenseIcons];
            return (
              <div
                key={point.id}
                className="rounded-xl border border-line bg-canvas p-6 hover:border-brand-200 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                  <Icon className="h-5 w-5 text-brand-600" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
