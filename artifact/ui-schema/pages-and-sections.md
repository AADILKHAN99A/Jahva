# Wireframe & Section Architecture Specification

*Date: 2026-10-10*
*Version: 1.0.0*
*Phase: Phase 2 UI Schema Deliverable*

---

## 1. Global Navigation & Structural Shell

- **Desktop Shell:**
  - Standard state: Attached transparent header (`max-w-7xl mx-auto px-8 py-6`) with Monogram Wordmark on left, link cluster in center (`Work`, `Team`, `Skills`, `Philosophy`), and primary CTA (`Initiate Project`) on right.
  - Sticky state (> 80px scroll): Morphs into a detached floating glass pill (`top-6 left-1/2 -translate-x-1/2`) with frosted backdrop blur, compact layout, and reduced padding.
- **Mobile Shell (< 768px):**
  - Compact glass pill fixed to top with brand mark and minimal hamburger trigger.
  - Full-screen modal overlay on open, featuring large staggered typography links and quick contact coordinates.

---

## 2. Page 1: Home (`/`)

### Section 1.1: Asymmetrical Hero (The Foundry Statement)
- **Visual Architecture:** Asymmetric 60/40 desktop split.
  - Left Column (60%):
    - Eyebrow: `COLLECTIVE PRACTICE / EST. 2024` (single uppercase tracking label).
    - Headline: Max 2 lines: *"Architecting Digital Systems with Physical Weight & Kinetic Depth."* (`clamp(3.0rem, 6vw, 5.5rem)`).
    - Subtext: Exactly 18 words: *"A disciplined creative engineering atelier crafting award-level web applications, interactive shaders, and high-performance digital brand systems."*
    - Actions: Primary magnetic CTA (`Explore Flagship Work`) paired with secondary link (`Meet The Collective`).
  - Right Column (40%):
    - Ambient WebGL Shader Canvas: An interactive 3D procedural wireframe ribbon reacting subtly to cursor physics. Lazy-loaded via `next/dynamic`.
- **Mobile Collapse:** Stacks vertically. Headline font scales to `clamp(2.25rem, 5vw, 3.25rem)`. WebGL canvas simplifies to a fixed-aspect container or graceful CSS gradient mesh.

### Section 1.2: Flagship Case Studies (GSAP Pinned Sticky-Stack)
- **Visual Architecture:** 4 full-bleed pinned cards stacking vertically on scroll.
  - Card 1: `Aura Spatial Audio` (Web Audio / Three.js Interactive Engine).
  - Card 2: `Hyperion Compute` (Next-generation Cloud Analytics Interface).
  - Card 3: `Voxel Protocol` (Decentralized Geometric Asset Protocol).
  - Card 4: `Kroma Studio OS` (Real-time Collaborative Canvas Suite).
- **Interaction Grammar:** Each card pins at `top: 0`. As the next card ascends, the prior card scales to `0.92`, dims to `opacity: 0.5`, and blurs gently.
- **Mobile Collapse:** ScrollTrigger pinning is automatically deactivated below 768px. Cards stack as standard responsive double-bezel cards with native touch scrolling.

### Section 1.3: The Collective Workflow (Pinned Horizontal Pan Gallery)
- **Visual Architecture:** Section wrapper pins to viewport top while an inner 4-stage track slides horizontally from right to left (`x: -distance`).
  - Stage 1: `Architectural Blueprint` (System modeling, schema design, latency budgets).
  - Stage 2: `Generative Prototyping` (Custom GLSL shaders, spring physics, kinetic typography).
  - Stage 3: `Precision Engineering` (Server components, memory profiling, WebGL optimization).
  - Stage 4: `Hardened Deployment` (Zero layout shifts, sub-second LCP, automated verification).
- **Mobile Collapse:** Pinning is disabled; stages render as a swipeable horizontal touch carousel with snap points (`scroll-snap-type: x mandatory`).

### Section 1.4: Skills Matrix (Gapless Dense Bento Grid)
- **Visual Architecture:** 5-cell mathematically interlocking Bento grid (`grid-auto-flow: dense`).
  - Cell A (col-span-8, row-span-2): Interactive Node Graph preview representing collective capabilities.
  - Cell B (col-span-4, row-span-1): Creative Development core technologies (WebGL, GLSL, Three.js, GSAP).
  - Cell C (col-span-4, row-span-1): Systems Engineering competencies (Next.js, TypeScript, Rust, WebAssembly).
  - Cell D (col-span-6, row-span-1): Spatial & Motion Architecture (Physics engines, custom easings).
  - Cell E (col-span-6, row-span-1): Design Systems & Accessibility (Token architecture, WCAG AAA).
- **Mobile Collapse:** Collapses to a single-column sequence (`grid-cols-1 gap-6`).

### Section 1.5: The Core Roster (Team Preview)
- **Visual Architecture:** 4-column desktop grid featuring the 4 core collective members.
  - Double-bezel card structure with monochrome portrait imagery.
  - Hover state reveals individual specialty tags, personal passion project count, and a magnetic profile link.
- **Mobile Collapse:** Collapses to 2x2 grid on tablet and 1-column stack on mobile.

### Section 1.6: Final CTA & Global Footer
- **Visual Architecture:** Massive high-contrast statement: *"Ready to build something monumental?"* with a single primary CTA (`Initiate Contact`). Standardized footer with copyright, local time coordinate, and semantic navigation links.

---

## 3. Page 2: Team Roster (`/team`)

