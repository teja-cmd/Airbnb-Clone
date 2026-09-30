import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { listing } from "../../data/listing";
import { useActiveSection } from "../../hooks/useActiveSection";
import "./StickyNavigation.css";

const SECTIONS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

export function StickyNavigation() {
  const activeId = useActiveSection(SECTIONS.map((s) => s.id));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("photos");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 82;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky-nav${isVisible ? " sticky-nav--visible" : ""}`}
      aria-label="Listing sections"
      aria-hidden={!isVisible}
    >
      <div className="sticky-nav__inner">
        <div className="sticky-nav__tabs">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              type="button"
              className={
                "sticky-nav__tab" +
                (activeId === section.id ? " sticky-nav__tab--active" : "")
              }
              aria-current={activeId === section.id ? "true" : undefined}
              onClick={() => scrollTo(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="sticky-nav__summary">
          <div className="sticky-nav__price-block">
            <span className="sticky-nav__price">
              ₹{listing.price.toLocaleString("en-IN")} for {listing.nights} nights
            </span>
            <span className="sticky-nav__rating">
              <Star size={12} fill="currentColor" />
              {listing.rating} · {listing.reviewCount} reviews
            </span>
          </div>
          <button className="sticky-nav__reserve" type="button">
            Reserve
          </button>
        </div>
      </div>
    </nav>
  );
}
