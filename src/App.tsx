import { useCallback, useEffect, useState } from "react";
import { ListingPage } from "./pages/ListingPage";
import { PhotoTour } from "./components/PhotoTour/PhotoTour";
import { Lightbox } from "./components/Lightbox/Lightbox";

const PHOTO_TOUR_PARAM = "PHOTO_TOUR_SCROLLABLE";

function isPhotoTourOpenInUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("modal") === PHOTO_TOUR_PARAM;
}

function App() {
  const [isPhotoTourOpen, setPhotoTourOpen] = useState(isPhotoTourOpenInUrl);
  const [lightboxPhotoId, setLightboxPhotoId] = useState<string | null>(null);

  // Keep the Photo Tour view in sync with browser back/forward navigation.
  useEffect(() => {
    const handlePopState = () => setPhotoTourOpen(isPhotoTourOpenInUrl());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openPhotoTour = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("modal", PHOTO_TOUR_PARAM);
    window.history.pushState({}, "", url);
    setPhotoTourOpen(true);
  }, []);

  const closePhotoTour = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete("modal");
    window.history.pushState({}, "", url);
    setPhotoTourOpen(false);
    setLightboxPhotoId(null);
  }, []);

  const openLightbox = useCallback((photoId: string) => {
    setLightboxPhotoId(photoId);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxPhotoId(null);
  }, []);

  return (
    <>
      <ListingPage onOpenPhotoTour={openPhotoTour} />

      {isPhotoTourOpen && (
        <PhotoTour onClose={closePhotoTour} onOpenLightbox={openLightbox} />
      )}

      {lightboxPhotoId && <Lightbox photoId={lightboxPhotoId} onClose={closeLightbox} />}
    </>
  );
}

export default App;
