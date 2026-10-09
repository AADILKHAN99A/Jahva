# ThreeUI & 3D Component Gallery Architecture Study

*Date: 2026-10-10*
*Focus: Procedural WebGL, Three.js / React Three Fiber components, technique breakdown, and performance budgets*

---

## 1. Overview & Architectural Philosophy

Modern award-winning websites (Awwwards, FWA) utilize 3D not as arbitrary decorative clutter, but as an interactive material that responds to tactile input, spatial depth, and storytelling. Galleries such as **ThreeUI (MengTo/threeui)**, **Codrops Playground**, and **21st.dev** demonstrate how procedural WebGL can elevate digital design when governed by strict performance budgets.

Key principle for this project:
> **3D must earn its place.** Never load heavy geometry or multi-pass post-processing above the fold without dynamic lazy-loading and fallback capabilities for lower-powered devices.

---

## 2. Deep Dive: Key 3D/UI Effects, Techniques & Performance Costs

### Effect 1: Procedural Noise Grid & Dynamic Wireframe Matrix
- **Visual Description:** An undulating isometric wireframe grid that ripples softly in response to cursor position and scroll velocity, evoking architectural blueprints or digital topography.
- **Underlying Technique:** Single `PlaneGeometry` with custom GLSL vertex shader evaluating Simplex or Perlin noise. The vertex normal vectors and z-displacement are computed directly on the GPU.
- **Primary Libraries:** Three.js / `@react-three/fiber`, custom GLSL shader chunk.
- **Draw Call & Memory Profile:** 1 draw call, ~4,000 vertices, zero texture memory footprint.
- **Performance Cost:** **Very Low (0.5ms GPU frame time)**. Ideal for background hero ambient layers.
- **Project Adoption:** Highly viable for our Hero background as a subtle ambient substrate.

### Effect 2: Chromatic Dispersion & Physical Glass Refraction
- **Visual Description:** A floating, faceted geometric lens that warps, blurs, and splits colors of the typography and layout elements beneath it.
- **Underlying Technique:** Dual-pass render target (Frame Buffer Object / FBO). The background scene is rendered to an off-screen texture; the glass mesh samples this texture with Fresnel-based chromatic offset (RGB split) and roughness mipmap sampling.
- **Primary Libraries:** `@react-three/drei` (`MeshTransmissionMaterial`) or custom fragment shader.
- **Draw Call & Memory Profile:** 2-3 render passes, 1 offscreen render target (1024x1024 or viewport size).
- **Performance Cost:** **Medium-High (2.5ms - 4.5ms GPU time)**. Can cause frame dips on integrated Intel GPUs or mobile devices.
- **Optimization Strategy:** Downsample render target resolution to 0.5x, disable multi-bounce refraction, and omit on devices with `navigator.hardwareConcurrency < 4` or touch viewports.

### Effect 3: Interactive Particle Constellation / Attractor Field
- **Visual Description:** A field of 10,000 to 25,000 luminous micro-particles that drift organically and scatter when the cursor approaches, before springing back to their resting configuration.
- **Underlying Technique:** `Points` with `BufferGeometry`. Particle positions and velocities are updated via GPU instancing or GPGPU compute shaders (or a lightweight Web Worker passing Float32Arrays). Point size attenuation based on camera depth.
- **Primary Libraries:** Three.js `PointsMaterial` or custom point shader with circular point sprite.
- **Draw Call & Memory Profile:** 1 draw call, single Float32Array position buffer (~120KB RAM).
- **Performance Cost:** **Low-Medium (1.0ms - 1.8ms GPU time)**.
- **Project Adoption:** Ideal for an interactive "Skills Matrix" visualizer or Team Collaboration node map.

### Effect 4: Holographic Specular Card & Fresnel Iridescence
- **Visual Description:** A 3D tilt card that catches light with a pearlescent, chromatic rainbow sheen that shifts as the user moves their mouse.
- **Underlying Technique:** Mesh surface with a custom fragment shader computing the dot product between the surface normal and the camera view vector (Fresnel effect), mapped to a cosine-gradient color palette.
- **Primary Libraries:** Three.js or pure CSS 3D matrix transforms with an SVG shader overlay.
- **Draw Call & Memory Profile:** Negligible; 1 quad, zero external textures.
- **Performance Cost:** **Very Low (<0.3ms GPU time)**. Can be approximated purely in CSS hardware-accelerated transforms for zero Three.js bundle overhead.
- **Project Adoption:** Recommended for Project Case Study cards and Member Profile badges.

### Effect 5: Kinetic Deforming Monolith / Gyroscopic Orb
- **Visual Description:** A dark metallic sculptural form (an organic icosahedron or torus knot) that rotates slowly in 3D space, deforming based on scroll velocity and mouse inertia.
- **Underlying Technique:** Vertex displacement shader on an `IcosahedronGeometry` driven by a time uniform and a mouse-lerped velocity vector. MatCap (Material Capture) texture for instant, photorealistic lighting without dynamic scene lights.
- **Primary Libraries:** Three.js / R3F with MatCap material.
- **Draw Call & Memory Profile:** 1 draw call, 1 MatCap texture (512x512, ~200KB WebP). Zero dynamic shadow computations.
- **Performance Cost:** **Low (0.8ms GPU time)**. Very high visual payoff per computational dollar.
- **Project Adoption:** Excellent as a hero artifact or interactive centerpiece on the Team page.

---

## 3. Performance & Architecture Guardrails for 3D Integration

1. **Lazy Loading via Dynamic Imports:**
   Any Three.js / Canvas component must be loaded asynchronously using `next/dynamic` with `ssr: false`. The initial HTML payload must remain lightweight and render immediately.
2. **IntersectionObserver Pause Loop:**
   When the 3D canvas is outside the viewport, call `renderer.setAnimationLoop(null)` or pause the R3F render loop (`frameloop="demand"`). Zero GPU cycles spent on off-screen canvases.
3. **PixelRatio Cap:**
   Always cap pixel ratio to `Math.min(window.devicePixelRatio, 2)`. Rendering at 3x or 4x on high-density Retina displays creates massive fillrate bottlenecks with no perceptual gain.
4. **Context Loss Handling:**
   Implement `webglcontextlost` and `webglcontextrestored` event listeners to prevent fatal browser tab crashes.
5. **Reduced Motion & Low-Power Fallback:**
   If `prefers-reduced-motion: reduce` is active or WebGL is unsupported, replace the 3D canvas with an optimized static SVG or WebP render of the model.
