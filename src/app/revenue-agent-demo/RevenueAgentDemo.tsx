"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  BellRing,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  Database,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";

type ScenarioKey = "construction" | "gifting" | "hr";

type Scenario = {
  label: string;
  company: string;
  prospect: string;
  enquiry: string;
  requirement: string;
  qualifier: string;
  budget: string;
  location: string;
  meeting: string;
  owner: string;
};

const scenarios: Record<ScenarioKey, Scenario> = {
  construction: {
    label: "Construction Materials",
    company: "BuildPro Materials",
    prospect: "Ravi Kumar",
    enquiry: "Hi, I need TMT steel for a 22,000 sq ft commercial project in Bengaluru.",
    requirement: "TMT steel · commercial project",
    qualifier: "Delivery needed within 3 weeks",
    budget: "₹18–22 lakh",
    location: "Bengaluru",
    meeting: "Tomorrow · 11:30 AM",
    owner: "Enterprise Sales — South",
  },
  gifting: {
    label: "Corporate Gifting",
    company: "GiftWorks Corporate",
    prospect: "Priya Shah",
    enquiry: "We need 650 premium employee welcome kits before 30 September. Can you quote?",
    requirement: "650 employee welcome kits",
    qualifier: "Delivery deadline confirmed",
    budget: "₹6–8 lakh",
    location: "Bengaluru + Chennai",
    meeting: "Today · 4:00 PM",
    owner: "Corporate Accounts",
  },
  hr: {
    label: "HR & Payroll Services",
    company: "PeopleDesk Advisory",
    prospect: "Arun Menon",
    enquiry: "We are 85 employees and need payroll plus employment-law support. Can somebody call me?",
    requirement: "Payroll + employment law",
    qualifier: "85 employees · decision this month",
    budget: "₹1.5–2.5 lakh / year",
    location: "Bengaluru",
    meeting: "Tomorrow · 3:00 PM",
    owner: "SME Advisory",
  },
};

const stages = [
  "Enquiry received",
  "Instant response",
  "Requirement captured",
  "Lead qualified",
  "CRM synchronized",
  "Owner assigned",
  "Meeting scheduled",
] as const;

