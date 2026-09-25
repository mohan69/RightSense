"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clipboard,
  Clock3,
  Database,
  MessageCircle,
  Target,
  UserRoundCheck,
} from "lucide-react";

type ProspectProfile = {
  company: string;
  industry: string;
  contact: string;
  whatsappSetup: string;
  leadSystem: string;
  monthlyEnquiries: string;
  currentResponse: string;
  captureRate: string;
  primaryGap: string;
  owner: string;
  pilotGoal: string;
};

const initialProfile: ProspectProfile = {
  company: "",
  industry: "Construction / materials",
  contact: "",
  whatsappSetup: "One WhatsApp Business number",
  leadSystem: "Existing CRM / spreadsheet",
  monthlyEnquiries: "",
  currentResponse: "",
  captureRate: "",
  primaryGap: "Leads remain with one person and are not consistently transferred into the sales process",
  owner: "Sales owner / founder",
  pilotGoal: "Capture every qualified WhatsApp enquiry and route it to an accountable sales owner",
};

const fields: Array<{
  key: keyof ProspectProfile;
  label: string;
  placeholder: string;
  type?: "text" | "number";
}> = [
  { key: "company", label: "Prospect company", placeholder: "Example: ABC Building Materials" },
  { key: "contact", label: "Primary contact", placeholder: "Name / role" },
  { key: "industry", label: "Industry", placeholder: "Construction, gifting, HR, services..." },
  { key: "whatsappSetup", label: "Current WhatsApp setup", placeholder: "One number, multiple numbers, API provider..." },
  { key: "leadSystem", label: "CRM / lead system", placeholder: "HitSMS, Zoho, HubSpot, Excel, Google Sheet..." },
  { key: "monthlyEnquiries", label: "Approx. WhatsApp enquiries / month", placeholder: "Example: 250", type: "number" },
  { key: "currentResponse", label: "Current first-response time", placeholder: "Example: 45 min / unknown" },
  { key: "captureRate", label: "Current enquiry capture rate", placeholder: "Example: 70% / unknown" },
  { key: "owner", label: "Who should own qualified leads?", placeholder: "Founder, inside sales, regional sales..." },
];

