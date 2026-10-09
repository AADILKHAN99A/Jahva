import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, GithubLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { getTeamMembers } from "@/lib/content";
import { FloatingIslandNav } from "@/components/ui/FloatingIslandNav";
import { Footer } from "@/components/ui/Footer";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";
import { TechnicalBadge } from "@/components/ui/TechnicalBadge";

export const metadata: Metadata = {
  title: "The Collective",
  description:
    "Meet the creative engineers, shader architects, and design technologists behind Kinetic Atelier.",
};

export default function TeamPage() {
  const members = getTeamMembers();

  return (
    <>
      <FloatingIslandNav />
      <main className="flex-1 overflow-x-hidden pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
            ROSTER &amp; DISCIPLINES
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-brand-text mb-6">
            The Collective Partners
          </h1>
          <p className="text-lg text-brand-secondary max-w-2xl leading-relaxed">
            We are four equal partners combining mathematical precision with digital craft. Each partner designs interfaces and authors low-level code directly in production.
          </p>
        </div>

        {/* Member Dossiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {members.map((member) => (
            <DoubleBezelCard key={member.id} className="h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  {/* Member Masthead */}
                  <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start sm:items-center">
                    <div className="relative h-28 w-28 shrink-0 rounded-2xl overflow-hidden bg-surface-shell ring-1 ring-border-subtle">
                      <Image
                        src={member.avatarUrl}
                        alt={member.name}
                        fill
                        sizes="112px"
                        className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-2xl font-bold text-brand-text">
                          {member.name}
                        </h2>
                      </div>
                      <p className="font-mono text-xs text-accent font-semibold mb-2">
                        {member.role}
                      </p>
                      <p className="text-xs text-brand-muted font-mono">
                        {member.location}
                      </p>
                    </div>
                  </div>

                  {/* Philosophy & Bio */}
                  <blockquote className="border-l-2 border-accent/40 pl-4 py-1 text-sm italic text-brand-secondary mb-6 font-medium">
                    &ldquo;{member.philosophy}&rdquo;
                  </blockquote>

                  <p className="text-sm text-brand-secondary leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Disciplines & Skills */}
                  <div className="mb-6">
                    <h3 className="text-xs font-mono uppercase text-brand-muted tracking-wider mb-2">
                      Core Disciplines
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {member.disciplines.map((d) => (
                        <TechnicalBadge key={d} size="sm">
                          {d}
                        </TechnicalBadge>
                      ))}
                    </div>
                  </div>

                  {/* Individual Experiments Teaser */}
                  <div className="mb-6">
                    <h3 className="text-xs font-mono uppercase text-brand-muted tracking-wider mb-2">
                      Solo Lab Works ({member.individualProjects.length})
                    </h3>
                    <div className="space-y-2">
                      {member.individualProjects.map((p) => (
                        <div
                          key={p.id}
                          className="p-3 rounded-xl bg-surface-shell/50 ring-1 ring-border-subtle flex items-center justify-between"
                        >
                          <div>
                            <div className="text-xs font-semibold text-brand-text">
                              {p.title}
                            </div>
                            <div className="text-[11px] text-brand-muted">
                              {p.tags.join(" - ")}
                            </div>
                          </div>
                          <span className="font-mono text-[11px] text-brand-muted">
                            {p.year}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Profile Link & Socials */}
                <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-muted hover:text-brand-text transition-colors"
                        aria-label={`${member.name} GitHub profile`}
                      >
                        <GithubLogo size={18} weight="bold" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.links.email}`}
                      className="text-brand-muted hover:text-brand-text transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <EnvelopeSimple size={18} weight="bold" />
                    </a>
                  </div>

                  <Link
                    href={`/team/${member.id}`}
                    className="inline-flex items-center gap-2 text-xs font-bold font-mono text-accent hover:underline group"
                  >
                    <span>View Full Dossier</span>
                    <ArrowUpRight
                      size={14}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </DoubleBezelCard>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
