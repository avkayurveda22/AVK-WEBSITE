import { clinic } from "@/lib/data";
import Icon from "./Icon";

export function WhatsAppFab() {
  return (
    <a
      href={clinic.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Chat with AVK on WhatsApp"
    >
      <span className="wa-fab-icon"><Icon name="whatsapp" size={22} stroke={2}/></span>
      <span className="wa-fab-label">Chat with us</span>
    </a>
  );
}
