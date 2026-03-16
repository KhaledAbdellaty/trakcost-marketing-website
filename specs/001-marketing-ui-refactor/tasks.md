# Tasks: Marketing UI Refactor

**Input**: Design documents from `/specs/001-marketing-ui-refactor/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: TDD is enforced (FR-006, SC-002). All component tests MUST be written and FAIL before implementation.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app (Next.js App Router)**: `src/app/[locale]/(marketing)/`, `src/components/marketing/`
- Tests: `__tests__/components/marketing/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization, design system tokens, and Geometric Brutalism foundation

- [x] T001 Create `(marketing)` route group directory at `src/app/[locale]/(marketing)/`
- [x] T002 [P] Create marketing component directories: `src/components/marketing/hero/`, `src/components/marketing/feature-grid/`, `src/components/marketing/pricing/`, `src/components/marketing/shared/`
- [x] T003 [P] Create test directory at `__tests__/components/marketing/`
- [x] T004 [P] Extend Tailwind config in `tailwind.config.ts` with Geometric Brutalism tokens: `rounded-none` defaults, hard drop shadow utilities, high-contrast color palette (pure black, raw white, neon emerald, electric blue)
- [x] T005 [P] Add Geometric Brutalism fonts (Space Grotesk for headings, DM Sans for body) via `src/app/layout.tsx` or `src/app/fonts.ts`
- [x] T006 Create shared marketing layout at `src/app/[locale]/(marketing)/layout.tsx` (marketing navbar + footer skeleton)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared compound components and server actions that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

### Tests for Foundational Components

- [x] T007 [P] Write failing test for `<MarketingNavbar>` compound component in `__tests__/components/marketing/shared/MarketingNavbar.test.tsx`
- [x] T008 [P] Write failing test for `<MarketingFooter>` compound component in `__tests__/components/marketing/shared/MarketingFooter.test.tsx`
- [x] T009 [P] Write failing test for `<Section>` layout primitive in `__tests__/components/marketing/shared/Section.test.tsx`
- [x] T010 [P] Write failing test for `<MarketingButton>` in `__tests__/components/marketing/shared/MarketingButton.test.tsx`

### Implementation for Foundational Components

- [x] T011 Implement `<MarketingNavbar>` compound component (`.Root`, `.Logo`, `.Links`, `.CTA`) in `src/components/marketing/shared/MarketingNavbar.tsx` — pass T007
- [x] T012 [P] Implement `<MarketingFooter>` compound component (`.Root`, `.Column`, `.Link`, `.Legal`) in `src/components/marketing/shared/MarketingFooter.tsx` — pass T008
- [x] T013 [P] Implement `<Section>` layout primitive (`.Root`, `.Header`, `.Content`) with Geometric Brutalism spacing in `src/components/marketing/shared/Section.tsx` — pass T009
- [x] T014 [P] Implement `<MarketingButton>` with brutalist styling (hard shadow, no rounded corners) in `src/components/marketing/shared/MarketingButton.tsx` — pass T010
- [x] T015 Integrate `<MarketingNavbar>` and `<MarketingFooter>` into `src/app/[locale]/(marketing)/layout.tsx`

**Checkpoint**: Foundation ready — all shared components are tested and integrated into the layout. User story implementation can now begin.

---

## Phase 3: User Story 1 — Explore the Homepage and Positioning (Priority: P1) 🎯 MVP

**Goal**: Deliver a high-impact homepage with Hero, Problem-Solution, Feature Grid, and Testimonials sections that clearly communicates TrakCost's value proposition.

**Independent Test**: Navigate to `/` locally and verify all sections render correctly with the Geometric Brutalism aesthetic.

### Tests for User Story 1

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [x] T016 [P] [US1] Write failing test for `<Hero>` compound component in `__tests__/components/marketing/hero/Hero.test.tsx`
- [x] T017 [P] [US1] Write failing test for `<FeatureShowcase>` compound component in `__tests__/components/marketing/feature-grid/FeatureShowcase.test.tsx`
- [x] T018 [P] [US1] Write failing test for `<ProblemSolution>` section in `__tests__/components/marketing/hero/ProblemSolution.test.tsx`
- [x] T019 [P] [US1] Write failing test for `<Testimonials>` section in `__tests__/components/marketing/hero/Testimonials.test.tsx`

### Implementation for User Story 1

