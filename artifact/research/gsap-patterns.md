# GSAP Architecture & Core Animation Patterns Study

*Date: 2026-10-10*
*Reference: GSAP 3 Core, ScrollTrigger, SplitText, Flip, and Observer APIs*

---

## 1. Overview & Motion Philosophy

GSAP (GreenSock Animation Platform) provides unmatched performance, timeline synchronization, and layout-independent transform capabilities. In an Awwwards-tier site, motion is not decorative fluff; it communicates:
- **Hierarchy:** Guiding the human eye to key headlines and focal points.
- **Spatial Logic:** Explaining how cards, sections, and galleries connect in physical space.
- **Momentum & Tangibility:** Providing weight, friction, and natural spring physics to digital elements.

---

## 2. Inventory: 10 Essential GSAP Animation Patterns

### Pattern 1: Pinned Sticky Card Stack (Scroll-Driven Layering)
- **Use Case:** Featured team case studies or individual project showcases.
- **How it Works:** Each project card is stacked vertically in the DOM. As the user scrolls, each card pins at the viewport top (`start: "top top"`). As the subsequent card scrolls up to meet it, the pinned card scales down (`scale: 0.92`), darkens, and blurs slightly (`opacity: 0.5`, `filter: blur(4px)`).
- **Technical Implementation:**
  ```typescript
  const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
  cards.forEach((card, index) => {
    if (index === cards.length - 1) return;
    ScrollTrigger.create({
      trigger: card,
      start: "top top",
      endTrigger: cards[cards.length - 1],
      end: "top top",
      pin: true,
      pinSpacing: false,
    });
    gsap.to(card, {
      scale: 0.92,
      opacity: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: cards[index + 1],
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  });
  ```
- **Performance Consideration:** Uses `transform: scale` and `opacity` only. Zero layout reflows.

---

### Pattern 2: Pinned Horizontal Pan Gallery (Scroll Hijack)
- **Use Case:** Project workflow process, interactive visual timeline, or project screenshot reel.
- **How it Works:** The outer section container pins at the top of the viewport. Vertical scroll input is converted directly into horizontal translation of an inner track (`x: -distance`), smoothly scrubbed with physical inertia (`scrub: 1`).
- **Technical Implementation:**
  ```typescript
  const wrap = sectionRef.current;
  const track = trackRef.current;
  const distance = track.scrollWidth - window.innerWidth;
  
  gsap.to(track, {
    x: -distance,
    ease: "none",
    scrollTrigger: {
      trigger: wrap,
      start: "top top",
      end: () => `+=${distance}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
  ```
- **Accessibility / Mobile Rule:** On mobile viewports (< 768px), disable pinning and allow native touch horizontal scrolling via CSS `overflow-x: auto; scroll-snap-type: x mandatory`.

---

### Pattern 3: Scrubbed Kinetic Text Reveal (Word-by-Word Reading)
- **Use Case:** Team manifesto, project narrative introductions, and editorial bio quotes.
- **How it Works:** Split editorial paragraphs into individual wrapped word spans. Words initialize at `opacity: 0.1` and slightly desaturated. As the reader scrolls through the section, words progressively illuminate to `opacity: 1` and full contrast in direct response to scroll position.
- **Technical Implementation:**
  ```typescript
  const words = gsap.utils.toArray<HTMLElement>(".reveal-word");
  gsap.fromTo(words, 
    { opacity: 0.15, y: 4 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 40%",
        scrub: true,
      },
    }
  );
  ```

---

### Pattern 4: Magnetic Cursor Pull with Spring Damping
- **Use Case:** Primary interactive CTAs, avatar hover states, and navigational buttons.
- **How it Works:** Tracks cursor position relative to the element center when hovered. Uses GSAP's `quickTo` helper for ultra-smooth 60fps interpolation without garbage collection pauses.
- **Technical Implementation:**
  ```typescript
  const el = buttonRef.current;
  const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
  const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

  const handleMouseMove = (e: MouseEvent) => {
    const { left, top, width, height } = el.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * 0.35;
    const deltaY = (e.clientY - centerY) * 0.35;
    xTo(deltaX);
    yTo(deltaY);
  };

  const handleMouseLeave = () => {
    xTo(0);
    yTo(0);
  };
  ```

---

### Pattern 5: Seamless Layout Morphing with GSAP Flip
- **Use Case:** Filtering projects by category/skill, expanding member summary cards into deep detail view.
- **How it Works:** Captures element positions before DOM reconfiguration (`Flip.getState()`), applies state changes (filtering or grid alteration), and calculates the delta matrix, animating elements to their new locations smoothly without sudden jumps.
- **Technical Implementation:**
  ```typescript
  const state = Flip.getState(".project-card, .filter-badge");
  // update active category in DOM / React
  Flip.from(state, {
    duration: 0.65,
    ease: "power3.inOut",
    stagger: 0.04,
    absolute: true,
    onEnter: elements => gsap.fromTo(elements, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4 }),
    onLeave: elements => gsap.to(elements, { opacity: 0, scale: 0.8, duration: 0.3 }),
  });
  ```

---

### Pattern 6: Parallax Image Depth with Viewport Boundary Containment
- **Use Case:** Project thumbnail imagery, member portrait photos.
- **How it Works:** The parent wrapper has `overflow: hidden`. The inner `img` or container is oversized (`h-[120%]`). As the card travels through the viewport, the inner image shifts from `yPercent: -15` to `yPercent: 15`, producing authentic cinematic depth.
- **Technical Implementation:**
  ```typescript
  gsap.fromTo(imageRef.current, 
    { yPercent: -10 },
    {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    }
  );
  ```

---

### Pattern 7: Curtain Clip-Path Hero Reveal
- **Use Case:** Initial page load choreography and section entry moments.
- **How it Works:** Renders hero images and key display blocks behind a hardware-accelerated CSS `clip-path: inset(100% 0 0 0)` mask. An orchestrated GSAP timeline slides the curtain upwards to `inset(0% 0 0 0)` while scaling the underlying image down from `1.15` to `1.0`.
- **Technical Implementation:**
  ```typescript
  const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });
  tl.to(".hero-mask", { clipPath: "inset(0% 0 0 0)", duration: 1.2 })
    .fromTo(".hero-image", { scale: 1.15 }, { scale: 1.0, duration: 1.4 }, "<");
  ```

---

### Pattern 8: Monospace Technical Text Scramble / Decoder
- **Use Case:** Interactive skill level indicators, role titles, and technical data tags on member cards.
- **How it Works:** On hover or entry, the text cycles through randomized alphanumeric characters before settling on the target string from left to right over 400-600ms.
- **Technical Implementation:**
  A lightweight GSAP ticker loop that replaces characters with glyphs from a monospace alphabet set (`_ / [ ] 0 1 # * ~`) before resolving the original string character by character.

