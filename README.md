# Airbnb Listing Clone

An independently-implemented clone of an Airbnb-style listing page, built for
the PlayPower Labs take-home assignment. Recreates the **Listing Page**,
**Photo Tour**, and **Lightbox** views for the reference listing *"Romantic
Jacuzzi 1BHK Candolim | Mirashya UG10."*

## Visual Fidelity Note

The live reference (`airbnb-clone-umber-two.vercel.app`) blocks automated
fetching (`robots.txt`), and no browser/screenshot tool was available in the
build environment. This clone was therefore built from the assignment's
detailed written content/behavior specification and Airbnb's established
design language, **not** from pixel-level inspection of the live page. Layout
composition, sections, and interaction patterns follow the spec exactly;
exact pixel spacing/colors are a close approximation and should be verified
against the live reference and refined as a follow-up visual QA pass. All
imagery is original, generated placeholder artwork (not scraped from the
reference or any other source), per the assignment's anti-plagiarism
requirement.

## Overview

- Full listing page: header, search bar, hero photo grid, sticky section nav,
  reservation card, guest favourite, host summary, description, sleeping
  arrangements, amenities, calendar, reviews, location, host bio, things to
  know, and a nearby-stays carousel.
- **Photo Tour**: full-screen scrollable overlay grouped by room category,
  opened from any hero image or "Show all photos." Its open state is
  reflected in the URL as `?modal=PHOTO_TOUR_SCROLLABLE` and is back/forward
  navigable.
- **Lightbox**: full-screen single-image viewer opened from any Photo Tour
  image, with previous/next controls and full keyboard support.

## Features

- Sticky header and section navigation with scroll-spy active-tab highlighting
- Smooth-scroll navigation to Photos / Amenities / Reviews / Location
- Two-month selectable-date calendar (check-in/check-out)
- Paged nearby-stays carousel
- Keyboard-accessible Photo Tour and Lightbox (Escape, ArrowLeft, ArrowRight)
- Focus trap + focus restoration + body scroll lock on both overlays
- Data-driven components — all content lives in `src/data/`

## Tech Stack

- React 19 + TypeScript
- Vite
- Plain CSS with a shared design-token file (`src/styles/variables.css`)
- `lucide-react` for icons

No backend, database, or auth — everything runs client-side.

## Project Structure

```
src/
  components/       One folder per UI section (component + co-located CSS)
  data/             Typed content modules (listing, photos, reviews, amenities, nearbyStays)
  hooks/            useKeyboardNavigation, useLockBodyScroll, useActiveSection
  pages/            ListingPage.tsx
  styles/           variables.css, global.css, listing.css
  App.tsx           Owns Photo Tour / Lightbox open state, URL sync
  main.tsx
public/images/      Original placeholder SVG imagery
architecture/        architecture.svg — production-scale system diagram
ai/                  prompts.md, workflow.md
.github/             copilot-instructions.md
```

## Running Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Accessibility

- Both overlays use `role="dialog"` + `aria-modal="true"`.
- **Escape** closes the active overlay (Photo Tour or Lightbox).
- **ArrowLeft / ArrowRight** navigate between photos in the Lightbox.
- Focus is trapped inside the open overlay (Tab wraps within it) and is
  restored to the triggering element when the overlay closes.
- Body scroll is locked while either overlay is open.
- All icon-only buttons have `aria-label`s; all images have descriptive `alt`
  text; heading hierarchy is semantic (`h1` → `h2` per section).

## AI-Assisted Development

AI assistance was used throughout: requirements analysis, project scaffolding,
component implementation, debugging, refactoring into reusable hooks, and the
accessibility review pass. See `ai/prompts.md` for the prompt log and
`ai/workflow.md` for the stage-by-stage process. No code was copied from the
reference site — the reference was used only as a visual/behavioral
specification, per the assignment's anti-plagiarism requirement.

## Architecture

`architecture/architecture.svg` shows a high-level **production-scale**
architecture for a vacation-rental marketplace at Airbnb's scale (separate
from this frontend clone): CDN/edge → load-balanced React frontend → API
gateway → independently-scalable domain services (Listing, Search, Booking,
User, Review, Payment, Notification) → async event bus → data layer
(PostgreSQL + read replicas, Redis, search index, object storage) →
cross-cutting infrastructure (containers, CI/CD, observability, security). A
written scaling-strategy section is included on the diagram.

## Assignment Compliance

- [x] Desktop-only implementation (~1366×768 target)
- [x] Listing Page recreated per the content/behavior spec
- [x] Photo Tour view (full-screen, scrollable, category navigation)
- [x] Lightbox view (full-screen, prev/next, keyboard nav)
- [x] Keyboard navigation: Escape, ArrowLeft, ArrowRight
- [x] Accessibility: focus trap, focus restore, scroll lock, aria-labels, alt
      text, semantic headings
- [x] `?modal=PHOTO_TOUR_SCROLLABLE` URL state for the Photo Tour, with
      back/forward support
- [x] Production architecture diagram (`architecture/architecture.svg`)
- [x] `ai/prompts.md` and `ai/workflow.md`
- [x] `.github/copilot-instructions.md`
- [x] Clean `npm run build` with zero TypeScript/build errors
- [ ] Pixel-level visual QA against the live reference — not possible in this
      build environment (see "Visual Fidelity Note" above); recommended as a
      follow-up pass with direct access to the live page.
