# Master Implementation Plan: Award-Winning Team Showcase Website

*Date: 2026-10-10*
*Version: 1.0.0*
*Phase: Phase 2 Plan Deliverable*

---

## 1. Executive Summary & Project Mission

This implementation plan details the architectural blueprint for building a high-craft, award-level portfolio website for our multidisciplinary creative engineering collective. The site presents our team members, individual passion projects, team flagship case studies, and structured technical competencies through an interconnected content graph.

The experience is engineered to challenge the generic template landscape through architectural typography, purposeful scroll-driven choreography, double-bezel hardware materiality, and surgical attention to micro-interactions, while upholding strict 60fps performance and WCAG AA accessibility standards.

---

## 2. Tech Choices & Architectural Justifications

| Layer | Chosen Technology | Architectural Justification |
|---|---|---|
| **Framework** | Next.js 15 (App Router) + React 19 + TypeScript | Delivers Server Components (RSC) for zero-client-JS rendering of static case studies, automatic image and font optimization, instant static pre-rendering, and strict type safety. |
| **Styling** | Tailwind CSS v4 + Semantic CSS Custom Properties | Eliminates CSS-in-JS runtime overhead. Unifies spacing, color tokens, and elevation layers as native CSS variables for seamless transition orchestration. |
| **Animation Core** | GSAP 3 (ScrollTrigger, Flip, Observer) | Industry standard for pinned card stacks, horizontal scroll tracking, scrubbed typography reveals, and layout state morphing without layout reflows. |
| **3D & Shaders** | Three.js / React Three Fiber (Lazy-Loaded) | Used exclusively for ambient procedural background shaders and interactive kinetic artifacts. Loaded asynchronously via `next/dynamic` with `ssr: false`, and automatically bypassed under reduced motion. |
| **Content Layer** | Typed JSON + MDX Architecture | Decouples data from UI components. Team profiles (`team.json`), skills matrix (`skills.json`), and project case studies (`projects/*.mdx` / `*.json`) are parsed with TypeScript and Zod. |
| **Iconography** | Phosphor Icons (`@phosphor-icons/react`) | Ultra-crisp, geometric, consistent line-weight icon system. Zero hand-rolled inconsistent SVGs; zero generic Lucide defaults. |
| **Testing & Quality** | Vitest + Playwright + ESLint + Prettier | Unit testing for content graph queries and smoke/E2E testing for interactive states, navigation routes, and responsive viewports. |

---

## 3. Milestones & Task Breakdown

### Milestone 0: Environment Foundation & Toolchain Initialization
- **Task 0.1:** Initialize Next.js project with TypeScript, Tailwind CSS v4, and ESLint configuration.
- **Task 0.2:** Configure typography stack (`Cabinet Grotesk` or `Clash Display` + `Geist Sans` + `JetBrains Mono`) using `next/font`.
- **Task 0.3:** Establish global design tokens in CSS (`src/styles/tokens.css` and `globals.css`).
- **Task 0.4:** Set up GSAP client wrapper and context isolation utilities in `src/lib/gsap.ts`.
- **Task 0.5:** Configure Vitest test runner and Playwright configuration.

### Milestone 1: Typed Content Graph & Schema Infrastructure
- **Task 1.1:** Author TypeScript type definitions and Zod schemas in `src/types/content.ts` (TeamMember, Skill, Project, CaseStudy).
- **Task 1.2:** Populate authentic team content in `src/content/team.json` (4 distinct member profiles with unique bios, roles, avatar images, links, and individual projects).
- **Task 1.3:** Populate competencies in `src/content/skills.json` (categorized into Creative Development, Systems Engineering, Spatial & 3D, and Design Architecture).
- **Task 1.4:** Populate 4 rich team case studies and 4 individual project case studies in `src/content/projects/`.
- **Task 1.5:** Implement query helpers in `src/lib/content.ts` (`getTeamMembers()`, `getProjectBySlug()`, `getSkillsWithMembers()`, etc.) and write unit tests in `tests/content.test.ts`.

### Milestone 2: Core Primitives & Double-Bezel Component System
- **Task 2.1:** Build `DoubleBezelCard` primitive with outer shell, inner core, subtle highlights, and hover micro-physics.
- **Task 2.2:** Build `IslandButton` primitive with magnetic cursor physics, nested trailing icon indicator, and single-line label containment.
- **Task 2.3:** Build `FloatingIslandNav` with scroll threshold morphing, mobile drawer expansion, and accessible keyboard trap.
- **Task 2.4:** Build `Badge`, `Tag`, and `StatusIndicator` primitives adhering to zero-decorative-dot rules.
- **Task 2.5:** Build `SectionHeader` supporting vertical hierarchy without banned split-header or meta-label cliches.

