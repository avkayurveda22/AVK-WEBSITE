"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clinic, navPrimary, navAll } from "@/lib/data";
import { Logo } from "./ui";
import Icon from "./Icon";
import { WhatsAppCTA } from "./WhatsAppCTA";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 8);
    s(); window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);

  useEffect(() => { document.body.classList.toggle("no-scroll", drawer); }, [drawer]);
  useEffect(() => { setDrawer(false); }, [pathname]);

  return (
    <>
      <nav className={"nav" + (scrolled ? " scrolled" : "")}>
        <div className="nav-inner">
          <Link href="/" style={{ textDecoration: "none" }}><Logo/></Link>
          <div className="nav-links">
            {navPrimary.map(([href, label]) => (
              <Link key={href} href={href} className={pathname === href ? "active" : ""}>{label}</Link>
            ))}
          </div>
          <div className="nav-cta">
            <a href={clinic.phoneHref} className="nav-phone">{clinic.phone}</a>
            <WhatsAppCTA size="sm" label="Book on WhatsApp"/>
            <button className="nav-toggle" onClick={() => setDrawer(true)}>
              <Icon name="menu" size={16}/> Menu
            </button>
          </div>
        </div>
      </nav>
      <div className={"drawer-overlay" + (drawer ? " open" : "")} onClick={() => setDrawer(false)}/>
      <aside className={"drawer" + (drawer ? " open" : "")}>
        <div className="drawer-head">
          <Link href="/" onClick={() => setDrawer(false)} style={{ textDecoration: "none" }}><Logo/></Link>
          <button className="modal-close" onClick={() => setDrawer(false)}><Icon name="close" size={16}/></button>
        </div>
        {navAll.map(([href, label]) => (
          <Link key={href} href={href} onClick={() => setDrawer(false)}>{label}</Link>
        ))}
        <div style={{ marginTop: 28 }} onClick={() => setDrawer(false)}>
          <WhatsAppCTA label="Book on WhatsApp"/>
        </div>
        <a href={clinic.phoneHref} style={{ marginTop: 14, fontFamily: "var(--mono)", fontSize: 13 }}>{clinic.phone}</a>
      </aside>
    </>
  );
}
