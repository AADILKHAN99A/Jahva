# System Architecture & Technical Specifications

*Kinetic Atelier Architecture Documentation*

---

## 1. Architectural Philosophy

Kinetic Atelier is designed around three non-negotiable principles:
1. **Server-First by Default:** Layout scaffolding, metadata, editorial narratives, and static typography render server-side via React Server Components (RSC) with zero client bundle footprint.
2. **Motion Isolation in Client Leaves:** Interactive components (GSAP ScrollTrigger, pointer tracking, WebGL canvases) are strictly isolated leaf components tagged with `'use client'`.
3. **Decoupled Content Graph:** All business entities (team members, competencies, flagship case studies, and individual lab experiments) exist as typed JSON schemas validated at build time with Zod.

---

## 2. Directory Structure

```
/
├── artifact/                 # Research notes, plans, UI schemas, ADRs, reviews, screenshots
│   ├── research/
│   ├── plan/
│   ├── ui-schema/
│   ├── decisions/
│   ├── reviews/
│   └── screenshots/
├── docs/                     # Permanent documentation
│   ├── architecture.md
│   ├── design-system.md
│   ├── content-guide.md
│   └── deployment.md
├── public/                   # Static media, icons, and textures
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── page.tsx          # Home page
│   │   ├── team/             # Team index and [memberId] profiles
│   │   ├── projects/         # Projects index and [slug] case studies
│   │   ├── skills/           # Skills capabilities taxonomy
│   │   └── contact/          # Commission inquiry page
│   ├── components/
│   │   ├── ui/               # DoubleBezelCard, IslandButton, TechnicalBadge, etc.
│   │   ├── sections/         # Hero, StickyStack, ProcessPan, BentoGrid, etc.
│   │   └── motion/           # AmbientCanvas, KineticTextReveal, GSAP wrappers
│   ├── content/              # team.json, skills.json, projects.json
│   ├── lib/                  # utils.ts, content.ts, gsap.ts
│   ├── hooks/                # usePrefersReducedMotion.ts
│   ├── styles/               # tokens.css, globals.css
│   └── types/                # content.ts
└── tests/                    # Vitest unit test suite
```

---

## 3. Motion Architecture & GSAP Lifecycle

- **ScrollTrigger Registration:** Handled globally in `src/lib/gsap.ts` with browser safety checks.
- **Context Isolation:** Every GSAP component wraps tweens and ScrollTriggers within `gsap.context()` inside `useEffect` and returns `ctx.revert()` on unmount to prevent memory leaks and zombie listeners.
- **Reduced Motion:** Components query `usePrefersReducedMotion()`. If reduced motion is active, pinning and transforms are disabled, rendering static accessible DOM.
- **Mobile Capping:** On viewports under 768px, ScrollTrigger pinning is automatically disabled in favor of native CSS scroll snap.

---

## 4. 3D WebGL Pipeline

- Three.js procedural canvases are dynamically imported via `next/dynamic` with `ssr: false` to ensure the initial HTML payload remains lightweight.
- The render loop utilizes an `IntersectionObserver` to halt animation frames whenever the canvas is scrolled out of view.
- Device pixel ratios are capped to `Math.min(window.devicePixelRatio, 2.0)` to prevent GPU fillrate bottlenecks on high-density Retina displays.
