import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleDollarSign, Radar, ShieldCheck, Target } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { pageMetadata } from "@/lib/seo";

const title = "PulseIQ — Industrial Decision & Value Intelligence";
const description =
  "PulseIQ connects enterprise evidence and approved external signals to customer commitments, quantifies economic exposure, guides governed action and keeps modeled opportunity separate from verified value.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/pulseiq",
});

const questions = [
  {
    icon: Radar,
    title: "What is economically at risk?",
    text: "Trace operational and external signals to the exact customer commitments, revenue, margin, delivery, LD and cash exposure they can affect.",
  },
  {
    icon: Target,
    title: "What can leadership still change?",
    text: "Identify the decision window, accountable owner and governed actions while people retain authority over consequential decisions.",
  },
  {
    icon: CircleDollarSign,
    title: "What value actually happened?",
    text: "Separate modeled exposure, potential protectable value, observed outcomes and independently verified value in a governed Value Ledger.",
  },
];

const proofSteps = [
  "Bring one economically important management question.",
  "Agree the smallest read-only evidence scope needed to test it.",
  "RightSense owns source discovery, mapping, entity resolution and correlation.",
  "PulseIQ builds the evidence-to-commitment path and quantifies modeled economic exposure.",
  "Leadership acts only through governed human decision authority.",
  "Observed outcomes and verified value are measured separately from modeled opportunity.",
];

export default function PulseIQPage() {
  return (
    <>
      <PageHero
        eyebrow="Industrial Decision & Value Intelligence"
        title="Protect the economics of every customer commitment."
        subtitle="PulseIQ shows what is at risk, why, what can still change and what value was actually protected or recovered — using connected enterprise evidence rather than another isolated dashboard."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionHeader
            eyebrow="The management problem"
            title="Your systems record events. Leadership needs to understand economic consequence."
            subtitle="A late engineering release, supplier distress signal or logistics disruption matters only when you can connect it to the customer commitments and financial outcomes that depend on it."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {questions.map(({ icon: Icon, title: cardTitle, text }) => (
              <article key={cardTitle} className="rounded-2xl border border-line bg-canvas p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink-900">{cardTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">Founding Customer Value Proof</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900">
                Prove value before asking the customer to trust the platform.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">
                PulseIQ is entering the market with a proof-first commercial model. Early customers should experience the product on their own management problem before making a significant platform commitment.
              </p>
              <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5 text-sm font-semibold leading-7 text-ink-800">
                If PulseIQ cannot surface a credible economic signal from the agreed evidence, stop. If it can, agree how value will be verified and then decide whether continuous use is worth paying for.
              </div>
              <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-ink-700">
                <ShieldCheck className="h-5 w-5 text-emerald-600" /> Read-only first · tenant-isolated · no source-system writeback · human decision authority
              </div>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {proofSteps.map((step, index) => (
                <li key={step} className="rounded-2xl border border-line bg-white p-6">
                  <span className="text-xs font-bold tracking-[0.14em] text-brand-700">0{index + 1}</span>
                  <p className="mt-3 text-sm leading-7 text-ink-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">What we can stand behind today</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900">
            One runtime. Different enterprise landscapes. Configuration, not customer-specific code.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-ink-600">
            PulseIQ has proven the same governed activation runtime across materially different reference landscapes using customer-specific mappings and policies while preserving a common evidence, commitment and economic-value model.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-ink-500">
            That does not mean every enterprise system is instant plug-and-play. It means supported source patterns can move from approved evidence to the first economically meaningful signal without creating a customer-specific product fork.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="https://pulseiq.co.in/demo/supplier-distress" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
              See the supplier-risk proof <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-800">
              Discuss a founding-customer proof <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Bring one customer-commitment problem. Let PulseIQ prove whether meaningful value is there."
        subtitle="No large platform commitment is required to begin the conversation. Start with the management question, agree the evidence boundary, prove the economic signal and scale only after value is demonstrated."
        primaryCta={{ label: "Start a Value Proof", href: "https://pulseiq.co.in/book-demo" }}
        secondaryCta={{ label: "Explore PulseIQ", href: "https://pulseiq.co.in/" }}
      />
    </>
  );
}
