import type {
  AssessmentStep,
  Capability,
  CockpitMetric,
  CtaLink,
  DataAccess,
  DeploymentOption,
  DiagnosticPageContent,
  DiagnosticStep,
  FitWithPlatform,
  ForecastHorizon,
  FormField,
  FoundingTeam,
  HeroContent,
  HowItWorksStep,
  Industry,
  IndustryDetail,
  MinimumRequired,
  MoatPageContent,
  NavItem,
  Outcome,
  PageCta,
  PlanPhase,
  PortfolioRole,
  Principle,
  ProblemPoint,
  RecommendationField,
  SampleOutput,
  SectionContent,
  TargetRole,
  TruthLayer,
  TruthSource,
  WhatIfScenario,
  WhenLeadershipNeedsThis,
  WhyRightSense,
} from "@/types/site";

export const siteConfig = {
  name: "RightSense Technologies",
  shortName: "RightSense",
  tagline: "Enterprise Operating Intelligence for industrial and project-driven businesses.",
  description:
    "Enterprise Operating Intelligence for industrial and project-driven businesses.",
  url: "https://rightsense.in",
  contactEmail: "contact@rightsense.in",
} as const;

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Diagnostic", href: "/48-hour-diagnostic" },
  { label: "Moat", href: "/moat" },
  { label: "Platforms", href: "/platforms" },
  { label: "PulseIQ", href: "/pulseiq" },
  { label: "WinsProposal", href: "/winsproposal" },
  { label: "TalentPulse", href: "/talentpulse" },
  { label: "Assessment", href: "/assessment" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const platforms = [
  {
    name: "PulseIQ",
    href: "/pulseiq",
    summary: "Enterprise Operating Intelligence Platform",
    icon: "Brain",
    description:
      "Connects financials, strategy decks, SOPs, enterprise data, Excel trackers, emails, and meetings into an Enterprise Truth Map, executive cockpit, forecasting, what-if scenarios, and board-ready recommendations.",
    outcomes: [
      "Enterprise Truth Map and executive cockpit",
      "Forecast next-quarter performance with confidence bands",
      "Simulate revenue, margin, cash, and productivity scenarios",
    ],
  },
  {
    name: "WinsProposal",
    href: "/winsproposal",
    summary: "Revenue and Proposal Intelligence Platform",
    icon: "FileText",
    description:
      "Turns every proposal, RFP response, and pricing decision into a learning loop that improves win rate and protects margin.",
    outcomes: [
      "Faster, more accurate proposals",
      "Pricing and win-rate lift",
      "Renewal and expansion visibility",
    ],
  },
  {
    name: "TalentPulse",
    href: "/talentpulse",
    summary: "AI-Native Talent Intelligence Platform",
    icon: "Users",
    description:
      "Reads workforce signals across hiring, capacity, performance, and attrition to surface what leadership cannot see in HRMS alone.",
    outcomes: [
      "Capacity and skill visibility",
      "Attrition and bench risk early-warning",
      "Productivity baselines by team",
    ],
  },
] as const;

export const hero: HeroContent = {
  eyebrow: "Enterprise Operating Intelligence for industrial and project-driven businesses.",
  headline:
    "AI-Native Enterprise Intelligence for Revenue, Margin, Productivity, and Execution",
  subheadline:
    "RightSense helps industrial and enterprise businesses move from fragmented systems, documents, spreadsheets, emails, and manual decisions to AI-powered operating intelligence.",
  support:
    "We connect financials, strategy decks, SOPs, ERP/CRM/HRMS data, Excel trackers, proposals, emails, meetings, and workforce signals to build the Enterprise Truth Map — and use it to forecast next-quarter performance, simulate scenarios, and recommend board-ready actions.",
  primaryCta: { label: "Book 48-Hour Diagnostic", href: "/48-hour-diagnostic" },
  secondaryCta: { label: "Explore Platforms", href: "/platforms" },
};

export const problemSection: SectionContent = {
  title: "Enterprise leaders do not lack data. They lack connected truth.",
  subtitle:
    "Decisions stall because the business is a hundred disconnected sources of partial truth — owned by no one, reconciled by no one, and out of date by the time the meeting starts.",
};

export const problemPoints: ProblemPoint[] = [
  {
    icon: "FileSpreadsheet",
    text: "ERPs, CRMs, HRMS, and MES speak different languages and never reconcile cleanly.",
  },
  {
    icon: "Compass",
    text: "Strategy decks go stale within a quarter of being written, then drift further with every reorg.",
  },
  {
    icon: "GitBranch",
    text: "SOPs live in shared drives and tribal memory, not in the systems where work actually happens.",
  },
  {
    icon: "FileSpreadsheet",
    text: "Excel trackers multiply with every project, customer, and SKU — and no one owns the totals.",
  },
  {
    icon: "Mail",
    text: "Proposals, emails, and meetings hide the real pipeline, decisions, and ownership.",
  },
  {
    icon: "Users",
    text: "Workforce signals — load, attrition, skill gaps — never reach the leadership table.",
  },
];

export const moat: SectionContent = {
  eyebrow: "The RightSense moat",
  title: "Enterprise Truth-to-Outcome Intelligence",
  subtitle:
    "RightSense connects the major sources of enterprise truth and converts them directly into measurable board-level outcomes.",
  note: "Each truth source is mapped to seven outcomes: revenue growth, margin improvement, cash improvement, productivity, execution speed, risk reduction, and decision clarity.",
};

export const truthSources: TruthSource[] = [
  {
    id: "financial",
    icon: "LineChart",
    title: "Financial truth",
    description:
      "P&L, working capital, unit economics, and cost-to-serve across products, customers, and plants.",
  },
  {
    id: "strategic",
    icon: "Compass",
    title: "Strategic truth",
    description:
      "Board decks, annual plans, OKRs, and capital allocation tracked against what is actually happening in the business.",
  },
  {
    id: "operational",
    icon: "Cog",
    title: "Operational truth",
    description:
      "Production, quality, logistics, downtime, and OEE across plants, lines, and shifts — in one current view.",
  },
  {
    id: "process",
    icon: "GitBranch",
    title: "Process truth",
    description:
      "SOPs, RACI, controls, exceptions, and deviations from how work is really done, not how it was documented.",
  },
  {
    id: "collaboration",
    icon: "MessageSquare",
    title: "Collaboration truth",
    description:
      "Emails, meetings, decisions, and ownership signals across functions and leadership layers.",
  },
  {
    id: "revenue",
    icon: "TrendingUp",
    title: "Revenue truth",
    description:
      "Pipeline, proposals, pricing, win/loss patterns, and renewal health across customers and segments.",
  },
  {
    id: "talent",
    icon: "UserCheck",
    title: "Talent truth",
    description:
      "Workforce capacity, skills, attrition, and productivity signals across teams, roles, and locations.",
  },
];

export const outcomesSection: SectionContent = {
  title: "Outcomes, not dashboards.",
  subtitle:
    "Every RightSense engagement is anchored to a board-level outcome. The platform exists to move these seven numbers — not to add another dashboard to your stack.",
};

export const outcomes: Outcome[] = [
  {
    id: "revenue",
    icon: "TrendingUp",
    title: "Revenue growth",
    description:
      "Identify cross-sell, pricing, and win-rate moves hiding in proposal, CRM, and pipeline data.",
  },
  {
    id: "margin",
    icon: "Percent",
    title: "Margin improvement",
    description:
      "Expose cost-to-serve, rework, and wastage patterns across production, projects, and service.",
  },
  {
    id: "cash",
    icon: "Wallet",
    title: "Cash improvement",
    description:
      "Surface working capital leaks in receivables, inventory, and supplier terms before they hit the P&L.",
  },
  {
    id: "productivity",
    icon: "Zap",
    title: "Productivity improvement",
    description:
      "Quantify manual effort, rework, and idle capacity across functions and turn it into a measured baseline.",
  },
  {
    id: "speed",
    icon: "Gauge",
    title: "Execution speed",
    description:
      "Cut cycle time on proposals, projects, change orders, and decisions that today wait on people, not on data.",
  },
  {
    id: "risk",
    icon: "Shield",
    title: "Risk reduction",
    description:
      "Detect early signals of customer, supplier, compliance, and workforce risk from the data you already collect.",
  },
  {
    id: "clarity",
    icon: "Eye",
    title: "Board-level decision clarity",
    description:
      "Replace opinion with a single, current view of enterprise truth that the leadership team can actually align on.",
  },
];

export const industriesSection: SectionContent = {
  title: "Built for industries where truth is hardest to find.",
  subtitle:
    "RightSense is shaped for industrial, project-based, and engineering-led businesses where the gap between data and decision is widest.",
};

export const industries: Industry[] = [
  {
    id: "industrial-mfg",
    icon: "Factory",
    name: "Industrial manufacturing",
    description:
      "Complex shop floors, multi-ERP estates, fragmented production and quality data.",
  },
  {
    id: "epc",
    icon: "HardHat",
    name: "EPC companies",
    description:
      "Long project lifecycles, vendor sprawl, slow proposal cycles, and cost overruns.",
  },
  {
    id: "valve",
    icon: "Wrench",
    name: "Valve manufacturers",
    description:
      "Engineering-driven orders, custom configurations, and slow quote-to-order cycles.",
  },
  {
    id: "pump",
    icon: "Droplets",
    name: "Pump manufacturers",
    description:
      "High SKU complexity, distribution-led revenue, and service-driven margins.",
  },
  {
    id: "oem",
    icon: "PackageOpen",
    name: "Industrial equipment OEMs",
    description:
      "Multi-tier supply chains, dealer networks, and warranty or service exposure.",
  },
  {
    id: "project-mfg",
    icon: "ListChecks",
    name: "Project-based manufacturers",
    description:
      "Per-project costing, milestone billing, and resource allocation across jobs.",
  },
  {
    id: "mid-market",
    icon: "Building2",
    name: "Mid-market enterprises",
    description:
      "Growth-stage operations that outgrew spreadsheets but cannot afford enterprise consulting.",
  },
];

export const diagnostic: {
  title: string;
  subtitle: string;
  steps: DiagnosticStep[];
  deliverables: string[];
  cta: CtaLink;
} = {
  title: "PulseIQ 48-Hour Enterprise Intelligence Diagnostic",
  subtitle:
    "A focused, executive-grade engagement that delivers a board-ready view of enterprise truth in 48 hours — not 48 weeks.",
  steps: [
    {
      num: "01",
      window: "Hour 0–4",
      title: "Secure data intake",
      description:
        "Read-only access, exports, or secure uploads from ERP, CRM, HRMS, finance, Excel trackers, documents, and selected collaboration sources — whatever fits your IT and security posture.",
    },
    {
      num: "02",
      window: "Hour 4–12",
      title: "Connect and verify",
      description:
        "Connect to source systems, verify ingestion, and reconcile entity definitions across them.",
    },
    {
      num: "03",
      window: "Hour 12–28",
      title: "Map the operating model",
      description:
        "Map processes, decision flows, and ownership against the real shape of the business — not the org chart.",
    },
    {
      num: "04",
      window: "Hour 28–40",
      title: "Rank the opportunities",
      description:
        "Generate the opportunity map — ranked by revenue, margin, cash, productivity, speed, and risk impact.",
    },
    {
      num: "05",
      window: "Hour 40–48",
      title: "Executive readout",
      description:
        "Deliver a board-ready briefing with prioritized actions, named owners, and a 30/60/90 day plan.",
    },
  ],
  deliverables: [
    "Enterprise truth map — one current view of the business leadership can align on",
    "5–10 prioritized opportunities with quantified ₹ impact ranges",
    "30/60/90 day execution plan with named owners and KPIs",
    "Board-ready briefing document for the next leadership review",
  ],
  cta: { label: "Book a Diagnostic", href: "/contact" },
};

export const howItWorks: SectionContent & { steps: HowItWorksStep[] } = {
  title: "How RightSense works.",
  subtitle:
    "From fragmented data to a connected, board-ready view of your enterprise — in four stages.",
  steps: [
    {
      num: "01",
      icon: "Plug",
      title: "Connect",
      description:
        "Securely ingest data from ERP, CRM, HRMS, MES, finance, documents, emails, and meeting systems.",
    },
    {
      num: "02",
      icon: "Map",
      title: "Map",
      description:
        "Build the enterprise truth model — systems, processes, decisions, and ownership in one place.",
    },
    {
      num: "03",
      icon: "Lightbulb",
      title: "Recommend",
      description:
        "Rank the highest-impact moves with quantified business outcomes and clear ownership.",
    },
    {
      num: "04",
      icon: "Rocket",
      title: "Execute",
      description:
        "Deliver board-ready playbooks with owners, milestones, and KPIs the leadership team can track.",
    },
  ],
};

export const ctaSection = {
  title: "Move from fragmented data to a connected, board-ready view of your enterprise.",
  subtitle:
    "Start with a 48-Hour Enterprise Operating Intelligence Diagnostic. No long transformation program. No generic AI demo. Just a focused diagnostic with decisions leadership can act on.",
  primaryCta: { label: "Book 48-Hour Diagnostic", href: "/48-hour-diagnostic" },
  secondaryCta: { label: "Talk to a Founder", href: "/about" },
} as const;

/* ============================================
   STAGE 3 — SUBPAGE CONTENT
   ============================================ */

export const moatPage: MoatPageContent = {
  hero: {
    eyebrow: "The moat",
    title: "RightSense Moat: Enterprise Truth-to-Outcome Intelligence",
    subtitle:
      "Why RightSense is structurally different from BI tools, ERP consultants, AI agencies, and strategy firms.",
  },
  oneLine: "RightSense turns messy enterprise reality into board-ready business actions.",
  coreTitle: "The core moat",
  coreBody:
    "RightSense connects the seven sources of enterprise truth — financial, strategic, operational, process, collaboration, revenue, and talent — and converts them directly into measurable business outcomes.",
  pillarsTitle: "The seven pillars of the moat",
  pillarsSubtitle:
    "Each pillar is a layer of differentiation the alternatives do not — and cannot — replicate together.",
  pillars: [
    {
      num: "01",
      title: "Industrial enterprise domain expertise",
      description:
        "Years of operating experience inside industrial, EPC, and manufacturing businesses — not just dashboards built on top of them.",
    },
    {
      num: "02",
      title: "ERP, PLM, proposal, and manufacturing process knowledge",
      description:
        "Deep understanding of how work actually flows across SAP, Oracle, custom ERPs, PLM, MES, and proposal systems.",
    },
    {
      num: "03",
      title: "AI-native platform architecture",
      description:
        "Built ground-up on a modern data and AI stack — not a BI tool with AI features bolted on.",
    },
    {
      num: "04",
      title: "Assessment-first adoption model",
      description:
        "Every engagement starts with a 48-hour diagnostic that proves the truth map before any software is sold.",
    },
    {
      num: "05",
      title: "Financial, operational, process, collaboration, revenue, and talent intelligence",
      description:
        "Seven truth sources in one connected layer — not seven separate point tools that disagree.",
    },
    {
      num: "06",
      title: "Outcome orientation across revenue, margin, cash, productivity, execution speed, and risk reduction",
      description:
        "Every recommendation is anchored to a number the board cares about, with quantified impact ranges.",
    },
    {
      num: "07",
      title: "Founder-led enterprise transformation credibility",
      description:
        "Senior practitioners run every engagement — no junior teams, no offshore hand-offs.",
    },
  ],
  comparisonsTitle: "How RightSense compares",
  comparisonsSubtitle:
    "Four categories the alternatives fit into. None of them do what RightSense does.",
  comparisons: [
    {
      competitor: "BI tools",
      competitorApproach:
        "Show dashboards and charts over historical data, and leave interpretation to the user.",
      rightsenseApproach:
        "Provide decisions, forecasts, and what-if actions leadership can act on this quarter.",
    },
    {
      competitor: "ERP consultants",
      competitorApproach:
        "Focus on configuring systems, migrating data, and running multi-year implementation programs.",
      rightsenseApproach:
        "Create the intelligence layer that sits above ERP, CRM, PLM, and HRMS — without replacing them.",
    },
    {
      competitor: "AI agencies",
      competitorApproach:
        "Build generic AI demos and pilots that rarely reach production or move a number on the P&L.",
      rightsenseApproach:
        "Deliver industrial-domain business outcomes with an assessment-first model and quantified impact.",
    },
    {
      competitor: "Strategy consultants",
      competitorApproach:
        "Deliver reports and slide decks that age quickly and rarely make it into the operating cadence.",
      rightsenseApproach:
        "Combine an assessment workbench with operating platforms that keep the work alive after the report is delivered.",
    },
  ],
  cta: {
    title: "See the moat in action.",
    subtitle:
      "Book a 48-Hour Diagnostic and watch the truth map come together in your business.",
    primaryCta: { label: "Book a Diagnostic", href: "/assessment" },
    secondaryCta: { label: "Explore Platforms", href: "/platforms" },
  },
};

export const platformsPage = {
  hero: {
    eyebrow: "The portfolio",
    title: "Three Connected Platforms. One Enterprise Intelligence Vision.",
    subtitle:
      "PulseIQ, WinsProposal, and TalentPulse are three platforms with distinct jobs — designed to be deployed alone or together as the connected truth layer an enterprise needs.",
  },
  portfolioIntro:
    "Each platform solves a specific operating problem. Together they form a single feedback loop: revenue signals feed operating decisions, operating decisions expose talent and capacity gaps, and talent signals feed revenue planning.",
  portfolioLogicTitle: "What each platform does",
  portfolioLogic: [
    {
      platform: "PulseIQ",
      role: "Enterprise operating intelligence",
      href: "/pulseiq",
      description:
        "Maps the operating model, ranks opportunities, and drives execution against the seven board-level outcomes.",
    },
    {
      platform: "WinsProposal",
      role: "Revenue and proposal intelligence",
      href: "/winsproposal",
      description:
        "Turns proposals, RFPs, and pricing into a learning loop that lifts win rate and protects margin.",
    },
    {
      platform: "TalentPulse",
      role: "Talent and productivity intelligence",
      href: "/talentpulse",
      description:
        "Surfaces workforce capacity, skill, attrition, and productivity signals leadership cannot see in HRMS alone.",
    },
  ] satisfies PortfolioRole[],
  connectionTitle: "How the three connect",
  connectionBody:
    "Revenue intelligence (WinsProposal) + operating intelligence (PulseIQ) + talent intelligence (TalentPulse) form a single enterprise truth layer. PulseIQ turns that layer into a live executive cockpit with forecasting and what-if scenarios. Revenue signals feed operating decisions. Operating decisions expose talent and capacity gaps. Talent and capacity signals feed revenue planning. The loop compounds.",
  cta: {
    title: "Start with PulseIQ. Add the others when ready.",
    subtitle:
      "Most clients start with the 48-Hour Diagnostic on PulseIQ and expand into WinsProposal and TalentPulse as the truth map matures.",
    primaryCta: { label: "Explore PulseIQ", href: "/pulseiq" },
    secondaryCta: { label: "Book an Assessment", href: "/assessment" },
  },
} as const;

export const pulseiqPage = {
  hero: {
    eyebrow: "PulseIQ",
    title: "PulseIQ: Enterprise Operating Intelligence Platform",
    subtitle:
      "Connects financials, strategy decks, SOPs, enterprise data, Excel trackers, emails, and meetings into an Enterprise Truth Map, executive cockpit, forecasting, what-if scenarios, and board-ready recommendations.",
  },
  truthMap: {
    title: "Enterprise Truth Map",
    subtitle:
      "PulseIQ builds a connected map of the five truth layers that drive every operating decision — and uses it to forecast performance and simulate the moves leadership is considering.",
    layers: [
      {
        id: "financial",
        icon: "LineChart",
        title: "Official financial truth",
        description:
          "P&L, balance sheet, working capital, and unit economics reconciled across entities, plants, and SKUs.",
      },
      {
        id: "strategic",
        icon: "Compass",
        title: "Strategic management intent",
        description:
          "Board decks, annual plans, OKRs, and capital allocation translated into the metrics they actually imply.",
      },
      {
        id: "operational",
        icon: "Cog",
        title: "Operational reality",
        description:
          "Production, quality, logistics, downtime, and OEE captured from MES, IoT, and shop-floor systems.",
      },
      {
        id: "process",
        icon: "GitBranch",
        title: "Process and SOP truth",
        description:
          "Documented processes reconciled with how work actually moves through the business — and the deviations that matter.",
      },
      {
        id: "collaboration",
        icon: "MessageSquare",
        title: "Collaboration truth",
        description:
          "Decisions, ownership, and accountability surfaced from email, meetings, and shared drives.",
      },
    ] satisfies TruthLayer[],
  },
  cockpit: {
    title: "Executive Cockpit",
    subtitle:
      "A single view the leadership team can align on — refreshed as source systems update.",
    metrics: [
      {
        label: "Revenue actual vs target",
        description: "Live variance against plan with root cause breakdown.",
      },
      {
        label: "Margin actual vs target",
        description: "Margin walk from volume, price, mix, and cost-to-serve.",
      },
      {
        label: "Cash risk",
        description: "Working capital pressure and receivables risk by customer.",
      },
      {
        label: "Pipeline gap",
        description: "Pipeline coverage vs revenue target with stage conversion.",
      },
      {
        label: "Order backlog",
        description: "Backlog aging, mix, and conversion probability by segment.",
      },
      {
        label: "Receivables risk",
        description:
          "Customer-level DSO and concentration risk with early-warning signals.",
      },
      {
        label: "Revenue per employee",
        description: "Productivity baseline by function, plant, and role.",
      },
      {
        label: "Forecast next quarter",
        description: "AI-assisted forecast with confidence bands and key drivers.",
      },
    ] satisfies CockpitMetric[],
    topRisksNote:
      "Top risks and opportunities are surfaced on the same screen, ranked by ₹ impact and confidence.",
  },
  forecasting: {
    title: "Forecasting",
    subtitle:
      "Forecast next-quarter performance and simulate revenue, margin, cash, and productivity scenarios — before leadership commits to action.",
    horizons: [
      {
        label: "Next month",
        description:
          "Short-horizon forecast for cash, collections, shipments, and opex.",
      },
      {
        label: "Next quarter",
        description:
          "Quarterly revenue, margin, and cash forecast against plan.",
      },
      {
        label: "Next two quarters",
        description:
          "Forward look to support hiring, inventory, and capex decisions.",
      },
    ] satisfies ForecastHorizon[],
  },
  whatIf: {
    title: "What-if simulator",
    subtitle:
      "Stress-test the operating plan against the moves leadership is considering.",
    scenarios: [
      {
        label: "Revenue +10%",
        description:
          "What would margin, cash, and capacity have to look like to support a 10% revenue lift?",
      },
      {
        label: "Margin +10%",
        description:
          "Where would the lift come from: price, mix, cost-to-serve, or waste?",
      },
      {
        label: "Cost -10%",
        description:
          "Which cost lines can defensibly be cut, and at what operational risk?",
      },
      {
        label: "Headcount -15%",
        description:
          "What productivity uplift is required, and where would it come from?",
      },
      {
        label: "Cash improvement",
        description:
          "Impact of stretching payables, tightening receivables, or releasing inventory.",
      },
    ] satisfies WhatIfScenario[],
  },
  recommendationEngine: {
    title: "AI Recommendation Engine",
    subtitle:
      "Every recommendation comes with the evidence leadership needs to act on it.",
    fields: [
      { label: "Current state", description: "Quantitative baseline of the problem." },
      { label: "Root cause", description: "Where the issue originates across systems and process steps." },
      { label: "Options", description: "The realistic set of moves to consider." },
      { label: "Pros", description: "Benefits of each option, quantified where possible." },
      { label: "Shortfalls", description: "Trade-offs and risks of each option." },
      { label: "Recommended action", description: "The move we recommend, with the owner and the timeline." },
      { label: "Impact", description: "Expected ₹ impact range and payback." },
      { label: "Confidence", description: "Our confidence in the impact, based on data quality and precedent." },
      { label: "Evidence", description: "The underlying data, documents, and conversations that support the recommendation." },
    ] satisfies RecommendationField[],
  },
  deployment: {
    title: "First deployment model",
    subtitle: "Most clients start with one of two engagement models.",
    options: [
      {
        title: "PulseIQ Assessment Workbench",
        description:
          "A 2-week workbench engagement that maps the operating model and produces a 90-day execution plan.",
      },
      {
        title: "48-Hour Enterprise Intelligence Diagnostic",
        description:
          "A focused 48-hour engagement that delivers a board-ready view of enterprise truth.",
      },
    ] satisfies DeploymentOption[],
  },
  connectorRoadmap: {
    title: "Future connector roadmap",
    subtitle:
      "The PulseIQ ingestion layer is designed to extend to the systems enterprises actually run on.",
    connectors: [
      "SharePoint",
      "OneDrive",
      "Google Drive",
      "ERP (SAP, Oracle, custom)",
      "CRM (Salesforce, Dynamics, custom)",
      "HRMS (SAP SuccessFactors, Darwinbox, Keka)",
      "Email (Outlook, Gmail)",
      "Calendar and meeting systems (Microsoft Teams, Google Meet)",
    ],
  },
  cta: {
    title: "See PulseIQ in your business, in 48 hours.",
    subtitle:
      "Bring your financials, your strategy deck, and your Excel trackers. Leave with a board-ready view of enterprise truth.",
    primaryCta: { label: "Book a Diagnostic", href: "/assessment" },
    secondaryCta: { label: "Visit PulseIQ.co.in", href: "https://www.pulseiq.co.in/" },
  },
} as const;

export const winsproposalPage = {
  hero: {
    eyebrow: "WinsProposal",
    title: "WinsProposal: Revenue and Proposal Intelligence Platform",
    subtitle:
      "Help EPC, valve, pump, industrial equipment, and manufacturing companies improve proposal speed, quality, compliance, and win probability — without adding headcount to the proposal team.",
  },
  targetUsers: {
    title: "Built for the people who actually win the deal",
    roles: [
      {
        role: "Sales leadership",
        description:
          "Visibility into pipeline, pricing discipline, and win/loss patterns.",
      },
      {
        role: "Proposal and bid teams",
        description:
          "Faster, more accurate proposals with less engineering rework.",
      },
      {
        role: "Engineering and product",
        description:
          "Cleaner inputs, fewer clarification loops, less context-switching.",
      },
      {
        role: "Commercial and finance",
        description:
          "Pricing discipline and margin protection on every deal.",
      },
      {
        role: "Executive leadership",
        description:
          "A board-level view of revenue conversion and proposal health.",
      },
    ] satisfies TargetRole[],
  },
  capabilities: {
    title: "Capabilities",
    items: [
      {
        title: "RFP and RFQ understanding",
        description:
          "Parses incoming RFPs and RFQs into structured requirements, compliance items, and evaluation criteria.",
      },
      {
        title: "Technical and commercial compliance",
        description:
          "Tracks compliance status across every line item, with traceability back to source.",
      },
      {
        title: "Proposal generation",
        description:
          "Generates first-draft proposal sections, compliance matrices, and executive summaries from your knowledge vault.",
      },
      {
        title: "Knowledge vault",
        description:
          "A living library of past proposals, case studies, technical content, and pricing patterns that gets smarter with every deal.",
      },
      {
        title: "Drawing and visualization intelligence",
        description:
          "Reuses approved drawings, schematics, and visuals with provenance tracked.",
      },
      {
        title: "Approval and bottleneck visibility",
        description:
          "Surfaces where proposals are stuck, who is holding them, and how long they have been waiting.",
      },
      {
        title: "Proposal analytics",
        description:
          "Cycle time, win rate, pricing variance, and effort per role — by segment, region, and product line.",
      },
    ] satisfies Capability[],
  },
  outcomes: {
    title: "Outcomes",
    items: [
      "Faster proposal turnaround — measured in days, not weeks.",
      "Better compliance — fewer disqualifications, fewer post-submission surprises.",
      "Improved win-rate visibility — know where you win, where you lose, and why.",
      "Reduced engineering rework — fewer clarification loops and re-quotes.",
      "Better revenue conversion — a tighter loop from opportunity to close.",
    ],
  },
  fitWithPulseiq: {
    title: "How WinsProposal fits with PulseIQ",
    body:
      "WinsProposal generates the revenue-side truth layer — pipeline, proposal, pricing, and win/loss signals. PulseIQ consumes that layer to feed its Enterprise Truth Map, Executive Cockpit, and recommendation engine. Together they form the revenue and operating intelligence core of the RightSense platform family.",
  } satisfies FitWithPlatform,
  cta: {
    title: "See WinsProposal in your pipeline.",
    subtitle:
      "Visit the WinsProposal product site or talk to our team about a proposal intelligence pilot.",
    primaryCta: { label: "Visit WinsProposal.com", href: "https://www.winsproposal.com/" },
    secondaryCta: { label: "Talk to our team", href: "/contact" },
  },
} as const;

export const talentpulsePage = {
  hero: {
    eyebrow: "TalentPulse",
    title: "TalentPulse: AI-Native Talent Intelligence Platform",
    subtitle:
      "Connect talent sourcing, candidate intelligence, recruiter workflows, workforce signals, and productivity insights to improve hiring velocity, utilization, and capability planning.",
  },
  capabilities: {
    title: "Capabilities",
    items: [
      {
        title: "Candidate intelligence",
        description:
          "Builds a structured view of every candidate — skills, history, fit signals — from resumes, profiles, and recruiter notes.",
      },
      {
        title: "Recruiter cockpit",
        description:
          "Surfaces where the pipeline is stuck, who is overloaded, and which roles are aging beyond plan.",
      },
      {
        title: "Talent pipeline",
        description:
          "A live view of sourcing, screening, interview, and offer stages — by role, business unit, and recruiter.",
      },
      {
        title: "Workforce capability mapping",
        description:
          "Maps the skills the business has today, the skills it will need, and the gap in between.",
      },
      {
        title: "Role-fit intelligence",
        description:
          "Scores candidate fit against role profiles using structured evidence, not gut feel.",
      },
      {
        title: "Productivity signals",
        description:
          "Connects hiring, capacity, and productivity data to expose where talent decisions are blocking outcomes.",
      },
      {
        title: "Hiring velocity analytics",
        description:
          "Time-to-fill, time-to-hire, source effectiveness, and funnel conversion by role and channel.",
      },
    ] satisfies Capability[],
  },
  outcomes: {
    title: "Outcomes",
    items: [
      "Faster sourcing — shorter time from requisition to shortlist.",
      "Better candidate quality — higher role-fit scores and lower early attrition.",
      "Recruiter productivity — more closures per recruiter, with less manual work.",
      "Workforce capability planning — a current view of skills, capacity, and gaps.",
      "Talent-to-business outcome alignment — hiring decisions linked to revenue, margin, and execution outcomes.",
    ],
  },
  fitWithPulseiq: {
    title: "How TalentPulse fits with PulseIQ",
    body:
      "TalentPulse generates the talent and productivity truth layer — capacity, skills, attrition, and productivity signals. PulseIQ consumes that layer to feed its Enterprise Truth Map, Executive Cockpit, and AI Recommendation Engine. Together they form the talent and operating intelligence core of the RightSense platform family.",
  } satisfies FitWithPlatform,
  cta: {
    title: "See TalentPulse in your hiring funnel.",
    subtitle:
      "Visit the TalentPulse product site or talk to our team about a talent intelligence pilot.",
    primaryCta: { label: "Visit TalentPulse.me", href: "https://www.talentpulse.me/" },
    secondaryCta: { label: "Talk to our team", href: "/contact" },
  },
} as const;

export const assessmentPage = {
  hero: {
    eyebrow: "PulseIQ flagship engagement",
    title: "PulseIQ 48-Hour Enterprise Intelligence Diagnostic",
    subtitle:
      "Our first sellable offer: a 48-hour, executive-grade engagement that delivers a board-ready view of enterprise truth.",
  },
  whoItsFor: {
    title: "Who it is for",
    roles: [
      "CEOs, COOs, CFOs, and CROs who need a single current view of the business",
      "Promoters and founder-operators preparing for board or investor reviews",
      "Transformation and strategy heads launching an AI or operating-model program",
      "Board advisors supporting a portfolio company through a turnaround or scale-up",
    ],
  },
  inputs: {
    title: "What we ingest",
    items: [
      "Audited financial statements and management accounts",
      "Board decks and management presentations",
      "Strategy documents and annual operating plans",
      "Standard operating procedures and policy documents",
      "Critical Excel trackers that run the business day-to-day",
      "ERP, CRM, and HRMS exports for the relevant period",
      "Proposal pipeline and recent bid submissions",
      "Sales pipeline and opportunity reports",
      "Operations, quality, and production reports",
      "Shared drive documents (with consent)",
      "Optional: summarized email and meeting themes (with consent)",
    ],
  },
  outputs: {
    title: "What you walk away with",
    items: [
      "Enterprise Truth Map — one current view of the business leadership can align on",
      "Executive Cockpit — the leadership-level metrics, refreshed as source systems update",
      "Revenue and margin forecast — with confidence bands and drivers",
      "What-if scenarios — quantified impact of the moves leadership is considering",
      "Top 10 revenue, margin, and cash opportunities — ranked by impact and feasibility",
      "Risk and gap analysis — across customer, supplier, operational, and workforce dimensions",
      "90-day execution plan — with named owners, milestones, and KPIs",
      "Board-ready report — designed to anchor the next leadership review",
    ],
  },
  process: {
    title: "How the 48 hours are spent",
    steps: [
      {
        num: "01",
        label: "Day 0",
        title: "Scope and source list",
        description:
          "We align on the business question, the sources we will read, and the data owners on your side.",
      },
      {
        num: "02",
        label: "Day 1",
        title: "Ingest and extract",
        description:
          "We connect to the agreed sources, extract the data, and begin reconciling definitions across systems.",
      },
      {
        num: "03",
        label: "Day 2",
        title: "Analyze, forecast, simulate",
        description:
          "We run the truth map, forecast, what-if scenarios, and the prioritized opportunity set.",
      },
      {
        num: "04",
        label: "Review",
        title: "Executive walkthrough",
        description:
          "A board-ready readout with the leadership team, plus the document package.",
      },
    ] satisfies AssessmentStep[],
  },
  commercial: {
    title: "Commercial positioning",
    body:
      "Diagnostic engagements start in the range of ₹3L – ₹10L depending on scope, data complexity, and number of entities. Engagements are fixed-fee and conclude with the deliverables listed above.",
  },
  ninetyDayPlan: {
    title: "What the 90-day plan looks like",
    phases: [
      {
        phase: "Weeks 1–2",
        title: "Validate the truth map and surface data gaps",
        description:
          "Confirm the truth map with function heads, surface missing data, and stand up the data ingestion cadence.",
      },
      {
        phase: "Weeks 3–4",
        title: "Revenue and margin quick wins",
        description:
          "Execute the highest-confidence revenue and margin moves identified during the diagnostic.",
      },
      {
        phase: "Month 2",
        title: "Workflow and automation improvements",
        description:
          "Stand up the workflow and automation changes that unlock sustained margin and productivity gains.",
      },
      {
        phase: "Month 3",
        title: "Measurable execution governance",
        description:
          "Lock the new operating cadence with a leadership review rhythm and a measurable KPI scorecard.",
      },
    ] satisfies PlanPhase[],
  },
  cta: {
    title: "Book a 48-Hour Enterprise Intelligence Diagnostic",
    subtitle:
      "Bring the sources you already have. Leave with a board-ready view of enterprise truth, business gaps, forecast scenarios, and a 90-day action plan.",
    primaryCta: { label: "Book a 48-Hour Diagnostic", href: "/contact" },
  },
  whenLeadershipNeedsThis: {
    title: "Signs Leadership Needs This Diagnostic Now",
    subtitle:
      "Use this when leadership needs a trusted view of revenue, margin, cash, risk, and execution before a board review, AI program, operating reset, or major business decision.",
    cards: [
      { text: "Board meeting is coming, but reports do not reconcile" },
      { text: "Revenue target is at risk and pipeline clarity is poor" },
      { text: "Margins are leaking but root causes are unclear" },
      { text: "ERP, Excel, finance, and operations numbers do not match" },
      { text: "AI initiatives are being discussed, but the business case is unclear" },
      { text: "Promoter, CEO, or CFO needs one trusted view before committing to action" },
    ],
  } satisfies WhenLeadershipNeedsThis,
  sampleOutput: {
    title: "Sample diagnostic output",
    subtitle:
      "The diagnostic does not stop at observations. It produces quantified findings, what-if scenarios, and a leadership action plan.",
    cards: [
      {
        title: "Enterprise Truth Map",
        description:
          "Official financials show 8% growth, strategy target is 20%, and current operating data supports only 11%. PulseIQ highlights the gap and the drivers.",
      },
      {
        title: "Revenue Gap",
        description:
          "Current forecast shows a revenue gap against plan. Proposal win rate, delayed approvals, customer concentration, and pipeline quality are quantified.",
      },
      {
        title: "Margin Leakage",
        description:
          "Low-margin products, discount leakage, supplier cost escalation, inventory pressure, and rework are ranked by impact and controllability.",
      },
      {
        title: "90-Day Action Plan",
        description:
          "Top actions are ranked by impact, effort, owner role, confidence level, and KPI so leadership can act immediately.",
      },
    ],
  } satisfies SampleOutput,
  midCta: {
    title: "Want to know what your data can reveal in 48 hours?",
    primaryCta: { label: "Book Diagnostic Call", href: "/contact" },
    secondaryCta: { label: "Ask What Data Is Needed", href: "/contact" },
  } as const,
  minimumRequired: {
    title: "Minimum required to start",
    subtitle:
      "The diagnostic is designed for busy leadership teams. We start with what is available and expand only where it improves the business answer.",
    items: [
      "Latest financial statements or management accounts",
      "Latest business review, strategy deck, or board deck",
      "Sales pipeline, order backlog, or revenue tracker",
      "Key Excel trackers that leadership relies on",
      "60-minute leadership context call",
    ],
    closing: "Everything else is optional and can be added as available.",
  } satisfies MinimumRequired,
  dataAccess: {
    title: "Data access and confidentiality",
    points: [
      "Read-only access, exports, or secure uploads",
      "Only agreed business sources are analyzed",
      "No employee surveillance",
      "Email and meeting inputs are optional and limited to agreed business themes",
      "Source-level evidence is retained for leadership review",
      "Customer data is used only for the diagnostic engagement",
    ],
  } satisfies DataAccess,
} as const;

export const diagnosticPage: DiagnosticPageContent = {
  hero: {
    eyebrow: "PulseIQ",
    title: "48-Hour Enterprise Operating Intelligence Diagnostic",
    subtitle:
      "A paid entry engagement that connects your fragmented systems, documents, and decisions into a board-ready view of enterprise truth — across revenue, operations, margin, compliance, vendor ecosystem, and AI governance.",
  },
  whoItsFor: {
    title: "Who this diagnostic is for",
    roles: [
      "CEOs, COOs, CFOs, and CROs who need a single current view of the business before a board review, investor meeting, or major decision",
      "Promoters and founder-operators preparing for board or investor reviews",
      "Transformation and strategy heads launching an AI or operating-model program",
      "Compliance and risk leaders assessing readiness across standards, vendor governance, and regulatory exposure",
      "Board advisors supporting a portfolio company through a turnaround, scale-up, or compliance upgrade",
    ],
  },
  painSection: {
    title: "Enterprise leaders do not lack data. They lack connected truth.",
    subtitle:
      "Decisions stall because the business is a hundred disconnected sources of partial truth — owned by no one, reconciled by no one, and out of date by the time the meeting starts. The 48-Hour Diagnostic cuts through this in two days.",
    points: [
      "ERPs, CRMs, HRMS, and MES speak different languages and never reconcile cleanly",
      "Financial reports, operational data, and strategic plans tell three different stories — and none match",
      "Excel trackers multiply with every project, customer, and SKU — and no one owns the totals",
      "Proposals, emails, and meetings hide the real pipeline, decisions, and ownership",
      "Compliance documentation is fragmented across drives, emails, and tribal knowledge — audit readiness is unknown",
      "Vendor and supplier data lives in procurement systems, contracts, and spreadsheets that are never reconciled",
      "Workforce signals — load, attrition, skill gaps — never reach the leadership table",
    ],
  },
  inputsSummary: {
    title: "What we ingest",
    items: [
      "Audited financial statements and management accounts",
      "Board decks and management presentations",
      "Strategy documents and annual operating plans",
      "Standard operating procedures and policy documents",
      "Critical Excel trackers that run the business day-to-day",
      "ERP, CRM, and HRMS exports for the relevant period",
      "Proposal pipeline and recent bid submissions",
      "Sales pipeline and opportunity reports",
      "Operations, quality, and production reports",
      "Compliance documentation, certifications, and audit evidence",
      "Vendor and supplier registers, contracts, and performance data",
      "AI governance and data policy documents (if available)",
      "Shared drive documents (with consent)",
      "Optional: summarized email and meeting themes (with consent)",
    ],
  },
  pillarsSection: {
    title: "Six pillars of the 48-Hour Diagnostic",
    subtitle:
      "The diagnostic examines your business across six connected dimensions. Each pillar produces a quantified readiness score, gap analysis, and prioritized improvement actions.",
    pillars: [
      {
        num: "01",
        title: "Revenue & Proposal Intelligence",
        summary: "Win rate, pipeline health, pricing discipline, and proposal cycle efficiency.",
        items: [
          "Proposal win/loss analysis and pipeline quality scoring",
          "Pricing variance and discount leakage quantification",
          "Quote-to-order cycle time and bottleneck identification",
          "Renewal and expansion revenue visibility",
          "Customer concentration risk and revenue dependency mapping",
        ],
      },
      {
        num: "02",
        title: "Operating Intelligence",
        summary: "Enterprise truth map, forecast accuracy, and execution visibility.",
        items: [
          "Enterprise Truth Map — one current view of the business leadership can align on",
          "Forecast accuracy assessment with confidence bands and driver analysis",
          "Process adherence scoring against documented SOPs and RACI",
          "Decision flow mapping — who decides, on what data, and how fast",
          "Cross-functional data reconciliation gaps across ERP, CRM, and finance",
        ],
      },
      {
        num: "03",
        title: "Margin & Productivity Leakage",
        summary: "Cost-to-serve, rework, waste, and working capital leak detection.",
        items: [
          "Cost-to-serve analysis by product, customer, and channel",
          "Rework and quality cost quantification across production and service",
          "Working capital leak detection in receivables, inventory, and supplier terms",
          "Productivity baseline measurement across functions and shifts",
          "Margin leakage ranked by impact and controllability",
        ],
      },
      {
        num: "04",
        title: "Compliance & Standards Readiness",
        summary: "ISO readiness, technical standards compliance, and audit preparedness.",
        items: [
          "Gap assessment against ISO 9001, 14001, 45001, 27001, 42001, 50001 standards",
          "Technical standards compliance review (API, ASME, ANSI, IEC, ISA, customer-specific)",
          "Statutory documentation and audit evidence readiness",
          "Policy, SOP, and procedure documentation completeness scoring",
          "Corrective action and non-conformance tracking maturity",
        ],
      },
      {
        num: "05",
        title: "Vendor/Supplier/Ecosystem Readiness",
        summary: "Supplier governance, prequalification status, and ecosystem risk.",
        items: [
          "Vendor registration and prequalification status assessment",
          "Supplier contract compliance and performance scorecard",
          "Multi-tier supply chain visibility and risk mapping",
          "Procurement-to-payment cycle efficiency and control gaps",
          "Supplier governance maturity and escalation framework readiness",
        ],
      },
      {
        num: "06",
        title: "AI Governance & Trusted Agent Readiness",
        summary: "AI policy, data governance, and organizational readiness for AI-native operations.",
        items: [
          "AI policy and data governance framework maturity assessment",
          "Data quality, lineage, and access control readiness scoring",
          "Organizational readiness for AI-native workflows and decision support",
          "AI use case inventory and risk classification",
          "Trusted agent readiness — role-based AI access, oversight, and audit trail",
        ],
      },
    ],
  },
  process: {
    title: "How the 48 hours are structured",
    steps: [
      {
        num: "01",
        window: "Hour 0–4",
        title: "Secure data intake and scope alignment",
        description:
          "We align on the business question, the sources to ingest, and the data owners. Read-only access, exports, or secure uploads from ERP, CRM, HRMS, finance, Excel trackers, documents, and compliance systems.",
      },
      {
        num: "02",
        window: "Hour 4–12",
        title: "Connect, extract, and reconcile",
        description:
          "Connect to source systems, verify ingestion, and reconcile entity definitions across them. Compliance documentation and vendor data are catalogued alongside financial and operational sources.",
      },
      {
        num: "03",
        window: "Hour 12–28",
        title: "Run the six-pillar diagnostic",
        description:
          "Across all six pillars — revenue, operations, margin, compliance, vendor, and AI — we run the gap analysis, readiness scoring, and opportunity quantification.",
      },
      {
        num: "04",
        window: "Hour 28–40",
        title: "Build the truth map and action plan",
        description:
          "Generate the Enterprise Truth Map, ranked opportunity set with quantified impact ranges, risk register, and a 30/60/90 day execution plan with named owners and KPIs.",
      },
      {
        num: "05",
        window: "Hour 40–48",
        title: "Executive readout and board-ready package",
        description:
          "Deliver a board-ready briefing with the leadership team. Includes the truth map, six-pillar scorecard, prioritized actions, and the complete document package.",
      },
    ],
  },
  deliverables: {
    title: "What you walk away with",
    items: [
      {
        title: "Enterprise Truth Map",
        description:
          "One current view of the business leadership can align on — connecting financial, operational, strategic, process, collaboration, revenue, and talent truth.",
      },
      {
        title: "Six-Pillar Readiness Scorecard",
        description:
          "Quantified readiness scores across revenue intelligence, operating intelligence, margin leakage, compliance, vendor ecosystem, and AI governance — with gap analysis.",
      },
      {
        title: "Standards Compliance Gap Report",
        description:
          "Readiness mapping against ISO standards, technical standards, and customer-specific compliance requirements with prioritized remediation actions.",
      },
      {
        title: "Revenue, Margin & Cash Opportunity Map",
        description:
          "10–15 prioritized opportunities with quantified impact ranges, ranked by feasibility and business value.",
      },
      {
        title: "Vendor & Ecosystem Risk Register",
        description:
          "Supplier governance maturity, prequalification gaps, and multi-tier supply chain risk assessment.",
      },
      {
        title: "30/60/90 Day Execution Plan",
        description:
          "Named owners, milestones, KPIs, and confidence levels for every recommended action.",
      },
      {
        title: "Board-Ready Briefing Document",
        description:
          "Designed to anchor the next leadership review, board meeting, or investor discussion.",
      },
    ],
  },
  standards: {
    title: "Compliance & Standards Readiness Coverage",
    subtitle:
      "The diagnostic assesses documentation readiness, process adherence, evidence gaps, and improvement roadmaps across the following standards and frameworks. RightSense does not provide certification or formal approvals.",
    categories: [
      {
        name: "ISO Management System Standards",
        items: [
          "ISO 9001 — Quality management systems",
          "ISO 14001 — Environmental management systems",
          "ISO 45001 — Occupational health and safety",
          "ISO 27001 — Information security management",
          "ISO 42001 — Artificial intelligence management systems",
          "ISO 50001 — Energy management systems",
        ],
      },
      {
        name: "Technical & Industry Standards",
        items: [
          "API specifications and standards compliance",
          "ASME boiler and pressure vessel code compliance",
          "ANSI standards for industrial equipment and processes",
          "IEC standards for electrical and electronic systems",
          "ISA standards for automation and control systems",
          "Customer-specific technical standards and specifications",
        ],
      },
      {
        name: "Vendor & Supplier Governance",
        items: [
          "Vendor registration and prequalification documentation",
          "Supplier code of conduct compliance",
          "Statutory documentation and audit evidence readiness",
          "Supplier governance maturity assessment",
          "Multi-tier supply chain documentation and traceability",
        ],
      },
    ],
    disclaimer:
      "The diagnostic identifies readiness gaps, documentation gaps, workflow risks, and improvement opportunities. Formal certification or legal/statutory compliance must be confirmed by accredited certification bodies, auditors, or qualified legal/statutory professionals.",
  },
  security: {
    title: "Data access and confidentiality",
    points: [
      "Read-only access, exports, or secure uploads — your choice",
      "Only agreed business sources are analyzed",
      "No employee surveillance",
      "Email and meeting inputs are optional and limited to agreed business themes",
      "Source-level evidence is retained for leadership review",
      "Customer data is used only for the diagnostic engagement",
    ],
  },
  cta: {
    title: "Book a 48-Hour Enterprise Operating Intelligence Diagnostic",
    subtitle:
      "Bring your business question, your financials, your compliance documentation, and your strategy deck. We will show you what connected enterprise truth looks like — across revenue, operations, margin, compliance, vendor ecosystem, and AI governance.",
    primaryCta: { label: "Book 48-Hour Diagnostic", href: "/contact" },
    secondaryCta: { label: "Talk to a Founder", href: "/about" },
  },
  disclaimer:
    "RightSense does not provide ISO certification, legal certification, statutory audit, regulatory approval, or formal customer approval. The diagnostic identifies readiness gaps, workflow risks, documentation gaps, and improvement opportunities. Formal certification or legal/statutory compliance must be confirmed by accredited certification bodies, auditors, or qualified legal/statutory professionals.",
} as const;

export const industriesPage = {
  hero: {
    eyebrow: "Industry focus",
    title: "Built for Industrial and Enterprise Complexity",
    subtitle:
      "RightSense is shaped for industrial, project-based, and engineering-led businesses where the gap between data and decision is widest.",
  },
} as const;

export const industriesPageCta: PageCta = {
  title: "See RightSense in your industry.",
  subtitle:
    "Bring the operating model, the data, and the question you are trying to answer. We will show you what the truth map looks like in your business.",
  primaryCta: { label: "Book a Diagnostic", href: "/contact" },
  secondaryCta: { label: "See the Assessment", href: "/assessment" },
};

export const industriesDetailed: IndustryDetail[] = [
  {
    id: "valve-detailed",
    icon: "Wrench",
    name: "Valve manufacturers",
    summary:
      "Engineering-driven orders with custom configurations and slow quote-to-order cycles.",
    description: "",
    pains: [
      "Long quote-to-order cycles driven by custom configurations",
      "Engineering bottlenecks during peak order intake",
      "Margin leakage from pricing variance across regions and reps",
      "Fragmented visibility across engineering, sales, and production",
    ],
    outcomes: [
      "Faster, more accurate configuration-led quotes",
      "Margin protection through pricing discipline",
      "Clear visibility from order intake to shipment",
      "Engineering capacity planning tied to demand",
    ],
  },
  {
    id: "pump-detailed",
    icon: "Droplets",
    name: "Pump manufacturers",
    summary:
      "High SKU complexity, distribution-led revenue, and service-driven margins.",
    description: "",
    pains: [
      "High SKU complexity across product families and variants",
      "Distribution-led revenue with limited end-customer visibility",
      "Service and warranty margins under pressure",
      "Disconnected ERP, CRM, and service data",
    ],
    outcomes: [
      "Better revenue and margin visibility by SKU and channel",
      "Service-cost and warranty-exposure visibility",
      "Forecast accuracy improvement for distribution partners",
      "Clear ownership of channel and service data",
    ],
  },
  {
    id: "epc-detailed",
    icon: "HardHat",
    name: "EPC companies",
    summary:
      "Long project lifecycles, vendor sprawl, slow proposal cycles, and cost overruns.",
    description: "",
    pains: [
      "Slow proposal cycles and high bid cost",
      "Vendor sprawl and limited cost transparency",
      "Project cost overruns discovered too late",
      "Fragmented ERP/Excel reporting across projects",
    ],
    outcomes: [
      "Faster proposal turnaround with better compliance",
      "Better cost-to-serve visibility across vendors",
      "Earlier warning on project cost overruns",
      "Executive decision clarity across the project portfolio",
    ],
  },
  {
    id: "oem-detailed",
    icon: "PackageOpen",
    name: "Industrial equipment OEMs",
    summary:
      "Multi-tier supply chains, dealer networks, and warranty or service exposure.",
    description: "",
    pains: [
      "Multi-tier supply chain blind spots",
      "Dealer network performance inconsistent and under-instrumented",
      "Warranty and service exposure hard to forecast",
      "Engineering change orders disrupting production plans",
    ],
    outcomes: [
      "Supply chain visibility across tiers",
      "Dealer performance scorecards leadership can act on",
      "Warranty and service-cost forecasting",
      "Faster engineering change impact assessment",
    ],
  },
  {
    id: "fabrication-detailed",
    icon: "Factory",
    name: "Fabrication companies",
    summary:
      "Per-piece costing, manual reporting burden, and shop-floor visibility gaps.",
    description: "",
    pains: [
      "Per-piece costing done in Excel, not the system",
      "Manual reporting burden on production and finance",
      "Shop-floor visibility gaps in OEE and downtime",
      "Customer concentration risk under-instrumented",
    ],
    outcomes: [
      "Per-piece costing from source systems, not Excel",
      "Reduced manual reporting burden across functions",
      "Live OEE, downtime, and quality visibility",
      "Customer concentration risk early-warning",
    ],
  },
  {
    id: "project-mfg-detailed",
    icon: "ListChecks",
    name: "Project-based manufacturing companies",
    summary:
      "Per-project costing, milestone billing, and resource allocation across jobs.",
    description: "",
    pains: [
      "Per-project costing and margin visibility inconsistent",
      "Milestone billing and collections hard to track",
      "Resource allocation across competing jobs",
      "Project delays discovered late in the cycle",
    ],
    outcomes: [
      "Per-project cost and margin visibility",
      "Milestone billing and collections tracking",
      "Resource planning tied to project pipeline",
      "Earlier warning on at-risk projects",
    ],
  },
  {
    id: "mid-market-detailed",
    icon: "Building2",
    name: "Mid-market enterprises",
    summary:
      "Growth-stage operations that outgrew spreadsheets but cannot afford enterprise consulting.",
    description: "",
    pains: [
      "Growth outpaced the operating model",
      "Spreadsheets and tribal knowledge are the system of record",
      "Working capital pressure as scale increases",
      "Limited bandwidth for transformation programs",
    ],
    outcomes: [
      "Operating model clarity without a multi-year program",
      "Spreadsheet-to-system migrations that actually stick",
      "Working capital visibility and action plan",
      "Founder and leadership bandwidth returned to growth",
    ],
  },
];

export const aboutPage = {
  hero: {
    eyebrow: "About RightSense",
    title: "Built by Enterprise Transformation Practitioners, Not Generic AI Consultants",
    subtitle:
      "RightSense Technologies helps industrial and enterprise leaders turn fragmented systems, documents, decisions, and operating signals into board-ready action.",
  },
  overview: {
    title: "Who we are",
    body:
      "RightSense Technologies is a founder-led enterprise transformation and AI-native platform company. We have spent our careers inside industrial, EPC, and manufacturing businesses — running operations, leading transformations, and shaping the conversations that happen in the boardroom.",
  },
  founder: {
    title: "Founder-led credibility",
    body:
      "Our founders have led operating-model transformations, ERP rollouts, and AI programs inside industrial enterprises. We bring that experience into every diagnostic, every roadmap, and every recommendation we deliver — not in a deck, but in the work.",
  },
  whyAINative: {
    title: "Why AI-native, and why now",
    body:
      "For two decades, BI and ERP have promised an integrated view of the business. The reality in most enterprises is fragmented systems, fragmented decisions, and dashboards no one trusts. Modern data and AI stacks finally make it possible to build a connected truth layer — without a five-year integration program. RightSense is built ground-up on that stack.",
  },
  foundingTeam: {
    title: "Founding Team",
    subtitle:
      "RightSense Technologies Private Limited was founded in 2018 by enterprise technology, product, and transformation practitioners with deep experience across ERP, PLM, AI, cybersecurity, product development, customer experience, and digital transformation.",
    members: [
      {
        id: "mohan-babu",
        name: "Mohan Babu",
        role: "Co-Founder & CEO",
        bio: "Mohan Babu brings 30+ years of experience across enterprise systems, industrial manufacturing, ERP, PLM, proposal engineering, product configuration, program management, and AI-native transformation. He leads RightSense's platform vision across PulseIQ, WinsProposal, and TalentPulse, focused on measurable outcomes across revenue, margin, productivity, and execution.",
        linkedin: "https://in.linkedin.com/in/mohan-babu-77802217",
        image: "/founders/mohan-babu.jpg",
        initials: "MB",
      },
      {
        id: "suryatej-sonawane",
        name: "Suryatej Sonawane",
        role: "Co-Founder",
        bio: "Suryatej Sonawane brings more than two decades of experience across product development, customer experience, account management, professional services, SaaS, AI, ML, and LLM-led product opportunities.",
        linkedin: "https://www.linkedin.com/in/sonawane-suryatej-45bb544/",
        image: "/founders/suryatej-sonawane.jpg",
        initials: "SS",
      },
      {
        id: "ayyala-pavithran",
        name: "Ayyala Pavithran",
        role: "Co-Founder",
        bio: "Ayyala Pavithran brings over two decades of experience in digital transformation, business consulting, IT services, manufacturing, pharma, CIO-level leadership, strategy, GTM, and enterprise transformation.",
        linkedin: "https://www.linkedin.com/in/ayyalapavi/",
        image: "/founders/ayyala-pavithran.jpg",
        initials: "AP",
      },
    ],
  } satisfies FoundingTeam,
  principles: {
    title: "Operating principles",
    items: [
      {
        name: "Outcome-first",
        description: "We are paid to move the number, not to ship the dashboard.",
      },
      {
        name: "Assessment-first",
        description:
          "Every engagement starts with proving the truth map before any software is sold.",
      },
      {
        name: "Platform-ready",
        description:
          "Recommendations are designed to be operationalized, not left as a report.",
      },
      {
        name: "Lean execution",
        description:
          "Senior practitioners run every engagement. No junior teams, no offshore hand-offs.",
      },
      {
        name: "Measurable business impact",
        description:
          "Every recommendation carries an impact range, a confidence level, and an owner.",
      },
    ] satisfies Principle[],
  },
  company: {
    name: "RightSense Technologies Private Limited",
    location: "Bengaluru, India",
  },
  founderExecution: {
    title: "Founder-led execution model",
    body: "RightSense is currently operated as a lean founder-led company, supported by specialist partners and AI-native delivery workflows. This allows us to move fast, keep senior ownership close to customers, and focus every engagement on measurable business outcomes.",
  },
  customerTrust: {
    body: "We start small, prove value quickly, and expand only when the business case is clear.",
  },
  cta: {
    title: "Start a 48-Hour Diagnostic conversation.",
    subtitle:
      "Bring your business question, your financials, and your strategy deck. We will show you what the truth map looks like in your business.",
    primaryCta: { label: "Book a Diagnostic", href: "/48-hour-diagnostic" },
  },
} as const;

export const contactPage = {
  hero: {
    eyebrow: "Contact",
    title: "Start with a 48-Hour Enterprise Intelligence Diagnostic",
    subtitle:
      "Tell us about your business and the question you are trying to answer. We will come back within one business day.",
  },
  details: {
    email: "mohan@rightsense.in",
    phone: "+91-9845543804",
    company: "RightSense Technologies Private Limited",
    location: "Bengaluru, India",
  },
  formFields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "Your full name",
    },
    {
      name: "company",
      label: "Company",
      type: "text",
      required: true,
      placeholder: "Company name",
    },
    {
      name: "role",
      label: "Role",
      type: "text",
      required: true,
      placeholder: "Your role",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      placeholder: "you@company.com",
    },
    {
      name: "phone",
      label: "Phone",
      type: "tel",
      required: false,
      placeholder: "+91 ...",
    },
    {
      name: "industry",
      label: "Industry",
      type: "select",
      required: true,
      options: [
        "Industrial manufacturing",
        "EPC",
        "Valve manufacturer",
        "Pump manufacturer",
        "Industrial equipment OEM",
        "Project-based manufacturer",
        "Mid-market enterprise",
        "Other",
      ],
    },
    {
      name: "challenge",
      label: "Main business challenge",
      type: "textarea",
      required: true,
      placeholder: "What question are you trying to answer?",
    },
    {
      name: "platform",
      label: "Interested platform",
      type: "select",
      required: false,
      options: ["PulseIQ", "WinsProposal", "TalentPulse", "Not sure yet"],
    },
    {
      name: "demoDate",
      label: "Preferred demo date",
      type: "date",
      required: false,
    },
  ] satisfies FormField[],
} as const;

