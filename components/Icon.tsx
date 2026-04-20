import React from "react";

const PATHS: Record<string, React.ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6"/>,
  "arrow-up-right": <path d="M7 17L17 7M9 7h8v8"/>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A15 15 0 014 5a1 1 0 011-1z"/>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M3 7l9 7 9-7"/></>,
  pin: <><path d="M12 22s-7-7.5-7-13a7 7 0 1114 0c0 5.5-7 13-7 13z"/><circle cx="12" cy="9" r="2.5"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  spine: <><path d="M12 3c-2 2-2 3 0 5s2 3 0 5 2 3 0 5 2 3 0 5"/><path d="M8 4h8M7 9h10M7 14h10M8 19h8"/></>,
  skin: <><circle cx="12" cy="12" r="9"/><path d="M9 10c1-1 2-1 3 0M15 10c-1-1-2-1-3 0"/><path d="M9 15c1 1 3 1 6 0"/></>,
  wellness: <><path d="M12 21C6 17 3 13 3 9a4 4 0 017-2.5A4 4 0 0121 9c0 4-3 8-9 12z"/></>,
  family: <><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="2.5"/><path d="M3 20c0-3 2-5 5-5s5 2 5 5"/><path d="M13 20c0-2 1.5-4 3.5-4s3.5 2 3.5 4"/></>,
  check: <path d="M5 12l5 5L20 6"/>,
  close: <path d="M5 5l14 14M19 5L5 19"/>,
  menu: <path d="M3 6h18M3 12h18M3 18h18"/>,
  chevron: <path d="M9 6l6 6-6 6"/>,
};

export default function Icon({ name, size = 20, stroke = 1.6 }: { name: string; size?: number; stroke?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {PATHS[name]}
    </svg>
  );
}
