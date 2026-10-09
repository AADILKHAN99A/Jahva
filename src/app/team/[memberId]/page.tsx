import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  GithubLogo,
  EnvelopeSimple,
  Briefcase,
  Code,
} from "@phosphor-icons/react/dist/ssr";
import {
  getTeamMembers,
  getTeamMemberById,
  getProjectsByMember,
  getSkillById,
} from "@/lib/content";
import { FloatingIslandNav } from "@/components/ui/FloatingIslandNav";
import { Footer } from "@/components/ui/Footer";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";
import { TechnicalBadge } from "@/components/ui/TechnicalBadge";

export async function generateStaticParams() {
  const members = getTeamMembers();
  return members.map((member) => ({
    memberId: member.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ memberId: string }>;
}): Promise<Metadata> {
  const { memberId } = await params;
  const member = getTeamMemberById(memberId);
  if (!member) return { title: "Member Not Found" };

  return {
    title: `${member.name} | ${member.role}`,
    description: member.bio,
  };
}

export default async function MemberProfilePage({
  params,
}: {
  params: Promise<{ memberId: string }>;
}) {
  const { memberId } = await params;
  const member = getTeamMemberById(memberId);

  if (!member) {
    notFound();
  }

  const flagshipWorks = getProjectsByMember(member.id);

  return (
    <>
      <FloatingIslandNav />
      <main className="flex-1 overflow-x-hidden pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brand-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} weight="bold" />
            <span>Back to Collective Roster</span>
          </Link>
        </div>

        {/* Hero Masthead Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-5">
            <div className="relative h-96 sm:h-[460px] w-full rounded-3xl overflow-hidden bg-surface-shell ring-1 ring-white/10 shadow-2xl">
              <Image
                src={member.avatarUrl}
                alt={member.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-zinc-300">
                <span>{member.location}</span>
                <span className="text-accent">{member.role}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
              PARTNER PROFILE
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-brand-text mb-2">
              {member.name}
            </h1>
            <p className="font-mono text-sm sm:text-base text-zinc-400 mb-6 font-medium">
              {member.title}
            </p>

            <blockquote className="border-l-2 border-accent/40 pl-4 py-2 text-base sm:text-lg italic text-zinc-200 mb-8 font-medium leading-relaxed">
              &ldquo;{member.philosophy}&rdquo;
            </blockquote>

            <p className="text-base text-brand-secondary leading-relaxed mb-8">
              {member.bio}
            </p>

            {/* Direct Connect Links */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
              <a
                href={`mailto:${member.links.email}`}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold bg-accent text-brand-inverse hover:bg-accent/90 transition-colors"
              >
                <EnvelopeSimple size={16} weight="bold" />
                <span>Contact {member.name.split(" ")[0]}</span>
              </a>

              {member.links.github && (
                <a
                  href={member.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium bg-surface-elevated text-brand-text ring-1 ring-white/10 hover:bg-white/10 transition-colors"
                >
                  <GithubLogo size={16} weight="bold" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Section: Technical Competencies */}
        <section className="mb-24">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
              Verified Technical Competencies
            </h2>
            <p className="text-sm text-brand-secondary mt-1">
              Core technologies and mathematical domains authored in production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {member.skills.map((skillId) => {
              const skill = getSkillById(skillId);
              if (!skill) return null;
              return (
                <DoubleBezelCard key={skill.id} className="p-1">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-sm text-brand-text">
                        {skill.name}
                      </h3>
                      <TechnicalBadge size="sm" active={skill.mastery === "specialist"}>
                        {skill.mastery}
                      </TechnicalBadge>
                    </div>
                    <p className="text-xs text-brand-secondary leading-relaxed mb-3">
                      {skill.description}
                    </p>
                    <Link
                      href="/skills"
                      className="text-[11px] font-mono text-accent hover:underline flex items-center gap-1"
                    >
                      <span>Explore category</span>
                      <ArrowUpRight size={12} weight="bold" />
                    </Link>
                  </div>
                </DoubleBezelCard>
              );
            })}
          </div>
        </section>

        {/* Section: Flagship Team Contributions */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase size={22} className="text-accent" weight="bold" />
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
              Flagship Studio Contributions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {flagshipWorks.map((project) => (
              <DoubleBezelCard key={project.slug}>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6 bg-surface-shell ring-1 ring-white/10">
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-brand-muted mb-2">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed mb-6">
                      {project.subtitle}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold font-mono text-accent hover:underline"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight size={14} weight="bold" />
                  </Link>
                </div>
              </DoubleBezelCard>
            ))}
          </div>
        </section>

        {/* Section: Individual Projects & Lab Experiments */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Code size={22} className="text-accent" weight="bold" />
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
              Individual Experiments &amp; Open Source
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {member.individualProjects.map((project) => (
              <DoubleBezelCard key={project.id}>
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6 bg-surface-shell ring-1 ring-white/10">
                      <Image
                        src={project.previewImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono text-brand-muted mb-2">
                      <span className="text-accent">{project.role}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-text mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <TechnicalBadge key={tag} size="sm">
                          {tag}
                        </TechnicalBadge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent hover:underline"
                      >
                        <span>Live Experiment</span>
                        <ArrowUpRight size={14} weight="bold" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-muted hover:text-brand-text transition-colors"
                      >
                        <GithubLogo size={14} weight="bold" />
                        <span>Source Code</span>
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
