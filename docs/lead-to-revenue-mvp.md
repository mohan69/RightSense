# RightSense Lead-to-Revenue Automation — MVP Build Plan

## Commercial objective

Validate a repeatable MSME revenue-automation offer before creating a standalone product.

**30-day target:**

- 5 discovery calls
- 3 qualified opportunities
- 2 proposals
- 1 paid pilot minimum
- Initial target: ₹1 lakh+ booked revenue

## Problem statement

Small and mid-sized businesses often receive enquiries through one WhatsApp Business number. Leads can remain with one person, responses are delayed, qualification is inconsistent, CRM handoff is manual, and follow-up is not measurable.

The first RightSense offer should solve the operating problem rather than sell a generic chatbot.

## Offer

### WhatsApp Revenue Starter

For small teams that need enquiry capture, qualification, routing, appointment scheduling and simple lead tracking.

### Lead-to-CRM Sprint

For businesses that already use a CRM and need WhatsApp enquiries synchronized into the normal sales process with ownership, SLA tracking and management visibility.

## Reference workflow

1. Customer sends a WhatsApp enquiry.
2. Automation gives an immediate acknowledgement.
3. Requirements are captured in structured fields.
4. Lead is qualified using customer-approved rules.
5. Lead is created or updated in the CRM.
6. A sales owner is assigned and notified.
7. A meeting or next action is scheduled.
8. Follow-up SLA and eventual conversion are measured.

## MVP scope — Phase 1

The first build is a **synthetic interactive reference demo** at `/revenue-agent-demo` inside the RightSense web application.

It intentionally does **not** connect to live WhatsApp, CRM, calendar or customer data. Its purpose is to support discovery conversations and obtain approval for a paid pilot before integration work begins.

Included scenarios:

- Construction materials
- Corporate gifting
- HR and payroll services

Included proof points:

- Immediate response
- Structured requirement capture
- Qualification
- CRM synchronization state
- Sales-owner assignment
- Meeting scheduling
- Revenue-control metrics

## Phase 2 — paid-pilot adapter layer

Only after a prospect agrees to a pilot:

- Meta WhatsApp Business Platform or approved BSP integration
- CRM adapter (customer-specific)
- Calendar / appointment adapter
- Lead-assignment rules
- SLA notifications
- Consent, audit and handoff controls
- Basic reporting

Avoid building a proprietary WhatsApp transport layer. Use approved provider infrastructure and keep RightSense value in workflow, integration, operating logic and measurable outcomes.

## Phase 3 — repeatability

After two paying customers, decide whether to standardize:

- reusable connectors
- industry templates
- multilingual text
- voice-note transcription
- qualification policies
- quote/catalog lookup
- referral and partner workflows
- multi-location routing

## Pilot KPIs

Capture a baseline before go-live and compare after:

- First-response time
- Percentage of enquiries captured
- Percentage of leads qualified
- Percentage assigned within SLA
- Follow-up completion rate
- Meetings booked
- Qualified pipeline influenced
- Won revenue influenced

## Guardrails

- Human approval for non-standard pricing, commitments and exceptions.
- Customer controls the qualification and routing policy.
- No customer data in the synthetic demo.
- Do not describe the reference demo as a live WhatsApp or CRM integration.
- Production access only after customer approval and security review.

## 30-day execution ownership

### Surya

- Reconnect with construction-materials prospect.
- Reconnect with corporate-gifting/procurement prospect.
- Contact HR/payroll prospect.
- Arrange discussion with 99Business leadership on member revenue-automation partnership.
- Run at least five discovery conversations using the reference demo.

### Mohan

- Own positioning, commercial qualification and pilot economics.
- Join highest-value discovery calls.
- Approve pilot pricing and scope.
- Track booked revenue, delivery effort and gross-margin potential.

### Engineering

- Keep the first demo synthetic and fast.
- Add live adapters only against a named paid-pilot requirement.
- Reuse existing components and provider APIs instead of creating infrastructure prematurely.

## 90-day decision gate

At Day 90 choose one of three outcomes:

**GO** — at least two paying customers, repeatable problem, attractive gross margin and credible referral channel.

**REFINE** — customers pay but scope or pricing requires narrowing.

**STOP** — weak willingness to pay, excessive customization or poor margin. Preserve reusable integration assets and return founder attention to higher-value enterprise priorities.
