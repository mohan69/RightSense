import { problemIcons } from "@/lib/icons";
import { problemPoints, problemSection } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function ProblemSection() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeader
          eyebrow="The reality on the ground"
          title={problemSection.title}
          subtitle={problemSection.subtitle}
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problemPoints.map((point, i) => {
            const Icon =
              problemIcons[point.icon as keyof typeof problemIcons];
            return (
              <li
                key={i}
                className="rounded-xl border border-line bg-white p-5 shadow-soft hover:shadow-elev transition-shadow"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50">
                  <Icon className="h-[18px] w-[18px] text-brand-600" />
                </div>
                <p className="mt-4 text-sm text-ink-700 leading-relaxed">
                  {point.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
