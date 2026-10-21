# RightSense Technologies — Marketing Website

The homepage position is **Enterprise AI. Measurable Business Outcomes.**
RightSense is focused on a founder-led initial cohort of five manufacturing
clients. PulseIQ is the initial operating-intelligence entry offering; the
48-Hour Outcome Diagnostic defines the smallest evidence path and proof worth
running. WinsProposal is the purpose-built option when RFQ, proposal or pricing
performance is the selected problem.

Public entry points:

- `/ai-process-redesign` — service and method
- `/manufacturing-use-cases` — two featured illustrative industry use cases,
  with explicit ROI assumptions and measurable KPIs
- `/48-hour-diagnostic` — scope, inputs, timeline, deliverables, exclusions and
  the practical contact path
- `/order-execution-demo` — synthetic, browser-only order execution simulation

All use-case ROI scenarios and demo records are illustrative. The demo has no live model, persistence,
authentication or enterprise integration. Its financial result is a simulated
verification event, not customer evidence. A live implementation requires
source integration, role permissions and approvals, operational monitoring,
data controls, and an agreed measurement plan.

Parent brand site for RightSense Technologies and its AI-native intelligence platforms:

- **PulseIQ** — Enterprise Operating Intelligence Platform
- **WinsProposal** — Revenue and Proposal Intelligence Platform
- **TalentPulse** — AI-Native Talent Intelligence Platform

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS v4
- Framer Motion, lucide-react, class-variance-authority, clsx, tailwind-merge

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```

## Hostinger VPS review staging

`docker-compose.staging.yml` builds the current positioning branch as a separate
Next.js container and publishes it on VPS port `3001` (container port `3000`).
In Hostinger Docker Manager, import the Compose file from the branch's raw
GitHub URL. The VPS firewall must allow inbound TCP `3001` for the public review
link to work. This staging setup does not change the production domain or its
existing containers.

## Conventions

- All copy lives in `src/lib/content.ts`; pages render from typed data.
- Page metadata uses `pageMetadata()` from `src/lib/seo.ts`.
- UI primitives live in `src/components/ui/`.
- Layout chrome (Nav, Footer) lives in `src/components/layout/`.
- Reusable section blocks live in `src/components/sections/`.

## Verification

`npm run build` covers all routes, including the five statically generated
use-case detail pages. `npm run lint` checks source quality. The order demo
should also be walked through in a browser using the stale-evidence, rejection,
approval and value-verification paths.
