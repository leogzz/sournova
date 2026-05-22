"use client";

import { useId } from "react";

interface SodaCanProps {
  flavor?:      string;
  planetColor?: string;
  className?:   string;
  style?:       React.CSSProperties;
}

export default function SodaCan({
  flavor      = "SOURNOVA",
  planetColor = "#FF2EA8",
  className   = "",
  style,
}: SodaCanProps) {
  const id = useId().replace(/:/g, "-");

  return (
    <svg
      viewBox="0 0 160 240"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: "100%", maxWidth: 160, height: "auto", filter: "drop-shadow(0 30px 30px rgba(0,0,0,0.4))", ...style }}
    >
      <defs>
        <linearGradient id={`body-${id}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0"    stopColor="rgba(0,0,0,0.5)" />
          <stop offset="0.15" stopColor="rgba(0,0,0,0.1)" />
          <stop offset="0.5"  stopColor="rgba(255,255,255,0.35)" />
          <stop offset="0.85" stopColor="rgba(0,0,0,0.1)" />
          <stop offset="1"    stopColor="rgba(0,0,0,0.55)" />
        </linearGradient>
        <radialGradient id={`top-${id}`} cx="0.5" cy="0.4">
          <stop offset="0" stopColor="#c9c9c9" />
          <stop offset="1" stopColor="#5a5a5a" />
        </radialGradient>
        <clipPath id={`clip-${id}`}>
          <rect x="14" y="18" width="132" height="200" rx="10" />
        </clipPath>
      </defs>

      {/* Can top */}
      <ellipse cx="80" cy="22" rx="66" ry="8" fill={`url(#top-${id})`} />
      <ellipse cx="80" cy="20" rx="58" ry="5" fill="#8a8a8a" />
      <ellipse cx="80" cy="19" rx="20" ry="2.5" fill="#3a3a3a" />

      {/* Body */}
      <g clipPath={`url(#clip-${id})`}>
        <rect x="14" y="18" width="132" height="200" rx="10" fill="#0c0220" />

        {/* Planet decoration */}
        <circle cx="80" cy="130" r="38" fill={planetColor} opacity="0.85" />
        <ellipse
          cx="80" cy="130" rx="52" ry="10"
          fill="none" stroke="white" strokeWidth="2" opacity="0.8"
          transform="rotate(-15 80 130)"
        />

        {/* Stars */}
        <circle cx="40"  cy="75"  r="1.5" fill="white" />
        <circle cx="125" cy="95"  r="1"   fill="white" />
        <circle cx="115" cy="165" r="1.5" fill="white" />
        <circle cx="35"  cy="175" r="1"   fill="white" />

        {/* Brand */}
        <text x="80" y="65" textAnchor="middle" fill="white" fontFamily="Bagel Fat One" fontSize="13" letterSpacing="1">
          SOURNOVA
        </text>
        <text x="80" y="195" textAnchor="middle" fill="white" fontFamily="Bagel Fat One" fontSize="10" opacity="0.9">
          {flavor}
        </text>
      </g>

      {/* Highlight */}
      <rect x="14" y="18" width="132" height="200" rx="10" fill={`url(#body-${id})`} opacity="0.7" />

      {/* Bottom shadow */}
      <ellipse cx="80" cy="220" rx="60" ry="6" fill="rgba(0,0,0,0.6)" />
    </svg>
  );
}
