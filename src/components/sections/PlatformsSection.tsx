import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { platformIcons } from "@/lib/icons";
import { ecosystemAdvaitha, platforms } from "@/lib/content";
import { SectionHeader } from "./SectionHeader";

const canonicalCopy: Record<string, { summary: string; description: string; outcomes: string[] }> = {
  PulseIQ: {
    summary: "Industrial Decision & Value Intelligence",
    description:
      "Connects enterprise evidence and approved external signals to customer commitments so leadership can see what is at risk, why, what can still change and what value was actually protected or recovered.",
    outcomes: [
      "Customer-commitment and economic exposure visibility",
      "Governed decisions while there is still time to act",
      "Observed outcomes kept separate from verified value",
    ],
  },
  WinsProposal: {
    summary: "Revenue & Proposal Intelligence",
    description:
      "Turns complex industrial opportunities, proposals, RFP responses and pricing decisions into a governed learning loop that improves qualification, response speed, win rate and margin discipline.",
    outcomes: ["Faster proposal execution", "Stronger qualification and pricing discipline", "Win/loss learning across opportunities"],
  },
  TalentPulse: {
    summary: "Talent Intelligence",
    description:
      "Connects hiring, workforce capacity, skills, readiness and productivity signals so leaders can see whether the organization has the people and capability to deliver its commitments.",
    outcomes: ["Capacity and skill visibility", "Readiness and attrition risk", "Workforce signals connected to delivery outcomes"],
  },
};

export function PlatformsSection() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <SectionHeader
          eyebrow="RightSense ecosystem"
          title="Architecture above. Purpose-built platforms only where they shorten the path to proven value."
          subtitle="Advaitha defines strategy, architecture and governance. RightSense provides transformation and delivery. PulseIQ, WinsProposal and TalentPulse are used when a purpose-built platform clearly accelerates an outcome worth proving — not because every customer must buy the same stack."
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
              <h3 className="mt-3 text-2xl font-semibold text-ink-900">Advaitha</h3>
              <p className="mt-1 text-sm font-medium text-brand-700">Enterprise AI Architecture & Advisory</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                Helps industrial enterprises define the economic question, evidence boundary, target architecture, governance and proof-to-scale path before making a large AI or platform commitment.
              </p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-brand-700" />
          </div>
        </a>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {platforms.map((p) => {
            const Icon = platformIcons[p.icon as keyof typeof platformIcons];
            const copy = canonicalCopy[p.name];
            return (
              <div key={p.href} className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-soft hover:shadow-elev transition-shadow">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink-900">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-brand-700">{copy?.summary ?? p.summary}</p>
                <p className="mt-4 text-sm text-ink-600 leading-relaxed flex-1">{copy?.description ?? p.description}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {(copy?.outcomes ?? p.outcomes ?? []).map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-ink-700">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800">
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
