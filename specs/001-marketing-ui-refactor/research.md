# Phase 0: Research & Decisions

**Feature**: 001-marketing-ui-refactor

## External CRM Integration Details

**Decision**: Implement a generic webhook pattern for the CRM integration. The Next.js Server Action handling the form submission will first write the data to the Supabase `leads` table, and then execute a `fetch` POST request to a URL defined in `process.env.CRM_WEBHOOK_URL`.
**Rationale**: The specific CRM (e.g., HubSpot, Salesforce) wasn't explicitly named. A webhook approach provides maximum flexibility, allowing the client to pipe the data to Zapier, Make, or any CRM ingestion endpoint without requiring codebase changes later.
**Alternatives considered**: Hardcoding a specific CRM SDK (rejected due to lack of specificity and vendor lock-in).

## Geometric Brutalism Implementation Details

**Decision**:

1. **Tailwind Config**: Extend the theme with high-contrast colors (e.g., pure blacks, raw whites, and high-saturation accents like neon green or electric blue).
2. **Typography**: Utilize a highly structured, mechanical font (e.g., 'Space Grotesk', 'Syncopate', or 'JetBrains Mono') for headings, paired with a highly legible sans-serif for body copy.
3. **UI Elements**: Override standard shadcn/ui defaults to enforce `rounded-none`, thick solid borders (`border-2` or `border-4`), and hard drop shadows (`shadow-[4px_4px_0_0_rgba(0,0,0,1)]`) instead of soft blurs.
   **Rationale**: FR-002 mandates Geometric Brutalism with sharp edges and mechanical layouts, explicitly forbidding standard AI-generated rounded/soft aesthetics.
   **Alternatives considered**: Elegant minimalism (rejected by user during clarification).

## Compound Component Structure for Feature Grid

**Decision**: Implement the Feature Grid using strict React Context-based compound components following Vercel Composition Patterns.
Structure:

- `<FeatureShowcase>` (Context Provider, handles overall layout grid)
- `<FeatureShowcase.Card>` (Container for individual feature)
- `<FeatureShowcase.Header>`
- `<FeatureShowcase.Visual>` (For abstract representations or screenshots)
- `<FeatureShowcase.Content>`
  **Rationale**: SC-001 requires 100% of new shared UI components to use composition patterns to avoid boolean prop proliferation. This structure allows flexible reordering of internal card elements without adding props like `imagePosition="top"`.
  **Alternatives considered**: A single `<FeatureCard title="..." description="..." image="..." />` (rejected as it violates the composition pattern rule and limits long-term flexibility).
