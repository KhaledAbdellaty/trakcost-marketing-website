# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Refactor the marketing website (Homepage, Features, Pricing, About, Contact, Demo) to utilize a premium, Geometric Brutalism aesthetic with advanced React composition patterns, adhering to TDD. Integrates contact/demo form submissions directly with Supabase and an external CRM endpoint.

**Language/Version**: TypeScript / React 18+ (Next.js App Router)  
**Primary Dependencies**: Next.js, Tailwind CSS, shadcn/ui, Framer Motion, Supabase  
**Storage**: Supabase PostgreSQL  
**Testing**: Jest / React Testing Library (TDD enforced)  
**Target Platform**: Web (Responsive Desktop/Tablet/Mobile)
**Project Type**: Web Application (Marketing Site)  
**Performance Goals**: Lighthouse Accessibility and Performance >90  
**Constraints**: Geometric Brutalism aesthetic, Composition Patterns, English/Arabic (RTL/LTR)  
**Scale/Scope**: 6 main pages, multiple compound UI components, 1 new Server Action integration

**Unknowns**:

- NEEDS CLARIFICATION: External CRM integration details (which CRM? endpoint format?).
- NEEDS CLARIFICATION: Geometric Brutalism implementation details (specific tailwind config/tokens needed?).
- NEEDS CLARIFICATION: Specific compound component structured needed for the Feature Grid.

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- [x] Clean Code (DRY, KISS, YAGNI)
- [x] Architecture Rules (Next.js App Router, SOLID)
- [x] UI Framework Rules (Tailwind, shadcn/ui)
- [x] Internationalization (RTL/LTR Support)
- [x] Code Quality (TDD, Error Handling)
- [x] Global Variables (Enums, Constants)
- [x] Styling Rules (Mobile-first, standard tokens)
- [x] Performance & SEO
- [x] Accessibility (ARIA, Contrast)
- [x] Folder Structure (src/app, src/components, etc.)

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── [locale]/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx
│   │   │   ├── features/
│   │   │   ├── pricing/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   └── demo/
├── components/
│   ├── marketing/
│   │   ├── hero/
│   │   ├── feature-grid/
│   │   ├── pricing/
│   │   └── shared/
├── lib/
│   └── actions/
│       └── contact.ts
```

**Structure Decision**: Adhering to the Next.js App Router structure defined in the constitution. Marketing pages are isolated within the `(marketing)` route group. Components are organized logically under `src/components/marketing`. Server actions are placed in `src/lib/actions`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation                  | Why Needed         | Simpler Alternative Rejected Because |
| -------------------------- | ------------------ | ------------------------------------ |
| [e.g., 4th project]        | [current need]     | [why 3 projects insufficient]        |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient]  |
