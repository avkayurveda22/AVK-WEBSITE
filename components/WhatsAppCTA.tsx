import { clinic } from "@/lib/data";
import Icon from "./Icon";

export function WhatsAppCTA({
  label = "Book on WhatsApp",
  size,
  variant = "sage",
  className = "",
}: {
  label?: string;
  size?: "sm" | "lg";
  variant?: "dark" | "ghost" | "sage";
  className?: string;
}) {
  const cls = [
    "btn",
    variant === "ghost" && "btn-ghost",
    variant === "sage" && "btn-sage",
    size === "sm" && "btn-sm",
    size === "lg" && "btn-lg",
    className,
  ].filter(Boolean).join(" ");
  return (
    <a className={cls} href={clinic.whatsappHref} target="_blank" rel="noopener noreferrer">
      <span>{label}</span>
      <Icon name="whatsapp" size={14} stroke={2}/>
    </a>
  );
}
