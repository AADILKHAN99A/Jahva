import teamData from "@/content/team.json";
import skillsData from "@/content/skills.json";
import projectsData from "@/content/projects.json";
import {
  TeamMember,
  Skill,
  ProjectCaseStudy,
  IndividualProject,
  TeamMemberSchema,
  SkillSchema,
  ProjectCaseStudySchema,
} from "@/types/content";

/**
 * Validated in-memory cache of content collections
 */
const validatedTeam: TeamMember[] = TeamMemberSchema.array().parse(teamData);
const validatedSkills: Skill[] = SkillSchema.array().parse(skillsData);
const validatedProjects: ProjectCaseStudy[] = ProjectCaseStudySchema.array().parse(projectsData);

export function getTeamMembers(): TeamMember[] {
  return validatedTeam;
}

export function getTeamMemberById(id: string): TeamMember | undefined {
  return validatedTeam.find((member) => member.id === id);
}

export function getSkills(): Skill[] {
  return validatedSkills;
}

export function getSkillById(id: string): Skill | undefined {
  return validatedSkills.find((skill) => skill.id === id);
}

export function getSkillsByCategory(category: Skill["category"]): Skill[] {
  return validatedSkills.filter((skill) => skill.category === category);
}

export function getProjects(): ProjectCaseStudy[] {
  return validatedProjects;
}

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return validatedProjects.find((project) => project.slug === slug);
}

export function getProjectsByMember(memberId: string): ProjectCaseStudy[] {
  return validatedProjects.filter((project) =>
    project.contributors.includes(memberId)
  );
}

export function getIndividualProjects(): {
  project: IndividualProject;
  member: TeamMember;
}[] {
  const result: { project: IndividualProject; member: TeamMember }[] = [];
  for (const member of validatedTeam) {
    for (const project of member.individualProjects) {
      result.push({ project, member });
    }
  }
  return result;
}

export function getMembersBySkill(skillId: string): TeamMember[] {
  return validatedTeam.filter((member) => member.skills.includes(skillId));
}

export function getProjectsBySkill(skillId: string): ProjectCaseStudy[] {
  return validatedProjects.filter((project) =>
    project.technologies.includes(skillId)
  );
}
