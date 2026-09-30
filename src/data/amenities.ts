export interface Amenity { label: string; available: boolean }
export interface AmenityCategory { name: string; items: Amenity[] }
const category = (name: string, labels: string[]): AmenityCategory => ({ name, items: labels.map(label => ({ label, available: true })) });
export const amenityCategories: AmenityCategory[] = [
  category("Bathroom", ["Hairdryer", "Cleaning products", "Shampoo", "Hot water", "Shower gel"]),
  category("Bedroom and laundry", ["Washing machine", "Hangers", "Bed linen", "Room-darkening blinds", "Iron", "Clothes storage", "Cot"]),
  category("Entertainment", ["TV"]), category("Family", ["Cot"]),
  category("Heating and cooling", ["Air conditioning", "Ceiling fan"]),
  category("Home safety", ["Exterior security cameras on property", "Carbon monoxide alarm", "Smoke alarm"]),
  category("Internet and office", ["Wifi", "Dedicated workspace"]),
  category("Kitchen and dining", ["Kitchen", "Fridge", "Freezer", "Microwave", "Cooking basics", "Crockery and cutlery", "Kettle", "Coffee", "Wine glasses", "Toaster", "Blender", "Cooker"]),
  category("Location features", ["Private entrance"]),
  category("Outdoor", ["Patio or balcony", "Outdoor dining area"]),
  category("Parking and facilities", ["Free parking on premises", "Pool", "Hot tub", "Gym"]),
  category("Services", ["Pets allowed", "Cleaning available during stay", "Long-term stays allowed", "Self check-in"]),
];
export const amenities = amenityCategories.flatMap(group => group.items);
export const totalAmenitiesCount = amenities.length;

