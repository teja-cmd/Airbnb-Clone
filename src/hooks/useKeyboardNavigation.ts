import { useEffect, useRef } from "react";

interface Options {
  active: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  containerRef: React.RefObject<HTMLElement | null>;
}

/**
 * Handles Escape / ArrowLeft / ArrowRight for an open overlay, traps focus
 * inside `containerRef` while active, and restores focus to the element
 * that was focused before the overlay opened once it closes.
 */
export function useKeyboardNavigation({
  active,
  onClose,
  onPrev,
  onNext,
  containerRef,
}: Options) {
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    containerRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowLeft" && onPrev) {
        e.preventDefault();
        onPrev();
        return;
      }
      if (e.key === "ArrowRight" && onNext) {
        e.preventDefault();
        onNext();
        return;
      }
      if (e.key === "Tab") {
        const container = containerRef.current;
        if (!container) return;
        const focusable = container.querySelectorAll<HTMLElement>(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [active, onClose, onPrev, onNext, containerRef]);
}
