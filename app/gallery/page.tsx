"use client";
import { useState } from "react";
import { gallery } from "@/lib/data";
import { ImgPH } from "@/components/ui";
import Icon from "@/components/Icon";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<typeof gallery[number] | null>(null);
  const filtered = filter === "all" ? gallery : gallery.filter((x) => x.cat === filter);

  return (
    <div className="page" data-screen-label="08 Gallery">
      <section className="page-head"><div className="container">
        <span className="eyebrow">Gallery</span>
        <h1>Inside the clinic.</h1>
        <p className="lede">Real photographs from the clinic, the therapy rooms, and the dispensary — because reading about a place is no substitute for seeing it.</p>
      </div></section>
      <section className="section"><div className="container">
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
          {[["all", "All"], ["clinic", "Clinic"], ["therapy", "Therapy rooms"], ["pharmacy", "Pharmacy"]].map(([k, l]) => (
            <button key={k} className={"chip" + (filter === k ? " active" : "")} onClick={() => setFilter(k)}>{l}</button>
          ))}
        </div>
        <div className="gallery">
          {filtered.map((g, i) => (
            <div key={i} className={"gallery-item " + (i % 7 === 0 ? "tall" : i % 5 === 0 ? "wide" : "")} onClick={() => setLightbox(g)}>
              <ImgPH label={g.cap} style={{ height: "100%", borderRadius: 0 }}/>
              <div className="cap">{g.cap}</div>
            </div>
          ))}
        </div>
      </div></section>
      {lightbox && (
        <div className="modal-backdrop open" onClick={() => setLightbox(null)}>
          <div style={{ maxWidth: 960, width: "100%" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ aspectRatio: "16/10", background: "var(--paper-3)", borderRadius: "var(--radius-lg)", overflow: "hidden", position: "relative" }}>
              <ImgPH label={lightbox.cap} style={{ height: "100%", borderRadius: 0 }}/>
              <button className="modal-close" style={{ position: "absolute", top: 16, right: 16, background: "var(--paper)" }} onClick={() => setLightbox(null)}><Icon name="close" size={16}/></button>
            </div>
            <div style={{ color: "var(--paper)", marginTop: 16, fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center" }}>{lightbox.cap}</div>
          </div>
        </div>
      )}
    </div>
  );
}