### Section 2.1: Collective Overview & Philosophy
- **Header:** Monumental typography: *"The Collective."*
- **Overview Text:** Narrative describing the team's multidisciplinary ethos (engineers who design, designers who write low-level code).
- **Filter Bar:** Filter members by focus area: `All`, `Creative Development`, `Systems Architecture`, `3D & Shaders`, `Brand Engineering`.

### Section 2.2: Comprehensive Member Dossiers
- Grid of deep member cards (2-column layout on desktop):
  - **Member A: Elena Vance** (Lead Creative Technologist & Shader Engineer).
  - **Member B: Marcus Thorne** (Principal Systems Architect & Performance Lead).
  - **Member C: Siobhan Kelly** (Design Director & Interface Choreographer).
  - **Member D: Tariq Al-Mansoor** (Full-Stack Engineer & Creative Coder).
- Each card displays:
  - High-resolution editorial portrait.
  - Specific disciplines and verified competency ratings.
  - Contributed team case studies (with clickable pills).
  - Individual passion projects (direct links to live demos/repos).
  - Personal social coordinates (GitHub, ReadCV, X).

### Section 2.3: Collective Synergy Matrix
- An interactive relationship diagram demonstrating how members pair up on flagship client deliverables.

---

## 4. Page 3: Member Profile (`/team/[memberId]`)

### Section 3.1: Member Masthead & Biography
- Split screen: Large portrait with physical hardware bezel on left; biographical narrative, studio role, and location on right.
- Philosophical statement and working methodology.

### Section 3.2: Technical Competencies & Skill Mastery
- Detailed breakdown of the member's verified skills, categorized by mastery level.
- Cross-reference links: clicking a skill navigates to the Skills index with that competency highlighted.

### Section 3.3: Flagship Team Contributions
- Filtered gallery of the team case studies where this specific member served as lead or contributor, detailing their exact technical responsibilities.

### Section 3.4: Individual Projects & Lab Experiments
- Dedicated showcase of the member's personal creations:
  - Standalone generative art experiments.
  - Open-source packages and developer tools.
  - Links to GitHub repositories, live CodePen/Three.js sandboxes.

---

## 5. Page 4: Skills Matrix & Capabilities (`/skills`)

### Section 4.1: Capabilities Index Header
- Monumental headline: *"Technical Taxonomy & Craft Capabilities."*
- Quick search / filter input allowing real-time filtering of competencies.

### Section 4.2: Structured Capability Clusters
- Four dedicated domain clusters:
  1. **Creative Development & Shaders:** WebGL, Three.js, GLSL, Canvas API, Web Audio, GSAP.
  2. **Systems Architecture & Performance:** Next.js RSC, TypeScript, Node.js, WebAssembly, Edge Functions.
  3. **Interface Architecture & Design Systems:** Tailwind CSS, Token Engines, Micro-interactions, Accessibility (A11y).
  4. **Spatial Computing & Interactive 3D:** Procedural Geometry, Blender Pipeline, Mesh Optimization.
- Each skill card displays:
  - Technical name and concise description.
  - Team members who specialize in it (with avatar micro-pills).
  - Projects where it was deployed in production.

### Section 4.3: Collective Benchmark Standards
- Explicit documentation of our performance, accessibility, and architectural quality bars (Lighthouse 95+, 60fps frame budgeting, WCAG AA compliance).

---

## 6. Page 5: Projects Showcase (`/projects`)

### Section 6.1: Showcase Header & Dual Filter
- Header: *"Selected Case Studies & Engineering Experiments."*
- Dual Switcher:
  - Toggle between **"Team Flagships"** (client commissions and studio products) and **"Individual Experiments"** (personal lab prototypes created by members).
  - Filter chips by domain: `WebGL / 3D`, `Design Systems`, `Full Stack`, `Audio / Experimental`.

### Section 6.2: Project Grid & Masonry Feed
- Dynamic GSAP Flip-enabled layout:
  - Team Flagship cards: Large-scale horizontal split cards with video/interactive previews, client context, and contributor rosters.
  - Individual Project cards: Compact double-bezel cards displaying repo links, member attribution, and tech tags.

---

## 7. Page 6: Project Case Study (`/projects/[slug]`)

### Section 7.1: Case Study Masthead & Project Dossier
- Headline: Project Title.
- Dossier Table: Client, Year, Sector, Live URL, Contributor Team Members (with links to profiles), Technologies Used (with links to skills).

### Section 7.2: Hero Media Presentation
- Full-bleed media container: High-resolution interface video reel or interactive WebGL canvas.

### Section 7.3: The Architectural Challenge & Strategy
- Deep editorial narrative: The problem space, performance constraints, and initial architecture blueprint.

### Section 7.4: Interactive Media Carousel & Process Artifacts
- Pinned horizontal gallery displaying wireframes, shader code highlights, component iterations, and final responsive UI.

### Section 7.5: Engineering Deep-Dive & Performance Audit
- Code snippet breakdowns and verified Lighthouse / framerate metrics.

### Section 7.6: Next Project Navigator
- Magnetic transition card inviting the reader into the subsequent case study.

---

## 8. Page 7: Contact & Engagement (`/contact`)

### Section 8.1: Masthead & Availability Status
- Headline: *"Initiate a Commission."*
- Clear availability indicator (Q1/Q2 project bookings).

### Section 8.2: The Architectural Inquiry Form
- Accessible form with floating labels, input focus rings, and validation:
  - Name / Organization
  - Email Address
  - Project Scope / Timeline
  - Estimated Budget Range
  - Brief Narrative Description

### Section 8.3: Direct Communication Coordinates
- Direct studio email, PGP key link, collective social links, and physical studio location.
