import React from "react";
import Icon from "./Icon";

export function Button({
  children, onClick, variant = "dark", size, className = "", type = "button", noIcon, style,
}: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  variant?: "dark" | "ghost" | "sage";
  size?: "sm" | "lg";
  className?: string;
  type?: "button" | "submit";
  noIcon?: boolean;
  style?: React.CSSProperties;
}) {
  const cls = ["btn", variant === "ghost" && "btn-ghost", variant === "sage" && "btn-sage", size === "sm" && "btn-sm", size === "lg" && "btn-lg", className].filter(Boolean).join(" ");
  return (
    <button className={cls} onClick={onClick} type={type} style={style}>
      <span>{children}</span>
      {!noIcon && <Icon name="arrow" size={14} stroke={2}/>}
    </button>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return <div className="kicker"><span className="dot"/><span>{children}</span></div>;
}

const PH_IMAGES: Record<string, string> = {
  "clinic, 2008": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=750&fit=crop",
  "spine & joint therapy": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=750&fit=crop",
  "skin ailments therapy": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=750&fit=crop",
  "women & men wellness therapy": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=750&fit=crop",
  "geriatric care & family medicine therapy": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=750&fit=crop",
  "reception & waiting area": "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop",
  "consultation room": "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
  "therapy room — oil treatment": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
  "shirodhara in progress": "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop",
  "in-house dispensary": "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&h=400&fit=crop",
  "classical formulations": "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=600&h=400&fit=crop",
  "physician's consultation": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  "steam therapy room": "https://images.unsplash.com/photo-1540555700478-4be289fbec6a?w=600&h=400&fit=crop",
  "the medicinal garden": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
  "herbal oil preparation": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=400&fit=crop",
  "dispensing counter": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
  "clinic exterior": "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
};

function getPlaceholderUrl(label: string): string {
  const key = label.toLowerCase();
  if (PH_IMAGES[key]) return PH_IMAGES[key];
  const seed = Math.abs(key.split("").reduce((a, c) => a + c.charCodeAt(0), 0));
  return `https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=750&fit=crop&q=80&seed=${seed}`;
}

export function ImgPH({ label, style }: { label: string; style?: React.CSSProperties }) {
  return (
    <img
      src={getPlaceholderUrl(label)}
      alt={label}
      loading="lazy"
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", ...style }}
    />
  );
}

export function Stars({ n = 5 }: { n?: number }) {
  return <div className="stars">{"★".repeat(n)}{"☆".repeat(5 - n)}</div>;
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <div className="logo" onClick={onClick}>
      <div className="logo-mark">अ</div>
      <div className="logo-text">AVK<small>Ayurvedic Clinic</small></div>
    </div>
  );
}
