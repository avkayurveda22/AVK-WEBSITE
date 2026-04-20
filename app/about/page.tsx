"use client";
import { motion } from "framer-motion";
import { Button, Kicker, ImgPH } from "@/components/ui";
import { useBooking } from "@/components/BookingContext";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
} as const;

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
} as const;

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
} as const;

export default function AboutPage() {
  const { openBooking } = useBooking();
  return (
    <div className="page" data-screen-label="02 About">
      <section className="page-head"><div className="container">
        <motion.span className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>About AVK</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>A small clinic in Akshayanagar — patient, classical, unhurried.</motion.h1>
      </div></section>

      <section className="section"><div className="container"><div className="grid-2" style={{ gap: 64, alignItems: "start" }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <Kicker>Our story</Kicker>
          <h2>Fifteen years, one pulse at a time.</h2>
          <p className="lede" style={{ margin: "24px 0" }}>AVK opened in 2011 as a two-room clinic above a pharmacy on Akshayanagar Main Road. We&rsquo;ve grown since — a dedicated therapy wing, an in-house pharmacy, a dedicated physician — but the rhythm of the clinic has not changed.</p>
          <p style={{ color: "var(--ink-3)" }}>One unhurried consultation at a time. No over-prescription, no packages pushed at the door. If Ayurveda isn&rsquo;t the right tool for what you&rsquo;ve brought in, we&rsquo;ll say so — and point you somewhere that is.</p>
        </motion.div>
        <motion.div style={{ aspectRatio: "4/5", borderRadius: "var(--radius-lg)", overflow: "hidden" }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn}>
          <ImgPH label="Clinic, 2008" style={{ height: "100%", borderRadius: 0 }}/>
        </motion.div>
      </div></div></section>

      <section className="section" style={{ background: "var(--paper-2)" }}><div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={fadeUp}>
          <Kicker>Values we hold to</Kicker>
          <h2 style={{ maxWidth: "18ch", marginBottom: 48 }}>Four principles that shape how we practise.</h2>
        </motion.div>
        <motion.div className="grid-4" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
          {[
            ["Classical texts first", "Every prescription is rooted in the Charaka Samhita, Sushruta Samhita, and Ashtanga Hridaya. Not trends."],
            ["Time over speed", "A first consultation is 45 minutes. A specialist consultation is longer. Ayurveda does not reward haste."],
            ["Honest prognosis", "If your condition needs an allopathic intervention, we'll tell you. We don't compete with modern medicine."],
            ["In-house dispensing", "Our pharmacy prepares classical formulations on-site — so we know what's in what you take home."],
          ].map(([t, d]) => (
            <motion.div key={t} className="card" variants={staggerItem}>
              <h4 style={{ fontFamily: "var(--serif)", fontSize: 22, marginBottom: 10 }}>{t}</h4>
              <p style={{ color: "var(--ink-3)", margin: 0, fontSize: 14.5 }}>{d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div></section>

      <section className="section"><div className="container">
        <div className="grid-2" style={{ gap: 48, alignItems: "center" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
            <Kicker>Vision</Kicker>
            <h2>Ayurveda, practised well.</h2>
            <p className="lede" style={{ marginTop: 20 }}>Not a wellness brand. Not a spa. A working medical practice that takes the 3,000-year-old science seriously, and uses it to make a measurable difference to the people who walk in.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={staggerContainer}>
            <Kicker>In numbers</Kicker>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 12 }}>
              {[["15", "Years open"], ["9,400+", "Patients"], ["4", "Specialities"], ["4.9/5", "Google rating"], ["320+", "Reviews"], ["3", "Generations of some families"]].map(([n, l]) => (
                <motion.div key={l} variants={staggerItem} style={{ padding: "22px 20px", background: "var(--sage-wash)", borderRadius: "var(--radius)" }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 32, color: "var(--sage-deep)", lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 6 }}>{l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div></section>

      <section className="section"><div className="container">
        <motion.div
          style={{ background: "var(--sage-wash)", borderRadius: "var(--radius-lg)", padding: "56px", textAlign: "center" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={scaleIn}
        >
          <h2>Come meet us.</h2>
          <p className="lede" style={{ margin: "16px auto 28px" }}>The best way to understand a clinic is to sit in one. A first consultation is ₹500.</p>
          <Button variant="sage" size="lg" onClick={() => openBooking()}>Book a first consultation</Button>
        </motion.div>
      </div></section>
    </div>
  );
}
