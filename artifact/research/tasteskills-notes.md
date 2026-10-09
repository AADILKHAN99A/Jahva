# TasteSkills & Anti-Slop Frontend Architecture Notes

*Date: 2026-10-10*
*Reference: TasteSkills Core Documentation (Leonxlnx/taste-skill) & Built-in Anti-Slop Directives*

---

## 1. Executive Summary & Design Read

**Design Read Declaration:**
> "Reading this as: Award-caliber collective portfolio and agency site for a multidisciplinary creative engineering team, with an architectural editorial and tactile digital craftsmanship language, leaning toward custom typography + Tailwind v4 CSS tokens + GSAP ScrollTrigger orchestration."

### The Three Core Dials
- **DESIGN_VARIANCE: 8 / 10** (Asymmetrical editorial layouts, varied column spans, dynamic rhythmic breaks, negative space tension, collapsing to single-column on mobile).
- **MOTION_INTENSITY: 7 / 10** (Fluid physics, scroll-driven pinned reveals, card stacking, magnetic micro-interactions, hardware-accelerated transforms, full reduced-motion parity).
- **VISUAL_DENSITY: 4 / 10** (Generous macro-whitespace, `py-24` to `py-40` section margins, deliberate typographic hierarchy, zero cramped cards).

---

## 2. Comprehensive Summary of Rules and Skills

### 2.1 Brief Inference & Anti-Default Discipline
- **Rule 0.A - 0.D:** Read project signals (page kind, vibe words, audience, assets, constraints) before writing any styles. Explicitly reject generic AI defaults:
  - No purple/blue neon glows or linear gradient hero meshes.
  - No centered headline + three equal feature cards + generic "Get Started" CTA.
  - No default Inter, Roboto, or system sans fallback.
  - No generic glassmorphism blobs or floating decorative orbs.
  - No infinite micro-animation loops that distract from real content.

### 2.2 Framework & Styling Architecture
- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS with design tokens defined as CSS custom properties.
- **RSC Safety:** Interactive motion elements, cursor-reactive elements, and ScrollTrigger listeners must live in isolated client leaf components marked with `'use client'`. Server components render static semantic markup.
- **Fonts:** Next.js font optimization (`next/font`) or self-hosted variable font files with `font-display: swap`. Never link external Google Font stylesheets in production.
- **State Hygiene:** Continuous user-input streams (pointer physics, scroll offsets) must never trigger React state re-renders. Use GSAP timelines, Motion values (`useMotionValue`), or native CSS transforms.

### 2.3 Typography Directives
- **Sans/Display Hierarchy:** High-character Grotesk or Geometric Display (e.g. Cabinet Grotesk, Clash Display, Satoshi, Geist) paired with an ultra-clean monospace (JetBrains Mono or Geist Mono).
- **Serif Discipline:** Never reach for serif simply because a brief mentions "creative" or "editorial". Banned as defaults: `Fraunces` and `Instrument Serif`. If serif is justified, pick deliberate typefaces like PP Editorial New or GT Sectra. For this project, a modern, muscular architectural Grotesk with monospace technical accents is chosen.
- **Hero Title Line Count:** Maximum 2 to 3 lines on desktop (`clamp(2.75rem, 6vw, 5.5rem)`). Use wide containers (`max-w-5xl` to `max-w-6xl`) to avoid awkward narrow wraps.
- **Italic Descender Clearance:** Always use `leading-[1.1]` minimum and `pb-1` padding reserve when italic words feature descenders (`g`, `j`, `p`, `q`, `y`).

### 2.4 Color Calibration & Palette Discipline
- **Single Dominant Accent:** Maximum 1 high-contrast accent color (saturation under 80%), anchored against rich neutral bases (deep obsidian, zinc, slate, or stone).
- **Color Consistency Lock:** Once an accent is locked, it governs the entire page. No switching from amber in section 1 to electric blue in section 5.
- **Banned Consumer Clichés:** Avoid the generic warm cream/beige (`#f5f1ea`) + clay/brass + espresso palette unless explicitly demanded. Instead, employ Cold Architectural Obsidian (true off-black `#09090b` + silver graphite `#27272a` + stark chalk `#fafafa` + cadmium safety orange `#ff5500` or electric acid lime `#d4ff00`).

