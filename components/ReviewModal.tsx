"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { ReviewForm } from "./ReviewForm";
import Icon from "./Icon";

type Ctx = {
  open: boolean;
  openReview: () => void;
  closeReview: () => void;
};

const ReviewCtx = createContext<Ctx | null>(null);

export function ReviewProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <ReviewCtx.Provider value={{ open, openReview: () => setOpen(true), closeReview: () => setOpen(false) }}>
      {children}
      <div
        className={"rv-backdrop" + (open ? " open" : "")}
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        aria-hidden={!open}
      >
        <div className="rv-modal" role="dialog" aria-modal="true" aria-labelledby="rv-modal-title">
          <div className="rv-modal-head">
            <div>
              <span className="eyebrow" style={{ marginBottom: 4, display: "block" }}>AVK Clinic</span>
              <h3 id="rv-modal-title" style={{ margin: 0, fontSize: 22 }}>Share your experience</h3>
            </div>
            <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close"><Icon name="close" size={16}/></button>
          </div>
          <div className="rv-modal-body">
            {open && <ReviewForm onDone={() => setOpen(false)}/>}
          </div>
        </div>
      </div>
    </ReviewCtx.Provider>
  );
}

export function useReviewModal(): Ctx {
  const v = useContext(ReviewCtx);
  if (!v) throw new Error("useReviewModal must be used within ReviewProvider");
  return v;
}

export function ShareExperienceButton({
  label = "Share your experience",
  variant = "ghost",
  size,
  className = "",
}: {
  label?: string;
  variant?: "dark" | "ghost" | "sage";
  size?: "sm" | "lg";
  className?: string;
}) {
  const { openReview } = useReviewModal();
  const cls = [
    "btn",
    variant === "ghost" && "btn-ghost",
    variant === "sage" && "btn-sage",
    size === "sm" && "btn-sm",
    size === "lg" && "btn-lg",
    className,
  ].filter(Boolean).join(" ");
  return (
    <button className={cls} type="button" onClick={openReview}>
      <span>{label}</span>
      <Icon name="arrow" size={14} stroke={2}/>
    </button>
  );
}
