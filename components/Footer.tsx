import Link from "next/link";
import { clinic, navAll } from "@/lib/data";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { ShareExperienceButton } from "./ReviewModal";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>AVK Ayurvedic Clinic</h3>
            <p>Specialised Ayurvedic care in Akshayanagar, Bangalore — rooted in classical practice, tuned for modern lives.</p>
            <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <WhatsAppCTA size="sm"/>
              <ShareExperienceButton size="sm" variant="ghost" className="on-dark" label="Share your experience"/>
            </div>
          </div>
          <div>
            <h5>Visit</h5>
            <ul><li>{clinic.address1}</li><li>{clinic.address2}</li><li>{clinic.address3}</li></ul>
          </div>
          <div>
            <h5>Reach us</h5>
            <ul>
              <li><a href={clinic.phoneHref}>{clinic.phone}</a></li>
              <li><a href={"mailto:" + clinic.email}>{clinic.email}</a></li>
              {clinic.hours.map((h, i) => <li key={i} style={{ color: "rgba(246,243,236,.6)" }}>{h.d} · {h.t}</li>)}
            </ul>
          </div>
          <div>
            <h5>Explore</h5>
            <ul>
              {navAll.filter(([h]) => h !== "/").map(([href, label]) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} AVK Ayurvedic Clinic & Pharmacy</div>
          <div>Bangalore · India</div>
        </div>
      </div>
    </footer>
  );
}
