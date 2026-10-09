# Design System & Token Architecture

*Kinetic Atelier Architecture Documentation*

---

## 1. Aesthetic Identity: "Kinetic Atelier"

- **Concept:** An architectural engineering foundry. Physical weight, precision hairlines, machined recessed cores, laser-engraved typography, and fluid procedural WebGL.
- **Tone:** Technical, disciplined, confident, and human.
- **Zero AI Tells:** No purple gradients, no centered heroes with 3 identical cards, no fake stats, zero em-dashes.

---

## 2. Core Tokens

### Color Tokens
- Canvas Base: `#09090b` (`--color-canvas-base`)
- Canvas Subtle: `#0f0f12` (`--color-canvas-subtle`)
- Surface Shell: `#18181b` (`--color-surface-shell`)
- Surface Core: `#121215` (`--color-surface-core`)
- Surface Elevated: `#202025` (`--color-surface-elevated`)
- Accent Primary: `#ff5500` (`--color-accent-primary`)
- Accent Subtle: `rgba(255, 85, 0, 0.12)` (`--color-accent-subtle`)
- Text Primary: `#fafafa` (`--color-text-primary`)
- Text Secondary: `#a1a1aa` (`--color-text-secondary`)
- Text Muted: `#71717a` (`--color-text-muted`)

### Double-Bezel Card Technique
Every primary content container utilizes a nested two-tier architecture:
1. Outer Shell: `bg-surface-shell ring-1 ring-white/10 p-2 rounded-3xl`
2. Inner Recessed Core: `bg-surface-core rounded-[calc(1.5rem-0.125rem)] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]`

---

## 3. Typography Stack

- **Display & Headlines:** High-impact geometric sans (`Cabinet Grotesk` / `Clash Display` / system-ui fallback), `leading-[1.02]`.
- **Reading Body:** Clean, high-legibility geometric sans (`Geist Sans` / `Plus Jakarta Sans` / system-ui fallback), `leading-relaxed`, max-width `65ch`.
- **Technical & Metadata:** Monospace (`JetBrains Mono` / ui-monospace fallback) for badges, dates, and parameters.
