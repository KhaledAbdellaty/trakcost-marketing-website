<!--
Sync Impact Report:
- Version change: 0.0.0 → 1.0.0
- List of modified principles: (Initial creation)
  - Added Clean Code
  - Added Documentation
  - Added Architecture Rules
  - Added UI Framework Rules
  - Added Internationalization
  - Added Code Quality Rules
  - Added Global Variables
  - Added Styling Rules
  - Added 3D Animation
  - Added Performance Optimization
  - Added SEO Requirements
  - Added Accessibility
  - Added Folder Structure
  - Added Final Rule
- Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ verified
  - .specify/templates/spec-template.md: ✅ verified
  - .specify/templates/tasks-template.md: ✅ verified
- Follow-up TODOs: None
-->

# TrakCost Landing Constitution

## Core Principles

### I. Clean Code

Code must be readable, simple, and maintainable. Avoid unnecessary complexity. Use clear naming conventions for variables, functions, and components. Follow consistent formatting.

### II. Documentation

Every module, component, and function must include concise comments. Explain why logic exists, not only what it does. Provide JSDoc / TypeScript documentation for public APIs.

### III. Architecture Rules

The project must follow Clean Architecture and SOLID principles. Layers should be clearly separated into Presentation Layer (UI components, Pages, Layouts), Application Layer (Services, Use cases, Business logic), Domain Layer (Entities, Types, Interfaces), and Infrastructure Layer (API integrations, utilities, external services). UI must not contain business logic, business logic must not depend on frameworks, and dependencies must flow inward.

### IV. UI Framework Rules

Use Next.js (App Router), React, TypeScript, TailwindCSS, shadcn/ui components, and shadcn blocks for layout. All UI must use shadcn styles and components when possible. Do not reinvent components that exist in shadcn.

### V. Internationalization

The application must support English (en) and Arabic (ar). Requirements include i18n support, RTL and LTR layouts, and automatic direction switching based on locale. No hardcoded text in components; all text must come from translation files (e.g., `/locales/en/common.json`, `/locales/ar/common.json`).

### VI. Code Quality Rules

The code must always be readable, modular, easy to edit, and well structured. Avoid long files and large components. Prefer composition over inheritance, and reuse utilities.

### VII. Global Variables

Never use hardcoded global values. Instead, use Enums, Constants, and Config files.

### VIII. Styling Rules

Use TailwindCSS, shadcn design tokens, and responsive layouts. Design must be mobile-first, with consistent spacing and reusable UI tokens. Avoid inline styles unless necessary.

### IX. 3D Animation

Use modern libraries for 3D and motion such as Framer Motion, React Three Fiber, Three.js, and Spline scenes if needed. Animations must be lightweight, avoid performance-heavy scenes, and enhance UX without distracting.

### X. Performance Optimization

The application must be optimized for speed. Use lazy loading, dynamic imports, image optimization, component memoization, and code splitting to ensure fast page load, minimal bundle size, and smooth animations.

### XI. SEO Requirements

The website must support strong SEO with semantic HTML, metadata for all pages, Open Graph tags, structured headings, sitemap support, optimized images, and fast loading pages.

### XII. Accessibility

Follow accessibility best practices including proper ARIA roles, keyboard navigation, sufficient color contrast, and accessible UI components.

### XIII. Folder Structure

The project should follow a clean modular structure. Examples include `/app`, `/components`, `/features`, `/domain`, `/services`, `/hooks`, `/utils`, `/config`, `/locales`, `/styles`, and `/types`.

### XIV. Final Rule

Every contribution must ensure the codebase remains clean, modular, scalable, and maintainable. If a solution violates these principles, propose a cleaner alternative.

## Governance

All Pull Requests and code reviews must verify compliance with this Constitution. Development must adhere strictly to the guidelines defined herein.

**Version**: 1.0.0 | **Ratified**: 2026-03-09 | **Last Amended**: 2026-03-09