export function RevenueAgentDemo() {
  const [scenarioKey, setScenarioKey] = useState<ScenarioKey>("construction");
  const [step, setStep] = useState(0);
  const scenario = scenarios[scenarioKey];

  const messages = useMemo(
    () => [
      {
        step: 0,
        side: "in" as const,
        text: scenario.enquiry,
      },
      {
        step: 1,
        side: "out" as const,
        text: `Thanks for contacting ${scenario.company}. I can help immediately. I’ll capture a few details so the right person can respond without delay.`,
      },
      {
        step: 2,
        side: "out" as const,
        text: `I’ve captured: ${scenario.requirement}. What is the expected timeline and approximate order value?`,
      },
      {
        step: 3,
        side: "in" as const,
        text: `${scenario.qualifier}. Approximate value: ${scenario.budget}.`,
      },
      {
        step: 4,
        side: "out" as const,
        text: "Thank you. Your enquiry has been registered and shared with the appropriate sales owner.",
      },
      {
        step: 6,
        side: "out" as const,
        text: `A discussion is scheduled for ${scenario.meeting}. You’ll receive a confirmation and the assigned contact details shortly.`,
      },
    ],
    [scenario]
  );

  const resetScenario = (key: ScenarioKey) => {
    setScenarioKey(key);
    setStep(0);
  };

  const next = () => setStep((current) => Math.min(current + 1, stages.length - 1));
  const reset = () => setStep(0);

  const leadStatus = step < 3 ? "New" : step < 6 ? "Qualified" : "Meeting booked";
  const crmStatus = step >= 4 ? "Synced" : "Pending";
  const assignment = step >= 5 ? scenario.owner : "Unassigned";
  const nextAction = step >= 6 ? scenario.meeting : step >= 5 ? "Schedule customer discussion" : "Awaiting qualification";

  return (
    <div className="bg-canvas min-h-screen">
      <section className="dark-hero-bg text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-18">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              <Sparkles className="h-3.5 w-3.5" />
              SYNTHETIC REFERENCE DEMO
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              RightSense Lead-to-Revenue Automation
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
              Show a prospect how one WhatsApp enquiry can become a captured, qualified, assigned and scheduled sales opportunity — without waiting for one person to check a phone.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Choose a demo scenario</p>
            <p className="mt-1 text-sm text-ink-600">Reuse the same operating flow across different MSME lead-generation contexts.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(scenarios) as ScenarioKey[]).map((key) => {
              const active = scenarioKey === key;
              return (
                <button
                  key={key}
                  onClick={() => resetScenario(key)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-brand-600 text-white shadow-sm"
                      : "border border-line bg-white text-ink-700 hover:bg-canvas"
                  }`}
                >
                  {scenarios[key].label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr_0.8fr]">
          <div className="rounded-3xl border border-line bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success-100 text-success-700">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-ink-950">WhatsApp Business</p>
                  <p className="text-xs text-ink-500">{scenario.company} · always-on enquiry desk</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-success-700">
                <span className="h-2 w-2 rounded-full bg-success-600" /> Live
              </span>
            </div>

            <div className="mt-5 min-h-[455px] rounded-2xl bg-[#efeae2] p-4">
              <div className="space-y-3">
                {messages.filter((message) => message.step <= step).map((message, index) => (
                  <div key={`${message.step}-${index}`} className={`flex ${message.side === "out" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                        message.side === "out" ? "bg-[#d9fdd3] text-ink-900" : "bg-white text-ink-900"
                      }`}
                    >
                      {message.text}
                      <div className="mt-1 text-right text-[10px] text-ink-400">11:{42 + index}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Lead workspace</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink-950">{scenario.prospect}</h2>
                <p className="mt-1 text-sm text-ink-500">Source: WhatsApp · Demo lead RS-{scenarioKey.toUpperCase()}-001</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${step >= 3 ? "bg-success-100 text-success-700" : "bg-warning-100 text-warning-700"}`}>
                {leadStatus}
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <DataField label="Requirement" value={step >= 2 ? scenario.requirement : "Not captured"} active={step >= 2} />
              <DataField label="Location" value={step >= 2 ? scenario.location : "Not captured"} active={step >= 2} />
              <DataField label="Qualification" value={step >= 3 ? scenario.qualifier : "Not qualified"} active={step >= 3} />
              <DataField label="Potential value" value={step >= 3 ? scenario.budget : "Not estimated"} active={step >= 3} />
            </div>

            <div className="mt-6 space-y-3 rounded-2xl border border-line bg-canvas/70 p-5">
              <WorkflowRow
                icon={<Database className="h-4 w-4" />}
                title="CRM synchronization"
                value={crmStatus}
                done={step >= 4}
              />
              <WorkflowRow
                icon={<UserCheck className="h-4 w-4" />}
                title="Sales owner"
                value={assignment}
                done={step >= 5}
              />
              <WorkflowRow
                icon={<CalendarCheck2 className="h-4 w-4" />}
                title="Next action"
                value={nextAction}
                done={step >= 6}
              />
              <WorkflowRow
                icon={<BellRing className="h-4 w-4" />}
                title="Owner notification"
                value={step >= 5 ? "Sent with lead context" : "Pending"}
                done={step >= 5}
              />
            </div>

            <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
                <div>
                  <p className="text-sm font-semibold text-ink-950">Human-owned sales action</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">
                    Automation captures, structures, routes and reminds. Pricing exceptions, commitments and final commercial decisions remain with an accountable person.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-line bg-white p-6 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Revenue control view</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Metric icon={<Clock3 className="h-4 w-4" />} label="First response" value={step >= 1 ? "12 sec" : "—"} />
                <Metric icon={<Users className="h-4 w-4" />} label="Lead captured" value={step >= 2 ? "Yes" : "Pending"} />
                <Metric icon={<Database className="h-4 w-4" />} label="CRM status" value={crmStatus} />
                <Metric icon={<TrendingUp className="h-4 w-4" />} label="Opportunity" value={step >= 3 ? scenario.budget : "—"} />
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-white p-6 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Flow progress</p>
              <ol className="mt-5 space-y-3">
                {stages.map((stage, index) => (
                  <li key={stage} className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        index <= step ? "bg-brand-600 text-white" : "bg-ink-100 text-ink-400"
                      }`}
                    >
                      {index < step ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
                    </span>
                    <span className={`text-sm ${index <= step ? "font-medium text-ink-900" : "text-ink-400"}`}>{stage}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-ink-950">Current step: {step + 1} of {stages.length} · {stages[step]}</p>
            <p className="mt-1 text-xs text-ink-500">Use this sequence during a discovery call to connect the demo directly to the prospect’s lead-loss problem.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={reset} className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-ink-700 hover:bg-canvas">
              <RotateCcw className="h-4 w-4" /> Restart
            </button>
            <button
              onClick={next}
              disabled={step === stages.length - 1}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {step === stages.length - 1 ? "Flow complete" : "Run next step"}
              {step < stages.length - 1 ? <ArrowRight className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-6 lg:grid-cols-3">
            <OutcomeCard
              title="1. Prove lead capture"
              text="Measure enquiry capture rate and first-response time before discussing advanced AI capability."
            />
            <OutcomeCard
              title="2. Prove sales discipline"
              text="Track whether qualified enquiries are assigned, acknowledged and followed up within an agreed SLA."
            />
            <OutcomeCard
              title="3. Prove revenue impact"
              text="Link meetings, opportunities and wins back to the original WhatsApp enquiry to quantify influenced pipeline and revenue."
            />
          </div>
          <p className="mt-8 text-xs leading-relaxed text-ink-500">
            Demo note: all names, companies, values and workflow states on this page are synthetic. This reference experience is not connected to WhatsApp, a live CRM, calendars or customer data. Production integrations are configured only after customer approval and security review.
          </p>
        </div>
      </section>
    </div>
  );
}

function DataField({ label, value, active }: { label: string; value: string; active: boolean }) {
  return (
    <div className={`rounded-2xl border p-4 ${active ? "border-line bg-white" : "border-line/70 bg-canvas/60"}`}>
      <p className="text-xs font-medium uppercase tracking-wide text-ink-400">{label}</p>
      <p className={`mt-2 text-sm font-semibold ${active ? "text-ink-900" : "text-ink-400"}`}>{value}</p>
    </div>
  );
}

function WorkflowRow({ icon, title, value, done }: { icon: React.ReactNode; title: string; value: string; done: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${done ? "bg-success-100 text-success-700" : "bg-ink-100 text-ink-400"}`}>
          {icon}
        </span>
        <span className="text-sm font-medium text-ink-700">{title}</span>
      </div>
      <span className={`max-w-[55%] text-right text-xs font-semibold ${done ? "text-success-700" : "text-ink-400"}`}>{value}</span>
    </div>
  );
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line bg-canvas/60 p-4">
      <div className="flex items-center gap-2 text-brand-700">{icon}<span className="text-[11px] font-semibold uppercase tracking-wide text-ink-500">{label}</span></div>
      <p className="mt-3 text-base font-semibold text-ink-950">{value}</p>
    </div>
  );
}

function OutcomeCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-line bg-canvas/50 p-6">
      <h3 className="text-base font-semibold text-ink-950">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-600">{text}</p>
    </div>
  );
}
