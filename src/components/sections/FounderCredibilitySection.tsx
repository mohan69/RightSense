import { aboutPage } from "@/lib/content";
import { FounderImage } from "@/components/ui/FounderImage";
import { ShieldCheck } from "lucide-react";

export function FounderCredibilitySection() {
  const mohan = aboutPage.foundingTeam.members.find((m) => m.id === "mohan-babu");
  if (!mohan) return null;

  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border border-line bg-white shadow-soft">
              <FounderImage
                src={mohan.image}
                alt={`${mohan.name}, ${mohan.role} at RightSense Technologies`}
                initials={mohan.initials}
              />
            </div>
            <h3 className="mt-5 text-center text-lg font-semibold text-ink-900">{mohan.name}</h3>
            <p className="mt-1 text-center text-sm font-medium text-brand-700">{mohan.role}</p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">
              Founder-led engagement
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-ink-900">
              Your engagement is led by a named founder, with an accountable executive sponsor on your side.
            </h2>
            <p className="mt-4 text-sm text-ink-600 leading-relaxed">{mohan.bio}</p>
            <p className="mt-4 text-sm text-ink-600 leading-relaxed">
              {aboutPage.founderExecution.body}
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-ink-700 sm:grid-cols-2">
              {[
                "Senior practitioners run every engagement",
                "No junior teams, no offshore hand-offs",
                "Measurable business impact with an owner",
                "Value verified before scale",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
