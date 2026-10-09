import { z } from "zod";

export const IndividualProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  year: z.string(),
  role: z.string(),
  liveUrl: z.string().optional(),
  repoUrl: z.string().optional(),
  tags: z.array(z.string()),
  previewImage: z.string(),
});

export const TeamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  title: z.string(),
  location: z.string(),
  bio: z.string(),
  philosophy: z.string(),
  avatarUrl: z.string(),
  disciplines: z.array(z.string()),
  skills: z.array(z.string()),
  flagshipProjects: z.array(z.string()),
  individualProjects: z.array(IndividualProjectSchema),
  links: z.object({
    github: z.string().optional(),
    readcv: z.string().optional(),
    x: z.string().optional(),
    email: z.string(),
  }),
});

export const SkillSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.enum(["creative-dev", "systems", "interface", "spatial-3d"]),
  mastery: z.enum(["core", "advanced", "specialist"]),
  description: z.string(),
  memberIds: z.array(z.string()),
  projectSlugs: z.array(z.string()),
});

export const ProjectCaseStudySchema = z.object({
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  category: z.string(),
  year: z.string(),
  client: z.string(),
  sector: z.string(),
  liveUrl: z.string().optional(),
  heroImage: z.string(),
  overview: z.string(),
  challenge: z.string(),
  solution: z.string(),
  results: z.array(
    z.object({
      metric: z.string(),
      label: z.string(),
    })
  ),
  technologies: z.array(z.string()),
  contributors: z.array(z.string()),
  artifacts: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      imageUrl: z.string(),
    })
  ),
});

export type IndividualProject = z.infer<typeof IndividualProjectSchema>;
export type TeamMember = z.infer<typeof TeamMemberSchema>;
export type Skill = z.infer<typeof SkillSchema>;
export type ProjectCaseStudy = z.infer<typeof ProjectCaseStudySchema>;
