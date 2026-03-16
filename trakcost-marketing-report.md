# TrakCost — Marketing Report & Website Content Blueprint

> **Purpose**: This document serves as the single source of truth for building the TrakCost marketing website. It contains product positioning, problem/solution mapping, module-level feature descriptions, competitive analysis, tagline options, a full sitemap, and page-by-page content outlines.

---

## 1. Product Identity

### What Is TrakCost?

**TrakCost** is a cloud-based, construction-industry SaaS ERP platform that unifies project management, financial accounting, procurement, and client/vendor relationships into a single system. Built for the MENA region first — with full Arabic RTL support and local tax compliance — TrakCost scales from solo contractors to enterprise construction firms through tiered pricing.

### The One-Line Pitch

> TrakCost is the all-in-one construction ERP that tracks every cost, from the first bid to the final invoice — with integrated double-entry accounting that most competitors don't offer.

### Brand Name

- **Official**: TrakCost (one word, no space, "Trak" not "Track")
- **Domain suggestion**: trakcost.com / trakcost.io

### Selected Taglines

| Role      | Tagline                                               | Tone                    |
| --------- | ----------------------------------------------------- | ----------------------- |
| Primary   | **Construction management meets real accounting.**    | Direct, differentiating |
| Secondary | **Stop juggling spreadsheets. Start tracking costs.** | Pain-point driven       |

---

## 2. The Problem Space (Why TrakCost Exists)

### Problems Construction Companies Face Today

| #   | Problem                                                                                                                         | Who Feels It       | Impact                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------- |
| P1  | **Scattered tools**: Projects in one app, invoices in another, accounting in Excel                                              | All sizes          | Data silos, duplicate entry, errors             |
| P2  | **No real accounting**: Most construction PM tools lack double-entry bookkeeping                                                | Medium–Large firms | Can't produce compliant financial statements    |
| P3  | **MENA-specific compliance gaps**: VAT, withholding tax (WHT), retention percentages, admin fees not supported by Western tools | MENA contractors   | Manual tax calculations, audit risk             |
| P4  | **Budget overruns go undetected**: No real-time link between project budgets and actual expenses/POs                            | Project managers   | Projects lose money before anyone notices       |
| P5  | **Invoicing is disconnected from work progress**: Progressive billing tied to work items requires manual tracking               | Billing teams      | Under-billing or over-billing, cash flow issues |
| P6  | **No Arabic/RTL support**: Existing tools (Procore, Buildertrend) are English-only                                              | MENA market        | Low adoption, training friction                 |
| P7  | **Vendor and subcontractor management is fragmented**: POs, expenses, and vendor invoices aren't linked                         | Procurement teams  | Lost receipts, unreconciled payables            |
| P8  | **No project comparison or portfolio view**: Can't compare profitability across projects                                        | Executives/Owners  | Strategic decisions made on gut feeling         |

### How TrakCost Solves Each Problem

| Problem | TrakCost Solution                                                                                                                                                                                                                                                        | Module(s)                    |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| P1      | Single platform covering projects → invoices → accounting → procurement                                                                                                                                                                                                  | All modules                  |
| P2      | Integrated double-entry accounting with chart of accounts, journal entries, periods, and reconciliation                                                                                                                                                                  | Accounting                   |
| P3      | Built-in VAT, WHT, retention %, admin fees, and cost-plus fee calculations on every invoice and PO                                                                                                                                                                       | Invoices, POs                |
| P4      | Real-time budget vs. actual tracking with variance % at project, work-item, and account levels — **work items (BOQ) track budgeted vs actual cost per item across the project**                                                                                          | Projects, Accounting Reports |
| P5      | **Progressive billing** with prev/current/actual quantity tracking per line item, linked directly to work items. **Invoices pull work items from the project BOQ, auto-populating previous quantities from past invoices** so each new invoice shows cumulative progress | Invoices + Projects          |
| P6      | Full Arabic UI with RTL layout, bilingual (Arabic/English) switching                                                                                                                                                                                                     | i18n system-wide             |
| P7      | POs → Vendor Invoices → Expenses → Journal Entries — all automatically linked and reconciled                                                                                                                                                                             | POs, Expenses, Accounting    |
| P8      | Project comparison dashboard with ROI, profit margin, budget variance, cost-per-unit across projects                                                                                                                                                                     | Projects Dashboard + Reports |

