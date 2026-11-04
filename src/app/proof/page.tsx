import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Modeled Exposure Case — SO-2841-10",
  description:
    "A synthetic/reference modeled exposure case showing how PulseIQ traces engineered customer commitments from problem to governed action to modeled value. Not a customer result.",
  path: "/proof",
});

const DISCLAIMER =
  "Modeled exposure case — synthetic/reference scenario, not a customer result; modeled value is not realized value.";

const chain = [
  { step: "Drawing approval delay", detail: "A critical drawing sits in approval while the production slot is planned." },
  { step: "Engineering / BOM release delay", detail: "The BOM release slips with the drawing, holding downstream sourcing." },
  { step: "Critical material / supplier constraint", detail: "Long-lead material cannot be confirmed without the released BOM." },
  { step: "Production slot risk", detail: "The planned slot becomes at risk as material confirmation slips." },
  { step: "Shipment risk", detail: "The customer commitment date moves into a credible slip window." },
  { step: "Revenue / margin / commitment exposure", detail: "Revenue, contribution margin and the customer commitment are now exposed." },
];

const agents = [
  {
    name: "Revenue Recovery Agent",
    question: "What intervention best protects shipment and revenue?",
    output: "Revenue exposure, protectable value, recovery options ranked by economic impact, commitment-date consequence — human approval required.",
  },
  {
    name: "Engineering Delay Agent",
    question: "Which engineering dependency is driving the delay?",
    output: "Drawing/approval dependency, BOM release consequence, engineering evidence, accountable owner, proposed release intervention.",
  },
  {
    name: "Supplier Risk Agent",
    question: "Which material or supplier constraint threatens the recovery path?",
    output: "Critical material/supplier confirmation evidence, expediting options where governed data supports them, procurement owner.",
  },
  {
    name: "Margin Protection Agent",
    question: "Can the recovery protect revenue without destroying contribution margin?",
    output: "Margin exposure, expedite/overtime/sourcing trade-off, recovery economics, recommendation boundary.",
  },
];

const valueRows = [
  { category: "Revenue", modeled: "₹3.2 Cr exposed · ₹2.4 Cr potentially protectable" },
  { category: "Margin", modeled: "₹0.6 Cr contribution margin exposed" },
  { category: "Delivery", modeled: "One customer shipment commitment at risk" },
  { category: "Cash / working capital", modeled: "Not scored — governed evidence does not exist in this scenario" },
  { category: "Productivity", modeled: "Management time from risk detection to accountable decision (measured first)" },
];

export default function ProofPage() {
  return (
    <>
      <PageHero
        eyebrow="Modeled exposure case"
        title="One engineered commitment, traced end to end."
        subtitle="Reference case SO-2841-10: structured problem → contained proof → economic signal → governed action → modeled value."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm font-medium text-amber-900 leading-relaxed">
            {DISCLAIMER}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-ink-900">1 · The structured problem</h2>
            <p className="mt-4 text-sm text-ink-600 leading-relaxed">
              An engineered-to-order manufacturer has a shipment and revenue commitment at risk. The exposure is
              not an isolated KPI exception — it is the consequence of a linked operational chain across
              engineering, sourcing and production.
            </p>
            <ol className="mt-6 space-y-3">
              {chain.map((c, i) => (
                <li key={c.step} className="rounded-xl border border-line bg-canvas p-4">
                  <p className="text-sm font-semibold text-ink-900">
                    {i + 1}. {c.step}
                    {i < chain.length - 1 ? <span aria-hidden className="text-brand-600"> →</span> : null}
                  </p>
                  <p className="mt-1 text-sm text-ink-600">{c.detail}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs text-ink-500 leading-relaxed">
              Every causal step is supported by governed evidence in the scenario, or shown as not scored / not
              proven. No hidden assumptions are presented as fact.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-ink-900">2 · The contained proof</h2>
            <p className="mt-4 text-sm text-ink-600 leading-relaxed">
              A tightly scoped, read-only proof on one order cohort: approved evidence only, human decision
              authority retained, and the smallest evidence path needed to test the management question.
            </p>
            <h2 className="mt-10 text-2xl font-semibold text-ink-900">3 · The economic signal</h2>
            <div className="mt-4 overflow-hidden rounded-xl border border-line">
              <table className="w-full text-left text-sm">
                <thead className="bg-canvas text-xs uppercase tracking-wide text-ink-500">
                  <tr>
                    <th className="px-4 py-3">Value category</th>
                    <th className="px-4 py-3">Modeled exposure signal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line bg-white">
                  {valueRows.map((r) => (
                    <tr key={r.category}>
                      <td className="px-4 py-3 font-medium text-ink-900">{r.category}</td>
                      <td className="px-4 py-3 text-ink-600">{r.modeled}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-ink-500">
              Modeled values are synthetic/reference figures from the canonical proof case specification — never
              realized value.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-canvas">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-ink-900">4 · Governed action, not autonomous execution</h2>
          <p className="mt-3 max-w-3xl text-sm text-ink-600 leading-relaxed">
            Specialist agents examine the same underlying risk without creating duplicate facts or contradictory
            actions. Every action proposal carries an accountable owner, an approver and a due date. Leadership
            chooses; PulseIQ never autonomously executes consequential decisions.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {agents.map((a) => (
              <article key={a.name} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-base font-semibold text-ink-900">{a.name}</h3>
                <p className="mt-2 text-sm font-medium text-brand-700">{a.question}</p>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{a.output}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-line bg-white p-6">
            <h3 className="text-base font-semibold text-ink-900">5 · Modeled value, verified separately</h3>
            <p className="mt-2 max-w-3xl text-sm text-ink-600 leading-relaxed">
              The proof journey keeps modeled exposure, potential protectable value, observed outcome and
              independently verified value in separate lanes. After any governed action, progress and verification
              evidence are recorded and the realized / protected / slipped outcome is tracked under independent
              governance — so a modeled claim is never presented as a realized benefit.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-500">{DISCLAIMER}</p>
        </div>
      </section>
    </>
  );
}
