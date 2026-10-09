# Content Guide: Adding Members, Skills & Projects

*Kinetic Atelier Architecture Documentation*

This project is engineered with a **strictly decoupled, content-driven architecture**. Adding a team member, a skill competency, or a flagship project case study requires editing only typed JSON files in `src/content/`. Zero component or layout code modifications are needed.

---

## 1. How to Add a New Team Member

Open `src/content/team.json` and append a new member object conforming to this schema:

```json
{
  "id": "alex-chen",
  "name": "Alex Chen",
  "role": "Staff Spatial Technologist",
  "title": "Procedural Geometry & WebGPU Specialist",
  "location": "Tokyo, Japan",
  "bio": "Deep background in low-level WebGPU compute pipelines and procedural voxel generation.",
  "philosophy": "Compute shaders allow us to render mathematical infinity within the browser window.",
  "avatarUrl": "https://images.unsplash.com/photo-...",
  "disciplines": [
    "WebGPU Compute",
    "Procedural Geometry",
    "Spatial Mathematics"
  ],
  "skills": ["threejs", "webgl", "wasm"],
  "flagshipProjects": ["voxel-protocol"],
  "individualProjects": [
    {
      "id": "webgpu-particles-10m",
      "title": "10 Million WebGPU Particles",
      "description": "Real-time gravity simulator running directly on client GPU compute buffers.",
      "year": "2024",
      "role": "Creator",
      "liveUrl": "https://example.com",
      "repoUrl": "https://github.com",
      "tags": ["WebGPU", "Compute Shaders"],
      "previewImage": "https://images.unsplash.com/photo-..."
    }
  ],
  "links": {
    "github": "https://github.com/alexchen",
    "email": "alex@kineticatelier.dev"
  }
}
```

### Automatic Effects:
1. The new member will immediately appear on the Home Page (`/`) collective roster.
2. The `/team` directory will automatically render their card dossier.
3. A static profile route `/team/alex-chen` will be automatically pre-rendered at build time.
4. Their individual projects will populate the `/projects` index.

---

## 2. How to Add a New Flagship Case Study

Open `src/content/projects.json` and append a new project object:

```json
{
  "slug": "chronos-temporal-canvas",
  "title": "Chronos Temporal Canvas",
  "subtitle": "Generative history scrubber and time-travel interface for spatial documents",
  "category": "WebGL / Systems Architecture",
  "year": "2024",
  "client": "Chronos Labs",
  "sector": "Developer Tooling",
  "liveUrl": "https://chronos.example.com",
  "heroImage": "https://images.unsplash.com/photo-...",
  "overview": "A browser-based time machine visualizing Git history as 3D crystalline tree branches.",
  "challenge": "Rendering 50,000 commits with smooth 60fps bezier curve transitions.",
  "solution": "Implemented GPGPU particle instancing and spatial QuadTree bounding box indexing.",
  "results": [
    {
      "metric": "60fps",
      "label": "Framerate across 50k nodes"
    },
    {
      "metric": "14ms",
      "label": "Initial canvas render time"
    }
  ],
  "technologies": ["webgl", "threejs", "typescript"],
  "contributors": ["elena-vance", "marcus-thorne"],
  "artifacts": [
    {
      "title": "Crystalline Branch Architecture",
      "description": "Parametric spline curves rendering commit parentage.",
      "imageUrl": "https://images.unsplash.com/photo-..."
    }
  ]
}
```

### Automatic Effects:
1. Pinned sticky stack on Home Page (`/`) updates with the case study.
2. Dedicated case study page `/projects/chronos-temporal-canvas` is automatically pre-rendered with full dossier, challenges, and metrics.
3. Contributing team members (`elena-vance`, `marcus-thorne`) automatically show this project under their profile's contributed works.

---

## 3. How to Add a New Skill

Open `src/content/skills.json` and append:

```json
{
  "id": "webgpu",
  "name": "WebGPU Compute Shaders",
  "category": "creative-dev",
  "mastery": "specialist",
  "description": "WGSL compute pipelines, storage buffers, and high-throughput GPU calculations.",
  "memberIds": ["elena-vance"],
  "projectSlugs": ["voxel-protocol"]
}
```

### Automatic Effects:
1. The skill matrix bento grid on the Home Page (`/`) links to this skill.
2. The `/skills` capabilities index lists the skill under its category cluster.
3. Cross-links between the skill, specializing team members, and production project deployments update automatically.