- [x] T020 [P] [US1] Implement `<Hero>` compound component (`.Root`, `.Tagline`, `.Subtitle`, `.CTA`, `.Visual`) in `src/components/marketing/hero/Hero.tsx` — pass T016
- [x] T021 [P] [US1] Implement `<ProblemSolution>` section compound component (`.Root`, `.Problem`, `.Arrow`, `.Solution`) in `src/components/marketing/hero/ProblemSolution.tsx` — pass T018
- [x] T022 [US1] Implement `<FeatureShowcase>` compound component (`.Root`, `.Card`, `.Header`, `.Visual`, `.Content`) using React Context in `src/components/marketing/feature-grid/FeatureShowcase.tsx` — pass T017
- [x] T023 [P] [US1] Implement `<Testimonials>` section compound component (`.Root`, `.Quote`, `.Author`) in `src/components/marketing/hero/Testimonials.tsx` — pass T019
- [x] T024 [US1] Compose the Homepage at `src/app/[locale]/(marketing)/page.tsx` using Hero, ProblemSolution, FeatureShowcase, and Testimonials
- [x] T025 [US1] Add SEO metadata (title, description, keywords) to `src/app/[locale]/(marketing)/page.tsx` per marketing report
- [x] T026 [P] [US1] Add homepage translation keys to `src/messages/en.json` and `src/messages/ar.json`

**Checkpoint**: Homepage is fully functional and testable independently. Navigate to `/` to verify Hero, Feature Grid, Problem-Solution, and Testimonials all render with Geometric Brutalism aesthetic.

---

## Phase 4: User Story 2 — Deep Dive into Core Features (Priority: P2)

**Goal**: Deliver a Features Overview page and detailed sub-pages (Project Management, Accounting, Invoicing, POs, Expenses) so evaluating users can understand TrakCost's capabilities.

**Independent Test**: Navigate to `/features` and each sub-page to verify correct layout and content.

### Tests for User Story 2

- [x] T027 [P] [US2] Write failing test for `<FeatureDetailPage>` compound layout in `__tests__/components/marketing/feature-grid/FeatureDetailPage.test.tsx`
- [x] T028 [P] [US2] Write failing test for Features Overview page content rendering in `__tests__/app/marketing/features.test.tsx`

### Implementation for User Story 2

- [x] T029 [US2] Implement `<FeatureList>` section component (`src/components/marketing/features/FeatureList.tsx`) — pass T017
- [x] T030 [P] [US2] Implement `<FeatureDetail>` component (`src/components/marketing/features/FeatureDetail.tsx`) — pass T017
- [x] T031 [US2] Compose Features page at `src/app/[locale]/(marketing)/features/page.tsx`
- [x] T032 [US2] Add SEO metadata to `features/page.tsx`
- [x] T033 [P] [US2] Add translations for features page to `en.json`/`ar.json`ject Management at `src/app/[locale]/(marketing)/features/project-management/page.tsx`
- [x] T034 [P] [US2] Create feature detail page: Accounting at `src/app/[locale]/(marketing)/features/accounting/page.tsx`
- [x] T035 [P] [US2] Create feature detail page: Invoicing at `src/app/[locale]/(marketing)/features/invoicing/page.tsx`
- [x] T036 [P] [US2] Create feature detail page: Purchase Orders at `src/app/[locale]/(marketing)/features/purchase-orders/page.tsx`
- [x] T037 [P] [US2] Create feature detail page: Expenses at `src/app/[locale]/(marketing)/features/expenses/page.tsx`
- [x] T038 [US2] Add SEO metadata to all feature pages per marketing report keywords
- [x] T039 [P] [US2] Add feature page translation keys to `src/messages/en.json` and `src/messages/ar.json`

**Checkpoint**: Features Overview and all 5 sub-pages are functional and independently testable. Each sub-page uses `<FeatureDetailPage>` compound component.

---

## Phase 5: User Story 3 — View Pricing and Navigate to Auth (Priority: P3)

**Goal**: Deliver a Pricing page with Monthly/Annual toggle and clear tier comparison, plus Contact, About, and Demo pages with form submissions saved to Supabase + CRM.

**Independent Test**: Verify toggle on `/pricing` updates prices; verify form submissions on `/contact` and `/demo` write to Supabase and fire CRM webhook.

### Tests for User Story 3

