import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { TeamMember } from "@/types/content";
import { DoubleBezelCard } from "@/components/ui/DoubleBezelCard";
import { TechnicalBadge } from "@/components/ui/TechnicalBadge";

export interface TeamRosterSectionProps {
  members: TeamMember[];
}

/**
 * TeamRosterSection showcases the collective's key partners
 * with authentic editorial imagery, discipline taxonomy, and individual project counts.
 */
export function TeamRosterSection({ members }: TeamRosterSectionProps) {
  return (
    <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-text">
            Collective Partners
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-secondary max-w-2xl">
            Four practitioners united by technical precision and creative audacity. No middle management; every partner designs and engineers in production.
          </p>
        </div>
        <Link
          href="/team"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent hover:underline font-semibold"
        >
          <span>Explore Detailed Dossiers</span>
          <ArrowUpRight size={14} weight="bold" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <Link
            key={member.id}
            href={`/team/${member.id}`}
            className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-3xl"
          >
            <DoubleBezelCard className="h-full">
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Portrait Media */}
                  <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6 bg-surface-shell ring-1 ring-border-subtle">
                    <Image
                      src={member.avatarUrl}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale contrast-125 transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-[11px] font-mono text-zinc-300">
                      {member.location}
                    </div>
                  </div>

                  {/* Member Identity */}
                  <h3 className="text-xl font-bold text-brand-text group-hover:text-accent transition-colors flex items-center justify-between">
                    <span>{member.name}</span>
                    <ArrowUpRight
                      size={16}
                      weight="bold"
                      className="text-brand-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </h3>
                  <p className="font-mono text-xs text-accent mt-1 mb-4">
                    {member.role}
                  </p>

                  <p className="text-xs text-brand-secondary line-clamp-3 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                {/* Footer Details: Disciplines & Project count */}
                <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-brand-muted">
                  <TechnicalBadge size="sm">
                    {member.disciplines[0]}
                  </TechnicalBadge>
                  <span>{member.individualProjects.length} solo works</span>
                </div>
              </div>
            </DoubleBezelCard>
          </Link>
        ))}
      </div>
    </section>
  );
}
