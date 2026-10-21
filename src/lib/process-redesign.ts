export const processCases = [
  {
    slug: "order-execution-risk", title: "Order execution risk", outcome: "Protect shipment commitments and cash timing",
    pain: "An order looks on track in ERP while a drawing approval, missing material or supplier confirmation quietly puts shipment at risk.",
    impact: "Late shipment can delay invoicing, trigger expedite costs and weaken customer confidence. Order value is exposure, not a saving.",
    workflow: ["AI assembles order, engineering, material and shipment evidence with source dates.", "AI flags dependencies and missing evidence, then prepares recovery options.", "Engineering and procurement validate feasibility. The order owner approves the action and any changed promise.", "The team tracks execution. Finance separates observed shipment performance from attributable financial value."],
    adoption: "Replace parallel chase lists with one exception review. Name an order owner, agree escalation windows and coach teams to challenge weak evidence. Keep design releases, supplier commitments and customer promises under human approval.",
    data: "ERP order lines and promised dates; PLM drawing/BOM revisions; purchase orders and supplier confirmations; inventory; production, quality and logistics milestones. Join by order, item, revision and supplier IDs. Show freshness and missing links.",
    kpis: ["On-time shipment = orders shipped by the original committed date / orders due in the period.", "Risk lead time = time between a validated risk alert and the committed shipment date.", "Expedite cost per order = actual expedite charges / shipped orders.", "Adoption = eligible exceptions reviewed within the agreed window / eligible exceptions."],
    measurement: "Compare a scoped order cohort with a matched baseline, controlling for order complexity and mix. Track on-time shipment, invoice timing and actual expedite cost. Finance signs off any avoided-cost attribution after shipment. Set targets after measuring the baseline.",
    accelerator: "PulseIQ can accelerate evidence, decision and value tracking where it fits the agreed scope."
  },
  {
    slug: "rfq-proposal-cycle", title: "RFQ / proposal cycle", outcome: "Respond faster while protecting margin",
    pain: "Sales repeatedly chases engineering, costing and approvals while requirements sit across attachments and earlier bids.",
    impact: "Slow responses consume selling time, delay pipeline conversion and increase the risk of omitted requirements or weak pricing discipline.",
    workflow: ["AI extracts requirements and links each one to the source document and revision.", "AI retrieves approved reference answers and drafts a compliance matrix, assumptions and proposal.", "Engineering resolves deviations. Commercial owners approve price, margin, terms and commitments.", "The bid owner issues the approved proposal and captures win/loss learning."],
    adoption: "Create one approved answer library, name content owners and set review deadlines. Train reviewers to check citations and omissions. Never allow AI to commit pricing or contractual terms without approval.",
    data: "CRM opportunity; RFQ attachments and revisions; approved technical library; costing/CPQ records; price lists and approval rules; proposal versions and win/loss reasons. Separate customer-confidential material by access rights.",
    kpis: ["Proposal cycle time = elapsed business hours from complete RFQ intake to approved issue, reported as median and P90.", "First-pass completeness = proposals accepted internally without material rework / proposals reviewed.", "Review effort = reviewer hours per issued proposal.", "Margin discipline = proposals within approved margin policy / issued proposals."],
    measurement: "Compare similar RFQs by complexity and product family. Measure cycle time, rework and reviewer effort first. Assess win rate over a full sales cycle with sample size disclosed. Count only approved incremental contribution margin in a value case.",
    accelerator: "WinsProposal can accelerate requirement handling, governed proposal execution and learning."
  },
  {
    slug: "engineering-bottlenecks", title: "Engineering bottlenecks", outcome: "Release work sooner with less rework",
    pain: "Drawing reviews, design clarifications and engineering changes queue without a shared view of which customer commitments depend on them.",
    impact: "Release delays hold up purchasing and production. Uncontrolled revision handoffs create scrap, repeat work and avoidable expediting.",
    workflow: ["AI links open engineering tasks and approved revisions to order and production dependencies.", "AI groups missing information and proposes a priority queue with evidence.", "The engineering lead assigns capacity and approves technical decisions and releases.", "Downstream owners acknowledge the released revision. The team measures waiting time and rework."],
    adoption: "Agree queue ownership and priority rules across sales, engineering and operations. Protect engineering review time, train users on revision control and keep safety-critical sign-off with qualified people.",
    data: "PLM/PDM task history, drawings and approved revisions; ECO/ECR records; ERP order dependencies; engineering capacity and skills; quality/rework records. Unreleased drawings must not become production instructions.",
    kpis: ["Release lead time = elapsed days from complete design input to authorized release, by complexity.", "Queue age = days each ready-for-review task waits for a reviewer.", "Revision-related rework = recorded hours or cost attributed to wrong/incomplete revisions.", "Handoff compliance = downstream tasks using the approved revision / tasks sampled."],
    measurement: "Baseline queue and release times for a comparable product family. Track median and P90 cycle time plus quality escapes as a guardrail. Value only documented rework avoided or capacity redeployed to agreed productive work.",
    accelerator: "PulseIQ can support dependency visibility. TalentPulse can support capacity and skills visibility where appropriate."
  },
  {
    slug: "procurement-supplier-risk", title: "Procurement / supplier risk", outcome: "Reduce material surprises and expedite cost",
    pain: "Supplier dates change in emails while purchase-order dates stay unchanged. Buyers learn too late which shortages threaten production or shipment.",
    impact: "Missing parts drive idle time, premium freight and inventory buffers. A cheaper part can become expensive when its delay blocks an order.",
    workflow: ["AI reconciles approved supplier confirmations with purchase orders and material need dates.", "AI connects shortages to order and production consequences and flags stale confirmations.", "Buyers validate supplier evidence. Procurement, quality and engineering approve expedite, substitution or alternate-source choices.", "The team follows through on the chosen option and records actual receipt, cost and delivery outcomes."],
    adoption: "Define who owns supplier-date accuracy, response deadlines and exception escalations. Retire duplicate shortage lists. Keep vendor onboarding, substitutions, purchase orders and spend commitments behind existing approvals.",
    data: "ERP purchase orders, inventory and material requirements; approved supplier correspondence; quality/vendor qualification; receipt history; production schedules. External signals are supplementary and require source and timestamp checks.",
    kpis: ["Supplier on-time delivery = receipts on or before the agreed supplier date / receipts due.", "Confirmation freshness = open PO lines with a confirmation within the agreed interval / open PO lines.", "Shortage-related downtime = validated hours lost because of missing material.", "Premium freight = actual incremental freight spend per period."],
    measurement: "Compare a defined supplier/material cohort across comparable periods. Track shortage incidents, premium freight and stock levels together so lower shortages do not hide excess inventory. Finance validates costs against invoices and approved counterfactuals.",
    accelerator: "PulseIQ can support supplier-to-order dependencies and the evidence-to-value record."
  },
  {
    slug: "management-operating-rhythm", title: "Management operating rhythm", outcome: "Turn review meetings into accountable action",
    pain: "Teams spend hours assembling packs and reconciling numbers. The meeting ends with actions scattered across notes and no consistent follow-through.",
    impact: "Slow decisions and unclear ownership prolong execution gaps. Reporting effort displaces problem solving and hides whether actions made a difference.",
    workflow: ["AI prepares an exception-led briefing from approved KPIs with definitions, source dates and gaps.", "AI drafts decision options and checks whether previous actions have evidence of completion.", "Leaders resolve trade-offs, assign owners and confirm dates. AI records the approved decision and follow-up.", "Owners review action progress in the normal cadence. Finance verifies claimed value separately from activity completion."],
    adoption: "Agree KPI definitions and a common action log. Shift meeting time from status narration to decisions. Teach leaders to reject unsupported summaries and create space for frontline corrections.",
    data: "Approved ERP/finance/CRM/MES metrics; KPI dictionary; action log and meeting decisions; business calendar and ownership map. Access must respect finance, employee and customer confidentiality.",
    kpis: ["Preparation effort = measured hours spent producing the management pack per cycle.", "Decision latency = elapsed time from a decision-ready exception to the recorded decision.", "Action closure = actions completed with evidence by due date / actions due.", "Verified value = finance-approved attributable benefit, reported separately from modeled exposure."],
    measurement: "Observe several baseline review cycles, then compare preparation time, decision latency and closure quality over the proof period. Treat time released as capacity until redeployment or actual cost removal is evidenced.",
    accelerator: "PulseIQ can support evidence and outcome reviews. TalentPulse can add capacity context when workforce readiness affects delivery."
  },
  {
    slug: "plant-energy-yield-quality", title: "Plant energy, yield and quality", outcome: "Reduce energy intensity without sacrificing yield, quality or safety",
    pain: "Operators see feed variability, drifting process conditions and delayed quality results across separate control, historian and lab screens. An energy-saving adjustment can create off-spec output or unstable operation.",
    impact: "Excess energy, rework and lost saleable output raise unit cost and constrain capacity. An apparent energy gain is not value if it lowers yield, shifts cost elsewhere or breaches a safety or quality limit.",
    workflow: ["The plant team selects one line, product grade and operating window. Process engineering defines the approved limits, baseline and stop criteria before a trial.", "AI combines permitted sensor, feed, production and lab history with source times and quality checks. It flags missing or suspect readings and prepares an explanation of the conditions linked to energy and yield variation.", "AI suggests a bounded operating adjustment with expected trade-offs and uncertainty. A qualified process engineer checks the evidence; the operator accepts or rejects the recommendation. Existing control systems and safety interlocks retain authority.", "The operator runs a small, approved trial within the permitted window. The team records the actual setpoints, feed mix, disturbances, product quality and reasons for overrides. Any limit breach or unreliable data stops the trial and returns to the established operating procedure.", "The team compares trial results with comparable baseline periods or a defined control, normalizing for grade, feed characteristics, throughput and operating conditions. Quality and safety remain pass/fail guardrails.", "Finance and the plant owner verify net value from metered energy, saleable output and actual costs, including trial and run costs, before considering wider rollout."],
    adoption: "Co-design the trial with operators, process engineering, quality, maintenance and EHS. Train users to inspect evidence and reject a suggestion with a reason. Review overrides and false alarms in the shift routine. Keep setpoint changes, control-system writes and production decisions under authorized human procedures; scale only after operators trust the workflow and guardrails hold.",
    data: "Historian and DCS/APC tags with calibration and timestamp status; feedstock quality and batch/grade mix; MES production and downtime records; LIMS quality results with lab delay; energy meters and tariffs; maintenance events and approved operating limits. Align time windows and units, identify sensor drift and missing data, and use only authorized read access during diagnosis.",
    kpis: ["Energy intensity = metered electricity (kWh) or thermal energy (GJ) / tonne of saleable product, reported separately by energy type and grade.", "Saleable yield = accepted product output / qualified feed input for the defined mass-balance boundary.", "First-pass quality = lots meeting specification without rework / tested lots; report off-spec volume as a guardrail.", "Operating-limit compliance = eligible operating time within approved safety and quality limits / eligible operating time; any critical breach triggers a stop.", "Operator adoption = eligible recommendations reviewed with an accept, reject or override reason / eligible recommendations."],
    measurement: "Establish baseline variability before setting targets. Compare matched shifts or a pre-agreed control while accounting for grade, feed, throughput, weather and maintenance. Check energy, yield, quality, downtime and safety together. Count only attributable, finance-reviewed net benefit after extra energy, scrap, trial and operating costs; never present an illustrative plant result as a RightSense achievement.",
    accelerator: "PulseIQ may support traceable exception, decision and value records if its fit is demonstrated. Existing APC, DCS and safety systems remain the control authority; the initial proof does not require autonomous plant control."
  }
] as const;

