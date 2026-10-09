# ADR-005: Warm Ivory, Deep Editorial Blue, and Coral Orange Triad Palette

- **Status**: Accepted
- **Date**: 2026-10-10
- **Decider**: Design Engineering Lead

## Context
Following aesthetic review and brand refinement, the collective required a distinctive, tactile physical palette extracted from custom editorial specimens, departing from dark monochrome aesthetic in favor of a warm architectural print and studio atmosphere.

The target hex tokens extracted and verified:
1. `#EAE6DE` (Warm Ivory Canvas & Ambient Paper Base)
2. `#226192` (Deep Editorial Blue / Structural Navy for primary typography & mechanical hairlines)
3. `#EF8557` (Coral Orange for active status indicators, key interactive moments, and singular accents)

## Decision
1. **Design Tokens (`src/styles/tokens.css`)**:
   - `--color-canvas-base`: `#EAE6DE`
   - `--color-canvas-subtle`: `#E1DDD4`
   - `--color-surface-shell`: `#D8D2C6`
   - `--color-surface-core`: `#F4F0E8`
   - `--color-surface-elevated`: `#EDE9E1`
   - `--color-text-primary`: `#12283A` (Deep Editorial Ink)
   - `--color-text-secondary`: `#226192` (Editorial Blue)
   - `--color-text-muted`: `#556E84`
   - `--color-accent-primary`: `#EF8557` (Coral Orange)
   - `--color-border-subtle`: `rgba(34, 97, 146, 0.16)`
   - `--color-border-visible`: `rgba(34, 97, 146, 0.28)`

2. **Component Updates**:
   - Replaced all residual dark utilities (`ring-white/*`, `border-white/*`, `text-zinc-300`) across all section components and App Router pages with semantic tokens (`ring-border-subtle`, `border-border-subtle`, `text-brand-secondary`).
   - WebGL Ambient Canvas particle field color remapped to deep editorial navy (`0x226192`) and coral orange (`0xEF8557`) over ivory fog (`0xEAE6DE`).
   - Nav bar and double-bezel cards updated to tactile debossed ivory surfaces with subtle warm shadows (`rgba(34, 97, 146, 0.08)`).

## Consequences
- Elevates the website feel from standard dark developer portfolio to an architectural atelier publication.
- Meets WCAG AAA contrast for primary headlines and WCAG AA contrast for body/secondary copy.
- Seamlessly aligns with strict anti-"AI template" guidelines.
