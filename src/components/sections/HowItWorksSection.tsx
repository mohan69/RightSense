import { howItWorksIcons } from "@/lib/icons";
import { howItWorks } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function HowItWorksSection() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeader
          eyebrow="How it works"
          title={howItWorks.title}
          subtitle={howItWorks.subtitle}
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.steps.map((step) => {
            const Icon =
              howItWorksIcons[step.icon as keyof typeof howItWorksIcons];
            return (
              <li
                key={step.num}
                className="relative rounded-2xl border border-line bg-white p-6 hover:border-brand-200 transition-colors"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                  <Icon className="h-5 w-5 text-brand-600" />
                </div>
                <p className="mt-5 text-xs font-bold tracking-[0.14em] text-brand-700">
                  {step.num}
                </p>
                <h3 className="mt-1 text-base font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
