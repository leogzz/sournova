"use client";

import SodaCan from "./SodaCan";

export default function HeroVisual() {
  const sparkles: [number, number, number][] = [
    [15,20,3],[85,15,4],[78,80,3],[18,85,5],[50,8,3],[8,50,4],[90,55,3],[60,92,4],
  ];

  return (
    <div style={{ position: "relative", aspectRatio: "1/1", width: "100%", maxWidth: 560, marginLeft: "auto" }}>
      {/* Outer ring */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        width: "130%", height: "28%", borderRadius: "50%",
        border: "3px solid transparent",
        background: "linear-gradient(var(--bg), var(--bg)) padding-box, var(--grad-nova) border-box",
        transform: "translate(-50%,-50%) rotate(-18deg)",
        boxShadow: "0 0 40px rgba(255,46,168,0.5)",
        pointerEvents: "none",
      }} />

      {/* Inner ring */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        width: "150%", height: "32%", borderRadius: "50%",
        border: "1.5px solid rgba(255,107,208,0.3)",
        transform: "translate(-50%,-50%) rotate(22deg)",
        opacity: 0.5, pointerEvents: "none",
      }} />

      {/* Planet */}
      <div style={{
        position: "absolute", inset: "8%",
        borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, #FF6BD0 0%, #FF2EA8 25%, #7B2CFF 60%, #2A0560 100%)",
        boxShadow: `
          inset -30px -40px 80px rgba(0,0,0,0.6),
          inset 20px 20px 40px rgba(255,200,230,0.25),
          0 0 100px rgba(255,46,168,0.5),
          0 0 200px rgba(123,44,255,0.4)
        `,
        animation: "planet-spin 30s linear infinite",
        overflow: "hidden",
      }}>
        {/* Planet surface overlay */}
        <div style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          background: `
            radial-gradient(circle at 20% 60%, rgba(255,255,255,0.15) 0%, transparent 20%),
            radial-gradient(circle at 70% 40%, rgba(0,0,0,0.3) 0%, transparent 25%),
            radial-gradient(circle at 60% 75%, rgba(255,107,208,0.4) 0%, transparent 30%)
          `,
        }} />
      </div>

      {/* Orbiting can */}
      <div style={{
        position: "absolute", left: "50%", top: "50%",
        width: 130, height: 200,
        transformOrigin: "0 0",
        animation: "orbit 18s linear infinite",
      }}>
        <SodaCan flavor="PUNCH CITRICO" planetColor="#FF6BD0" />
      </div>

      {/* Sparkles */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      >
        {sparkles.map(([x, y, r], i) => (
          <g
            key={i}
            transform={`translate(${x} ${y})`}
            style={{ animation: `pulse-dot 2s ease-in-out ${i * 0.2}s infinite` }}
          >
            <path
              d={`M0,-${r} L${r*0.3},-${r*0.3} L${r},0 L${r*0.3},${r*0.3} L0,${r} L-${r*0.3},${r*0.3} L-${r},0 L-${r*0.3},-${r*0.3} Z`}
              fill={i % 2 ? "#FF6BD0" : "white"}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
