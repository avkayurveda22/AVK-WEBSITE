export const GA_MEASUREMENT_ID = "G-7WZCW1EEGP";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function pageview(url: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}
