import { Grid3x3 } from "lucide-react";
import { heroPhotos } from "../../data/photos";
import "./HeroGallery.css";

interface Props {
  onOpenPhotoTour: () => void;
}

export function HeroGallery({ onOpenPhotoTour }: Props) {
  const [main, ...rest] = heroPhotos;

  return (
    <div className="hero-gallery" id="photos">
      <button
        className="hero-gallery__main"
        type="button"
        onClick={onOpenPhotoTour}
        aria-label={`View photo: ${main.title}`}
      >
        <img src={main.src} alt={`${main.title} — ${main.description}`} />
      </button>

      <div className="hero-gallery__grid">
        {rest.map((photo) => (
          <button
            key={photo.id}
            className="hero-gallery__cell"
            type="button"
            onClick={onOpenPhotoTour}
            aria-label={`View photo: ${photo.title}`}
          >
            <img src={photo.src} alt={`${photo.title} — ${photo.description}`} />
          </button>
        ))}
      </div>

      <button className="hero-gallery__show-all" type="button" onClick={onOpenPhotoTour}>
        <Grid3x3 size={16} />
        Show all photos
      </button>
    </div>
  );
}
