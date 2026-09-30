import { useEffect } from "react";

/**
 * Locks page scroll while `active` is true. Used by full-screen overlays
 * (Photo Tour, Lightbox) so the page behind them cannot scroll.
 */
export function useLockBodyScroll(active: boolean) {
  useEffect(() => {
    if (!active) return;
    document.body.classList.add("scroll-locked");
    return () => {
      document.body.classList.remove("scroll-locked");
    };
  }, [active]);
}
