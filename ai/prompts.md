# AI Prompts Used

This file records the prompts used during AI-assisted development of this project,
as required by the take-home task submission guidelines.

## 1. Project scaffolding

> Scaffold a React + Vite + TypeScript project. Set up the folder structure with
> components/, data/, hooks/, pages/, and styles/ directories matching a
> feature-organized Airbnb-listing-clone layout.

## 2. Design tokens

> Generate a CSS variables file (`variables.css`) capturing Airbnb's typical design
> language: brand red (#FF385C), neutral text/border greys, card shadow, pill and
> rounded-corner radii, and a content max-width — to be reused across every component
> instead of hardcoded values.

## 3. Data layer

> Given this content spec (title, price, host info, amenities, reviews, room
> categories, etc.), produce strongly-typed TypeScript data modules
> (`listing.ts`, `photos.ts`, `reviews.ts`, `amenities.ts`, `nearbyStays.ts`) so
> every component can render from data rather than hardcoded JSX.

## 4. Listing page components

> Implement the Header, SearchBar, HeroGallery, StickyNavigation (with
> IntersectionObserver-based active-tab tracking), GuestFavourite, HostSummary,
> Description (with show-more), SleepingSection, Amenities, Calendar (two-month,
> selectable date range), Reviews (rating bars + review grid), Location (custom
> map visual, no real map dependency), HostSection, ThingsToKnow, NearbyStays
> (paged carousel), and ReservationCard components as independent, reusable,
> data-driven React components with co-located CSS.

## 5. Photo Tour overlay

> Build a full-screen Photo Tour view: sticky header (back / share / heart),
> sticky category jump-navigation, and a vertically scrollable content area
> grouping photos by room category. Clicking any hero image or "Show all photos"
> opens this view. Sync its open/closed state to `?modal=PHOTO_TOUR_SCROLLABLE`
> in the URL, including browser back/forward support via `popstate`.

## 6. Lightbox

> Build a full-screen single-image Lightbox opened from any Photo Tour image.
> Implement Escape to close, ArrowLeft/ArrowRight to navigate, a focus trap while
> open, focus restoration to the triggering element on close, and body scroll
> lock. Extract the keyboard/focus/scroll-lock logic into reusable hooks
> (`useKeyboardNavigation`, `useLockBodyScroll`) shared between the Photo Tour and
> Lightbox.

## 7. Accessibility pass

> Review all interactive elements for semantic HTML, aria-labels, visible focus
> states, heading hierarchy, and alt text. Confirm no keyboard traps exist outside
> the two modal overlays, and that both overlays pass a Tab-key focus-trap check.

## 8. Placeholder imagery

> The live reference site could not be scraped (per the anti-plagiarism
> requirement and because it blocks automated access). Generate a self-contained
> set of original, deterministic placeholder SVG images per room category
> (living room, kitchen, bedroom, bathroom, gym, exterior, pool, host/guest
> avatars) using a consistent warm color palette, instead of pulling any external
> or reference-site imagery.

## 9. Architecture diagram

> Produce a high-level production architecture SVG diagram for a vacation-rental
> marketplace at Airbnb's scale: users → CDN/edge → frontend → API gateway →
> domain-separated backend services → async event bus → data layer (Postgres +
> read replicas, Redis, search index, object storage) → cross-cutting
> infrastructure (containers, CI/CD, observability, security). Include a written
> scaling-strategy section.

## 10. Build verification

> Run `npm run build`, fix all resulting TypeScript/Vite errors, and confirm a
> clean production build with no console warnings before packaging the
> submission.