---

## 3. Who Is TrakCost For? (Target Audiences)

### Primary Segments

| Segment                              | Company Size  | Key Pain Points                                              | TrakCost Value                                      |
| ------------------------------------ | ------------- | ------------------------------------------------------------ | --------------------------------------------------- |
| **Solo Contractors / Freelancers**   | 1–5 people    | Invoicing chaos, no financial tracking                       | Free tier: projects + invoices + basic accounting   |
| **Small Contractors**                | 5–25 people   | Scattered spreadsheets, budget overruns                      | Pro tier: full project mgmt + procurement + reports |
| **Medium Construction Firms**        | 25–200 people | No real accounting, compliance gaps                          | Pro tier: double-entry accounting + tax compliance  |
| **Large Construction & Engineering** | 200+ people   | Portfolio visibility, multi-project comparison, audit trails | Enterprise tier: audit logging + roles + API access |
| **Project Owners / Developers**      | Any size      | Oversight of contractor spend, progress verification         | Dashboard + reports + contract monitoring           |

### User Personas

| Persona    | Role                        | Primary Module Usage                                            |
| ---------- | --------------------------- | --------------------------------------------------------------- |
| **Ahmad**  | Construction Business Owner | Dashboard, Reports, P&L, Project Comparison                     |
| **Fatima** | Project Manager             | Projects, Work Items, Phases, Tasks, Time Tracking              |
| **Omar**   | Accountant                  | Chart of Accounts, Journal Entries, Reconciliation, Tax Reports |
| **Sara**   | Office Manager / Admin      | Invoicing, Payments, Client & Vendor Management                 |
| **Khaled** | Procurement Manager         | Purchase Orders, Vendor Management, Expense Tracking            |

---

## 4. Module-by-Module Feature Breakdown

### 4.1 Project Management

**Core concept**: A project is the central entity — everything (invoices, expenses, POs, work items, contracts) connects back to a project.

**Features**:

- **9 project types**: Residential, Commercial, Industrial, Infrastructure, Institutional, Mixed-Use, Renovation, Maintenance, Other
- **Project lifecycle**: Planning → Active → On Hold → Completed → Cancelled
- **Work Items (BOQ)**: Bill of Quantities with item codes, units, quantities, unit rates, budget rates, selling amounts, categories (Excavation, Concrete, Steel, Masonry, Electrical, Plumbing, HVAC, Finishing, Roofing, Insulation, Paint, Flooring, Windows & Doors)
- **Standard Work Item Templates**: Reusable work item library per company
- **40+ unit types**: From KG to SQ M to PALLET — supports construction measurement standards
- **Phases & Tasks**: Break projects into phases with milestones, assign tasks with status tracking
- **Team Management**: Assign team members, track roles within projects
- **Time Tracking**: Log labor hours against projects and work items
- **File Management**: Attach documents, drawings, photos per project
- **Change Orders**: Track scope changes with cost impact
- **Variations**: Record contract variations with financial impact
- **Project Dashboard**: Stats cards, progress, budget vs actual, cost breakdown charts
- **Project Comparison**: Compare multiple projects by ROI, profit margin, budget variance, cost-per-unit

**Financial Tracking per project**:

- Revenue data: total invoiced, total paid, total pending, profit, profit margin
- Budget variance: by category with budgeted vs actual vs variance %
- Monthly and daily cost trends (expenses + labor)
- Cost breakdown by category

### 4.2 Invoicing & Payments

**Core concept**: Invoices can be client-facing (billing for work) or vendor-facing (recording costs). Supports progressive billing.

**Invoice features**:

- Auto-generated invoice numbers
- Client invoices and vendor invoices (separate types)
- Line items linked to work items, materials, or PO items
- **⭐ Progressive Billing (Standout Feature)**: When creating an invoice, work items are pulled from the project BOQ. Previous quantities and percentages are **automatically populated from past invoices**, so each new invoice shows cumulative progress. Fields per line item: previous qty/%, current qty/%, actual qty/% — giving full visibility into what was billed before and what is being billed now.
- **Multi-tax calculation**: VAT, retention, withholding tax, admin fees, cost-plus fees — calculated as rates with auto-computed amounts
- Status tracking: Draft → Sent → Paid → Overdue → Cancelled
- Link to projects and purchase orders

**Payment features**:

