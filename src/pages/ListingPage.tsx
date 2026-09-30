import { Share, Heart } from "lucide-react";
import { Header } from "../components/Header/Header";
import { StickyNavigation } from "../components/StickyNavigation/StickyNavigation";
import { HeroGallery } from "../components/HeroGallery/HeroGallery";
import { GuestFavourite } from "../components/GuestFavourite/GuestFavourite";
import { HostSummary } from "../components/HostSummary/HostSummary";
import { Description } from "../components/Description/Description";
import { SleepingSection } from "../components/SleepingSection/SleepingSection";
import { Amenities } from "../components/Amenities/Amenities";
import { Calendar } from "../components/Calendar/Calendar";
import { Reviews } from "../components/Reviews/Reviews";
import { Location } from "../components/Location/Location";
import { HostSection } from "../components/HostSection/HostSection";
import { ThingsToKnow } from "../components/ThingsToKnow/ThingsToKnow";
import { NearbyStays } from "../components/NearbyStays/NearbyStays";
import { ReservationCard } from "../components/ReservationCard/ReservationCard";
import { listing } from "../data/listing";

interface Props {
  onOpenPhotoTour: () => void;
}

export function ListingPage({ onOpenPhotoTour }: Props) {
  return (
    <>
      <Header />

      <main className="container listing-page">
        <div className="listing-header">
          <h1 className="listing-header__title">{listing.title}</h1>
          <div className="listing-header__actions">
            <button className="listing-header__action-btn" type="button">
              <Share size={16} /> Share
            </button>
            <button className="listing-header__action-btn" type="button">
              <Heart size={16} /> Save
            </button>
          </div>
        </div>

        <HeroGallery onOpenPhotoTour={onOpenPhotoTour} />
  <StickyNavigation />

        <div className="listing-body">
          <div className="listing-main">
            <section>
              <p style={{ fontSize: 18, fontWeight: 600 }}>{listing.propertyType}</p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", marginTop: 4 }}>
                {listing.guestInfo}
              </p>
              <GuestFavourite />
            </section>

            <section>
              <HostSummary />
            </section>

            <section>
              <Description />
            </section>

            <section>
              <SleepingSection />
            </section>

            <Amenities />

            <section className="calendar-section">
              <Calendar />
            </section>
          </div>

          <ReservationCard />
        </div>

        <div className="listing-full-width">
          <div className="listing-main__separator" aria-hidden="true" />
          <Reviews />
          <div className="listing-main__separator" aria-hidden="true" />
          <Location />
          <HostSection />
          <ThingsToKnow />
        </div>

        <NearbyStays />
      </main>
    </>
  );
}
