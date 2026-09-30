import { useEffect, useState } from "react";
import { AirVent, AlarmSmoke, Bath, Bed, BedDouble, BriefcaseBusiness, Camera, Check, ChefHat, Coffee, CookingPot, DoorOpen, Dumbbell, Fan, Flower2, Heater, House, KeyRound, Microwave, PawPrint, Refrigerator, ShieldAlert, ShowerHead, Sparkles, Tv, Utensils, WashingMachine, Waves, Wifi, Wine, X, Wind, Shirt, ParkingSquare, Sofa, Sun, CupSoda } from "lucide-react";
import { amenityCategories, amenities, totalAmenitiesCount } from "../../data/amenities";

const ICONS: Record<string, typeof Sparkles> = {
  Hairdryer: Wind, "Cleaning products": Sparkles, Shampoo: Bath, "Hot water": Heater, "Shower gel": ShowerHead,
  "Washing machine": WashingMachine, Hangers: Shirt, "Bed linen": BedDouble, "Room-darkening blinds": Sun, Iron: Heater, "Clothes storage": Sofa, Cot: Bed,
  TV: Tv, "Air conditioning": AirVent, "Ceiling fan": Fan, "Exterior security cameras on property": Camera,
  "Carbon monoxide alarm": ShieldAlert, "Smoke alarm": AlarmSmoke, Wifi, "Dedicated workspace": BriefcaseBusiness,
  Kitchen: ChefHat, Fridge: Refrigerator, Freezer: Refrigerator, Microwave, "Cooking basics": CookingPot,
  "Crockery and cutlery": Utensils, Kettle: CupSoda, Coffee, "Wine glasses": Wine, Toaster: CookingPot, Blender: CookingPot, Cooker: CookingPot,
  "Private entrance": DoorOpen, "Patio or balcony": Flower2, "Outdoor dining area": Utensils,
  "Free parking on premises": ParkingSquare, Pool: Waves, "Hot tub": Bath, Gym: Dumbbell,
  "Pets allowed": PawPrint, "Cleaning available during stay": Sparkles, "Long-term stays allowed": House, "Self check-in": KeyRound,
};
function AmenityIcon({ label }: { label: string }) {
  const Icon = ICONS[label] ?? Check;
  return <Icon size={22} strokeWidth={1.6} aria-hidden="true" />;
}

export function Amenities() {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (!showAll) return;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setShowAll(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [showAll]);

  return <section id="amenities" aria-labelledby="amenities-heading">
    <h2 id="amenities-heading" style={{ fontSize: 22, fontWeight: 600 }}>What this place offers</h2>
    <div className="amenities-grid">
      {amenities.slice(0, 10).map((item, index) => <div key={item.label + index} className="amenity-item">
        <span aria-hidden="true"><AmenityIcon label={item.label} /></span><span>{item.label}</span>
      </div>)}
    </div>
    <button className="amenities__show-all" type="button" onClick={() => setShowAll(true)}>Show all {totalAmenitiesCount} amenities</button>
    {showAll && <div className="amenities-modal__backdrop" onMouseDown={event => {
      if (event.target === event.currentTarget) setShowAll(false);
    }}>
      <section className="amenities-modal" role="dialog" aria-modal="true" aria-labelledby="amenities-modal-title">
        <header className="amenities-modal__header">
          <button className="amenities-modal__close" type="button" aria-label="Close amenities" onClick={() => setShowAll(false)}><X size={20} /></button>
        </header>
        <div className="amenities-modal__content">
          <h2 id="amenities-modal-title">What this place offers</h2>
          {amenityCategories.map(group => <section className="amenities-modal__category" key={group.name}>
            <h3>{group.name}</h3><ul>{group.items.map((item, index) => <li key={item.label + index}>
              <AmenityIcon label={item.label} /><span>{item.label}</span>
            </li>)}</ul>
          </section>)}
        </div>
      </section>
    </div>}
  </section>;
}