export type FeaturedIndustryUseCase = {
  slug: string;
  industry: string;
  title: string;
  challenge: string;
  approach: string;
  illustrativeRoi: {
    label: string;
    calculation: string;
    result: string;
    caveat: string;
  };
  kpis: string[];
  accelerator: string;
};

export const featuredIndustryUseCases: FeaturedIndustryUseCase[] = [
  {
    slug: "rfq-proposal-cycle",
    industry: "Valve & pump manufacturers",
    title: "Engineer-to-order RFQ and proposal flow",
    challenge:
      "Specifications, sizing, costing, exceptions and approvals move through email and spreadsheets, slowing the quote while making technical and margin risk hard to see.",
    approach:
      "Create one governed RFQ evidence path: extract and cite requirements, reuse only approved engineering content, route deviations to specialists and retain human approval for price, margin and contractual commitments.",
    illustrativeRoi: {
      label: "Illustrative capacity-value scenario",
      calculation: "600 engineered quotes/year × 2 engineer-hours released/quote × ₹1,500 loaded hourly cost",
      result: "₹18 lakh annual capacity value",
      caveat:
        "Illustration only—not a customer result or forecast. Baseline hours, usable capacity and financial attribution must be validated during the diagnostic.",
    },
    kpis: [
      "Median and P90 proposal cycle time",
      "Engineering review hours per issued proposal",
      "First-pass technical completeness",
      "Share of proposals within approved margin policy",
    ],
    accelerator:
      "WinsProposal supports the governed RFQ workflow; PulseIQ connects proposal decisions to downstream order, margin and delivery outcomes.",
  },
  {
    slug: "order-execution-risk",
    industry: "EPC & project manufacturing",
    title: "Project delivery, margin and cash exposure",
    challenge:
      "Engineering releases, supplier commitments, site milestones, change orders and billing events live in different systems, so a project can look on track after recovery time has already narrowed.",
    approach:
      "Use PulseIQ to connect approved project evidence to customer commitments, quantify modeled exposure and route recovery options to the accountable project, commercial and finance owners.",
    illustrativeRoi: {
      label: "Illustrative value-at-risk scenario",
      calculation: "₹25 crore scoped project portfolio × 0.5% avoidable cost or leakage acted on in time",
      result: "₹12.5 lakh potential protected value",
      caveat:
        "Illustration only—not a promise of savings. Value is recognized only after the action, observed outcome and finance-approved attribution are recorded.",
    },
    kpis: [
      "Risk lead time before committed milestone",
      "Approved change-order cycle time",
      "Project gross-margin variance at completion",
      "Milestone billing achieved on the planned date",
    ],
    accelerator:
      "PulseIQ is the initial operating-intelligence layer for the evidence, decision and value record.",
  },
];
