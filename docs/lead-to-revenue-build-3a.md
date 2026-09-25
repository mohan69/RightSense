# Lead-to-Revenue Build 3A — Mobile & Domain Demo

## Why this release exists

Surya's first hands-on review confirmed the reference concept but exposed two practical issues:

1. On a phone, the previous three-column page required repeated scrolling between the WhatsApp conversation, backend state and the Next control.
2. Different prospects need materially different stories. A construction prospect that already has a WhatsApp quotation agent should not be shown a generic enquiry bot as though RightSense is replacing the existing system.

Build 3A corrects both without adding live customer integrations.

## Release objective

Make the synthetic demo usable in a 10–15 minute prospect conversation on either mobile or laptop, while keeping customer experience separate from seller/backend explanation.

## What changed

- Mobile-first single-focus experience instead of requiring the user to follow three panels at once.
- Fixed mobile control bar so **Next** and **Reset** stay available without scrolling to the bottom of the page.
- Conversation auto-scrolls to the latest message.
- Two explicit views:
  - **Customer experience** — what the buyer/customer sees in WhatsApp.
  - **Behind the scenes** — CRM/lead store, owner assignment, SLA and revenue visibility.
- Four reference scenarios:
  - Construction materials
  - Corporate gifting
  - HR / payroll services
  - Language training
- Reference qualification is deliberately short: generally two relevant questions before human routing/next action.
- **Talk to a person** is always visible in the customer experience.
- Construction scenario starts **after** the prospect's existing WhatsApp/product/quote agent and demonstrates confirmed handoff → CRM → owner → follow-up → opportunity visibility.
- Catalog/service/course matching is shown as an assist, not as autonomous commercial commitment.

## Demo rule for Surya

### Start with customer experience

Do not explain CRM, architecture or AI first.

Say:

> Let me show you the customer experience first. We keep the interaction short, capture only what is needed, and then make sure the sales follow-through is owned and measurable.

Use **Next** one step at a time.

### Then show behind the scenes

Only after the prospect agrees the customer journey is relevant, switch to **Behind the scenes** and explain:

> This is where RightSense adds the operating control: the confirmed enquiry moves into your existing system of record, gets an accountable owner, starts a follow-up SLA and becomes visible as an opportunity.

## Scenario-specific talk track

### Construction

Use this for the prospect who already has WhatsApp enquiry/quotation automation.

Positioning:

> We are not asking you to replace the WhatsApp flow you already have. Assume your current agent has captured product, specification, quantity and quote. RightSense begins at the moment the customer confirms and makes the downstream CRM/follow-up process reliable.

Discovery questions:

- Which current system/agent captures the quotation?
- What exact event means an enquiry is confirmed?
- Which CRM or lead system should receive it?
- Who should own it after confirmation?
- How is follow-up tracked today?
- How does management know whether the enquiry converted?

### Corporate gifting

Reference flow:

1. What kind of gift?
2. Quantity and required date?
3. Route to catalog/commercial discussion.

Do not auto-commit pricing. Catalog matching can be automated; final price/exception remains human-approved.

### HR / payroll

Reference flow:

1. Which service: payroll, hiring, compliance/employment law or combination?
2. Employee count and location?
3. Route to the correct advisor and book a consultation.

### Language training

Reference flow:

1. Which language?
2. Individual/corporate and preferred timing?
3. Match suitable course/batch and route to counsellor/trial.

## Product rule

For these MSME use cases, aim for **2 questions by default** and **4 maximum** unless the customer's process genuinely requires more. A customer must be able to request a human at any point.

## Commercial gate remains unchanged

Build 3A is still synthetic. Do not implement Meta/BSP, HitSMS, Zoho, HubSpot, Google Sheets, calendar or other live adapters until a named prospect agrees the paid-pilot scope and confirms the actual systems involved.

## Acceptance criteria

- Smooth on common phone widths.
- Next control does not require scrolling down to find it.
- Latest message becomes visible as the flow advances.
- Customer and backend views are clearly separated.
- Construction story preserves existing automation rather than replacing it.
- Every scenario has a short, relevant qualification flow.
- No customer data or live system claim.
- `npm run lint` passes.
- `npm run build` passes.

## Next gate

After Build 3A, engineering pauses until one of the priority prospects completes discovery. The first live adapter should be selected from actual customer requirements, not guessed in advance.
