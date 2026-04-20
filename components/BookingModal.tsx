"use client";
import { useEffect, useMemo, useState } from "react";
import { specialities } from "@/lib/data";
import { Button } from "./ui";
import Icon from "./Icon";
import { useBooking } from "./BookingContext";

type DateOpt = { date: string; month: string; year: number; day: string };

export default function BookingModal() {
  const { open, spec: initialSpec, closeBooking } = useBooking();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<{
    spec: string | null; date: DateOpt | null; slot: string | null;
    name: string; phone: string; email: string; notes: string;
  }>({ spec: null, date: null, slot: null, name: "", phone: "", email: "", notes: "" });

  useEffect(() => {
    if (open) { setStep(0); setData((d) => ({ ...d, spec: initialSpec || null })); }
  }, [open, initialSpec]);
  useEffect(() => { document.body.classList.toggle("no-scroll", open); }, [open]);

  const dates = useMemo<DateOpt[]>(() => {
    const out: DateOpt[] = [];
    const dN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date(); d.setDate(d.getDate() + 1);
    while (out.length < 12) {
      if (d.getDay() !== 0) out.push({ date: String(d.getDate()).padStart(2, "0"), month: mN[d.getMonth()], year: d.getFullYear(), day: dN[d.getDay()] });
      d.setDate(d.getDate() + 1);
    }
    return out;
  }, []);

  const slots = ["9:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00", "18:00"];
  const taken = ["10:00", "16:00"];
  const options = [
    { slug: "consultation", name: "General Consultation", sub: "45 min · First visit" },
    ...specialities.map((s) => ({ slug: s.slug, name: s.name, sub: s.tagline.split(" — ")[0] || s.tagline })),
  ];

  const canAdvance = () => {
    if (step === 0) return !!data.spec;
    if (step === 1) return !!data.date;
    if (step === 2) return !!data.slot;
    if (step === 3) return data.name.trim() && data.phone.trim().length >= 10;
    return true;
  };
  const stepLabels = ["Concern", "Date", "Time", "Details", "Confirm"];
  const selSpec = options.find((s) => s.slug === data.spec);
  const selDate = data.date;

  return (
    <div className={"modal-backdrop" + (open ? " open" : "")} onClick={(e) => e.target === e.currentTarget && closeBooking()}>
      <div className="modal">
        <div className="modal-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 4 }}>AVK Clinic</div>
            <h3 style={{ fontSize: 22, margin: 0 }}>Book an appointment</h3>
          </div>
          <button className="modal-close" onClick={closeBooking}><Icon name="close" size={16}/></button>
        </div>
        <div className="modal-steps">
          {stepLabels.map((l, i) => (
            <div key={l} className={"modal-step" + (i === step ? " active" : "") + (i < step ? " done" : "")}>
              0{i + 1} · {l}
            </div>
          ))}
        </div>
        <div className="modal-body">
          {step === 0 && <>
            <h3>What brings you to AVK?</h3>
            <p className="sub">We'll route you to the right specialist.</p>
            <div className="opt-grid">
              {options.map((s) => (
                <button key={s.slug} className={"opt-tile" + (data.spec === s.slug ? " selected" : "")} onClick={() => setData((d) => ({ ...d, spec: s.slug }))}>
                  <span className="ttl">{s.name}</span>
                  <span className="sub">{s.sub}</span>
                </button>
              ))}
            </div>
          </>}
          {step === 1 && <>
            <h3>Pick a date</h3>
            <p className="sub">Sundays are by appointment only — please call us for Sunday visits.</p>
            <div className="date-grid">
              {dates.map((dd, i) => (
                <button key={i} className={"date-tile" + (data.date && data.date.date === dd.date && data.date.month === dd.month ? " selected" : "")} onClick={() => setData((d) => ({ ...d, date: dd, slot: null }))}>
                  <span className="d">{dd.date}</span>
                  <span className="m">{dd.month} · {dd.day}</span>
                </button>
              ))}
            </div>
          </>}
          {step === 2 && <>
            <h3>Pick a time</h3>
            <p className="sub">{selDate && <>For {selDate.day}, {selDate.date} {selDate.month} {selDate.year}</>}</p>
            <div className="slot-grid">
              {slots.map((s) => (
                <button key={s} className={"slot" + (data.slot === s ? " selected" : "") + (taken.includes(s) ? " taken" : "")} disabled={taken.includes(s)} onClick={() => setData((d) => ({ ...d, slot: s }))}>{s}</button>
              ))}
            </div>
          </>}
          {step === 3 && <>
            <h3>Your details</h3>
            <p className="sub">We'll send a confirmation SMS to the number you provide.</p>
            <div className="field"><label>Full name</label><input value={data.name} onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))} placeholder="e.g. Priya Sharma"/></div>
            <div className="field"><label>Phone</label><input value={data.phone} onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))} placeholder="10-digit mobile"/></div>
            <div className="field"><label>Email (optional)</label><input value={data.email} onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))} placeholder="your@email.com"/></div>
            <div className="field"><label>Anything we should know?</label><textarea value={data.notes} onChange={(e) => setData((d) => ({ ...d, notes: e.target.value }))} placeholder="Symptoms, prior treatment, allergies…"/></div>
          </>}
          {step === 4 && (
            <div className="booking-success">
              <div className="tick"><Icon name="check" size={28} stroke={2.5}/></div>
              <h3>You're booked</h3>
              <p className="sub" style={{ margin: "0 auto", maxWidth: "36ch" }}>A confirmation SMS is on its way to <b>{data.phone}</b>. Please arrive 10 minutes early for your first visit.</p>
              <div className="summary">
                <div><b>{selSpec?.name}</b></div>
                <div>{selDate?.day}, {selDate?.date} {selDate?.month} {selDate?.year}</div>
                <div>{data.slot} {data.slot && parseInt(data.slot) < 12 ? "AM" : "PM"}</div>
                <div>{data.name} · {data.phone}</div>
              </div>
            </div>
          )}
        </div>
        <div className="modal-foot">
          {step > 0 && step < 4 ? <button className="btn btn-ghost btn-sm" onClick={() => setStep(step - 1)}><span>Back</span></button> : <div/>}
          {step < 3 && <Button variant="sage" size="sm" onClick={() => canAdvance() && setStep(step + 1)} style={{ opacity: canAdvance() ? 1 : 0.5, pointerEvents: canAdvance() ? "auto" : "none" }}>Continue</Button>}
          {step === 3 && <Button variant="sage" size="sm" onClick={() => canAdvance() && setStep(4)} style={{ opacity: canAdvance() ? 1 : 0.5, pointerEvents: canAdvance() ? "auto" : "none" }}>Confirm booking</Button>}
          {step === 4 && <Button variant="sage" size="sm" onClick={closeBooking} noIcon>Done</Button>}
        </div>
      </div>
    </div>
  );
}
