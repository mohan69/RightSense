import { Building2, Droplets, Factory, Wrench } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const industryValue = [
  {
    name: "Industrial manufacturing",
    icon: Factory,
    problem: "Production, quality, maintenance and commercial data rarely explain the same outcome.",
    value: "Connect the evidence behind yield, rework, downtime, delivery and working-capital decisions.",
  },
  {
    name: "EPC companies",
    icon: Building2,
    problem: "Engineering releases, vendor milestones, change orders and billing drift across project systems.",
    value: "See schedule, margin and cash exposure early enough for project leaders to intervene.",
  },
  {
    name: "Valve manufacturers",
    icon: Wrench,
    problem: "Engineer-to-order bids depend on specifications, drawings, costing, approvals and certificates.",
    value: "Reduce quote friction while preserving technical compliance, approval control and bid margin.",
  },
  {
    name: "Pump manufacturers",
    icon: Droplets,
    problem: "Configuration, dealer demand, service history and spares live in separate commercial systems.",
    value: "Improve configuration decisions, aftermarket visibility and service-led margin without another dashboard.",
  },
];

export function IndustryValueSection() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeader
          eyebrow="Where we start"
          title="Different industrial models. Different value levers."
          subtitle="The first question is not where to add AI. It is which operating decision is economically important, measurable and narrow enough to prove."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {industryValue.map(({ name, icon: Icon, problem, value }) => (
            <article key={name} className="rounded-2xl border border-line bg-white p-7 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-ink-900">{name}</h3>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink-600">{problem}</p>
              <p className="mt-3 text-sm font-medium leading-relaxed text-ink-900">{value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
