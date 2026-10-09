import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle,
  Users,
  Code,
} from "@phosphor-icons/react/dist/ssr";
import {
  getProjects,
  getProjectBySlug,
  getTeamMemberById,
  getSkillById,
} from "@/lib/content";
import { FloatingIslandNav } from "@/components/ui/FloatingIslandNav";
import { Footer } from "@/components/ui/Footer";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";
import { TechnicalBadge } from "@/components/ui/TechnicalBadge";
import { IslandButton } from "@/components/ui/IslandButton";

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.subtitle,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject =
    allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <>
      <FloatingIslandNav />
      <main className="flex-1 overflow-x-hidden pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} weight="bold" />
            <span>Back to All Works</span>
          </Link>
        </div>

        {/* Masthead */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
            ARCHITECTURAL CASE STUDY / {project.year}
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-brand-text mb-6">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-brand-secondary max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Metadata Dossier Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-surface-shell ring-1 ring-border-subtle mb-16">
          <div>
            <div className="font-mono text-xs text-brand-muted uppercase tracking-wider">
              Client
            </div>
            <div className="font-semibold text-sm sm:text-base text-brand-text mt-1">
              {project.client}
            </div>
          </div>
          <div>
            <div className="font-mono text-xs text-brand-muted uppercase tracking-wider">
              Sector
            </div>
            <div className="font-semibold text-sm sm:text-base text-brand-text mt-1">
              {project.sector}
            </div>
          </div>
          <div>
            <div className="font-mono text-xs text-brand-muted uppercase tracking-wider">
              Timeline
            </div>
            <div className="font-semibold text-sm sm:text-base text-brand-text mt-1">
              {project.year}
            </div>
          </div>
          <div>
            <div className="font-mono text-xs text-brand-muted uppercase tracking-wider">
              Live Deliverable
            </div>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-accent font-semibold hover:underline mt-1"
              >
                <span>Launch App</span>
                <ArrowUpRight size={12} weight="bold" />
              </a>
            ) : (
              <div className="text-xs text-brand-muted mt-1">Proprietary</div>
            )}
          </div>
        </div>

        {/* Hero Full-Bleed Media */}
        <div className="relative h-80 sm:h-[500px] lg:h-[620px] w-full rounded-3xl overflow-hidden mb-24 bg-surface-shell ring-1 ring-border-subtle shadow-2xl">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Executive Overview & Key Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-6">
              Executive Overview
            </h2>
            <p className="text-base sm:text-lg text-brand-secondary leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div className="lg:col-span-5">
            <DoubleBezelCard>
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent mb-4 font-semibold">
                Verified Performance Metrics
              </h3>
              <div className="space-y-4">
                {project.results.map((res) => (
                  <div
                    key={res.label}
                    className="flex items-center justify-between pb-3 border-b border-border-subtle last:border-none last:pb-0"
                  >
                    <span className="text-xs text-brand-secondary">
                      {res.label}
                    </span>
                    <span className="font-mono text-lg font-bold text-brand-text">
                      {res.metric}
                    </span>
                  </div>
                ))}
              </div>
            </DoubleBezelCard>
          </div>
        </div>

        {/* Architectural Challenge & Technical Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <DoubleBezelCard>
            <div className="flex flex-col h-full">
              <span className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                The Engineering Challenge
              </span>
              <h3 className="text-xl font-bold text-brand-text mb-4">
                Complex Bottlenecks &amp; Constraints
              </h3>
              <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
                {project.challenge}
              </p>
            </div>
          </DoubleBezelCard>

          <DoubleBezelCard>
            <div className="flex flex-col h-full">
              <span className="font-mono text-xs uppercase tracking-wider text-accent mb-2">
                The Architectural Solution
              </span>
              <h3 className="text-xl font-bold text-brand-text mb-4">
                Implementation &amp; GPU Strategy
              </h3>
              <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>
          </DoubleBezelCard>
        </div>

        {/* Process Artifacts Gallery */}
        <section className="mb-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text mb-8">
            Process &amp; System Artifacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.artifacts.map((art) => (
              <DoubleBezelCard key={art.title}>
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-4 bg-surface-shell ring-1 ring-border-subtle">
                  <Image
                    src={art.imageUrl}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-1">
                  {art.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                  {art.description}
                </p>
              </DoubleBezelCard>
            ))}
          </div>
        </section>

        {/* Technologies & Contributor Credits */}
        <section className="mb-24 p-8 rounded-3xl bg-surface-shell ring-1 ring-border-subtle">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4 text-brand-secondary">
                <Code size={18} weight="bold" />
                <h3 className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Technologies Deployed
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((techId) => {
                  const skill = getSkillById(techId);
                  return (
                    <TechnicalBadge key={techId}>
                      {skill ? skill.name : techId}
                    </TechnicalBadge>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4 text-brand-secondary">
                <Users size={18} weight="bold" />
                <h3 className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Contributing Partners
                </h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {project.contributors.map((memberId) => {
                  const member = getTeamMemberById(memberId);
                  if (!member) return null;
                  return (
                    <Link
                      key={member.id}
                      href={`/team/${member.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-text hover:text-accent transition-colors"
                    >
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <span>{member.name}</span>
                      <span className="text-xs font-mono text-brand-muted">
                        ({member.role})
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Next Project Navigator */}
        <div className="border-t border-border-subtle pt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-brand-muted uppercase tracking-wider">
              Subsequent Case Study
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-text mt-1">
              {nextProject.title}
            </h3>
          </div>
          <IslandButton href={`/projects/${nextProject.slug}`} variant="primary">
            View {nextProject.title}
          </IslandButton>
        </div>
      </main>
      <Footer />
    </>
  );
}