export const whyRightSense: WhyRightSense = {
  eyebrow: "Why RightSense",
  title: "Why RightSense, in five points.",
  subtitle:
    "Five reasons enterprise leaders choose RightSense over BI tools, ERP consultants, AI agencies, and strategy firms.",
  points: [
    {
      id: "outcome",
      icon: "Target",
      title: "Outcomes, not dashboards",
      description:
        "Every engagement is anchored to revenue, margin, cash, productivity, speed, and risk — not to charts no one acts on.",
    },
    {
      id: "truth",
      icon: "Layers",
      title: "Seven sources of truth, one layer",
      description:
        "Financial, strategic, operational, process, collaboration, revenue, and talent truth connected in a single model.",
    },
    {
      id: "ai-native",
      icon: "Sparkles",
      title: "AI-native, not BI with AI",
      description:
        "Built ground-up on a modern data and AI stack — not a legacy reporting tool with AI features bolted on.",
    },
    {
      id: "assessment",
      icon: "ClipboardCheck",
      title: "Assessment-first, always",
      description:
        "Every engagement starts with a 48-Hour Diagnostic that proves the truth map before any software is sold.",
    },
    {
      id: "founder",
      icon: "UserCheck",
      title: "Founder-led, senior-only",
      description:
        "Senior practitioners run every engagement. No junior teams, no offshore hand-offs, no slideware.",
    },
  ],
};

export const contactSubmitEmail = "mohan@rightsense.in";
