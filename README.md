# RightSense Technologies — Marketing Website

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

## Status

Scaffold only. Routes beyond `/` are not yet created.
