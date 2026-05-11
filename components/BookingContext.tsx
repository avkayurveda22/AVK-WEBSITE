"use client";
import React, { createContext, useContext, useState } from "react";
import { trackEvent } from "@/lib/gtag";

type Ctx = {
  open: boolean;
  spec: string | null;
  openBooking: (spec?: string) => void;
  closeBooking: () => void;
};
const BookingCtx = createContext<Ctx | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [spec, setSpec] = useState<string | null>(null);
  return (
    <BookingCtx.Provider value={{
      open, spec,
      openBooking: (s) => {
        setSpec(s ?? null);
        setOpen(true);
        trackEvent("booking_open", { speciality: s ?? "none" });
      },
      closeBooking: () => { setOpen(false); setSpec(null); },
    }}>
      {children}
    </BookingCtx.Provider>
  );
}

export function useBooking() {
  const v = useContext(BookingCtx);
  if (!v) throw new Error("useBooking must be used within BookingProvider");
  return v;
}
