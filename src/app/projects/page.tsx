import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { getProjects, getIndividualProjects } from "@/lib/content";
import { FloatingIslandNav } from "@/components/ui/FloatingIslandNav";
import { Footer } from "@/components/ui/Footer";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";
import { TechnicalBadge } from "@/components/ui/TechnicalBadge";

export const metadata: Metadata = {
  title: "Flagship Works & Individual Experiments",
  description:
    "Explore team flagship client commissions and individual member open-source experiments.",
};

export default function ProjectsPage() {
  const flagshipProjects = getProjects();
  const individualProjects = getIndividualProjects();

  return (
    <>
      <FloatingIslandNav />
      <main className="flex-1 overflow-x-hidden pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
            PORTFOLIO INDEX
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-brand-text mb-6">
            Flagship Systems &amp; Lab Works
          </h1>
          <p className="text-lg text-brand-secondary max-w-2xl leading-relaxed">
            Our collective output spans commercial flagship commissions engineered for industry leaders and solo open-source experiments exploring mathematical physics and low-level protocols.
          </p>
        </div>

        {/* Section 1: Flagship Works */}
        <section className="mb-28">
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-border-subtle">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
                Team Flagship Systems
              </h2>
              <p className="text-sm text-brand-secondary mt-1">
                Multi-disciplinary commissions engineered collaboratively by collective partners.
              </p>
            </div>
            <span className="font-mono text-xs text-accent">
              04 PRODUCTION RELEASES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {flagshipProjects.map((project) => (
              <DoubleBezelCard key={project.slug} className="h-full">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-surface-shell ring-1 ring-border-subtle">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-zinc-300">
                        <span>{project.client}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <TechnicalBadge key={tech} size="sm">
                          {tech}
                        </TechnicalBadge>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-brand-text mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-brand-secondary leading-relaxed mb-6">
                      {project.subtitle}
                    </p>

                    {/* Metric highlights */}
                    <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-surface-shell/40 ring-1 ring-border-subtle mb-6">
                      {project.results.slice(0, 2).map((res) => (
                        <div key={res.label}>
                          <div className="font-mono text-xl font-bold text-accent">
                            {res.metric}
                          </div>
                          <div className="text-[11px] text-brand-muted mt-0.5">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent hover:underline group"
                  >
                    <span>Read Architectural Case Study</span>
                    <ArrowUpRight
                      size={14}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </DoubleBezelCard>
            ))}
          </div>
        </section>

        {/* Section 2: Individual Projects */}
        <section>
          <div className="flex items-center justify-between mb-10 pb-4 border-b border-border-subtle">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
                Individual Member Experiments
              </h2>
              <p className="text-sm text-brand-secondary mt-1">
                Autonomous research, generative shaders, and open-source packages created by our partners.
              </p>
            </div>
            <span className="font-mono text-xs text-accent">
              08 SOLO EXPERIMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualProjects.map(({ project, member }) => (
              <DoubleBezelCard key={project.id} className="h-full">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 bg-surface-shell ring-1 ring-border-subtle">
                      <Image
                        src={project.previewImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-brand-muted mb-1">
                      <Link
                        href={`/team/${member.id}`}
                        className="text-accent hover:underline"
                      >
                        {member.name}
                      </Link>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-base font-bold text-brand-text mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-brand-secondary line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <TechnicalBadge key={tag} size="sm">
                          {tag}
                        </TechnicalBadge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border-subtle flex items-center justify-between">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-semibold text-accent hover:underline flex items-center gap-1"
                      >
                        <span>Demo</span>
                        <ArrowUpRight size={12} weight="bold" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-brand-muted hover:text-brand-text flex items-center gap-1"
                      >
                        <GithubLogo size={12} weight="bold" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </DoubleBezelCard>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
