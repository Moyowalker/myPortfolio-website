export function trackEvent(name, props = {}) {
  if (typeof window === "undefined") return;

  const plausible = window.plausible;
  if (typeof plausible !== "function") return;

  plausible(name, { props });
}
