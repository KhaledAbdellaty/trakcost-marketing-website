# Feature Specification: Marketing UI Refactor

**Feature Branch**: `001-marketing-ui-refactor`  
**Created**: 2026-03-09  
**Status**: Draft  
**Input**: User description: "follwing the reprot trakcost-marketing-report.md.resolved refactor the app using frontend-design, ui-ux-pro-max, web-artifacts-builder, web-design-guidelines, vercel-composition-patterns, test-driven-development skills"

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Explore the Homepage and Positioning (Priority: P1)

As a potential customer (contractor/manager), I want to see a high-impact, beautifully designed homepage so that I instantly understand TrakCost is an all-in-one ERP with real double-entry accounting.

**Why this priority**: The homepage creates the critical first impression for the new marketing site and communicates the core value proposition.

**Independent Test**: Can be fully tested by navigating to the root URL locally and verifying that all sections (Hero, Problem-Solution, Feature Grid, Testimonials) render correctly with the chosen high-end aesthetic, independent of backend services.

**Acceptance Scenarios**:

1. **Given** a user navigates to the root `/`, **When** the page loads, **Then** a visually striking hero section appears with the "Construction management meets real accounting" tagline, avoiding overused AI aesthetics.
2. **Given** the user scrolls down, **When** they view the feature grid, **Then** 5 cleanly composed compound components highlight Project Management, Accounting, Invoicing, POs, and Expenses.

---

### User Story 2 - Deep Dive into Core Features (Priority: P2)

As an evaluating business owner, I want to explore detailed feature pages so that I can understand how TrakCost solves my specific problems like progressive billing and double-entry accounting.

**Why this priority**: Conversion depends on convincing the user that the software handles their complex sector constraints.

**Independent Test**: Can be fully tested by navigating to `/features` and each sub-page, observing correct layout, rich descriptive content, and clear feature breakdowns using modular UI components.

**Acceptance Scenarios**:

1. **Given** the user is on the Features Overview, **When** they click "Accounting", **Then** they are taken to a detailed page explaining Chart of Accounts, Journal Entries, and P&L details with a unique aesthetic.
2. **Given** the user is on the Invoicing page, **When** they read about progressive billing, **Then** visual cues clearly demonstrate the cumulative billing features.

---

### User Story 3 - View Pricing and Navigate to Auth (Priority: P3)

As a prospective buyer, I want to view clear pricing tiers so that I can decide if TrakCost fits my budget and initiate a free trial.

**Why this priority**: Required for the final step of the self-serve funnel.

**Independent Test**: Can be fully tested by verifying the toggle on the `/pricing` page and clicking "Start Free Trial" to verify routing functionality.

**Acceptance Scenarios**:

1. **Given** the user is on `/pricing`, **When** they toggle between Monthly and Annual, **Then** the prices update to reflect the 17% savings.
2. **Given** the user reviews the tiers, **When** they click to start a trial on the Pro tier, **Then** they are routed to the signup form.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: System MUST implement a multi-page marketing site including Homepage (`/`), Features (`/features/*`), Pricing (`/pricing`), About (`/about`), Contact (`/contact`), and Demo (`/demo`).
- **FR-002**: System MUST utilize a Geometric Brutalism aesthetic (sharp edges, high contrast, prominent typography, mechanical layouts) matching the TrakCost branding constraints (dark deep backgrounds, emerald green/sharp blue accents), actively avoiding generic AI-generated styles to establish a premium brand identity.
- **FR-003**: System MUST provide a responsive layout across mobile, tablet, and desktop devices.
- **FR-004**: System MUST adhere to advanced Component Composition Patterns, avoiding configuration flag proliferation and utilizing contextual, layered components for shared UI elements like feature cards and pricing tiers.
- **FR-005**: System MUST implement full cross-browser compatibility and meet W3C accessibility guidelines.
- **FR-006**: System MUST utilize Test-Driven Development (TDD); all new UI behaviors and compound components must have failing tests written before implementation.
- **FR-007**: System MUST optimize for frontend performance following industry best practices for caching, hydration, and resource loading.

### Key Entities

- **Marketing Page**: Represents the distinct layout and content blocks necessary for rendering a specific marketing route (e.g. title, description, SEO tags).
- **UI Component System**: The modular, compound components dictating the aesthetic representation (e.g., `Hero`, `PricingCard`, `FeatureShowcase`).

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: 100% of all new shared UI components are built using Composition Patterns (e.g., zero boolean flag props for major stylistic toggles, utilizing contextual sub-components).
- **SC-002**: 100% of newly implemented components have automated tests demonstrating behavior written prior to implementation, satisfying the TDD requirement.
- **SC-003**: Lighthouse Accessibility and Performance scores are >90 on both mobile and desktop.
- **SC-004**: Visual implementation diverges structurally and aesthetically from standard out-of-the-box UI starter kits, utilizing distinctive typography, robust spacing, and sophisticated visual hierarchies.
