import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckSquareOffset } from "@phosphor-icons/react/dist/ssr";
import {
  getSkills,
  getTeamMemberById,
  getProjectBySlug,
} from "@/lib/content";
import { FloatingIslandNav } from "@/components/ui/FloatingIslandNav";
import { Footer } from "@/components/ui/Footer";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";
import { TechnicalBadge } from "@/components/ui/TechnicalBadge";

export const metadata: Metadata = {
  title: "Skills & Technical Capabilities",
  description:
    "Comprehensive engineering taxonomy and architectural capabilities of Kinetic Atelier.",
};

const CATEGORIES = [
  {
    id: "creative-dev",
    label: "Creative Development & Shaders",
    description:
      "Bespoke GLSL vertex and fragment pipelines, WebGL physics, and real-time audio synthesis.",
  },
  {
    id: "systems",
    label: "Systems & Edge Architecture",
    description:
      "Next.js Server Components, WebAssembly compute pipelines, and low-latency edge caching.",
  },
  {
    id: "interface",
    label: "Interface Systems & Motion",
    description:
      "Design token engineering, GSAP ScrollTrigger choreography, and WCAG AAA compliance.",
  },
  {
    id: "spatial-3d",
    label: "Spatial Computing & 3D",
    description:
      "Procedural geometries, instanced buffer rendering, and spatial canvas indexing.",
  },
] as const;

export default function SkillsPage() {
  const allSkills = getSkills();

  return (
    <>
      <FloatingIslandNav />
      <main className="flex-1 overflow-x-hidden pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
            TECHNICAL TAXONOMY
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-brand-text mb-6">
            Craft Capabilities &amp; Standards
          </h1>
          <p className="text-lg text-brand-secondary max-w-2xl leading-relaxed">
            Every competency is verified in high-traffic production environments. We do not claim theoretical knowledge; we maintain low-level mastery over our tools.
          </p>
        </div>

        {/* Quality Bar Callout Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-3xl bg-surface-shell ring-1 ring-border-subtle mb-24">
          <div className="flex items-start gap-4">
            <CheckSquareOffset size={28} className="text-accent shrink-0 mt-1" weight="bold" />
            <div>
              <h3 className="font-bold text-base text-brand-text">
                Lighthouse 95+ Baseline
              </h3>
              <p className="text-xs text-brand-secondary leading-relaxed mt-1">
                Sub-2s LCP, zero layout shifts (CLS 0.00), and sub-150ms Interaction to Next Paint.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckSquareOffset size={28} className="text-accent shrink-0 mt-1" weight="bold" />
            <div>
              <h3 className="font-bold text-base text-brand-text">
                Hardware Acceleration
              </h3>
              <p className="text-xs text-brand-secondary leading-relaxed mt-1">
                Strict transform and opacity animation pipeline maintaining 60fps on mobile viewports.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CheckSquareOffset size={28} className="text-accent shrink-0 mt-1" weight="bold" />
            <div>
              <h3 className="font-bold text-base text-brand-text">
                WCAG AAA High Contrast
              </h3>
              <p className="text-xs text-brand-secondary leading-relaxed mt-1">
                Accessible contrast, keyboard focus traps, screen reader semantic DOM, and reduced motion safety.
              </p>
            </div>
          </div>
        </div>

        {/* Categorized Clusters */}
        <div className="space-y-24">
          {CATEGORIES.map((category) => {
            const categorySkills = allSkills.filter(
              (s) => s.category === category.id
            );

            return (
              <section key={category.id}>
                <div className="mb-8 pb-4 border-b border-border-subtle">
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
                    {category.label}
                  </h2>
                  <p className="text-sm text-brand-secondary mt-1">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill) => (
                    <DoubleBezelCard key={skill.id} className="h-full">
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold text-lg text-brand-text">
                              {skill.name}
                            </h3>
                            <TechnicalBadge
                              size="sm"
                              active={skill.mastery === "specialist"}
                            >
                              {skill.mastery}
                            </TechnicalBadge>
                          </div>

                          <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed mb-6">
                            {skill.description}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-border-subtle space-y-3">
                          {/* Specialists */}
                          <div>
                            <span className="font-mono text-[10px] uppercase text-brand-muted tracking-wider block mb-1">
                              Specialist Partners:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {skill.memberIds.map((memberId) => {
                                const member = getTeamMemberById(memberId);
                                if (!member) return null;
                                return (
                                  <Link
                                    key={member.id}
                                    href={`/team/${member.id}`}
                                    className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
                                  >
                                    <span>{member.name.split(" ")[0]}</span>
                                    <ArrowUpRight size={10} weight="bold" />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          {/* Production Projects */}
                          {skill.projectSlugs.length > 0 && (
                            <div>
                              <span className="font-mono text-[10px] uppercase text-brand-muted tracking-wider block mb-1">
                                Production Deployments:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {skill.projectSlugs.map((slug) => {
                                  const project = getProjectBySlug(slug);
                                  if (!project) return null;
                                  return (
                                    <Link
                                      key={project.slug}
                                      href={`/projects/${project.slug}`}
                                      className="text-[11px] text-brand-secondary hover:text-brand-text bg-canvas-base px-2 py-0.5 rounded ring-1 ring-border-subtle"
                                    >
                                      {project.title}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </DoubleBezelCard>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
