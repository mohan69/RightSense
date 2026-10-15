# RightSense Technologies — Marketing Website

The primary offer is **Redesign One Business Process**. RightSense diagnoses,
redesigns, implements, operates and verifies Human + AI workflows. Advaitha
provides strategy, decision architecture and governance. PulseIQ, WinsProposal
and TalentPulse are optional accelerators.

Public entry points:

- `/ai-process-redesign` — service and method
- `/manufacturing-use-cases` — five illustrative manufacturing workflows
- `/order-execution-demo` — synthetic, browser-only order execution simulation

The demo uses invented records and amounts. It has no live model, persistence,
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
