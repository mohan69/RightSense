"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  ArrowRight,
  BellRing,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  Database,
  MessageCircle,
  PhoneCall,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
} from "lucide-react";

type ScenarioKey = "construction" | "gifting" | "hr" | "language";
type ViewMode = "customer" | "operations";
type Speaker = "customer" | "assistant" | "system";

type DemoMessage = {
  at: number;
  speaker: Speaker;
  text: string;
};

type Scenario = {
  label: string;
  shortLabel: string;
  pattern: string;
  company: string;
  prospect: string;
  stages: string[];
  messages: DemoMessage[];
  requirement: string;
  qualification: string;
  opportunity: string;
  owner: string;
  nextAction: string;
  existingAutomation: boolean;
  assistLabel: string;
  assistValue: string;
  architecture: string[];
  crmStep: number;
  ownerStep: number;
  nextActionStep: number;
  pipelineStep: number;
};

const scenarios: Record<ScenarioKey, Scenario> = {
  construction: {
    label: "Construction Materials",
    shortLabel: "Construction",
    pattern: "Existing WhatsApp → CRM & follow-up",
    company: "BuildPro Materials",
    prospect: "Ravi Kumar",
    stages: [
      "Existing agent captured enquiry",
      "Customer confirms requirement",
      "Structured handoff created",
      "CRM synchronized",
      "Sales owner assigned",
      "Follow-up SLA started",
      "Opportunity visible",
    ],
    messages: [
      {
        at: 0,
        speaker: "system",
        text: "Existing WhatsApp agent has already captured product, specification, quantity, delivery location and indicative quote.",
      },
      {
        at: 0,
        speaker: "assistant",
        text: "Summary: TMT steel Fe550D · 12 mm · 18 MT · Bengaluru delivery. Shall I send this confirmed enquiry to the sales team?",
      },
      {
        at: 1,
        speaker: "customer",
        text: "Yes, please confirm and have someone call me.",
      },
      {
        at: 2,
        speaker: "assistant",
        text: "Done. Your confirmed requirement has been handed to the sales process. You do not need to repeat the details.",
      },
      {
        at: 5,
        speaker: "assistant",
        text: "A sales owner has your requirement and follow-up is being tracked. You can ask to speak to a person at any time.",
      },
    ],
    requirement: "TMT steel · Fe550D · 12 mm · 18 MT",
    qualification: "Existing agent completed product/quote capture",
    opportunity: "₹18–22 lakh",
    owner: "Enterprise Sales — South",
    nextAction: "Sales callback within agreed SLA",
    existingAutomation: true,
    assistLabel: "Existing automation preserved",
    assistValue: "RightSense begins after enquiry/quote capture; no need to replace the current bot.",
    architecture: [
      "Existing WhatsApp agent",
      "Confirmed handoff",
      "CRM",
      "Sales owner",
      "Follow-up SLA",
      "Revenue view",
    ],
    crmStep: 3,
    ownerStep: 4,
    nextActionStep: 5,
    pipelineStep: 6,
  },
  gifting: {
    label: "Corporate Gifting",
    shortLabel: "Gifting",
    pattern: "Enquiry → 2 questions → quote/meeting",
    company: "GiftWorks Corporate",
    prospect: "Priya Shah",
    stages: [
      "Enquiry received",
      "Relevant question 1",
      "Relevant question 2",
      "Requirement qualified",
      "Lead registered",
      "Sales owner assigned",
      "Quote discussion scheduled",
    ],
    messages: [
      {
        at: 0,
        speaker: "customer",
        text: "We need employee gifts for a new-joiner program. Can you help?",
      },
      {
        at: 1,
        speaker: "assistant",
        text: "Yes. What are you looking for — welcome kits, awards/trophies, or custom merchandise?",
      },
      {
        at: 1,
        speaker: "customer",
        text: "Premium welcome kits.",
      },
      {
        at: 2,
        speaker: "assistant",
        text: "Approximately how many kits do you need, and by what date?",
      },
      {
        at: 2,
        speaker: "customer",
        text: "650 kits before 30 September.",
      },
      {
        at: 3,
        speaker: "assistant",
        text: "Thanks — that is enough to route your requirement. I can arrange a commercial discussion without asking you a long list of questions.",
      },
      {
        at: 6,
        speaker: "assistant",
        text: "A corporate-account specialist is scheduled to discuss catalog options and pricing today at 4:00 PM.",
      },
    ],
    requirement: "650 premium employee welcome kits",
    qualification: "Quantity + required date captured",
    opportunity: "₹6–8 lakh",
    owner: "Corporate Accounts",
    nextAction: "Catalog + commercial discussion",
    existingAutomation: false,
    assistLabel: "Catalog assist",
    assistValue: "Match approved catalog options after quantity/date capture; pricing remains human-approved.",
    architecture: [
      "WhatsApp enquiry",
      "2-question qualification",
      "CRM / lead store",
      "Corporate sales",
      "Quote / meeting",
      "Revenue view",
    ],
    crmStep: 4,
    ownerStep: 5,
    nextActionStep: 6,
    pipelineStep: 6,
  },
  hr: {
    label: "HR & Payroll Services",
    shortLabel: "HR / Payroll",
    pattern: "Enquiry → 2 questions → consultation",
    company: "PeopleDesk Advisory",
    prospect: "Arun Menon",
    stages: [
      "Enquiry received",
      "Relevant question 1",
      "Relevant question 2",
      "Need qualified",
      "Lead registered",
      "Advisor assigned",
      "Consultation scheduled",
    ],
    messages: [
      {
        at: 0,
        speaker: "customer",
        text: "We need help with HR. Can somebody speak with us?",
      },
      {
        at: 1,
        speaker: "assistant",
        text: "Certainly. Is the immediate need payroll, hiring, compliance/employment law, or a combination?",
      },
      {
        at: 1,
        speaker: "customer",
        text: "Payroll plus employment-law support.",
      },
      {
        at: 2,
        speaker: "assistant",
        text: "About how many employees do you have, and which city is the team based in?",
      },
      {
        at: 2,
        speaker: "customer",
        text: "85 employees in Bengaluru.",
      },
      {
        at: 3,
        speaker: "assistant",
        text: "Thank you. That is enough for an advisor to prepare for the discussion. I can arrange the next step now.",
      },
      {
        at: 6,
        speaker: "assistant",
        text: "An SME advisor is scheduled to call tomorrow at 3:00 PM with the requirement already attached.",
      },
    ],
    requirement: "Payroll + employment-law support · 85 employees",
    qualification: "Service + employee count + location captured",
    opportunity: "₹1.5–2.5 lakh / year",
    owner: "SME Advisory",
    nextAction: "Consultation tomorrow · 3:00 PM",
    existingAutomation: false,
    assistLabel: "Service matching",
    assistValue: "The first two answers route the enquiry to the right specialist instead of a generic callback queue.",
    architecture: [
      "WhatsApp enquiry",
      "2-question qualification",
      "CRM / lead store",
      "SME advisor",
      "Consultation",
      "Revenue view",
    ],
    crmStep: 4,
    ownerStep: 5,
    nextActionStep: 6,
    pipelineStep: 6,
  },
  language: {
    label: "Language Training",
    shortLabel: "Language",
    pattern: "Enquiry → 2 questions → counselling",
    company: "LinguaEdge Academy",
    prospect: "Meera Nair",
    stages: [
      "Enquiry received",
      "Relevant question 1",
      "Relevant question 2",
      "Need qualified",
      "Lead registered",
      "Counsellor assigned",
      "Trial / counselling booked",
    ],
    messages: [
      {
        at: 0,
        speaker: "customer",
        text: "Hi, I want to learn a foreign language for work.",
      },
      {
        at: 1,
        speaker: "assistant",
        text: "Which language are you interested in — German, French, Japanese, or another language?",
      },
      {
        at: 1,
        speaker: "customer",
        text: "German.",
      },
      {
        at: 2,
        speaker: "assistant",
        text: "Is this for you or a company team, and do you prefer weekday evenings or weekends?",
      },
      {
        at: 2,
        speaker: "customer",
        text: "For me. Weekday evenings are best.",
      },
      {
        at: 3,
        speaker: "assistant",
        text: "Perfect. I can route you to the German-course counsellor and show suitable batches without making you complete a long form.",
      },
      {
        at: 6,
        speaker: "assistant",
        text: "A counselling/trial discussion is booked and the counsellor already has your language and timing preference.",
      },
    ],
    requirement: "German · individual learner · weekday evenings",
    qualification: "Language + learner type + timing captured",
    opportunity: "Course enrolment",
    owner: "German Course Counsellor",
    nextAction: "Counselling / trial session",
    existingAutomation: false,
    assistLabel: "Course matching",
    assistValue: "Recommend suitable batches from the approved course list, then hand off for counselling or enrolment.",
    architecture: [
      "WhatsApp enquiry",
      "2-question qualification",
      "Lead store",
      "Course counsellor",
      "Trial / meeting",
      "Enrolment view",
    ],
    crmStep: 4,
    ownerStep: 5,
    nextActionStep: 6,
    pipelineStep: 6,
  },
};

