# Quickstart: Marketing UI Refactor

**Feature**: 001-marketing-ui-refactor

## Prerequisites

- Node.js 18+
- pnpm or npm
- Supabase CLI (optional, for local DB development)
- A running Supabase project (local or remote)

## Environment Setup

Create a `.env.local` file in the root of the project to enable the contact form CRM integration:

```env
# Supabase connection
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# CRM Webhook for Contact/Demo forms
CRM_WEBHOOK_URL=https://your-crm-endpoint.com/webhook
```

## Running the Application

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Navigate to `http://localhost:3000` to view the new marketing homepage. The new routes are available at `/features`, `/pricing`, `/about`, `/contact`, and `/demo`.

## Development Notes

- **Aesthetic**: When adding new components, adhere strictly to the Geometric Brutalism aesthetic. Avoid `rounded-md`, use `rounded-none`. Use thick borders and high contrast.
- **Composition**: Use compound components. If a component needs variations, compose it with sub-components rather than adding boolean flags (e.g., `isDark`, `hasBorder`).
- **TDD Enforcement**: Write a `.test.tsx` file asserting the render or behavior **before** implementing the component structure. Run tests with `npm test`.
