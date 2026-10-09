# KINETIC ATELIER

> Award-level collective portfolio and engineering showcase for an architectural creative technology team.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, GSAP 3 (ScrollTrigger), and Three.js.

---

## Highlights

- **Anti-Template Aesthetic:** Designed around the *Kinetic Atelier* visual language with asymmetrical layouts, machined double-bezel cards, and obsidian-cadmium color tokens.
- **Scroll-Driven Choreography:** Canonical GSAP ScrollTrigger card pinning, horizontal process panning, and scrubbed typography reveals.
- **Lazy-Loaded 3D WebGL:** Interactive procedural wireframe canvas that halts offscreen and automatically degrades under reduced motion.
- **Decoupled Content Architecture:** All team members, capabilities, flagship case studies, and individual experiments live in typed JSON schemas in `src/content/`.
- **Accessibility & Performance:** WCAG AA/AAA contrast compliance, complete keyboard navigation, semantic HTML, and full `prefers-reduced-motion` support.

---

## Getting Started

```bash
# Install dependencies
npm install

# Run unit tests
npm test

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Route Overview

- `/` Home: Asymmetrical Hero, Pinned Case Study Stack, Horizontal Process Pan, Skills Matrix Bento, Team Preview.
- `/team` The Collective: Full member roster with disciplines, individual projects, and social links.
- `/team/[memberId]` Member Profile: Deep dossier with verified competencies, flagship contributions, and solo lab works.
- `/projects` Works Index: Dual showcase of team flagship systems and individual member experiments.
- `/projects/[slug]` Case Study: In-depth architectural case studies with challenges, solutions, metrics, and contributor credits.
- `/skills` Capabilities: Technical taxonomy cross-linked to specialists and production deployments.
- `/contact` Commissions: Structured inquiry form and direct studio coordinates.

---

## Documentation

- [Architecture & Specifications](docs/architecture.md)
- [Design System & Tokens](docs/design-system.md)
- [Content Guide](docs/content-guide.md)
- [Deployment Guide](docs/deployment.md)

---

## License

MIT © Kinetic Atelier
