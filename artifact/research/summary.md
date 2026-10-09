# Research Synthesis, Direction & Risk Mitigation

*Date: 2026-10-10*
*Phase: Phase 1 Final Deliverable*

---

## 1. Key Research Findings

1. **Anti-Template Imperative (TasteSkills / Anti-Slop):**
   - The primary failure mode of contemporary agency and portfolio websites is the "AI Look": purple glow gradients, centered heroes with three identical feature boxes, generic Inter font stacks, fake stats, and em-dash copy flourishes.
   - Distinctiveness emerges from **editorial asymmetry (Variance 8)**, **deliberate motion hierarchy (Motion 7)**, **authentic human copy**, and **strict typography discipline**.

2. **Performance-Conscious 3D (ThreeUI / WebGL Insights):**
   - 3D elements must be procedural, shader-driven, or MatCap-illuminated to minimize texture memory and draw calls.
   - Canvas elements must be lazy-loaded using dynamic imports, paused offscreen via `IntersectionObserver`, and completely bypassed under `prefers-reduced-motion: reduce`.

3. **Motion That Communicates (GSAP Engine):**
   - GSAP ScrollTrigger must be utilized for structural spatial progression (card stacking, pinned horizontal showcases, scrubbed typography illumination).
   - Component-level micro-interactions should utilize hardware-accelerated CSS transforms and spring physics, with zero React re-renders triggered by continuous pointer or scroll events.

4. **Cross-Referenced Studio Excellence:**
   - The greatest portfolios (Locomotive, Basement, Active Theory, Oberhaeuser) connect their data: team members, skill proficiencies, team case studies, and individual passion projects are interwoven into a cohesive knowledge graph.

---

## 2. Chosen Direction: "KINETIC ARCHITECTURE"

### Conceptual Narrative
The site is positioned as the digital atelier of an elite creative engineering collective. We merge the physical tactility of Swiss modernism and architectural hardware with the kinetic fluidity of digital shaders and smooth physics.

### Distinctive Characteristics
- **The Obsidian & Safety Cadmium Palette:** Deep architectural obsidian base (`#09090b`), graphite card surfaces (`#18181b`), stark chalk typography (`#fafafa`), and a single vibrant accent: Safety Cadmium Orange (`#ff5500`) used with surgical precision for active states and focal highlights.
- **Typographic Identity:** Muscular, geometric display headers (`Cabinet Grotesk` / `Clash Display`) paired with precision technical metadata in `JetBrains Mono`. Zero generic sans fallbacks.
- **Machined "Double-Bezel" Containers:** Outer structural rings with hairline borders (`ring-1 ring-white/10`) housing recessed tactile content cores with subtle inner edge highlights.
- **Interconnected Graph Architecture:** A unified content schema where team members, individual experiments, team flagship projects, and core competencies cross-link seamlessly.

---

## 3. Risk Matrix & Mitigation Strategies

| Risk Factor | Probability | Impact | Mitigation Strategy |
|---|---|---|---|
| **Mobile Scroll Jank & Performance Drops** | Medium | High | • Enforce `min-h-[100dvh]` to eliminate iOS Safari address-bar jumps.<br>• Disable GSAP scroll pinning below 768px in favor of native CSS touch scroll-snap.<br>• Cap canvas pixel ratios to 2.0 max and pause off-screen WebGL render loops. |
| **Accessibility & Motion Sickness** | Medium | Critical | • Strict `useReducedMotion()` and CSS media query integration.<br>• Under reduced motion, replace GSAP pinned timelines with static, accessible grids.<br>• Maintain WCAG AA minimum 4.5:1 contrast for all text, buttons, and form states. |
| **Heavy Bundle Size (Three.js + GSAP)** | Medium | High | • Code-split Three.js canvas components using `next/dynamic` with `ssr: false`.<br>• Tree-shake GSAP plugins (only register ScrollTrigger, SplitText, Flip).<br>• Zero external Google Fonts link tags; optimize fonts using `next/font`. |
| **Accidental "AI Tells" in Copy & Layout** | High | High | • Automated pre-flight checklist before delivery.<br>• Zero em-dash (`—`) rule strictly audited.<br>• Realistic, human biographies, authentic project challenges, and realistic client metrics. |
| **Content Coupling / Rigid Architecture** | Low | High | • Purely content-driven architecture: team, skills, and projects reside in strictly typed JSON and MDX schemas in `src/content/`.<br>• Adding a new member or project requires zero component or layout modifications. |

---

## 4. Architectural Readiness

Phase 1 research is fully completed. All rules, patterns, and constraints are documented and active. We now proceed to Phase 2: Implementation Plan, Design System Schema, Wireframes & Sections Spec, and Motion Specification.
