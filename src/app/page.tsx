import React from "react";
import { getProjects, getSkills, getTeamMembers } from "@/lib/content";
import { FloatingIslandNav } from "@/components/ui/FloatingIslandNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { StickyStackSection } from "@/components/sections/StickyStackSection";
import { HorizontalProcessSection } from "@/components/sections/HorizontalProcessSection";
import { SkillsMatrixBento } from "@/components/sections/SkillsMatrixBento";
import { TeamRosterSection } from "@/components/sections/TeamRosterSection";
import { Footer } from "@/components/ui/Footer";

export default function HomePage() {
  const projects = getProjects();
  const skills = getSkills();
  const members = getTeamMembers();

  return (
    <>
      <FloatingIslandNav />
      <main className="flex-1 overflow-x-hidden w-full max-w-full">
        <HeroSection />
        <StickyStackSection projects={projects} />
        <HorizontalProcessSection />
        <SkillsMatrixBento skills={skills} />
        <TeamRosterSection members={members} />
      </main>
      <Footer />
    </>
  );
}
