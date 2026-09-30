# Copilot / AI Agent Instructions for this repository

## Project conventions

- React + Vite + TypeScript. No Next.js, no backend, no database, no auth.
- One feature per folder under `src/components/`: `ComponentName/ComponentName.tsx`
  + `ComponentName.css`, both co-located.
- Shared/cross-cutting styles live in `src/styles/` (`variables.css`,
  `global.css`, `listing.css`). Component-specific styles stay local to that
  component's folder.
- All copy/content lives in `src/data/*.ts`, typed with an exported interface.
  Components render from these modules — never hardcode listing content inline
  in JSX.

## Component conventions

- Functional components with hooks only. No class components.
- Icons from `lucide-react`.
- Every interactive element is a real `<button>` or `<a>`, never a `<div>` with
  an onClick.
- Reusable cross-overlay behavior (keyboard nav, focus trap, scroll lock)
  belongs in `src/hooks/`, not duplicated per component.

## Accessibility requirements

- Every icon-only button needs an `aria-label`.
- Overlays (Photo Tour, Lightbox) use `role="dialog"` + `aria-modal="true"`,
  trap focus while open, restore focus to the triggering element on close, and
  lock body scroll via `useLockBodyScroll`.
- Escape closes the active overlay; ArrowLeft/ArrowRight navigate the Lightbox.
- Maintain a logical heading hierarchy (one `h1` on the listing page, `h2` per
  major section).
- Provide descriptive `alt` text for every image — never `alt=""` on a
  content-bearing image.

## Styling conventions

- Use the CSS variables defined in `src/styles/variables.css` for color,
  radius, spacing and motion — no hardcoded hex values or magic-number radii
  in component CSS.
- Keep hover/focus transitions short (`var(--transition-fast)` /
  `var(--transition-base)`) and consistent with existing components.

## No source-code copying

- The reference site (`airbnb-clone-umber-two.vercel.app`) is a **visual and
  behavioral specification only**. Never fetch, scrape, or paste its HTML,
  CSS, or JavaScript into this repository. Implement everything independently
  from the rendered behavior and the written content spec.

## Visual fidelity requirements

- Match the reference's layout, spacing rhythm, and interaction patterns as
  closely as the written spec and design tokens allow.
- Do not "improve" or redesign sections — the reference (and, in its absence,
  Airbnb's established design language) is the source of truth, not the
  agent's own taste.

## Testing expectations

- `npm run build` must complete with zero TypeScript errors before any change
  is considered done.
- Manually verify: hero images and "Show all photos" open the Photo Tour;
  gallery images open the Lightbox; Escape/ArrowLeft/ArrowRight work in both
  overlays; body scroll is locked while either overlay is open; sticky section
  navigation scrolls to and highlights the correct section.