- **Advance payments**: Record upfront/down payments before work begins
- Record payments against invoices
- Partial payment support
- Balance tracking (total - paid = remaining)
- Payment reconciliation with accounting

### 4.3 Purchase Orders (Procurement)

**Core concept**: POs formalize purchasing from vendors, with line items that can link to work items.

**Features**:

- Auto-generated PO numbers
- Line items with description, quantity, unit, unit price, line total
- **Received quantity tracking** per line item
- Multi-tax support: tax %, retention %, WHT %, admin fees %
- Link to vendors, projects, and work items
- PO status lifecycle: Draft → Sent → Approved → Partially Received → Received → Cancelled
- Variance tracking: PO total vs project budget
- Linked expenses and invoices per PO

### 4.4 Expense Management

**Core concept**: Every expense tracks a cost against a vendor, project, work item, and accounting accounts — with automatic journal entries.

**Features**:

- Expense number auto-generation
- Link to vendor, project, work item, purchase order, PO item
- Debit + credit account selection (double-entry)
- Automatic journal entry creation on expense recording
- Expense categories
- Receipt/document attachment
- Recurring expense automation
- Expense reports
- PO variance tracking: PO total vs expense total with variance %

### 4.5 Accounting (Double-Entry)

> **Key differentiator**: Most construction PM tools stop at invoicing. TrakCost includes a full double-entry accounting system.

**Chart of Accounts**:

- 5 account types: Asset, Liability, Equity, Revenue, Expense
- Hierarchical accounts (parent/child)
- Account code system
- Per-account transaction ledger with debit/credit tracking

**Journal Entries**:

