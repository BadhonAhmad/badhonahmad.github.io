"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  type: "spark" | "star" | "dot" | "ring";
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
  pulsePhase: number;
}

export default function MouseTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const idCounter = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });
  const isMovingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const colors = [
      "#38bdf8", // sky blue
      "#a78bfa", // purple
      "#f472b6", // pink
      "#34d399", // emerald
      "#fbbf24", // amber
      "#f87171", // red
      "#22d3ee", // cyan
    ];

    const types: Particle["type"][] = ["spark", "star", "dot", "ring"];

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      lastPos.current = { x: e.clientX, y: e.clientY };
      isMovingRef.current = true;

      // Create particles based on movement speed
      const particleCount = Math.min(Math.floor(speed / 8) + 2, 6);
      const newParticles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 1 + Math.random() * 2;
        const maxLife = 40 + Math.random() * 40;
        const type = types[Math.floor(Math.random() * types.length)];

        newParticles.push({
          id: idCounter.current++,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: Math.cos(angle) * velocity - dx * 0.05,
          vy: Math.sin(angle) * velocity - dy * 0.05,
          life: maxLife,
          maxLife,
          type,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: type === "star" ? 8 + Math.random() * 8 : 4 + Math.random() * 6,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }

      setParticles((prev) => [...prev.slice(-80), ...newParticles]);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isMovingRef.current = false;
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => {
            const fadeRate = isMovingRef.current ? 1 : 2.5;
            const drag = 0.96;
            const gravity = 0.02;

            return {
              ...p,
              x: p.x + p.vx,
              y: p.y + p.vy + gravity,
              vx: p.vx * drag,
              vy: p.vy * drag,
              life: p.life - fadeRate,
              rotation: p.rotation + p.rotationSpeed,
              pulsePhase: p.pulsePhase + 0.15,
            };
          })
          .filter((p) => p.life > 0),
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const renderParticle = (p: Particle) => {
    const lifeRatio = p.life / p.maxLife;
    const opacity = lifeRatio * 0.9;
    const pulse = 0.8 + Math.sin(p.pulsePhase) * 0.2;
    const scale = lifeRatio * pulse;

    const baseStyle = {
      position: "absolute" as const,
      left: p.x,
      top: p.y,
      transform: `translate(-50%, -50%) rotate(${p.rotation}deg) scale(${scale})`,
      opacity,
      pointerEvents: "none" as const,
    };

    switch (p.type) {
      case "spark":
        return (
          <div key={p.id} style={baseStyle}>
            <div
              style={{
                width: p.size * 3,
                height: 2,
                background: p.color,
                boxShadow: `0 0 ${p.size}px ${p.color}, 0 0 ${p.size * 2}px ${p.color}`,
                borderRadius: 2,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 2,
                height: p.size * 3,
                background: p.color,
                boxShadow: `0 0 ${p.size}px ${p.color}`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: 2,
              }}
            />
          </div>
        );

      case "star":
        return (
          <svg
            key={p.id}
            style={{ ...baseStyle, width: p.size, height: p.size }}
            viewBox="0 0 24 24"
            fill={p.color}
          >
            <path
              d="M12 2L14.5 9H22L16 13.5L18 21L12 17L6 21L8 13.5L2 9H9.5L12 2Z"
              style={{
                filter: `drop-shadow(0 0 ${p.size / 2}px ${p.color})`,
              }}
            />
          </svg>
        );

      case "dot":
        return (
          <div
            key={p.id}
            style={{
              ...baseStyle,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: p.color,
              boxShadow: `0 0 ${p.size}px ${p.color}, 0 0 ${p.size * 2}px ${p.color}50`,
            }}
          />
        );

      case "ring":
        return (
          <div
            key={p.id}
            style={{
              ...baseStyle,
              width: p.size * 2,
              height: p.size * 2,
              borderRadius: "50%",
              border: `2px solid ${p.color}`,
              boxShadow: `0 0 ${p.size}px ${p.color}, inset 0 0 ${p.size}px ${p.color}40`,
            }}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(renderParticle)}
    </div>
  );
}
