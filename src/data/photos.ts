export interface Photo {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
}

const photoGroups = [
  {
    id: "living-room-1",
    title: "Living room 1",
    category: "Living room 1",
    description: "Sofa · Air conditioning · Ceiling fan · TV",
    sources: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=2000&q=90",
    ],
  },
  {
    id: "living-room-2",
    title: "Living room 2",
    category: "Living room 2",
    description: "Relaxed lounge seating with natural light",
    sources: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2000&q=90",
    ],
  },
  {
    id: "kitchen",
    title: "Full kitchen",
    category: "Full kitchen",
    description: "Kitchen counters and full appliance setup",
    sources: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90",
    ],
  },
  {
    id: "bedroom",
    title: "Bedroom",
    category: "Bedroom",
    description: "1 double bed · Air conditioning · Closet",
    sources: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2000&q=90",
    ],
  },
  {
    id: "bathroom",
    title: "Full bathroom",
    category: "Full bathroom",
    description: "Bathroom vanity and shower setup",
    sources: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2000&q=90",
    ],
  },
  {
    id: "gym",
    title: "Gym",
    category: "Gym",
    description: "Shared gym in the building",
    sources: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1a?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90",
    ],
  },
  {
    id: "exterior",
    title: "Exterior",
    category: "Exterior",
    description: "Building exterior and entrance",
    sources: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90",
    ],
  },
  {
    id: "pool",
    title: "Pool",
    category: "Pool",
    description: "Shared outdoor pool",
    sources: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=2000&q=90",
    ],
  },
  {
    id: "additional",
    title: "Additional photos",
    category: "Additional photos",
    description: "Dining, balcony, lounge, and property details",
    sources: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=90",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=2000&q=90",
    ],
  },
];

export const photos: Photo[] = photoGroups.flatMap((group) =>
  group.sources.map((src, index) => ({
    id: `${group.id}-${index + 1}`,
    src,
    title: group.title,
    category: group.category,
    description: group.description,
  }))
);

export const heroPhotos: Photo[] = [
  photos[0],
  photos[5],
  photos[10],
  photos[15],
  photos[20],
];

export const photoTourCategories = [
  "Living room 1",
  "Living room 2",
  "Full kitchen",
  "Bedroom",
  "Full bathroom",
  "Gym",
  "Exterior",
  "Pool",
  "Additional photos",
];