export function RevenueAgentDemo() {
  const [scenarioKey, setScenarioKey] = useState<ScenarioKey>("construction");
  const [step, setStep] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("customer");
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  const scenario = scenarios[scenarioKey];
  const visibleMessages = useMemo(
    () => scenario.messages.filter((message) => message.at <= step),
    [scenario, step]
  );

  useEffect(() => {
    if (viewMode === "customer") {
      messageEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [step, scenarioKey, viewMode]);

  const changeScenario = (key: ScenarioKey) => {
    setScenarioKey(key);
    setStep(0);
    setViewMode("customer");
  };

  const next = () =>
    setStep((current) => Math.min(current + 1, scenario.stages.length - 1));
  const reset = () => {
    setStep(0);
    setViewMode("customer");
  };

  const crmDone = step >= scenario.crmStep;
  const ownerDone = step >= scenario.ownerStep;
  const nextActionDone = step >= scenario.nextActionStep;
  const pipelineDone = step >= scenario.pipelineStep;

  return (
    <div className="min-h-screen bg-canvas pb-28 md:pb-0">
      <section className="dark-hero-bg text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              <Sparkles className="h-3.5 w-3.5" />
              SYNTHETIC REFERENCE DEMO
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Lead-to-Revenue Automation
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-lg">
              Keep the customer interaction short. Capture only what is needed, hand off cleanly, and make the sales follow-through measurable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-8">
        <div className="rounded-2xl border border-line bg-white p-4 shadow-soft sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                Choose the prospect pattern
              </p>
              <p className="mt-1 text-sm text-ink-600">
                The demo changes by business context rather than forcing one generic chatbot flow.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {(Object.keys(scenarios) as ScenarioKey[]).map((key) => {
                const active = scenarioKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => changeScenario(key)}
                    className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition sm:px-4 ${
                      active
                        ? "bg-brand-600 text-white shadow-sm"
                        : "border border-line bg-white text-ink-700 hover:bg-canvas"
                    }`}
                  >
                    {scenarios[key].shortLabel}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-canvas px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
              Demo pattern
            </p>
            <p className="mt-1 text-sm font-semibold text-ink-900">
              {scenario.pattern}
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
        <div className="mb-5 grid grid-cols-2 rounded-xl border border-line bg-white p-1 shadow-soft sm:max-w-md">
          <button
            onClick={() => setViewMode("customer")}
            className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
              viewMode === "customer"
                ? "bg-brand-600 text-white"
                : "text-ink-600 hover:bg-canvas"
            }`}
          >
            Customer experience
          </button>
          <button
            onClick={() => setViewMode("operations")}
            className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition ${
              viewMode === "operations"
                ? "bg-brand-600 text-white"
                : "text-ink-600 hover:bg-canvas"
            }`}
          >
            Behind the scenes
          </button>
        </div>

        {viewMode === "customer" ? (
          <CustomerExperience
            scenario={scenario}
            visibleMessages={visibleMessages}
            step={step}
            messageEndRef={messageEndRef}
          />
        ) : (
          <OperationsExperience
            scenario={scenario}
            step={step}
            crmDone={crmDone}
            ownerDone={ownerDone}
            nextActionDone={nextActionDone}
            pipelineDone={pipelineDone}
          />
        )}

        <div className="mt-6 hidden rounded-2xl border border-line bg-white p-5 shadow-soft md:flex md:items-center md:justify-between md:gap-5">
          <ProgressCopy scenario={scenario} step={step} />
          <DemoControls scenario={scenario} step={step} next={next} reset={reset} />
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <OutcomeCard
            title="Keep interaction short"
            text="Reference flows use two relevant questions before routing. The production flow can use more only when the customer journey genuinely requires it."
          />
          <OutcomeCard
            title="Human handoff anytime"
            text="The customer can request a person without finishing a robotic questionnaire. Automation prepares context rather than becoming a barrier."
          />
          <OutcomeCard
            title="Prove revenue follow-through"
            text="The value is not the chat itself. Measure capture, response, ownership, follow-up, meetings, pipeline and eventually won revenue."
          />
        </section>

        <p className="mt-6 text-xs leading-relaxed text-ink-500">
          Demo note: all companies, names, values, messages and workflow states are synthetic. This reference experience is not connected to WhatsApp, a live CRM, calendars, catalog systems or customer data. Production integrations are configured only after customer approval and security review.
        </p>
      </main>

      <div className="fixed bottom-3 left-3 right-3 z-40 md:hidden">
        <div className="rounded-2xl border border-line bg-white/95 p-3 shadow-elev backdrop-blur">
          <ProgressCopy scenario={scenario} step={step} compact />
          <div className="mt-3">
            <DemoControls scenario={scenario} step={step} next={next} reset={reset} compact />
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomerExperience({
  scenario,
  visibleMessages,
  step,
  messageEndRef,
}: {
  scenario: Scenario;
  visibleMessages: DemoMessage[];
  step: number;
  messageEndRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
      <section className="rounded-3xl border border-line bg-white p-4 shadow-soft sm:p-6">
        <div className="flex items-center justify-between gap-3 border-b border-line pb-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-success-100 text-success-700">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="truncate font-semibold text-ink-950">{scenario.company}</p>
              <p className="truncate text-xs text-ink-500">WhatsApp reference experience</p>
            </div>
          </div>
          <span className="rounded-full bg-canvas px-2.5 py-1 text-[11px] font-semibold text-ink-500">
            Synthetic
          </span>
        </div>

        <div className="mt-4 h-[54vh] min-h-[380px] max-h-[560px] overflow-y-auto rounded-2xl bg-[#efeae2] p-3 sm:p-4">
          <div className="space-y-3">
            {visibleMessages.map((message, index) => (
              <MessageBubble key={`${message.at}-${index}`} message={message} index={index} />
            ))}
            <div ref={messageEndRef} />
          </div>
        </div>

        <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-white px-4 py-3 text-sm font-semibold text-ink-700 hover:bg-canvas">
          <PhoneCall className="h-4 w-4" /> Talk to a person
        </button>
      </section>

      <div className="space-y-5">
        <section className="rounded-3xl border border-line bg-white p-5 shadow-soft sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
            What this prospect should notice
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-ink-950 sm:text-2xl">
            {scenario.existingAutomation
              ? "Do not replace what already works"
              : "Ask only the minimum useful questions"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            {scenario.existingAutomation
              ? "The current WhatsApp/product-quote automation stays intact. RightSense starts at the confirmed handoff and makes CRM ownership, follow-up and opportunity visibility reliable."
              : "The reference journey uses two relevant questions, then routes the customer to the right human or next action. The conversation should feel helpful, not like a long form."}
          </p>

          <div className="mt-5 rounded-2xl border border-brand-200 bg-brand-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
              {scenario.assistLabel}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              {scenario.assistValue}
            </p>
          </div>
        </section>

        <section className="rounded-3xl border border-line bg-white p-5 shadow-soft sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
            Customer-visible outcome
          </p>
          <div className="mt-4 space-y-3">
            <CompactRow label="Requirement" value={step >= 2 ? scenario.requirement : "Being captured"} />
            <CompactRow label="Qualification" value={step >= 3 ? scenario.qualification : "Not yet complete"} />
            <CompactRow label="Next action" value={step >= scenario.nextActionStep ? scenario.nextAction : "Will be offered after qualification"} />
          </div>
        </section>
      </div>
    </div>
  );
}

function OperationsExperience({
  scenario,
  step,
  crmDone,
  ownerDone,
  nextActionDone,
  pipelineDone,
}: {
  scenario: Scenario;
  step: number;
  crmDone: boolean;
  ownerDone: boolean;
  nextActionDone: boolean;
  pipelineDone: boolean;
}) {
  return (
    <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-3xl border border-line bg-white p-5 shadow-soft sm:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
              Behind the scenes
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink-950">
              Customer journey → accountable sales process
            </h2>
          </div>
          <span className="rounded-full bg-canvas px-3 py-1 text-xs font-semibold text-ink-500">
            Seller explanation only
          </span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {scenario.architecture.map((item, index) => {
            const activeIndex = Math.min(
              Math.floor((step / Math.max(scenario.stages.length - 1, 1)) * (scenario.architecture.length - 1)),
              scenario.architecture.length - 1
            );
            const active = index <= activeIndex;
            return (
              <div
                key={item}
                className={`rounded-2xl border p-4 transition ${
                  active
                    ? "border-brand-200 bg-brand-50"
                    : "border-line bg-canvas/50"
                }`}
              >
                <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${active ? "bg-brand-600 text-white" : "bg-ink-100 text-ink-400"}`}>
                  {active && index < activeIndex ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
                </span>
                <p className={`mt-3 text-sm font-semibold ${active ? "text-ink-950" : "text-ink-400"}`}>
                  {item}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-line bg-canvas/60 p-5">
          <p className="text-sm font-semibold text-ink-950">
            Current stage: {scenario.stages[step]}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">
            The production integration is selected only after discovery confirms the customer&apos;s actual WhatsApp provider, CRM/lead store, ownership rules and security expectations.
          </p>
        </div>
      </section>

      <div className="space-y-5">
        <section className="rounded-3xl border border-line bg-white p-5 shadow-soft sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
            Lead / opportunity state
          </p>
          <h3 className="mt-2 text-xl font-semibold text-ink-950">{scenario.prospect}</h3>
          <div className="mt-5 space-y-3">
            <WorkflowRow
              icon={<Database className="h-4 w-4" />}
              title="CRM / lead store"
              value={crmDone ? "Synchronized" : "Pending"}
              done={crmDone}
            />
            <WorkflowRow
              icon={<UserCheck className="h-4 w-4" />}
              title="Accountable owner"
              value={ownerDone ? scenario.owner : "Unassigned"}
              done={ownerDone}
            />
            <WorkflowRow
              icon={<BellRing className="h-4 w-4" />}
              title="Follow-up control"
              value={nextActionDone ? "SLA / next action active" : "Pending"}
              done={nextActionDone}
            />
            <WorkflowRow
              icon={<TrendingUp className="h-4 w-4" />}
              title="Revenue visibility"
              value={pipelineDone ? scenario.opportunity : "Not yet visible"}
              done={pipelineDone}
            />
          </div>
        </section>

        <section className="rounded-3xl border border-brand-200 bg-brand-50 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" />
            <div>
              <p className="text-sm font-semibold text-ink-950">Human-owned commercial decisions</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Automation can capture, match, route, remind and measure. Non-standard pricing, exceptions and binding commitments remain with an accountable person unless a customer explicitly approves a governed rule.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function MessageBubble({ message, index }: { message: DemoMessage; index: number }) {
  if (message.speaker === "system") {
    return (
      <div className="flex justify-center">
        <div className="max-w-[94%] rounded-xl bg-white/75 px-3 py-2 text-center text-xs leading-relaxed text-ink-600 shadow-sm">
          {message.text}
        </div>
      </div>
    );
  }

  const outgoing = message.speaker === "assistant";
  return (
    <div className={`flex ${outgoing ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
          outgoing ? "bg-[#d9fdd3] text-ink-900" : "bg-white text-ink-900"
        }`}
      >
        {message.text}
        <div className="mt-1 text-right text-[10px] text-ink-400">11:{42 + index}</div>
      </div>
    </div>
  );
}

function ProgressCopy({
  scenario,
  step,
  compact = false,
}: {
  scenario: Scenario;
  step: number;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "min-w-0" : "min-w-0 flex-1"}>
      <p className={`font-semibold text-ink-950 ${compact ? "text-xs" : "text-sm"}`}>
        Step {step + 1} of {scenario.stages.length} · {scenario.stages[step]}
      </p>
      {!compact ? (
        <div className="mt-3 flex gap-1.5">
          {scenario.stages.map((stage, index) => (
            <span
              key={stage}
              title={stage}
              className={`h-1.5 flex-1 rounded-full ${index <= step ? "bg-brand-600" : "bg-ink-100"}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function DemoControls({
  scenario,
  step,
  next,
  reset,
  compact = false,
}: {
  scenario: Scenario;
  step: number;
  next: () => void;
  reset: () => void;
  compact?: boolean;
}) {
  const complete = step === scenario.stages.length - 1;
  return (
    <div className={`flex ${compact ? "gap-2" : "shrink-0 gap-2"}`}>
      <button
        onClick={reset}
        className={`${compact ? "px-3" : "px-4"} inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-white py-2.5 text-sm font-semibold text-ink-700 hover:bg-canvas`}
      >
        <RefreshCw className="h-4 w-4" />
        {compact ? "Reset" : "Restart"}
      </button>
      <button
        onClick={next}
        disabled={complete}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-45 md:flex-none"
      >
        {complete ? "Flow complete" : compact ? "Next" : "Run next step"}
        {complete ? <CheckCircle2 className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
      </button>
    </div>
  );
}

function WorkflowRow({
  icon,
  title,
  value,
  done,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  done: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-line bg-canvas/45 p-3">
      <div className="flex min-w-0 items-center gap-3">
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${done ? "bg-success-100 text-success-700" : "bg-ink-100 text-ink-400"}`}>
          {icon}
        </span>
        <span className="text-sm font-medium text-ink-700">{title}</span>
      </div>
      <span className={`max-w-[48%] text-right text-xs font-semibold ${done ? "text-success-700" : "text-ink-400"}`}>
        {value}
      </span>
    </div>
  );
}

function CompactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-ink-500">{label}</span>
      <span className="max-w-[62%] text-right text-sm font-semibold text-ink-900">{value}</span>
    </div>
  );
}

function OutcomeCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
      <h3 className="text-base font-semibold text-ink-950">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{text}</p>
    </div>
  );
}
