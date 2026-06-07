import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { platformIcons } from "@/lib/icons";
import { platforms } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

export function PlatformsSection() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeader
          eyebrow="Three platforms, one connected truth layer"
          title="Three platforms. One connected truth layer."
          subtitle="Each RightSense platform is built to solve a specific operating problem — and together they form the only connected truth layer an enterprise needs."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {platforms.map((p) => {
            const Icon =
              platformIcons[p.icon as keyof typeof platformIcons];
            return (
              <div
                key={p.href}
                className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-soft hover:shadow-elev transition-shadow"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink-900">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-brand-700">
                  {p.summary}
                </p>
                <p className="mt-4 text-sm text-ink-600 leading-relaxed flex-1">
                  {p.description}
                </p>
                {p.outcomes && p.outcomes.length > 0 ? (
                  <ul className="mt-5 space-y-2 border-t border-line pt-5">
                    {p.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-2 text-sm text-ink-700"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <Link
                  href={p.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  Explore {p.name}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
