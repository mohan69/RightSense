import Link from "next/link";
import { ArrowRight, CircleDollarSign, Handshake, Radar, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Radar,
    title: "Start with one management problem",
    description:
      "Choose a revenue, margin, delivery, cash, supplier, customer or execution risk that leadership genuinely wants to see earlier.",
  },
  {
    icon: ShieldCheck,
    title: "Use the smallest governed evidence scope",
    description:
      "RightSense owns discovery, mapping and correlation. Customer systems stay read-only and decision authority stays with people.",
  },
  {
    icon: CircleDollarSign,
    title: "Measure the economic consequence",
    description:
      "Separate modeled exposure from observed outcomes and verified value. If the evidence does not support a meaningful signal, stop.",
  },
  {
    icon: Handshake,
    title: "Scale only after value is proven",
    description:
      "For early founding customers, commercial commitment follows proof. Broader subscription and rollout come after the customer has seen value on its own evidence.",
  },
];

export function ProofFirstSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
              Founding Customer Value Proof
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 text-balance">
              We should earn the right to become part of your operating stack.
            </h2>
            <p className="mt-5 text-lg text-ink-600 leading-relaxed">
              RightSense is intentionally starting with a proof-first model. We do not ask an industrial customer to trust a large software promise before seeing whether our approach can reveal a meaningful economic signal from its own business context.
            </p>
            <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5 text-sm font-semibold leading-7 text-ink-800">
              No meaningful value demonstrated → no reason to buy the platform. Meaningful value demonstrated → agree how to verify it, then decide together whether continuous use is justified.
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button>
                  Discuss a Value Proof
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="https://pulseiq.co.in/book-demo" target="_blank" rel="noreferrer">
                <Button variant="outline">See PulseIQ Value Proof</Button>
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <article key={title} className="rounded-2xl border border-line bg-canvas p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold tracking-[0.14em] text-brand-700">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{title}</h3>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
