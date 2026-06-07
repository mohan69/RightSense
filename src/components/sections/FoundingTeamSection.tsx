import { Link as LinkIcon } from "lucide-react";
import { aboutPage } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";
import { FounderImage } from "@/components/ui/FounderImage";

export function FoundingTeamSection() {
  const { title, subtitle, members } = aboutPage.foundingTeam;

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((founder) => (
            <article
              key={founder.id}
              className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-soft transition-colors hover:border-brand-200"
            >
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border border-line bg-canvas">
                <FounderImage
                  src={founder.image}
                  alt={`${founder.name}, ${founder.role} at RightSense Technologies`}
                  initials={founder.initials}
                />
              </div>

              <h3 className="mt-5 text-center text-lg font-semibold text-ink-900">
                {founder.name}
              </h3>
              <p className="mt-1 text-center text-sm font-medium text-brand-700">
                {founder.role}
              </p>

              <p className="mt-4 text-sm text-ink-600 leading-relaxed text-pretty">
                {founder.bio}
              </p>

              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 self-center text-sm font-medium text-brand-700 hover:text-brand-800"
                aria-label={`${founder.name} on LinkedIn`}
              >
                <LinkIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
