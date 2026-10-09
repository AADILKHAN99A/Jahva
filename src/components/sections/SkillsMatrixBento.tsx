import React from "react";
import Link from "next/link";
import { ArrowUpRight, Cpu, Sparkle, Globe, DeviceMobile } from "@phosphor-icons/react/dist/ssr";
import { Skill } from "@/types/content";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";
import { TechnicalBadge } from "@/components/ui/TechnicalBadge";

export interface SkillsMatrixBentoProps {
  skills: Skill[];
}

/**
 * SkillsMatrixBento displays team proficiencies in a mathematically gapless Bento grid
 * with varied cell architectures, real background diversity, and zero empty voids.
 */
export function SkillsMatrixBento({ skills }: SkillsMatrixBentoProps) {
  const creativeDev = skills.filter((s) => s.category === "creative-dev");
  const systems = skills.filter((s) => s.category === "systems");
  const interfaceSkills = skills.filter((s) => s.category === "interface");
  const spatialSkills = skills.filter((s) => s.category === "spatial-3d");

  return (
    <section className="py-28 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-text">
            Collective Technical Competencies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-secondary max-w-2xl">
            A balanced synthesis of low-level systems architecture, bespoke WebGL shader math, and meticulous interface choreography.
          </p>
        </div>
        <Link
          href="/skills"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent hover:underline font-semibold"
        >
          <span>View Full Capabilities Matrix</span>
          <ArrowUpRight size={14} weight="bold" />
        </Link>
      </div>

      {/* Gapless Dense Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
        {/* Cell 1: Creative Development & Shaders (Span 7, Row 2) - Highlight Cell */}
        <div className="md:col-span-7 md:row-span-2">
          <DoubleBezelCard className="h-full bg-gradient-to-br from-surface-shell via-surface-shell to-accent/10">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-accent mb-4">
                  <Sparkle size={20} weight="fill" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Creative Development
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-text mb-3">
                  WebGL, GLSL Shaders &amp; Web Audio
                </h3>
                <p className="text-sm sm:text-base text-brand-secondary leading-relaxed mb-6 max-w-lg">
                  Writing raw GLSL vertex and fragment pipelines, signed distance fields (SDF), and real-time DSP audio synthesis directly in browser contexts.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                {creativeDev.map((s) => (
                  <TechnicalBadge key={s.id} active={s.mastery === "specialist"}>
                    {s.name}
                  </TechnicalBadge>
                ))}
              </div>
            </div>
          </DoubleBezelCard>
        </div>

        {/* Cell 2: Systems Architecture (Span 5) */}
        <div className="md:col-span-5 md:row-span-1">
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 text-zinc-300 mb-2">
                <Cpu size={18} weight="bold" />
                <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-brand-muted">
                  Systems &amp; Edge
                </h4>
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2">
                Next.js RSC, Rust &amp; WASM
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {systems.slice(0, 4).map((s) => (
                  <TechnicalBadge key={s.id} size="sm">
                    {s.name}
                  </TechnicalBadge>
                ))}
              </div>
            </div>
          </DoubleBezelCard>
        </div>

        {/* Cell 3: Spatial Computing & 3D (Span 5) */}
        <div className="md:col-span-5 md:row-span-1">
          <DoubleBezelCard className="h-full bg-surface-shell/80">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 text-zinc-300 mb-2">
                <Globe size={18} weight="bold" />
                <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-brand-muted">
                  Spatial 3D
                </h4>
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-2">
                Procedural Geometry &amp; Three.js
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {spatialSkills.map((s) => (
                  <TechnicalBadge key={s.id} size="sm">
                    {s.name}
                  </TechnicalBadge>
                ))}
              </div>
            </div>
          </DoubleBezelCard>
        </div>

        {/* Cell 4: Interface & Micro-Interactions (Span 12) */}
        <div className="md:col-span-12">
          <DoubleBezelCard className="h-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-zinc-300 mb-2">
                  <DeviceMobile size={18} weight="bold" />
                  <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-brand-muted">
                    Interface Systems
                  </h4>
                </div>
                <h3 className="text-2xl font-bold text-brand-text mb-2">
                  Editorial Token Architecture &amp; GSAP Choreography
                </h3>
                <p className="text-sm text-brand-secondary max-w-2xl">
                  Enforcing WCAG AAA contrast, zero layout shift (CLS 0.00), and custom spring dynamics.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {interfaceSkills.map((s) => (
                  <TechnicalBadge key={s.id}>
                    {s.name}
                  </TechnicalBadge>
                ))}
              </div>
            </div>
          </DoubleBezelCard>
        </div>
      </div>
    </section>
  );
}
