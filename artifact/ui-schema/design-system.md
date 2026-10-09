# Design System Specification: "Kinetic Atelier"

*Date: 2026-10-10*
*Version: 1.0.0*
*Phase: Phase 2 UI Schema Deliverable*

---

## 1. Concept & Visual Direction

### One Strong Idea: "The Digital Foundry"
Rather than a generic software marketing site, the digital presence is conceptualized as an **architectural engineering foundry**. It merges the physical weight of precision Swiss mechanical apparatuses (hairline chamfers, machined recessed cores, tactile knurling, laser-engraved typography) with the fluid responsiveness of procedural computing.

Every element feels manufactured, heavy, and purposeful. Cards do not hover passively; they possess physical inertia, subtle edge refractions, and spring damping. Layouts breathe with massive macro-whitespace, eschewing claustrophobic clutter for monumental typographic authority.

---

## 2. Typography Architecture

### Type Pairing Rationale
We reject default sans-serif cliches (Inter, Roboto, Arial) and pretentious default serifs (Fraunces, Instrument Serif). We pair a muscular, architectural Grotesk with a high-legibility geometric sans and a rigorous technical monospace.

| Role | Font Family | Fallback Stack | Usage & Scale |
|---|---|---|---|
| **Display / Headlines** | `Cabinet Grotesk` or `Clash Display` | `system-ui, -apple-system, sans-serif` | H1, H2, monumental editorial statements, project titles. Wide tracking, tight line-height (`leading-[0.95]`). |
| **Body & UI** | `Geist Sans` | `-apple-system, BlinkMacSystemFont, sans-serif` | Narrative copy, bios, case-study reading text, navigation labels. Relaxed line-height (`leading-relaxed`), max reading width `65ch`. |
| **Technical & Metadata** | `JetBrains Mono` | `ui-monospace, SFMono-Regular, monospace` | Eyebrow badges, dates, client tags, skill metrics, code snippets, coordinates. |

### Type Scale Hierarchy

| Token | Desktop Size | Mobile Size | Line Height | Tracking | Weight |
|---|---|---|---|---|---|
| `text-display` | `clamp(3.5rem, 7vw, 6.5rem)` | `2.75rem` | `0.95` | `-0.04em` | 800 (Extrabold) |
| `text-h1` | `clamp(2.5rem, 5vw, 4.5rem)` | `2.25rem` | `1.0` | `-0.035em` | 700 (Bold) |
| `text-h2` | `clamp(2.0rem, 3.5vw, 3.0rem)` | `1.75rem` | `1.1` | `-0.025em` | 700 (Bold) |
| `text-h3` | `clamp(1.35rem, 2vw, 1.85rem)` | `1.25rem` | `1.2` | `-0.02em` | 600 (Semibold) |
| `text-body-lg` | `1.25rem (20px)` | `1.125rem` | `1.6` | `-0.01em` | 400 (Regular) |
| `text-body` | `1.0rem (16px)` | `0.9375rem` | `1.65` | `0` | 400 (Regular) |
| `text-caption` | `0.875rem (14px)` | `0.8125rem` | `1.5` | `+0.01em` | 500 (Medium) |
| `text-mono-xs` | `0.75rem (12px)` | `0.75rem` | `1.4` | `+0.08em` | 500 (Mono Medium) |

*Mandatory Typography Rule: Any italic display word featuring descenders (`g`, `j`, `p`, `q`, `y`) must be styled with `leading-[1.1]` and a `pb-1` reserve to prevent clipping.*

---

## 3. Color System & Design Tokens

### The Cold Architectural Palette
A dark architectural canvas built upon nuanced charcoal neutrals, elevated by a single surgical accent: **Safety Cadmium Orange** (`#ff5500`), communicating industrial precision and vitality.

```css
:root {
  /* Canvas & Background Surfaces */
  --color-canvas-base: #09090b;       /* Deepest obsidian bedrock */
  --color-canvas-subtle: #0f0f12;     /* Background for alternating sections */
  --color-surface-shell: #18181b;     /* Outer chassis of double-bezel cards */
  --color-surface-core: #121215;      /* Recessed inner core of cards */
  --color-surface-elevated: #202025;  /* Floating modals, dropdowns, and pills */

  /* Structural Hairlines & Borders */
  --color-border-subtle: rgba(255, 255, 255, 0.08); /* 1px outer container rings */
  --color-border-visible: rgba(255, 255, 255, 0.14); /* Interactive element idle borders */
  --color-border-focus: rgba(255, 85, 0, 0.65);      /* Active focus states */

  /* Typography Colors */
  --color-text-primary: #fafafa;      /* Chalk white: maximum contrast headlines */
  --color-text-secondary: #a1a1aa;    /* Silver zinc: reading body and bios */
  --color-text-muted: #71717a;        /* Muted graphite: timestamps and metadata */
  --color-text-inverse: #09090b;      /* Obsidian: text inside filled cadmium badges */

  /* Single Locked Accent: Safety Cadmium */
  --color-accent-primary: #ff5500;    /* Interactive buttons, active links, focal tags */
  --color-accent-subtle: rgba(255, 85, 0, 0.12); /* Tinted pill containers */
  --color-accent-glow: rgba(255, 85, 0, 0.25);   /* Ambient button back-highlights */

  /* Utility Semantics */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
}
```

