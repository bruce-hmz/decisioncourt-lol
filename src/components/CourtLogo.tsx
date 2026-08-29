import React from "react";

export function CourtLogo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Decision Court Logo"
    >
      <defs>
        <linearGradient id="courtShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#243431" />
          <stop offset="100%" stop-color="#121B1A" />
        </linearGradient>
        <linearGradient id="courtGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E8B878" />
          <stop offset="50%" stop-color="#D7A15C" />
          <stop offset="100%" stop-color="#B87D38" />
        </linearGradient>
        <linearGradient id="courtLensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8DB8C0" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#1F5664" stop-opacity="0.05" />
        </linearGradient>
      </defs>

      {/* Outer Shield Badge */}
      <path
        d="M20 3 C29 3 35 6 36 12 C36 24 28 33 20 37 C12 33 4 24 4 12 C5 6 11 3 20 3 Z"
        fill="url(#courtShieldGrad)"
        stroke="url(#courtGoldGrad)"
        strokeWidth="1.8"
      />

      {/* Inner Scale Balance Beam */}
      <line x1="12" y1="15" x2="28" y2="15" stroke="url(#courtGoldGrad)" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="20" y1="11" x2="20" y2="27" stroke="url(#courtGoldGrad)" strokeWidth="1.6" strokeLinecap="round" />
      
      {/* Center Pivot */}
      <circle cx="20" cy="11" r="1.8" fill="#E8B878" />

      {/* Left Pan (Blue Truth) */}
      <path d="M12 15 L10 20 L14 20 Z" fill="none" stroke="#8DB8C0" strokeWidth="1.2" strokeLinejoin="round" />
      <line x1="9" y1="20" x2="15" y2="20" stroke="#8DB8C0" strokeWidth="1.5" strokeLinecap="round" />

      {/* Right Pan (Red Spin) */}
      <path d="M28 15 L26 21 L30 21 Z" fill="none" stroke="#D76A5C" strokeWidth="1.2" strokeLinejoin="round" />
      <line x1="25" y1="21" x2="31" y2="21" stroke="#D76A5C" strokeWidth="1.5" strokeLinecap="round" />

      {/* Base Stand */}
      <line x1="15" y1="27" x2="25" y2="27" stroke="url(#courtGoldGrad)" strokeWidth="1.6" strokeLinecap="round" />

      {/* X-Ray Decoder Aperture & Reticle */}
      <circle cx="20" cy="20" r="13.5" stroke="url(#courtGoldGrad)" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />
      <circle cx="20" cy="20" r="13.5" fill="url(#courtLensGrad)" />
    </svg>
  );
}
