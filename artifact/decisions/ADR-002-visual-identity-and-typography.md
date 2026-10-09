# ADR-002: Visual Direction, Typography & Color Tokens

- **Date:** 2026-10-10
- **Status:** Accepted
- **Context:**
  The website must not look like an AI-generated template (no purple glow gradients, no generic Inter/Roboto typography, no symmetrical three-column feature grids, no em-dash styling).
- **Decision:**
  1. **Aesthetic Family:** "Kinetic Atelier / Architectural Brutalism". We employ a dark architectural obsidian canvas with machined double-bezel cards, generous macro-whitespace (`py-28` to `py-40`), and tactile physical micro-interactions.
  2. **Typography Pairing:**
     - Primary Display / Headlines: `Cabinet Grotesk` / `Clash Display` (Geometric, wide, architectural, loaded via `@next/font/local` or self-hosted WOFF2).
     - Body & Micro-Copy: `Geist Sans` or `Plus Jakarta Sans` for ultra-clean, legibility-focused reading.
     - Technical Specs & Code: `JetBrains Mono` for metadata, dates, roles, and skill parameters.
     - Hard Rule: Zero default Inter or Roboto. Zero serif default cliches (no Fraunces, no Instrument Serif).
  3. **Color Palette:**
     - Base Canvas: Deep Obsidian (`#09090b` / `zinc-950`).
     - Card / Surface Core: Machined Graphite (`#121215`) with subtle border rings (`#27272a`).
     - Text Primary: Crisp Chalk (`#fafafa` / `zinc-50`).
     - Text Secondary: Muted Silver (`#a1a1aa` / `zinc-400`).
     - Primary Accent: Safety Cadmium Orange (`#ff5500`), locked across all pages for interactive focal moments, status badges, and hover states. Saturation capped below 80%.
- **Consequences:**
  - Distinctive visual signature that stands out immediately from typical SaaS/portfolio templates.
  - Exceeds WCAG AAA contrast ratios for all critical text and CTA buttons.