export function DiscoveryConfigurator() {
  const [profile, setProfile] = useState(initialProfile);
  const [copied, setCopied] = useState(false);

  const update = (key: keyof ProspectProfile, value: string) => {
    setProfile((current) => ({ ...current, [key]: value }));
    setCopied(false);
  };

  const companyLabel = profile.company.trim() || "Prospect company";
  const contactLabel = profile.contact.trim() || "Decision owner to confirm";
  const volumeLabel = profile.monthlyEnquiries.trim() || "Measure in discovery";
  const responseLabel = profile.currentResponse.trim() || "Measure in discovery";
  const captureLabel = profile.captureRate.trim() || "Measure in discovery";

  const brief = useMemo(
    () =>
      [
        `RightSense Lead-to-Revenue Pilot Brief — ${companyLabel}`,
        `Industry: ${profile.industry || "To confirm"}`,
        `Primary contact: ${contactLabel}`,
        `WhatsApp setup: ${profile.whatsappSetup || "To confirm"}`,
        `Lead system: ${profile.leadSystem || "To confirm"}`,
        `Monthly enquiries: ${volumeLabel}`,
        `Current first response: ${responseLabel}`,
        `Current capture rate: ${captureLabel}`,
        `Primary gap: ${profile.primaryGap || "To confirm"}`,
        `Lead owner: ${profile.owner || "To confirm"}`,
        `Pilot objective: ${profile.pilotGoal || "To confirm"}`,
        "Pilot proof: enquiry capture, qualification, CRM handoff, owner assignment, follow-up SLA, meetings and influenced pipeline.",
        "Commercial gate: live integrations only after customer approval of a paid pilot scope.",
      ].join("\n"),
    [
      companyLabel,
      contactLabel,
      captureLabel,
      profile.industry,
      profile.leadSystem,
      profile.owner,
      profile.pilotGoal,
      profile.primaryGap,
      profile.whatsappSetup,
      responseLabel,
      volumeLabel,
    ]
  );

  const copyBrief = async () => {
    await navigator.clipboard.writeText(brief);
    setCopied(true);
  };

  return (
    <div className="min-h-screen bg-canvas">
      <section className="dark-hero-bg text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/65">Internal seller workspace · synthetic only</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">Prospect Discovery & Pilot Configurator</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
            Convert a 20-minute discovery conversation into a customer-specific pilot hypothesis, measurable baseline and next commercial step.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Step 1 · Capture facts</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink-950">Discovery inputs</h2>
              </div>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">Do not guess missing values</span>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <label key={field.key} className="block">
                  <span className="text-sm font-semibold text-ink-700">{field.label}</span>
                  <input
                    type={field.type ?? "text"}
                    value={profile[field.key]}
                    onChange={(event) => update(field.key, event.target.value)}
                    placeholder={field.placeholder}
                    className="mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                  />
                </label>
              ))}
            </div>

            <div className="mt-5 grid gap-5">
              <label className="block">
                <span className="text-sm font-semibold text-ink-700">Primary lead-loss / follow-up gap</span>
                <textarea
                  value={profile.primaryGap}
                  onChange={(event) => update("primaryGap", event.target.value)}
                  rows={3}
                  className="mt-2 w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-ink-700">Pilot outcome to prove</span>
                <textarea
                  value={profile.pilotGoal}
                  onChange={(event) => update("pilotGoal", event.target.value)}
                  rows={3}
                  className="mt-2 w-full resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                />
              </label>
            </div>
          </section>

          <div className="space-y-6">
            <section className="rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Step 2 · Customer-specific hypothesis</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink-950">{companyLabel}</h2>
              <p className="mt-2 text-sm text-ink-500">{profile.industry || "Industry to confirm"} · {contactLabel}</p>

              <div className="mt-7 space-y-4">
                <FlowRow icon={<MessageCircle className="h-4 w-4" />} title="Capture" text="Respond immediately to every inbound WhatsApp enquiry and preserve the conversation context." />
                <FlowRow icon={<Target className="h-4 w-4" />} title="Qualify" text="Collect customer-approved minimum information before a salesperson spends time on the lead." />
                <FlowRow icon={<Database className="h-4 w-4" />} title="Route" text={`Create or update the lead in ${profile.leadSystem || "the existing lead system"} and assign an accountable owner.`} />
                <FlowRow icon={<UserRoundCheck className="h-4 w-4" />} title="Act" text="Notify the owner, drive the agreed follow-up SLA and offer a meeting or next action." />
              </div>
            </section>

            <section className="rounded-3xl border border-line bg-white p-6 shadow-soft">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Baseline → pilot target</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <KpiCard label="Monthly enquiries" current={volumeLabel} target="100% captured" />
                <KpiCard label="First response" current={responseLabel} target="< 2 min target" />
                <KpiCard label="Capture rate" current={captureLabel} target="95%+ target" />
              </div>
              <p className="mt-4 text-xs leading-relaxed text-ink-500">Targets are pilot hypotheses, not customer commitments. Confirm baseline and achievable target during discovery.</p>
            </section>
          </div>
        </div>

        <section className="mt-8 rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">Step 3 · Paid pilot gate</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink-950">What we ask the prospect to approve</h2>
              <div className="mt-6 space-y-3">
                {[
                  "One WhatsApp business process and one accountable business owner",
                  "One existing CRM, spreadsheet or lead repository as the system of record",
                  "A baseline period for enquiry volume, response and follow-up performance",
                  "Customer-approved qualification and routing rules",
                  "A bounded pilot with human approval for pricing and commercial commitments",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-brand-800">Generated pilot brief</p>
                  <p className="mt-1 text-xs text-ink-500">Copy this into the call notes, proposal or follow-up message.</p>
                </div>
                <button
                  onClick={copyBrief}
                  className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
                >
                  <Clipboard className="h-4 w-4" /> {copied ? "Copied" : "Copy brief"}
                </button>
              </div>
              <pre className="mt-5 whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink-700">{brief}</pre>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-3">
          <NextStep number="1" title="Demo the flow" text="Use the synthetic Lead-to-Revenue demo to show the operating journey, not generic chatbot features." />
          <NextStep number="2" title="Confirm baseline" text="Do not invent ROI. Capture actual enquiry, response, assignment, meeting and conversion data." />
          <NextStep number="3" title="Ask for paid pilot" text="Only after scope approval should engineering configure the WhatsApp provider, CRM and calendar adapters." />
        </section>
      </main>
    </div>
  );
}

function FlowRow({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-line bg-canvas/60 p-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">{icon}</span>
      <div>
        <p className="text-sm font-semibold text-ink-900">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-600">{text}</p>
      </div>
    </div>
  );
}

function KpiCard({ label, current, target }: { label: string; current: string; target: string }) {
  return (
    <div className="rounded-2xl border border-line bg-canvas/60 p-4">
      <div className="flex items-center gap-2 text-ink-500"><Clock3 className="h-4 w-4" /><span className="text-xs font-semibold uppercase tracking-wide">{label}</span></div>
      <p className="mt-3 text-sm font-semibold text-ink-950">Now: {current}</p>
      <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-success-700"><ArrowRight className="h-3.5 w-3.5" /> Pilot: {target}</div>
    </div>
  );
}

function NextStep({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-soft">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">{number}</span>
      <h3 className="mt-4 text-base font-semibold text-ink-950">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{text}</p>
    </div>
  );
}