---

### Pattern 9: Dynamic SVG Path & Contour Drawing
- **Use Case:** Architecture diagrams, skill interconnectivity graphs, and subtle section divider flourishes.
- **How it Works:** Calculates SVG path length via `getTotalLength()`, initializing `strokeDasharray` and `strokeDashoffset` to that length. GSAP scrubs `strokeDashoffset` to `0` as the section scrolls into focus.
- **Technical Implementation:**
  ```typescript
  const path = pathRef.current;
  const length = path.getTotalLength();
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
  gsap.to(path, {
    strokeDashoffset: 0,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: path,
      start: "top 80%",
      end: "bottom 40%",
      scrub: 0.8,
    },
  });
  ```

---

### Pattern 10: Adaptive Floating Island Navigation Transition
- **Use Case:** Global header and quick navigation bar.
- **How it Works:** Begins as a generous, semi-transparent top bar. Past 80px scroll depth, it morphs into a detached, floating pill with a frosted border, scaled padding, and elevated backdrop blur.
- **Technical Implementation:**
  ScrollTrigger listener that toggles a compact state timeline with debounced velocity detection to hide during rapid downward scroll and reveal immediately upon upward scroll.

---

## 3. Strict GSAP Clean-Up & Next.js Integration Rules

1. **Always use `gsap.context()` inside `useEffect`:**
   Guarantees that all ScrollTriggers, timelines, and tweens created within the React component are cleanly reverted on unmount.
2. **Reduced Motion Safety Check:**
   Every GSAP animation hook must query `window.matchMedia("(prefers-reduced-motion: reduce)").matches`. If true, bypass tweens, set final values immediately, and disable ScrollTrigger pinning.
3. **Avoid ScrollTrigger on Hidden Tabs / Collapsed Drawers:**
   Always invoke `ScrollTrigger.refresh()` when DOM dimensions shift due to image loads, accordions, or route transitions.
