# Master Motion Specification & Choreography Matrix

*Date: 2026-10-10*
*Version: 1.0.0*
*Phase: Phase 2 UI Schema Deliverable*

---

## 1. Motion Architecture & Universal Rules

1. **Hierarchy & Purpose:** Motion exists to orient the user, articulate spatial relationships, provide physical tactility, and tell our collective engineering story. Zero unmotivated motion.
2. **Hardware Acceleration:** Animations manipulate exclusively `transform` (`x`, `y`, `scale`, `rotation`) and `opacity`. Never animate `top`, `left`, `width`, `height`, or layout properties.
3. **Strict Isolation:** GSAP ScrollTrigger and interactive physics live inside isolated `'use client'` leaf components with mandatory `gsap.context()` cleanup in `useEffect`. Continuous pointer or scroll events never trigger React state re-renders.
4. **Mandatory Reduced Motion Parity:** When `prefers-reduced-motion: reduce` is detected, all scroll pinning, 3D rotations, and parallax translations are disabled. Elements render statically with subtle, instantaneous opacity transitions.

---

## 2. Interaction & Choreography Matrix

| Component / Interaction | Trigger | Animation Description | Duration | Easing | Reduced Motion Fallback |
|---|---|---|---|---|---|
| **Hero Entrance Choreography** | Page Load / Mount | Headline words fade and translate up (`y: 30` -> `0`); WebGL canvas fades in (`opacity: 0` -> `1`); primary CTA springs into place. | `900ms` total | `cubic-bezier(0.16, 1, 0.3, 1)` | Instant display at full opacity; zero translation. |
| **Sticky-Stack Case Studies** | Vertical Scroll (`ScrollTrigger`) | Prior card pins at viewport top; scales down to `0.92`, dims to `opacity: 0.5`, and blurs slightly as subsequent card scrolls up to meet it. | Scrubbed directly to scroll progress | `linear` (scrub tied to scroll delta) | Pinning disabled; standard vertical card stack with native scroll. |
| **Horizontal Process Pan** | Vertical Scroll (`ScrollTrigger`) | Outer wrapper pins at viewport top; inner process track translates along X-axis (`x: 0` -> `-distance`). | Scrubbed directly to scroll progress (`scrub: 1`) | `linear` with 1-second spring damping | Pinning disabled; native horizontal touch-scrolling track with CSS scroll-snap. |
| **Kinetic Word Reveal** | Scroll into View | Headline or editorial paragraph words scrub from `opacity: 0.15` to `opacity: 1.0` as they cross the 75% to 40% viewport zone. | Scrubbed to scroll progress | `power2.out` | Paragraph displays statically at full opacity. |
| **Magnetic CTA Button** | Mouse Move within Button Bounds | Entire button center attracts towards pointer by up to 35% of delta offset. Nested circular arrow icon translates diagonally `translate-x-1 -translate-y-1` and rotates `45deg`. | `400ms` | `power3.out` via GSAP `quickTo` | Magnetic translation disabled; hover state uses subtle background brightness change only. |
| **Button Active Press** | Pointer Down (`:active`) | Physical scale reduction to `scale-[0.97]` with `-translate-y-[1px]` tactile feedback. | `120ms` | `cubic-bezier(0.32, 0.72, 0, 1)` | Color highlight only; zero scale shift. |
| **Double-Bezel Card Hover** | Pointer Enter / Leave | Inner core container translates up `-3px`; outer bezel hairline brightens from `rgba(255,255,255,0.1)` to `rgba(255,255,255,0.22)`. Thumbnail image scales gently to `scale-103`. | `350ms` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Border color change only; zero transform or scale shifts. |
| **Floating Nav Morph** | Scroll Depth Crosses 80px | Header translates smoothly from transparent page-width bar into floating glass pill with backdrop blur. | `300ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Instant switch between fixed classes without transform animation. |
| **Mobile Drawer Expansion** | Hamburger Button Click | Background veil blurs and darkens (`backdrop-blur-2xl`); menu links slide up sequentially from bottom with staggered delays (`50ms` per item). | `500ms` | `power3.out` | Instant display of menu links at full opacity. |
| **Category Filter Layout Morph** | Category Tag Click (`Flip`) | Cards smoothly re-order, expand, or exit utilizing GSAP Flip delta matrix calculation. | `600ms` | `power3.inOut` | Instant DOM update without layout animation. |
| **Monospace Text Scramble** | Pointer Enter on Skill / Role | Monospace characters cycle through random technical glyphs before settling on original text string from left to right. | `450ms` | Linear character resolution | Text remains static; zero glyph scramble. |
| **Parallax Thumbnail Depth** | Scroll across Viewport | Inner image inside overflow-hidden card shifts vertically from `yPercent: -10` to `yPercent: 10`. | Scrubbed to scroll progress | `linear` | Image remains centered; zero vertical offset. |

---

## 3. Implementation Code Patterns

### 3.1 Reduced Motion Guard Hook
```typescript
"use client";
import { useEffect, useState } from "react";

export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return prefersReduced;
}
```

### 3.2 GSAP Context Safe Wrapper Pattern
```typescript
"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function useGsapContext(
  animationFn: (ctx: gsap.Context) => void,
  deps: unknown[] = []
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      animationFn(ctx);
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion, ...deps]);

  return containerRef;
}
```

---

## 4. Mobile Performance Optimization

- On mobile viewports (window width < 768px):
  - Heavy GSAP ScrollTrigger pinning is strictly disabled.
  - Native CSS scroll snap handles horizontal carousels (`scroll-snap-type: x mandatory`).
  - WebGL ambient canvas frameloop is capped or switched to `frameloop="demand"` to preserve battery life.
  - Device pixel ratio is capped at `Math.min(window.devicePixelRatio, 2.0)`.
