import { describe, it, expect } from "vitest";
import {
  getTeamMembers,
  getTeamMemberById,
  getSkills,
  getProjects,
  getProjectBySlug,
  getProjectsByMember,
  getMembersBySkill,
  getIndividualProjects,
} from "../src/lib/content";

describe("Content Graph Integrity & Queries", () => {
  it("should validate and return all team members", () => {
    const members = getTeamMembers();
    expect(members.length).toBe(4);
    expect(members.map((m) => m.id)).toEqual([
      "elena-vance",
      "marcus-thorne",
      "siobhan-kelly",
      "tariq-al-mansoor",
    ]);
  });

  it("should retrieve a member by id with individual projects", () => {
    const elena = getTeamMemberById("elena-vance");
    expect(elena).toBeDefined();
    expect(elena?.name).toBe("Elena Vance");
    expect(elena?.individualProjects.length).toBeGreaterThan(0);
  });

  it("should validate all skills and categories", () => {
    const skills = getSkills();
    expect(skills.length).toBeGreaterThan(10);
    const webglSkill = skills.find((s) => s.id === "webgl");
    expect(webglSkill).toBeDefined();
    expect(webglSkill?.category).toBe("creative-dev");
  });

  it("should validate all flagship projects", () => {
    const projects = getProjects();
    expect(projects.length).toBe(4);
    const aura = getProjectBySlug("aura-spatial-audio");
    expect(aura).toBeDefined();
    expect(aura?.client).toBe("Aura Acoustics Inc.");
  });

  it("should properly cross-reference projects by member contributor", () => {
    const marcusProjects = getProjectsByMember("marcus-thorne");
    expect(marcusProjects.length).toBeGreaterThanOrEqual(2);
    expect(marcusProjects.some((p) => p.slug === "hyperion-compute")).toBe(true);
  });

  it("should properly cross-reference members by skill", () => {
    const shaderSpecialists = getMembersBySkill("webgl");
    expect(shaderSpecialists.length).toBeGreaterThanOrEqual(1);
    expect(shaderSpecialists.some((m) => m.id === "elena-vance")).toBe(true);
  });

  it("should aggregate all individual projects from members", () => {
    const individual = getIndividualProjects();
    expect(individual.length).toBe(8); // 4 members * 2 individual projects
  });
});