- Manual journal entry creation
- Automatic journal entries from: invoices, payments, expenses, purchase orders
- Transaction linking: each journal entry references its source document (invoice #, expense #, PO #, payment #)
- Project-level tracking on every journal transaction

**Accounting Periods**:

- Open/close periods
- Period-based reporting

**Reconciliation**:

- Bank reconciliation interface

**Financial Reports**:

- **Profit & Loss (P&L)**: Per-project revenue, cost of revenue, gross profit + other expenses → net profit. Transaction-level drill-down.
- **AR Aging Report**: Client-wise aging buckets (0–30, 31–60, 61–90, 90+ days) with outstanding amounts
- **AP Aging Report**: Vendor-wise aging buckets with configurable payment terms
- **Budget vs Actual**: By period, account, project, or category — with variance % and status
- **Tax Report**: Invoice-level tax calculation summary

### 4.6 CRM (Client & Vendor Management)

**Features**:

- **Client management**: Company info, contact details, linked projects, invoice history
- **Vendor management**: Company info, contact details, linked POs, expense history
- Filters by search, date, status
- Linked financial data per client/vendor

### 4.7 Settings & Configuration

**Features**:

- **Company settings**: Timezone, date format, currency
- **Roles & permissions**: Role-based access control
- **Lookup values**: Configurable dropdown values (categories, statuses, units)
- **User profile management**
- Multi-tenant architecture (company_id isolation)

### 4.8 Audit Trail

**Features**:

- Audit logging of system actions
- Who did what, when
- Change tracking for compliance

### 4.9 Onboarding

**Features**:

- Guided company setup
- Initial configuration wizard
- First-project walkthrough

### 4.10 Authentication & Security

**Features**:

- Email/password authentication via Supabase Auth
- Row Level Security (RLS) on all database tables
- Protected routes
- Session management
- Multi-tenant data isolation

### 4.11 Internationalization (i18n)

**Features**:

- Full Arabic (AR) + English (EN) support
- RTL / LTR layout switching
- Translated validation messages, labels, and UI text
- Locale-based date and currency formatting

---

## 5. Near-Term Roadmap Features (Highlight on Website)

| Feature                            | Status  | Website Treatment                                                                      |
| ---------------------------------- | ------- | -------------------------------------------------------------------------------------- |
| **Mobile App**                     | Planned | "Coming Soon" badge on features page + dedicated mobile section                        |
| **Equipment Management**           | Planned | "Coming Soon" badge — track equipment allocation, maintenance, utilization per project |
| **Field Operations**               | Planned | Future roadmap item                                                                    |
| **Advanced Reporting & Analytics** | Planned | Future roadmap item                                                                    |
| **API & Integrations**             | Planned | Future roadmap item                                                                    |

---

## 6. Competitive Positioning

### Competitor Comparison Matrix

| Feature                          | TrakCost | Procore | Buildertrend | CoConstruct | Monday.com |
| -------------------------------- | -------- | ------- | ------------ | ----------- | ---------- |
| Project Management               | ✅       | ✅      | ✅           | ✅          | ✅         |
| Work Items (BOQ)                 | ✅       | ✅      | ❌           | ❌          | ❌         |
| Progressive Billing              | ✅       | ✅      | ✅           | ✅          | ❌         |
| Purchase Orders                  | ✅       | ✅      | ❌           | ❌          | ❌         |
| **Double-Entry Accounting**      | ✅       | ❌      | ❌           | ❌          | ❌         |
| **Chart of Accounts**            | ✅       | ❌      | ❌           | ❌          | ❌         |
| **Journal Entries**              | ✅       | ❌      | ❌           | ❌          | ❌         |
| P&L Reports                      | ✅       | Partial | ✅           | ✅          | ❌         |
| AR/AP Aging                      | ✅       | ❌      | ❌           | ❌          | ❌         |
| Budget vs Actual                 | ✅       | ✅      | ✅           | ❌          | ❌         |
| **Arabic / RTL**                 | ✅       | ❌      | ❌           | ❌          | ✅         |
| **MENA Tax (VAT/WHT/Retention)** | ✅       | ❌      | ❌           | ❌          | ❌         |
| Contract Management              | ✅       | ✅      | ✅           | ✅          | ❌         |
| Vendor Management                | ✅       | ✅      | ✅           | ❌          | ❌         |
| Multi-tenant                     | ✅       | ✅      | ✅           | ✅          | ✅         |
| **Affordable SMB pricing**       | ✅       | ❌      | ✅           | ✅          | ✅         |

### Three Pillars of Differentiation

1. **Real Accounting Built In** — TrakCost is the only construction PM with a full double-entry accounting engine: chart of accounts, journal entries, periods, reconciliation, and financial statements. No exporting to QuickBooks needed.

2. **MENA-Native Compliance** — Built for Egypt and the Arab world: Arabic RTL interface, VAT, withholding tax, retention percentages, and admin fees baked into every invoice, PO, and contract.

3. **End-to-End Cost Tracking** — From the BOQ work item to the purchase order to the vendor expense to the journal entry — every cost is traceable across the full procurement and accounting chain.

---

## 7. Pricing Strategy (Suggested Tiers)

| Tier           | Price          | Target                        | Key Features                                                                    |
| -------------- | -------------- | ----------------------------- | ------------------------------------------------------------------------------- |
| **Free**       | $0/mo          | Solo contractors, freelancers | 1 user, 3 projects, basic invoicing, basic accounting                           |
| **Pro**        | $29–49/user/mo | Small–medium contractors      | Unlimited projects, full accounting, POs, reports, 5+ users                     |
| **Enterprise** | Custom         | Large firms                   | Unlimited everything, audit trails, API access, dedicated support, custom roles |

> **Note**: Pricing should be highlighted on a dedicated /pricing page with a toggle for monthly vs annual billing (annual = 2 months free).

---

## 8. Sitemap & Page Architecture

```
trakcost.com/
├── / (Homepage)
├── /features
│   ├── /features/project-management
│   ├── /features/accounting
│   ├── /features/invoicing
│   ├── /features/purchase-orders
│   └── /features/expense-management
├── /pricing
├── /about
├── /blog (future — placeholder)
├── /contact
├── /demo (Request a Demo form)
├── /signup (Start Free Trial)
├── /login (Redirect to app)
├── /privacy
├── /terms
└── /sitemap.xml
```

---

## 9. Page-by-Page Content Outline

### 9.1 Homepage (`/`)

**Hero Section**

- **Headline**: "Construction management meets real accounting."
- **Subheadline**: "The all-in-one construction ERP with real accounting — built for the MENA region, ready for the world."
- **CTAs**: [Start Free Trial] [Request a Demo]
- **Hero visual**: Dashboard screenshot or animated demo showing the project overview + accounting integration

**Trusted By** (social proof bar)

- Logos of early adopters / partner companies (or placeholder: "Trusted by construction firms across Egypt and the Gulf")

**Problem → Solution Section**

- 3 columns with icons:
  - 🔄 "Stop juggling 5 tools" → "One platform for everything"
  - 📊 "No more Excel accounting" → "Real double-entry bookkeeping"
  - 🌍 "Tools that don't speak Arabic" → "Full Arabic RTL + MENA tax compliance"

**Feature Overview Grid** (Supabase-style cards)

- 5 cards, each linking to the feature detail page:
  1. **Project Management** — "Track 9 project types from planning to completion with BOQ work items"
  2. **Accounting** — "Full double-entry accounting with P&L, aging reports, and reconciliation"
  3. **Invoicing** — "Progressive billing with auto-populated previous work items, VAT, WHT, and retention"
  4. **Purchase Orders** — "From PO to delivery, track every line item"
  5. **Expense Management** — "Automatic journal entries for every expense"

**How It Works** (3-step flow)

1. "Set up your company" — Onboarding wizard, chart of accounts, team
2. "Create projects" — Add work items, assign teams, set budgets
3. "Track everything" — Invoices, POs, expenses flow automatically into accounting

**Social Proof / Metrics**

- "X projects managed" / "X invoices processed" / "X countries" (or aspirational targets)

**CTA Banner**

- "Ready to take control of your construction costs?"
- [Start Free Trial] [Request a Demo]

**Footer**

- Product links, Company links, Legal links, Social media, Language switcher hint

---

### 9.2 Features Overview (`/features`)

**Hero**:

- "Everything you need to run your construction business"
- Brief paragraph about the integrated platform

**Module Cards** (5 cards, each expandable or linking to sub-page):

Each card format:

- Icon + Module name
- 3-line description
- 3–5 bullet features
- [Learn More →] link to detail page

---

### 9.3 Feature Detail: Project Management (`/features/project-management`)

**Sections**:

1. **Hero**: "Manage every project from start to finish"
   - Subheadline: "9 project types, BOQ work items, phases, tasks, and real-time budget tracking"

2. **Project Types Grid**: Visual cards for each type (Residential, Commercial, Industrial, Infrastructure, Institutional, Mixed-Use, Renovation, Maintenance, Other)

3. **Work Items (BOQ)**:
   - Screenshot of work items table
   - "14 construction categories: Excavation → Concrete → Steel → Finishing"
   - "40+ unit types for precise measurement"

4. **Budget vs Actual Tracking**:
   - Screenshot of budget variance chart
   - "Know instantly if a project is over budget"

5. **Project Dashboard**:
   - Screenshot of the project dashboard
   - Stats cards, cost breakdown, monthly trends

6. **Project Comparison**:
   - "Compare ROI, profit margin, and cost efficiency across all your projects"

7. **Team, Tasks, Files**:
   - Brief section on collaboration features

**CTA**: [Start Free Trial] [See Pricing →]

---

### 9.4 Feature Detail: Accounting (`/features/accounting`)

**Sections**:

1. **Hero**: "Real accounting. Not just invoicing."
   - "TrakCost includes a full double-entry accounting engine — chart of accounts, journal entries, reconciliation, and financial statements"

2. **Chart of Accounts**:
   - "5 account types: Asset, Liability, Equity, Revenue, Expense"
   - "Hierarchical chart with parent/child accounts"
   - Screenshot

3. **Automatic Journal Entries**:
   - "Every invoice, payment, expense, and PO automatically creates a journal entry"
   - Flow diagram: Invoice → Journal Entry → P&L

4. **Financial Reports**:
   - P&L with project-level drill-down
   - AR Aging (by client, by bucket)
   - AP Aging (by vendor, configurable terms)
   - Budget vs Actual (by period, account, project)
   - Tax Reports

5. **Reconciliation**:
   - Bank reconciliation interface

6. **Accounting Periods**:
   - Open/close periods for clean financial management

**CTA**: [Start Free Trial] [Request a Demo]

---

### 9.5 Feature Detail: Invoicing (`/features/invoicing`)

**Sections**:

1. **Hero**: "Invoice smarter with progressive billing"

2. **Progressive Billing (Standout Feature)**:
   - "When you create a new invoice, work items are pulled from your project BOQ"
   - "Previous quantities and percentages from past invoices are auto-populated"
   - "Track previous, current, and actual quantities per line item — full cumulative billing transparency"
   - "No manual tracking — the system knows what was billed before"

3. **MENA Tax Compliance**:
   - "Built-in VAT, retention, withholding tax, admin fees, and cost-plus fee calculations"
   - Visual showing an invoice with all tax fields

4. **Client & Vendor Invoices**:
   - Separate workflows for billing clients and recording vendor bills

5. **Payment Tracking**:
   - Advance payments / down payments before work begins
   - Partial payments, balance tracking, payment history

**CTA**: [Start Free Trial]

---

### 9.6 Feature Detail: Purchase Orders (`/features/purchase-orders`)

**Sections**:

1. **Hero**: "Procurement under control"
2. **PO Lifecycle**: Draft → Approved → Partially Received → Received
3. **Line Item Tracking**: Quantity ordered vs received
4. **Multi-Tax Support**: Same as invoices
5. **Variance Tracking**: PO total vs project budget
6. **Linked Expenses & Invoices**: Everything connected

**CTA**: [Start Free Trial]

---

### 9.7 Feature Detail: Expense Management (`/features/expense-management`)

**Sections**:

1. **Hero**: "Every expense recorded, reconciled, and accounted for"
2. **Linked to Everything**: Vendor, Project, Work Item, PO, Accounts
3. **Auto Journal Entries**: Double-entry accounting happens automatically
4. **Recurring Expenses**: Set-and-forget for regular costs
5. **Receipt Attachments**: Upload and store receipts
6. **PO Variance**: Compare expenses against PO totals

**CTA**: [Start Free Trial]

---

---

### 9.8 Pricing Page (`/pricing`)

**Structure** (Supabase-inspired):

- Toggle: Monthly / Annual (save 17%)
- 3 columns: Free | Pro | Enterprise
- Feature comparison table below
- FAQ section at bottom:
  - "Can I upgrade anytime?"
  - "Is there a free trial for Pro?"
  - "What happens to my data if I downgrade?"
  - "Do you offer discounts for annual billing?"

---

### 9.9 About Page (`/about`)

**Sections**:

1. **Our Mission**: "We're building the ERP that construction companies in the Arab world have been waiting for."
2. **The Problem We Saw**: Brief narrative about the gap — Western tools don't serve MENA
3. **Our Approach**: Arabic-first, accounting-integrated, all-in-one
4. **Team** (optional — add when ready)
5. **Vision**: "To make professional construction management accessible to every contractor — from Cairo to Riyadh to Dubai."

---

### 9.10 Contact / Demo Page (`/contact` + `/demo`)

**Form fields**: Name, Email, Company, Company Size (dropdown), Message
**For Demo**: Add "Preferred Demo Time" picker
**Auto-response**: Confirmation email

---

### 9.11 Sign Up Page (`/signup`)

- Email / Password form
- "Start your free trial — no credit card required"
- Social proof: "Join X construction firms using TrakCost"
- Link to Terms & Privacy

---

## 10. Website Design Direction (Supabase-Inspired)

### Visual Style

| Element           | Direction                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------- |
| **Theme**         | Dark mode primary with light sections for contrast                                       |
| **Color palette** | Deep dark backgrounds (#1C1C1C / #0D0D0D) + vibrant accent (emerald green or sharp blue) |
| **Typography**    | Inter or similar clean sans-serif, large hero headings                                   |
| **Layout**        | Full-width sections, generous whitespace, card-based feature grids                       |
| **Animations**    | Subtle scroll-triggered fade-ins, code/dashboard mockup animations                       |
| **Icons**         | Lucide or Heroicons — consistent line style                                              |
| **Screenshots**   | Actual product screenshots embedded in device frames (laptop + mobile)                   |
| **CTAs**          | High-contrast buttons — primary green/blue, secondary outlined                           |

### Key Design Patterns (from Supabase)

1. **Hero**: Large headline + subtext + two CTA buttons + trust logos below
2. **Feature grid**: 2×3 or 3×2 cards with icons, brief description, and links
3. **Alternating sections**: Left-image/right-text, then right-image/left-text
4. **Social proof bar**: Horizontal scroll of company logos
5. **Code/product showcase**: Embedded screenshots or interactive product previews
6. **Footer**: Multi-column with product, resources, company, legal sections

---

## 11. SEO & Content Strategy

### Target Keywords

| Primary                          | Secondary                                |
| -------------------------------- | ---------------------------------------- |
| construction ERP software        | construction project management software |
| construction accounting software | building cost tracking                   |
| construction management Arabic   | ERP for contractors                      |
| progressive billing construction | construction invoice software            |
| BOQ software                     | construction PO management               |

### Meta Descriptions (per page)

| Page     | Meta Description                                                                                                                                                 |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Homepage | "TrakCost is the all-in-one construction ERP with real double-entry accounting, progressive billing, and full Arabic support. Start free today."                 |
| Features | "Explore TrakCost's integrated modules: project management, accounting, invoicing, purchase orders, expense tracking, and contract management for construction." |
| Pricing  | "Simple, transparent pricing for construction teams of all sizes. Start free, scale with Pro, go enterprise when ready."                                         |
| About    | "TrakCost is building the ERP that construction companies in the MENA region deserve — Arabic-first, accounting-integrated, all-in-one."                         |

---

## 12. Content Tone & Voice Guide

| Attribute    | Guideline                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------- |
| **Tone**     | Professional but approachable — like a senior engineer explaining to a peer                 |
| **Voice**    | Confident, direct, no jargon overload                                                       |
| **Avoid**    | Buzzwords like "synergy", "game-changer", "disruptive"                                      |
| **Embrace**  | Specificity: "14 work item categories", "5 account types", "auto-generated journal entries" |
| **Language** | English primary for website (Arabic version later)                                          |
| **Numbers**  | Use real numbers wherever possible — features count, project types, unit measurements       |

---

## Appendix A: Complete Module Map

```mermaid
graph TD
    A[TrakCost ERP] --> B[Project Management]
    A --> C[Accounting]
    A --> D[Invoicing & Payments]
    A --> E[Purchase Orders]
    A --> F[Expense Management]
    A --> H[CRM]
    A --> I[Settings & Config]
    A --> J[Auth & Security]

    B --> B1[Projects - 9 types]
    B --> B2[Work Items / BOQ]
    B --> B3[Phases & Tasks]
    B --> B4[Team Management]
    B --> B5[Time Tracking]
    B --> B6[File Management]
    B --> B7[Change Orders]
    B --> B8[Variations]
    B --> B9[Dashboard & Reports]
    B --> B10[Project Comparison]

    C --> C1[Chart of Accounts]
    C --> C2[Journal Entries]
    C --> C3[Periods]
    C --> C4[Reconciliation]
    C --> C5[P&L Report]
    C --> C6[AR Aging]
    C --> C7[AP Aging]
    C --> C8[Budget vs Actual]
    C --> C9[Tax Reports]

    D --> D1[Client Invoices]
    D --> D2[Vendor Invoices]
    D --> D3[Progressive Billing - Auto Previous Work Items]
    D --> D4[Payments + Advance Payments]
    D --> D5[Multi-Tax: VAT/WHT/Retention/Admin]

    E --> E1[PO Creation]
    E --> E2[Line Items]
    E --> E3[Receiving]
    E --> E4[Variance Tracking]

    F --> F1[Expense Recording]
    F --> F2[Auto Journal Entries]
    F --> F3[Recurring Expenses]
    F --> F4[Receipt Attachments]



    H --> H1[Clients]
    H --> H2[Vendors]

    I --> I1[Company Settings]
    I --> I2[Roles & Permissions]
    I --> I3[Lookup Values]
    I --> I4[Audit Trail]
```

## Appendix B: Data Flow — Invoice to Journal Entry

```mermaid
sequenceDiagram
    participant User
    participant Invoice Module
    participant Accounting Engine
    participant P&L Report

    User->>Invoice Module: Create client invoice
    Invoice Module->>Invoice Module: Calculate taxes (VAT, WHT, Retention)
    Invoice Module->>Accounting Engine: Auto-create journal entry
    Accounting Engine->>Accounting Engine: Debit: Accounts Receivable
    Accounting Engine->>Accounting Engine: Credit: Revenue Account
    Accounting Engine->>Accounting Engine: Credit: Tax Payable
    User->>Invoice Module: Record payment
    Invoice Module->>Accounting Engine: Auto-create payment journal
    Accounting Engine->>Accounting Engine: Debit: Bank/Cash
    Accounting Engine->>Accounting Engine: Credit: Accounts Receivable
    P&L Report->>Accounting Engine: Query revenue & expenses by project
    P&L Report->>User: Display project-level profitability
```
