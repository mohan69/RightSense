import { truthIcons } from "@/lib/icons";
import { moat, truthSources } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function MoatSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeader
          eyebrow={moat.eyebrow}
          title={moat.title}
          subtitle={moat.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {truthSources.map((source) => {
            const Icon =
              truthIcons[source.icon as keyof typeof truthIcons];
            return (
              <div
                key={source.id}
                className="rounded-xl border border-line bg-canvas p-6 hover:border-brand-200 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-line shadow-soft">
                  <Icon className="h-5 w-5 text-brand-600" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">
                  {source.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                  {source.description}
                </p>
              </div>
            );
          })}
        </div>

        {moat.note ? (
          <p className="mt-12 mx-auto max-w-3xl text-center text-sm text-ink-500 leading-relaxed">
            {moat.note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
