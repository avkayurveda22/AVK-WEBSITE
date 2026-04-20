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

export function ImgPH({ label, style }: { label: string; style?: React.CSSProperties }) {
  return <div className="img-placeholder" style={style}>[{label}]</div>;
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
