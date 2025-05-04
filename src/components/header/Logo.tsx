import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      {/* Huly logo recreation - white square with 4 internal squares */}
      <rect x="2" y="2" width="20" height="20" rx="2" fill="#ffffff" />
      <rect x="5" y="5" width="6" height="6" rx="1" fill="#111215" />
      <rect x="13" y="5" width="6" height="6" rx="1" fill="#111215" />
      <rect x="5" y="13" width="6" height="6" rx="1" fill="#111215" />
      <rect x="13" y="13" width="6" height="6" rx="1" fill="#111215" />
    </svg>
  );
}