*Color Consistency Lock: This palette is strictly locked across all seven pages. No section flips to light cream or teal mid-scroll. Visual hierarchy remains unified from header to footer.*

---

## 4. Spacing, Grid, Radius & Elevation Tokens

### Spacing Scale
- `space-xs`: `0.25rem (4px)`
- `space-sm`: `0.5rem (8px)`
- `space-md`: `1.0rem (16px)`
- `space-lg`: `1.5rem (24px)`
- `space-xl`: `2.0rem (32px)`
- `space-2xl`: `3.0rem (48px)`
- `space-3xl`: `4.5rem (72px)`
- `space-section`: `clamp(6.0rem, 12vw, 10.0rem)` (Massive vertical chapter spacing: `py-24` to `py-40`)

### Grid System
- **Desktop (1024px+):** 12-column CSS Grid, `gap-6` or `gap-8`, max-width `max-w-7xl mx-auto px-6 lg:px-8`.
- **Tablet (768px - 1023px):** 6-column CSS Grid, `gap-5`, `px-6`.
- **Mobile (< 768px):** Strict 1-column layout collapse (`grid-cols-1 gap-6 px-4`). All high-variance multi-column spans collapse gracefully.

### Corner Radius System (Consistent Machined Scale)
- `radius-sm`: `0.375rem (6px)` (Badges, small tags)
- `radius-md`: `0.75rem (12px)` (Form inputs, inner card content pockets)
- `radius-lg`: `1.25rem (20px)` (Standard cards, media previews)
- `radius-xl`: `2.0rem (32px)` (Outer chassis of double-bezel cards)
- `radius-full`: `9999px` (Interactive pill buttons, floating island navigation)

### Elevation & Materiality Tokens
- **Subtle Bezel Hairline:** `ring-1 ring-white/10`
- **Inner Refraction Highlight:** `shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]`
- **Machined Inset Shadow:** `shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]`
- **Floating Island Drop Shadow:** `shadow-[0_20px_50px_rgba(0,0,0,0.7)]`

---

## 5. Motion Tokens & Physics

### Easing Curves (Custom Springs & Inertia)
- **Fluid Entrance / Scrub:** `cubic-bezier(0.16, 1, 0.3, 1)` (Quartic deceleration)
- **Snappy Micro-Interaction:** `cubic-bezier(0.32, 0.72, 0, 1)` (Tactile spring)
- **Mechanical Hover:** `cubic-bezier(0.2, 0.8, 0.2, 1)`

### Durations
- `duration-fast`: `150ms` (Active presses, badge highlights)
- `duration-normal`: `300ms` (Hover transforms, color transitions)
- `duration-deliberate`: `650ms` (Card reveals, drawer expansions)
- `duration-monumental`: `1100ms` (Hero curtain reveals, page wipes)

---

## 6. Component Inventory & Interactive States

### 1. `DoubleBezelCard`
- **Idle State:** Outer shell (`bg-surface-shell ring-1 ring-white/10 p-2 rounded-3xl`), inner core (`bg-surface-core rounded-[calc(1.5rem-0.25rem)] shadow-inner`).
- **Hover State:** Outer shell ring shifts to `ring-white/20`; inner core translates upward `-2px`; subtle inner highlight brightens.
- **Focus-Visible:** `ring-2 ring-accent-primary ring-offset-2 ring-offset-canvas-base`.

### 2. `IslandButton` (Magnetic CTA)
- **Idle State:** Pill shape (`rounded-full bg-accent-primary text-text-inverse px-7 py-3 font-medium flex items-center gap-3`). Nested circular icon indicator (`bg-black/15 w-8 h-8 rounded-full flex items-center justify-center`).
- **Hover State:** Entire button attracts slightly toward pointer coordinates; nested icon rotates `45deg` and translates diagonally `translate-x-0.5 -translate-y-0.5`.
- **Active State:** Scale down `scale-[0.97]` for physical click sensation.
- **Disabled State:** Opacity `0.4`, cursor not-allowed, zero transform response.

### 3. `FloatingIslandNav`
- **Top State:** Integrated transparent bar (`max-w-7xl mx-auto py-6 flex items-center justify-between`).
- **Scrolled State (> 80px):** Morphs to detached floating pill (`fixed top-6 left-1/2 -translate-x-1/2 bg-surface-elevated/85 backdrop-blur-xl ring-1 ring-white/10 px-6 py-3 rounded-full shadow-2xl`).
- **Mobile Menu Open:** Morphs into a full-screen blurred veil with staggered upward slide reveals of navigation links.

### 4. `TechnicalBadge`
- **Idle State:** Monospace caps, border `ring-1 ring-white/10`, background `bg-white/5`, text `text-zinc-400`.
- **Active / Filtered State:** Background `bg-accent-subtle`, border `ring-accent-primary/40`, text `text-accent-primary`.

### 5. `InteractiveInput`
- **Idle:** Label above input (`text-caption text-zinc-400`), input container with `bg-surface-core ring-1 ring-white/10 px-4 py-3 rounded-md text-text-primary`.
- **Focus:** `ring-2 ring-accent-primary bg-surface-core outline-none`.
- **Error:** `ring-2 ring-error text-error text-caption mt-1`.