### Milestone 3: Home Experience & Flagship Motion Choreography
- **Task 3.1:** Implement `HeroSection`: Asymmetrical split layout with muscular display title, subtext under 20 words, primary CTA, and lazy-loaded WebGL ambient canvas.
- **Task 3.2:** Implement `StickyStackSection`: GSAP ScrollTrigger-driven pinned case-study cards that scale and blur sequentially on vertical scroll.
- **Task 3.3:** Implement `HorizontalProcessSection`: Pinned horizontal pan gallery detailing collective workflow from architectural blueprint to deployment.
- **Task 3.4:** Implement `SkillsMatrixBento`: Gapless, mathematically verified bento grid displaying team capabilities with dense auto-flow.
- **Task 3.5:** Implement `TeamRosterSection`: Grid of member cards featuring interactive avatar reveals and personal project counters.
- **Task 3.6:** Implement `FooterCTASection`: High-contrast, single-intent contact callout and accessible footer links.

### Milestone 4: Dedicated Sub-Pages & Cross-Referenced Views
- **Task 4.1:** Build `/team` page (Directory view with role filtering, individual specialties, and collaborative synergy matrix).
- **Task 4.2:** Build `/team/[memberId]` page (Deep profile view: full bio, technical skill ratings, contributed team case studies, and personal passion projects).
- **Task 4.3:** Build `/projects` page (Filterable showcase of all team flagship case studies and individual experiments).
- **Task 4.4:** Build `/projects/[slug]` case study template (Client brief, architectural challenges, interactive screenshot carousel, engineering breakdown, and contributor credits).
- **Task 4.5:** Build `/skills` page (Comprehensive capabilities taxonomy cross-linked to team members and verified case studies).
- **Task 4.6:** Build `/contact` page (Inquiry form with accessible inputs, validation, and direct booking links).

### Milestone 5: Optimization, Smoke Testing & Review Documentation
- **Task 5.1:** Audit performance via Lighthouse: verify LCP < 2.5s, CLS < 0.1, INP < 200ms.
- **Task 5.2:** Audit accessibility: screen reader semantics, ARIA attributes, keyboard focus states, color contrast ratios >= 4.5:1.
- **Task 5.3:** Run automated test suites (Vitest unit tests and Playwright smoke tests).
- **Task 5.4:** Capture desktop and mobile screenshots into `/artifact/screenshots/`.
- **Task 5.5:** Author milestone review reports in `/artifact/reviews/`.
- **Task 5.6:** Complete permanent documentation in `/docs/` (architecture, design system, content guide, deployment).

---

## 4. Performance Budget & Core Web Vitals Targets

| Metric | Target | Enforcement Strategy |
|---|---|---|
| **Largest Contentful Paint (LCP)** | < 2.0s | Hero typography rendered server-side; hero images prioritized via `next/image priority`; heavy 3D canvases dynamically imported. |
| **Cumulative Layout Shift (CLS)** | < 0.05 | Explicit aspect-ratio reservations on all media containers; font fallbacks matched with zero FOUT shift. |
| **Interaction to Next Paint (INP)** | < 150ms | Zero heavy computations on the main thread; pointer and scroll physics run outside React via GSAP `quickTo` and transforms. |
| **Initial JS Bundle (First Load)** | < 180kB (gzipped) | Selective import of GSAP plugins; Three.js lazy-loaded only when requested; zero bloated third-party analytics. |
| **Frame Rate** | Sustained 60fps | Animate only `transform` and `opacity`; GPU-accelerated layers via `will-change: transform`; mobile scroll pinning bypassed. |

---

## 5. Accessibility Targets & Guidelines

1. **WCAG 2.2 Level AA Compliance:**
   - Contrast ratio of at least 4.5:1 for standard body copy; 3:1 for large display headlines (18pt+).
   - High-contrast interactive buttons exceeding 5:1 contrast in both idle and hover states.
2. **Keyboard Navigation & Focus Management:**
   - Logical tab index flow across all interactive elements.
   - Visible, high-contrast focus rings (`focus-visible:ring-2 focus-visible:ring-accent`).
   - Modal and drawer focus trapping with Escape key dismissal.
3. **Reduced Motion Adaptation:**
   - Complete support for `prefers-reduced-motion: reduce`.
   - Disables all scroll pinning, 3D rotations, and parallax translations.
   - Fallback to clean, instantaneous opacity transitions and standard vertical scrolling.
4. **Semantic HTML & Screen Reader Support:**
   - Meaningful heading hierarchy (`h1` -> `h2` -> `h3`).
   - Descriptive `aria-label` attributes on icon-only links and navigational triggers.
   - Descriptive alt text on all photography and illustrative media.

---

## 6. Risk Management & Fallback Protocol

- **Risk: WebGL Canvas Crashes on Low-End Mobile Devices.**
  - *Mitigation:* Modern capability detection checks WebGL support and device concurrency. Automatically replaces 3D canvas with an optimized static SVG gradient artwork on under-powered devices.
- **Risk: Horizontal Scroll Hijack Confuses Mobile Users.**
  - *Mitigation:* Pinning and horizontal track translations are disabled on screens narrower than 768px. Mobile users interact with standard vertical cards or native horizontal touch carousels.
- **Risk: Text Overflow on Varied Display Sizes.**
  - *Mitigation:* Fluid typography utilizing CSS `clamp()` ensures headlines fit on exactly 2 lines on desktop without breaking or wrapping unexpectedly.
