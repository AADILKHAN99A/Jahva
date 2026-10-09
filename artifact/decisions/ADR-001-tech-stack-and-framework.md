# ADR-001: Tech Stack & Architecture Foundation

- **Date:** 2026-10-10
- **Status:** Accepted
- **Context:**
  The project requires an award-caliber (Awwwards / FWA level), highly interactive, content-driven team website with 60fps animations, optimal SEO, sub-2.5s LCP, and zero layout shift.
- **Decision:**
  We adopt the following core stack:
  1. **Next.js (App Router) + TypeScript:** Provides React Server Components (RSC) for zero-JS static content rendering, automatic route prefetching, built-in image and font optimization, and type safety across all content schemas.
  2. **Tailwind CSS v4 with CSS Variables:** High-performance utility styling with zero runtime CSS-in-JS overhead. Design tokens are mapped to standard CSS variables (`--bg-surface`, `--accent-primary`, etc.) for seamless theming and hardware-accelerated animations.
  3. **GSAP 3 (+ ScrollTrigger, Flip):** Industry-gold standard for scroll-driven choreography, timeline synchronization, pinned horizontal pans, and layout morphing. Isolated strictly inside client leaf components with strict cleanup lifecycles.
  4. **Three.js / React Three Fiber (Lazy-Loaded):** Used strictly for procedural background ambient shaders and interactive kinetic artifacts. Loaded asynchronously via `next/dynamic` with `ssr: false`, paused off-screen, and bypassed under reduced motion.
  5. **Type-Safe Content Layer (JSON + MDX):** Team members, competencies, and case studies are stored as structured JSON and MDX documents in `src/content/` with TypeScript zod-validated schemas.
- **Consequences:**
  - High initial development discipline required to isolate client motion leaves from server components.
  - Guarantees top-tier Lighthouse scores (90+ performance, 95+ accessibility).
  - Eliminates component refactoring when adding new members, skills, or projects.
