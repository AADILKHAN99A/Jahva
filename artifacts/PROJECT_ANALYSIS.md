# Project Analysis & Operational Architecture — Jahva

**Last Updated:** 2026-10-14  
**Project:** Jahva Creative Studio Web Platform  
**Repository Type:** Lovable-connected TanStack Start application

---

## 1. Project Overview & Architecture

Jahva is an editorial, high-aesthetic web application for a creative studio specializing in **Brand, Design, Product, and In-Hours Engineering**.

### Core Stack
- **Framework:** [TanStack Start](https://tanstack.com/start) (`@tanstack/react-start` v1.168.60) + [TanStack Router](https://tanstack.com/router) (`@tanstack/react-router` v1.170.41)
- **Runtime & Bundler:** Vite 8 (`vite` 8.1.5) with `@lovable.dev/vite-tanstack-config` (v2.25.3), compiling via Nitro (Cloudflare/Node SSR target)
- **React:** React 19 (`react` 19.2.0, `react-dom` 19.2.0)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite` ^4.2.1, `tailwindcss` ^4.2.1) + OKLCH token-based design system + `tw-animate-css`
- **UI & Primitives:** Radix UI (`@radix-ui/react-*`), Lucide React icons, Sonner notifications, Embla Carousel
- **State & Data:** TanStack React Query (`@tanstack/react-query` v5.101.1)

---

## 2. Server & Routing Execution Pipeline

```
HTTP Request
     │
     ▼
src/server.ts ─────────► Lazy loads @tanstack/react-start/server-entry
     │                  Normalizes catastrophic H3 SSR errors (normalizeCatastrophicSsrResponse)
     ▼
src/start.ts ──────────► TanStack Start middleware chain:
     │                  1. errorMiddleware (catches non-status HTTP exceptions, returns error page)
     │                  2. csrfMiddleware (validates server functions against CSRF attacks)
     ▼
src/router.tsx ────────► Router factory (`getRouter`):
     │                  Instantiates QueryClient, binds routeTree, enables scrollRestoration
     ▼
src/routes/__root.tsx ─► Root HTML Shell, Fonts (Poppins), Meta tags, ErrorComponent, Outlet
     │
     ▼
src/routes/index.tsx ──► Landing Page & Interactive Stage
```

---

## 3. Detailed File & Variable Breakdown

### A. Entry & Server Files

| File | Primary Functions & Variables | Purpose |
|---|---|---|
| `src/server.ts` | `getServerEntry()`, `normalizeCatastrophicSsrResponse()`, `isH3SwallowedErrorBody()`, `default.fetch()` | Intercepts all incoming requests, delegates to TanStack Start, and converts silent H3/Nitro SSR 500 error payloads into user-friendly error pages. |
| `src/start.ts` | `errorMiddleware`, `csrfMiddleware`, `startInstance` | Sets up TanStack Start runtime middlewares for server function CSRF protection and error boundaries. |
| `src/router.tsx` | `getRouter()` | Exports the factory generating new `QueryClient` and `createRouter` instances for each session/request. |
| `src/routes/__root.tsx` | `Route`, `RootShell`, `RootComponent`, `NotFoundComponent`, `ErrorComponent` | Renders HTML document skeleton, SEO metadata, Google font stylesheets, minimalist `j` mark favicons (`/favicon.svg`, `/favicon.ico`, `/favicon.png`), and client query provider. |

---

### B. Index Route (`src/routes/index.tsx`)

#### State Variables
| Variable | Type | Initial Value | Role & Behavior |
|---|---|---|---|
| `loading` | `boolean` | `true` | Controls the initial full-screen typewriter loading overlay. Dissolves once intro typing finishes. |
| `typewriterText` | `string` | `""` | Holds characters of "Jahva" typed sequentially every 240ms during page load. |
| `loadingFade` | `boolean` | `false` | Triggered 2.5s after typing completes; triggers 800ms fade-out transition. |
| `searchOpen` | `boolean` | `false` | Controls visibility of the command dialog (accessible via search icon or `Ctrl/Cmd+K` / `/`). |
| `selectedResult` | `SearchOptionKey \| null` | `null` | Controls which detail pane ("projects", "contact", "email", "about") is displayed inside the search modal. |
| `copiedEmail` | `boolean` | `false` | Tracks whether the studio email was copied; toggles button state to "Copied!" for 2 seconds. |
| `selectedCategory` | `EDITORIAL_CATEGORIES[0] \| null` | `null` | Holds the currently selected capability row to display in the service detail pop-up modal. |
| `selectedProject` | `PROJECTS_DATA[0] \| null` | `null` | Holds the currently active project for the lightbox detail dialog. |

#### Component Functions
- `Seal({ watch })`: SVG circular rotating seal. Renders "Jahva creative" or "WATCH OUR VIDEO" along a circular SVG textpath.
- `PixelCodeBackground()`: Emits continuous vertical matrix-style code streams on the hero's left and right margins.
- `ProfileCardVisual()`: Glassmorphic studio profile card showing active status, studio details, and coordinates (Jaipur, IN).
- `handleCopyEmail()`: Copies `jahva.interested@gmail.com` to the system clipboard.
- `scrollToTop()`: Smoothly scrolls the viewport to position 0.

#### Data Collections
- `EDITORIAL_CATEGORIES` (6 items): Strategy, Branding, Digital Product Design, Web and App Development, Motion/3D, Systems Innovation.
- `THOUGHT_PROCESS_CARDS` (4 items): 
  - **01 — OBSERVE (`/images/thought-process/observe.jpg`):** Indian design researcher observing human spatial interactions through architectural glass at dusk.
  - **02 — EXPLORE (`/images/thought-process/explore.jpg`):** Design atelier studio drafting desk with layered sketches, axonometrics, typography specimens, and idea mapping.
  - **03 — CREATE (`/images/thought-process/create.jpg`):** Indian product designer and technologist assembling and fine-tuning an illuminated circular glass tactile prototype.
  - **04 — REFINE (`/images/thought-process/refine.jpg`):** Polished digital product UI layout on a tablet device paired with design system typography cards and tokens.
  - Interactive 3D perspective flip (`perspective-1000`, `rotate-y-180`) on hover.
- `PROJECTS_DATA` (13 items): Kinetic dual-row infinite marquee showcase with counter-flow direction (Row 1 drifting left, Row 2 drifting right) and pause-on-hover functionality. Features official portfolio case studies by Jahanvy Verma (Founder of Jahva):
  - **13 Portfolio Projects & CDN Assets:**
    1. Aura Chrono OS (`https://www.behance.net/gallery/237041775/UIUX-Design`) — Wearable UI/UX (`/images/projects/behance/proj-1.jpg`)
    2. Savison Pharma (`https://www.behance.net/gallery/237053489/Branding-Design`) — Brand Identity & Packaging (`/images/projects/behance/proj-2.jpg`)
    3. Puppet & Tech Robotic Identity (`https://www.behance.net/gallery/237046161/Branding-Design`) — Cultural Folklore & Tech (`/images/projects/behance/proj-3.jpg`)
    4. Shar Automotive Group (`https://www.behance.net/gallery/237067429/Automobile-Branding-Design`) — Automobile Branding (`/images/projects/behance/proj-4.jpg`)
    5. Botanical Essence & Care (`https://www.behance.net/gallery/213844505/Commercial-Advertisement`) — Commercial & Packaging (`/images/projects/behance/proj-5.jpg`)
    6. Lumina Phone Commercial (`https://www.behance.net/gallery/237068613/Advertisement-Design`) — Product Advertising (`/images/projects/behance/proj-6.jpg`)
    7. Chocc's Artisanal Chocolatier (`https://www.behance.net/gallery/197322337/Product-Packaging-Design`) — Confectionery Packaging (`/images/projects/behance/proj-7.jpg`)
    8. HelloFresh Ecosystem (`https://www.behance.net/gallery/210732071/UIUX-Project`) — Interactive Tablet UI (`/images/projects/behance/proj-8.jpg`)
    9. Cinematic Vision & Production (`https://www.behance.net/gallery/237060319/Editing-Film-Making`) — Film & Editorial (`/images/projects/behance/proj-9.jpg`)
    10. Oaty Bytes Organic Crunch (`https://www.behance.net/gallery/237055757/Branding-Add-Management`) — Brand & Ad Management (`/images/projects/behance/proj-10.jpg`)
    11. Optitemp Spiral Engineering (`https://www.behance.net/gallery/197320717/Product-Design`) — Industrial Product Design (`/images/projects/behance/proj-11.jpg`)
    12. Florara Botanical Monograph (`https://www.behance.net/gallery/237065229/Magazine-Design-X-Publication-Design`) — Publication Design (`/images/projects/behance/proj-12.jpg`)
    13. Oh Gaga Comic Chronicles (`https://www.behance.net/gallery/237064193/Comic-Book-Design`) — Graphic Novel & Print (`/images/projects/behance/proj-13.jpg`)
  - **Interactive Features:**
    - Clean, minimalist aesthetic (no card-top badges or bottom text overlays on the marquee cards; only full-bleed mockup visual).
    - Entire card acts as a direct link (`<a>` tag with `target="_blank"`), opening the live Behance case study directly on click.
    - Top-right circular floating action badge with `ArrowUpRight` reinforces the external launch affordance.
    - Hovering over either marquee row pauses the scrolling animation on both rows for comfortable inspection and clicking.
- `TEAM_MEMBERS` (4 items): Studio directors with grayscale-to-color hover portrait photography:
  1. Creative Designer and Consultant (Founder & Experience with Urban Culture, Clystro, White Eudicots, Chetan Pumps — updated authentic studio portrait at `/images/team/member-1.jpg`)
  2. FullStack Developer (Experience with Zucol, Arthonsys Technologies and Several Projects)
  3. Video Editor and 3D Artist (Experience with Professor of How)
  4. Software Developer (Experience with Serve.com, White Eudicots and Projects)

---

### C. Stylesheet & Design Tokens (`src/styles.css`)

- **Design System Tokens (`@theme inline`, `:root`, `.dark`):**
  - All colors defined in `oklch` format.
  - Custom variables: `--ribbon-dark`, `--ribbon-light`, `--ribbon-ink`, `--outline-mark`.
- **Hero Stage Container (`.reference-stage`):**
  - Utilizes CSS Container Queries (`container-type: inline-size`) with `cqw` sizing units so typography and ribbons scale proportionally regardless of viewport aspect ratio.
- **Marquee Ribbons (`.ribbon-light`, `.ribbon-dark`):**
  - Rotated banners (-13.2deg and 44deg) continuously scrolling through `ribbon-scroll-slow` keyframes (75s and 90s).
- **3D Card Flip (`.perspective-1000`, `.rotate-y-180`):**
  - Smooth 3D perspective flip showing front photograph and back methodology details on card hover.
- **Apple-Style Glassmorphism & Universal Centering (`.glass-dialog`, `.bubbly-dialog`):**
  - High blur backdrop (`blur(48px)`), subtle inner borders, and springy pop-in animation (`bubbly-pop-in`).
  - **Universal Centering System:** Uses modern `translate: -50% -50% !important;` with `transform: none !important;` to eliminate CSS Transforms Level 2 double-translation conflicts with Tailwind CSS v4. `@keyframes bubbly-pop-in` animates `scale` and `opacity` independently without altering translation offsets, guaranteeing pixel-perfect horizontal and vertical centering (`diffX: 0`) across all dialogs (`CommandDialog`, `Dialog`, `AlertDialog`).

---

## 4. Operating Rules for This Project

1. **Explain First Rule:**
   - On every task, the AI assistant MUST always first explain its understanding of the problem, requirements, and root cause before proposing or modifying any code.
2. **Artifact Maintenance Rule:**
   - All architecture, analysis, and project decision documents MUST be stored in the project's `artifacts/` directory (`artifacts/PROJECT_ANALYSIS.md`, etc.).
   - Whenever any file or architecture in the project is updated, the corresponding artifacts must be updated synchronously.
3. **Lovable Sync Integrity:**
   - Connected to Lovable. Never rewrite git history (no force pushes, interactive rebasing, or amending published commits).
   - Keep the single reference composition pattern intact in `src/routes/index.tsx`.

---

## 5. Git & GitHub Remote Configuration

- **Remote Origin:** `git@github.com:AADILKHAN99A/Jahva.git` (SSH authenticated)
- **Active Branch:** `main` (tracking `origin/main`)
- **Remote Status:** Up to date. Latest codebase with custom logo, favicons, updated thought-process imagery, modal dialog centering, and updated team experience is live on `origin/main`.


