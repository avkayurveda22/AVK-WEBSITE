"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { clinic, specialities, conditionSlug } from "@/lib/data";
import { Kicker, ImgPH } from "./ui";
import Icon from "./Icon";
import { WhatsAppCTA } from "./WhatsAppCTA";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const staggerItem = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};

export default function SpecialityPage({ slug, label }: { slug: string; label: string }) {
  const s = specialities.find((x) => x.slug === slug);
  if (!s) return null;

  return (
    <div className="page" data-screen-label={label}>
      <section className="page-head"><div className="container">
        <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>Speciality · {s.name}</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>{s.tagline}</motion.h1>
        <motion.p className="lede" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>{s.long}</motion.p>
        <motion.div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
          <WhatsAppCTA label={`Book on WhatsApp`}/>
          <a href={clinic.phoneHref} className="btn btn-ghost">Call {clinic.phone}</a>
        </motion.div>
      </div></section>

      <section className="section"><div className="container"><div className="grid-2" style={{ gap: 56, alignItems: "start" }}>
        <div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
            <Kicker>Conditions we treat</Kicker>
            <h2 style={{ marginBottom: 20 }}>The most common reasons people come in.</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}>
            {s.conds.map((c, i) => (
              <motion.div key={c} variants={staggerItem}>
                <Link href={`/conditions/${conditionSlug(c)}`} className="cond-row" style={{ textDecoration: "none", cursor: "pointer" }}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{c}</h4>
                    <p>Assessment, protocol and follow-up tailored to your presentation.</p>
                  </div>
                  <Icon name="arrow" size={14} stroke={2} style={{ marginLeft: "auto", flexShrink: 0 }}/>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          style={{ aspectRatio: "4/5", borderRadius: "var(--radius-lg)", overflow: "hidden", position: "sticky", top: 100 }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn}
        >
          {s.slug === "spine-joint" ? (
            <img src="/spine-1.jpg" alt={s.name + " therapy"} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
          ) : s.slug === "geriatric" ? (
            <img src="/fam.jpg" alt={s.name + " therapy"} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
          ) : (
            <ImgPH label={s.name + " therapy"} style={{ height: "100%", borderRadius: 0 }}/>
          )}
        </motion.div>
      </div></div></section>

      <section className="section" style={{ background: "var(--paper-2)" }}><div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          <Kicker>How we treat</Kicker>
          <h2 style={{ marginBottom: 12 }}>A five-stage programme.</h2>
          <p style={{ maxWidth: "56ch", color: "var(--ink-3)", marginBottom: 40 }}>Every {s.name} patient moves through the same structured pathway — from first consultation to ongoing wellness support. Duration varies; most conditions need 12 to 30 sessions over several weeks to a few months.</p>
        </motion.div>
        <motion.div className="timeline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}>
          {s.approach.map(([t, d], i) => (
            <motion.div key={t} className="timeline-step" variants={staggerItem}>
              <div className="n">Stage 0{i + 1}</div>
              <h5>{t}</h5>
              <p>{d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div></section>

      <section className="section"><div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          <Kicker>Other specialities</Kicker>
          <h2 style={{ marginBottom: 32 }}>Explore what else we do.</h2>
        </motion.div>
        <motion.div className="grid-3" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} variants={staggerContainer}>
          {specialities.filter((x) => x.slug !== s.slug).map((o) => (
            <motion.div key={o.slug} variants={staggerItem}>
              <Link href={"/" + o.route} className="spec-card" style={{ textDecoration: "none" }}>
                <div className="icon"><Icon name={o.icon} size={24}/></div>
                <h3>{o.name}</h3>
                <p>{o.short}</p>
                <span className="more">Read more <Icon name="arrow" size={13} stroke={2}/></span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div></section>

      <section className="section"><div className="container">
        <motion.div
          style={{ background: "var(--sage-wash)", borderRadius: "var(--radius-lg)", padding: "56px", textAlign: "center" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn}
        >
          <h2>Ready to start {s.name.toLowerCase()} treatment?</h2>
          <p className="lede" style={{ margin: "16px auto 28px" }}>A 45-minute assessment is the first step.</p>
          <WhatsAppCTA size="lg"/>
        </motion.div>
      </div></section>
    </div>
  );
}
