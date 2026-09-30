import { useMemo, useRef, useState } from "react";
import { ArrowLeft, Share, Heart } from "lucide-react";
import { photos, photoTourCategories, type Photo } from "../../data/photos";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";
import "./PhotoTour.css";

interface Props {
  onClose: () => void;
  onOpenLightbox: (photoId: string) => void;
}

export function PhotoTour({ onClose, onOpenLightbox }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(photoTourCategories[0]);

  useLockBodyScroll(true);
  useKeyboardNavigation({
    active: true,
    onClose,
    containerRef,
  });

  const grouped = useMemo(() => {
    const map = new Map<string, Photo[]>();
    photoTourCategories.forEach((cat) => map.set(cat, []));
    photos.forEach((p) => {
      map.get(p.category)?.push(p);
    });
    return map;
  }, []);

  const scrollToCategory = (category: string) => {
    setActiveCategory(category);
    document
      .getElementById(`tour-${category.replace(/\s+/g, "-")}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="photo-tour"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      ref={containerRef}
      tabIndex={-1}
    >
      <div className="photo-tour__header">
        <button className="photo-tour__back" type="button" onClick={onClose} autoFocus>
          <ArrowLeft size={18} />
          <span className="visually-hidden">Back to listing</span>
        </button>
        <span className="photo-tour__title">Photo tour</span>
        <div className="photo-tour__actions">
          <button className="photo-tour__action-btn" type="button">
            <Share size={16} /> Share
          </button>
          <button className="photo-tour__action-btn" type="button" aria-label="Save">
            <Heart size={16} />
          </button>
        </div>
      </div>

      <nav className="photo-tour__categories" aria-label="Jump to room">
        {photoTourCategories.map((cat) => {
          const preview = grouped.get(cat)?.[0];
          if (!preview) return null;

          return (
            <button
              key={cat}
              type="button"
              className={
                "photo-tour__category-btn" +
                (activeCategory === cat ? " photo-tour__category-btn--active" : "")
              }
              onClick={() => scrollToCategory(cat)}
            >
              <img src={preview.src} alt={`${cat} preview`} />
              <span>{cat}</span>
            </button>
          );
        })}
      </nav>

      <div className="photo-tour__body">
        <div className="photo-tour__content">
          {photoTourCategories.map((cat) => {
            const items = grouped.get(cat) ?? [];
            if (items.length === 0) return null;
            return (
              <section
                key={cat}
                id={`tour-${cat.replace(/\s+/g, "-")}`}
                aria-labelledby={`tour-heading-${cat.replace(/\s+/g, "-")}`}
                className="photo-tour__section"
              >
                <div className="photo-tour__section-header">
                  <h2
                    id={`tour-heading-${cat.replace(/\s+/g, "-")}`}
                    className="photo-tour__section-title"
                  >
                    {cat}
                  </h2>
                  <p className="photo-tour__section-detail">{items[0].description}</p>
                </div>

                <div className="photo-tour__images">
                  {items.map((photo) => (
                    <button
                      key={photo.id}
                      className="photo-tour__image-btn"
                      type="button"
                      onClick={() => onOpenLightbox(photo.id)}
                      aria-label={`Open full-screen view of ${photo.title}`}
                    >
                      <img src={photo.src} alt={`${photo.title} — ${photo.description}`} />
                    </button>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
