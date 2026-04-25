# TrakCost Marketing Website — CLAUDE.md

## Project Overview

Marketing website for **TrakCost**, a cloud-based construction ERP SaaS targeting companies in the MENA region. The site showcases features, pricing, and captures leads via contact/trial forms.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 |
| i18n | next-intl 4 (en / ar, RTL support) |
| State | Redux Toolkit + RTK Query |
| Forms | react-hook-form + Zod |
| Backend | Supabase (client + SSR) |
| Animations | Framer Motion |
| Icons | lucide-react |
| Package manager | npm |

## Project Structure

```
src/
├── app/[locale]/           # App Router pages (en / ar)
│   ├── page.tsx            # Homepage
│   ├── about/
│   ├── contact/
│   ├── features/
│   ├── pricing/
│   ├── privacy/
│   ├── security/
│   └── terms/
├── components/
│   ├── marketing/
│   │   ├── layout/         # MarketingHeader, MarketingFooter
│   │   └── sections/       # HeroSection, TrustBanner, SolutionGrid, etc.
│   └── ui/
│       ├── design/         # Button, Typography, Section
│       └── PageTransition.tsx
├── features/
│   ├── api/                # RTK Query base apiSlice
│   ├── leads/              # leadApi + Zod schema
│   └── blog/               # Static blog data
├── i18n/
│   ├── routing.ts          # Locales: [en, ar], default: en
│   └── request.ts          # Server-side i18n config
├── lib/
│   ├── actions/            # Server actions (contact form)
│   ├── supabase/           # client.ts
│   ├── fonts.ts            # Google Fonts (Inter, Cairo, IBM Plex Arabic)
│   └── utils.ts            # cn() = clsx + tailwind-merge
├── messages/
│   ├── en.json             # English translations (~960 lines)
│   └── ar.json             # Arabic translations
├── store/
│   ├── index.ts            # Redux store
│   └── hooks.ts            # useAppDispatch, useAppSelector
├── globals.css             # Tailwind + custom theme tokens
└── middleware.ts           # i18n route matching
```

## Commands

```bash
npm run dev       # Development server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
```

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

These are required at runtime. `.env*` files are gitignored. Docker Compose loads from `.env`.

## Key Conventions

### Routing
- All routes are under `[locale]` — never create routes outside this segment.
- Supported locales: `en`, `ar` (default: `en`).
- Middleware in `middleware.ts` handles locale detection and redirects.

### Internationalization
- All user-facing strings live in `messages/en.json` and `messages/ar.json`.
- Use `useTranslations()` (server component) or `useTranslations()` from `next-intl/client` in client components.
- Never hardcode English strings in JSX.

### Styling
- Use Tailwind utility classes with the `cn()` helper from `lib/utils.ts`.
- Component variants use class-variance-authority (CVA) — see `Button.tsx` for the pattern.
- Theme tokens are defined as CSS custom properties in `globals.css` (prefixed `--color-brand-*`).
- Default theme is **dark** (dark backgrounds, light text).
- Arabic layout uses RTL — apply the `.rtl-flip` utility for directional icons.

### Components
- UI primitives go in `components/ui/design/`.
- Marketing-specific sections go in `components/marketing/sections/`.
- Use `"use client"` only when needed (event handlers, hooks, animations).
- Framer Motion animations: use `whileTap`, `initial`/`animate`/`exit` patterns already established in Button and Typography.

### Forms & Validation
- Forms use react-hook-form + Zod. Define schemas in the relevant `features/*/schemas.ts`.
- Submission goes through an RTK Query mutation endpoint in `features/leads/leadApi.ts`.

### State Management
- Global state lives in the Redux store (`store/index.ts`).
- Use the typed hooks: `useAppDispatch`, `useAppSelector` from `store/hooks.ts`.
- Server-side data fetching uses RTK Query or Next.js server components — avoid fetching in client components where possible.

### Fonts
- English: Inter (body), Plus Jakarta Sans (headings)
- Arabic: IBM Plex Sans Arabic (body), Cairo (headings)
- Fonts are loaded in `lib/fonts.ts` and applied per locale in the root layout.

## Deployment

- **Docker**: Multi-stage build (`Dockerfile`), Node 20 Alpine, production port **3001**.
- **Next.js output**: `standalone` mode (set in `next.config.ts`).
- **Docker Compose**: `docker-compose.yml` defines the `trakcost-landing` service.
