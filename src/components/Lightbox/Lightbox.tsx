import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { photos } from "../../data/photos";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";
import "./Lightbox.css";

interface Props {
  photoId: string;
  onClose: () => void;
}

export function Lightbox({ photoId, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialIndex = Math.max(
    0,
    photos.findIndex((p) => p.id === photoId)
  );
  const [index, setIndex] = useState(initialIndex);

  const goPrev = () => setIndex((i) => (i > 0 ? i - 1 : i));
  const goNext = () => setIndex((i) => (i < photos.length - 1 ? i + 1 : i));

  useLockBodyScroll(true);
  useKeyboardNavigation({
    active: true,
    onClose,
    onPrev: goPrev,
    onNext: goNext,
    containerRef,
  });

  const photo = photos[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer — ${photo.title}`}
      ref={containerRef}
      tabIndex={-1}
    >
      <div className="lightbox__header">
        <button className="lightbox__close" type="button" onClick={onClose} aria-label="Close image viewer" autoFocus>
          <X size={20} />
        </button>
        <span className="lightbox__counter">
          {index + 1} / {photos.length}
        </span>
      </div>

      <div className="lightbox__stage">
        <button
          className="lightbox__nav-btn lightbox__nav-btn--prev"
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          aria-label="Previous photo"
        >
          <ChevronLeft size={22} />
        </button>

        <div className="lightbox__image-wrap">
          <img
            key={photo.id}
            className="lightbox__image"
            src={photo.src}
            alt={`${photo.title} — ${photo.description}`}
          />
        </div>

        <button
          className="lightbox__nav-btn lightbox__nav-btn--next"
          type="button"
          onClick={goNext}
          disabled={index === photos.length - 1}
          aria-label="Next photo"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <p className="lightbox__caption">
        {photo.title} · {photo.description}
      </p>
    </div>
  );
}
