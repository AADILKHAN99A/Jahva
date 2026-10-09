# ADR-003: Motion Engine Strategy & Accessibility Guardrails

- **Date:** 2026-10-10
- **Status:** Accepted
- **Context:**
  High-intensity motion (`MOTION_INTENSITY: 7`) is required for award-level storytelling, but must not introduce performance jank, CPU lockups, or vestibular motion triggers for sensitive users.
- **Decision:**
  1. **Animation Engine Segmentation:**
     - Macro-Scroll Choreography: GSAP 3 with ScrollTrigger handles pinned card stacks, horizontal process pans, and scrubbed word reveals.
     - Micro-Interactions & Spring Physics: Hardware-accelerated CSS transforms and GSAP `quickTo` for cursor attraction and button hover states.
     - Strict Rule: Zero continuous state updates in React (no `useState` on scroll or mousemove).
  2. **Reduced Motion Architecture:**
     - Every motion hook and component must check `prefers-reduced-motion`.
     - In reduced-motion mode: GSAP ScrollTriggers are disabled, pinned sections convert to clean accessible vertical stacks, translations drop to 0, and opacity transitions become instant or subtle fades.
  3. **Performance Budget:**
     - Animate only `transform` (`translate3d`, `scale`) and `opacity`. Animate zero layout properties (`width`, `height`, `top`, `left`, `margin`).
     - Mobile viewports (< 768px): ScrollTrigger pinning is automatically disabled; sections use native mobile touch scrolling.
- **Consequences:**
  - Guaranteed 60fps scrolling on modern and mid-range devices.
  - Zero accessibility penalties or vestibular risks for users requesting reduced motion.
