"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export interface AmbientCanvasProps {
  className?: string;
}

/**
 * AmbientCanvas renders a lightweight procedural WebGL wireframe plane
 * that reacts organically to pointer coordinates and pauses when offscreen.
 */
export function AmbientCanvas({ className }: AmbientCanvasProps = {}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || !mountRef.current) return;

    const container = mountRef.current;
    let animationFrameId: number;
    let isVisible = true;

    const width = container.clientWidth || window.innerWidth || 1440;
    const height = container.clientHeight || window.innerHeight || 900;

    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      100
    );
    camera.position.set(0, -1.2, 3.4);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Procedural wavy grid geometry expanded to cover full viewport
    const gridWidth = 9;
    const gridHeight = 6;
    const segmentsX = 52;
    const segmentsY = 40;
    const geometry = new THREE.PlaneGeometry(gridWidth, gridHeight, segmentsX, segmentsY);

    const material = new THREE.MeshBasicMaterial({
      color: 0x226192, // Deep Editorial Blue accent
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 4;
    scene.add(mesh);

    // Initial position copy for procedural wave math
    const posAttribute = geometry.attributes.position;
    const originalPositions = posAttribute.array.slice();

    // Mouse tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.4;
      targetMouseY = y * 0.4;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // IntersectionObserver to pause rendering when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let clock = 0;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      clock += 0.015;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      mesh.rotation.z = mouseX * 0.2;
      mesh.rotation.y = mouseY * 0.15;

      const positions = posAttribute.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const u = originalPositions[i];
        const v = originalPositions[i + 1];
        // Complex procedural wave calculation
        positions[i + 2] =
          Math.sin(u * 1.8 + clock) * 0.22 +
          Math.cos(v * 2.2 + clock * 0.8) * 0.18 +
          Math.sin(u * 3.0 + v * 3.0 + clock * 1.2) * 0.08;
      }
      posAttribute.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [prefersReduced]);

  if (prefersReduced) {
    return (
      <div className={className ?? "relative h-full w-full rounded-3xl bg-surface-shell/50 ring-1 ring-border-subtle flex items-center justify-center p-8"}>
        <div className="h-48 w-48 rounded-full bg-accent/15 border border-accent/30 filter blur-xl" />
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={className ?? "relative h-full min-h-[360px] lg:min-h-[480px] w-full rounded-3xl overflow-hidden bg-surface-shell/50 ring-1 ring-border-subtle"}
      aria-label="Interactive procedural WebGL wireframe canvas"
    />
  );
}