### 2.5 Layout Mechanics & Grid Discipline
- **Anti-Center Bias:** When `DESIGN_VARIANCE > 4`, avoid centered hero layouts. Use split compositions (60/40 or 50/50), asymmetric whitespace, and pinned editorial columns.
- **Hero Viewport Fitting:** Hero content must fit within the initial viewport (`min-h-[100dvh]`, never `h-screen`). Maximum top padding `pt-24` on desktop. Headline, subtext (maximum 20 words), and CTAs must be visible above the fold.
- **Bento Grid Cell Count:** Bento grids must contain exactly the number of items available (e.g., 3 items in a 2+1 layout, 5 items in a 3+2 layout). No empty placeholder slots. Apply `grid-auto-flow: dense`.
- **Background Diversity:** In any multi-card grid, at least 2 cards must have distinct visual treatment (monochrome photo, tactile border, tinted container, or dynamic graphic) rather than identical cards.
- **Section Layout Diversity:** No two consecutive sections may share the same structural pattern. Limit alternating split-screens to 2 in a row.

### 2.6 The Absolute Zero Bans (AI Tells)
- **Zero Em-Dashes:** Completely banned in headlines, eyebrows, pills, body copy, quotes, and buttons (`—` and `–` as separators are strictly forbidden). Use regular hyphens `-`, commas, or colons.
- **Eyebrow Restraint:** Maximum 1 uppercase tracking eyebrow per 3 sections.
- **No Div-Based Fake Screenshots:** No mock browser or terminal window illustrations constructed out of HTML divs. Use real responsive components or authentic images.
- **No Fake Micro-Meta:** No decorative version tags (`v0.6`, `BETA`), no poetic labels ("Field notes", "On our desks"), no fake stats (`99.9%`), no startup-slop names ("Acme", "Nexus").
- **No Decorative Status Dots:** Flashing colored dots are forbidden unless representing a real live server or system status.
- **No Scroll Prompts:** No "Scroll down" or animated mouse wheel icons. Users naturally scroll.
- **CTA Labeling Integrity:** Never duplicate CTA intent (e.g., "Get in touch" and "Let's talk" on the same page). Keep button text strictly on a single line on desktop.

---

## 3. Applicability to this Project

| Skill / Directive | Applicability | Rationale & Architectural Implementation |
|---|---|---|
| **Design Read & Dials** | Core Foundation | Governs our spatial rhythm (Variance 8, Motion 7, Density 4) across all team and project pages. |
| **Architectural Grotesk Typography** | Primary Identity | Uses Cabinet Grotesk / Clash Display with JetBrains Mono. Creates an authentic, brutalist-refined aesthetic. |
| **GSAP Sticky-Stack & Horizontal Pan** | Featured Showcase | Used in the Team Projects showcase to pin case studies and scroll horizontally through process artifacts. |
| **Gapless Bento Grid** | Skills Matrix | Applied to the Skills Index (team-wide proficiencies and individual specialties) with mathematical zero-void grid flow. |
| **Double-Bezel Card Architecture** | Member & Project Cards | High-end physical nesting (outer subtle border shell + inner tactile core) simulating machined hardware. |
| **Strict AI Tell Avoidance** | Polish & Copywriting | Zero em-dashes, real names, authentic project narratives, realistic bios, no generic placeholder text. |
| **Hardware-Accelerated Motion** | Performance | Transforms (`x`, `y`, `scale`) and `opacity` only; `will-change` isolated; full `prefers-reduced-motion` compliance. |

---

## 4. Binding Constraints for Implementation

All subsequent phases will adhere to these rules without deviation:
1. Every component using motion will feature a reduced-motion fallback path.
2. No text string will contain an em-dash (`—`).
3. Viewports will use dynamic units (`min-h-[100dvh]`).
4. Section layout repetition is banned; every section will feature unique structural rhythm.
5. All interactive elements will possess comprehensive hover, focus-visible, and active tactile states.
