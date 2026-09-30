# AI Workflow

This document explains the stage-by-stage workflow followed while building this
project with AI assistance.

## 1. Requirements analysis

Parsed the task brief into three required deliverables (Listing Page, Photo Tour,
Lightbox), a fixed content spec (property details, host bio, amenities, reviews,
room categories), and non-functional requirements (desktop-only ~1366×768,
keyboard navigation, accessibility, no source-code copying from the reference,
production architecture diagram).

## 2. Architecture planning

Chose React + Vite + TypeScript per the brief's suggested stack, with no backend
(state lives in React + the URL for the Photo Tour). Planned a feature-organized
folder structure (`components/`, `data/`, `hooks/`, `pages/`, `styles/`) so each
listing section is an independent, data-driven component rather than one large
page file.

## 3. Component generation

Built components bottom-up: design tokens first (`variables.css`), then the
typed data layer, then each UI section as its own component with co-located
CSS, then the two overlay views (Photo Tour, Lightbox), then the page shell
(`ListingPage.tsx`) and the root `App.tsx` that owns modal/open state.

## 4. Implementation

Implemented interactions incrementally: sticky header/nav, smooth-scroll section
navigation with `IntersectionObserver`, a two-month selectable calendar, a paged
nearby-stays carousel, and the two overlay views. Extracted repeated
overlay logic (keyboard handling, focus trap/restore, scroll lock) into shared
hooks (`useKeyboardNavigation`, `useLockBodyScroll`) used by both the Photo Tour
and the Lightbox.

## 5. Testing

Ran `npm run build` (`tsc -b && vite build`) after each major stage to catch
type errors early. Final build completes with zero TypeScript errors and zero
build warnings.

## 6. Visual comparison

The live reference URL blocks automated fetching (robots.txt) and no browser/
screenshot tool was available in this environment, so visual comparison was
done against the detailed content/behavior spec provided in the task brief and
general knowledge of Airbnb's listing-page design language, rather than
pixel-level comparison against a live render. This is flagged as a known
limitation — see the README's "Visual Fidelity Note".

## 7. Debugging

Fixed TypeScript strict-mode issues (untyped map callbacks, ref typing in the
keyboard-navigation hook) and adjusted the calendar's selection logic so
check-in/check-out state resets correctly across month boundaries.

## 8. Accessibility review

Added `aria-label`s to icon-only buttons, `role="dialog"` + `aria-modal` to both
overlays, a visible focus ring via `:focus-visible`, semantic heading hierarchy
per section, and alt text describing each photo's room and contents. Verified
Escape/ArrowLeft/ArrowRight behavior and focus trap/restore logic in the shared
hook.

## 9. Final QA

Confirmed all three required views render, hero images and "Show all photos"
open the Photo Tour, gallery images open the Lightbox, keyboard navigation and
body-scroll locking work in both overlays, and the production build is clean.