- [x] T038 [P] [US3] Write failing test for `<PricingCard>` compound component in `__tests__/components/marketing/pricing/PricingCard.test.tsx`
- [x] T039 [P] [US3] Write failing test for `<PricingToggle>` in `__tests__/components/marketing/pricing/PricingToggle.test.tsx`
- [x] T040 [P] [US3] Write failing test for `submitLead` Server Action in `__tests__/lib/actions/contact.test.ts`

### Implementation for User Story 3

- [x] T041 [US3] Create Supabase migration for `marketing_leads` table per data-model.md in `supabase/migrations/`
- [x] T042 [US3] Implement `submitLead` Server Action in `src/lib/actions/contact.ts` (Supabase insert + CRM webhook POST per contracts/crm-webhook.json) — pass T040
- [x] T043 [US3] Implement `<PricingToggle>` (Monthly/Annual state, 17% savings) in `src/components/marketing/pricing/PricingToggle.tsx` — pass T039
- [x] T044 [US3] Implement `<PricingCard>` compound component (`.Root`, `.Tier`, `.Price`, `.Features`, `.CTA`) in `src/components/marketing/pricing/PricingCard.tsx` — pass T038
- [x] T045 [US3] Create Pricing page at `src/app/[locale]/(marketing)/pricing/page.tsx` composing PricingToggle + 3 PricingCards (Free, Pro, Enterprise)
- [x] T046 [P] [US3] Create About page at `src/app/[locale]/(marketing)/about/page.tsx`
- [x] T047 [P] [US3] Create Contact page at `src/app/[locale]/(marketing)/contact/page.tsx` using `submitLead` action with `request_type='contact'`
- [x] T048 [P] [US3] Create Demo page at `src/app/[locale]/(marketing)/demo/page.tsx` using `submitLead` action with `request_type='demo'`
- [x] T049 [US3] Add SEO metadata to Pricing, About, Contact, Demo pages per marketing report
- [x] T050 [P] [US3] Add pricing/about/contact/demo translation keys to `src/messages/en.json` and `src/messages/ar.json`

**Checkpoint**: All 3 user stories are independently functional. Pricing toggle works, form submissions persist, and all pages render with the Geometric Brutalism aesthetic.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T051 [P] Add Framer Motion scroll-reveal animations to all `<Section>` instances across all pages
- [x] T052 [P] Implement responsive breakpoints audit across all marketing pages (mobile, tablet, desktop)
- [x] T053 RTL/LTR layout verification for all marketing pages in Arabic locale
- [x] T054 [P] Run Lighthouse audit on Homepage, Features Overview, and Pricing pages — verify scores >90
- [x] T055 [P] Add `aria-label`, `role`, and keyboard navigation to all interactive elements (MarketingNavbar, PricingToggle, forms)
- [x] T056 Run `quickstart.md` validation — verify dev setup instructions work end-to-end

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) — No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) — Reuses `<FeatureShowcase>` from US1, but can stub it if US1 not yet complete
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) — No dependencies on other stories

### Within Each User Story

- Tests MUST be written and FAIL before implementation
- Compound component structure before page composition
- Server actions before pages that consume them
- Core implementation before SEO/i18n tasks
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tests (T007–T010) can run in parallel
- Foundational implementations on different files (T012, T013, T014) can run in parallel
- Once Foundational completes, all user stories can start in parallel
- Within US1: Hero, ProblemSolution, Testimonials can be built in parallel (T020, T021, T023)
- Within US2: All 5 feature detail pages (T031–T035) can be built in parallel
- Within US3: About, Contact, Demo pages (T046–T048) can be built in parallel

---

## Parallel Example: User Story 1

```bash
# Launch all US1 tests together:
Task: "Write failing test for Hero in __tests__/components/marketing/hero/Hero.test.tsx"
Task: "Write failing test for FeatureShowcase in __tests__/components/marketing/feature-grid/FeatureShowcase.test.tsx"
Task: "Write failing test for ProblemSolution in __tests__/components/marketing/hero/ProblemSolution.test.tsx"
Task: "Write failing test for Testimonials in __tests__/components/marketing/hero/Testimonials.test.tsx"

# Then launch parallelizable implementations:
Task: "Implement Hero in src/components/marketing/hero/Hero.tsx"
Task: "Implement ProblemSolution in src/components/marketing/hero/ProblemSolution.tsx"
Task: "Implement Testimonials in src/components/marketing/hero/Testimonials.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL — blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing (Red-Green-Refactor)
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
