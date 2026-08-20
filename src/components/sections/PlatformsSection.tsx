import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { platformIcons } from "@/lib/icons";
import { ecosystemAdvaitha, platforms } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const canonicalDescriptions: Record<string, string> = {
  PulseIQ:
    "Connects operational evidence across ERP, CRM, CPQ, engineering, planning and execution to show what is putting revenue, margin and customer commitments at risk, what is causing it, what can still be recovered and whether the resulting action created verified business value.",
  WinsProposal:
    "Turns proposals, RFP responses and pricing decisions into a learning loop that improves win rate, proposal velocity and margin protection.",
  TalentPulse:
    "Connects talent acquisition, workforce capacity, skills, readiness and productivity signals so leaders can see whether the organization has the people and capability to deliver its commitments.",
};

export function PlatformsSection() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeader
          eyebrow="RightSense ecosystem"
          title="Architecture above. Purpose-built platforms where acceleration matters."
          subtitle="Advaitha defines strategy, architecture and governance. RightSense provides transformation, integration and delivery capability. PulseIQ, WinsProposal and TalentPulse accelerate specific operating outcomes where there is a clear fit — without forcing a product-first transformation."
        />

        <a
          href={ecosystemAdvaitha.href}
          target="_blank"
          rel="noreferrer"
          className="mt-12 block rounded-2xl border border-brand-200 bg-brand-50 p-7 shadow-soft transition-shadow hover:shadow-elev"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Advisory & architecture</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink-900">{ecosystemAdvaitha.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand-700">{ecosystemAdvaitha.summary}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-700">{ecosystemAdvaitha.description}</p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-brand-700" />
          </div>
        </a>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {platforms.map((p) => {
            const Icon = platformIcons[p.icon as keyof typeof platformIcons];
            return (
              <div
                key={p.href}
                className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-soft hover:shadow-elev transition-shadow"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink-900">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-700">{p.summary}</p>
                <p className="mt-4 text-sm text-ink-600 leading-relaxed flex-1">
                  {canonicalDescriptions[p.name] ?? p.description}
                </p>
                {p.outcomes && p.outcomes.length > 0 ? (
                  <ul className="mt-5 space-y-2 border-t border-line pt-5">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-ink-700">
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
