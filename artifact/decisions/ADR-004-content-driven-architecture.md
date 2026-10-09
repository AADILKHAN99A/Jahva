# ADR-004: Content Architecture & Cross-Referenced Schema

- **Date:** 2026-10-10
- **Status:** Accepted
- **Context:**
  The site must showcase four tightly interrelated entities:
  1. Team members (profiles, roles, bios, social links)
  2. Skills (competency levels, categories, associated members, utilized projects)
  3. Team flagship projects (rich case-study pages, engineering architecture, client deliverables)
  4. Individual projects (personal experiments, GitHub repos, linked to member profiles)
  Adding or modifying any member or project must never require changing UI components or layout code.
- **Decision:**
  1. **Schema Location:**
     - `src/content/team.json`: Array of member objects with unique IDs, roles, bios, primary skills IDs, individual project references, and links.
     - `src/content/skills.json`: Categorized registry of competencies with technical taxonomy and level tags.
     - `src/content/projects/`: Individual markdown / MDX or typed JSON case studies containing project metadata, client, year, live link, member contributors, skills used, and case study body content.
  2. **TypeScript Validation Layer:**
     - Strict schemas defined in `src/types/content.ts` (using TypeScript interfaces and Zod schemas).
     - Helper queries in `src/lib/content.ts` providing methods like `getTeamMemberById(id)`, `getProjectsByMember(memberId)`, `getMembersBySkill(skillId)`.
- **Consequences:**
  - Content and presentation are 100% decoupled.
  - Adding a team member or project is as simple as adding a file or record to `src/content/`.
  - Type errors catch broken references (e.g. an unknown skill or missing member ID) at build time.
