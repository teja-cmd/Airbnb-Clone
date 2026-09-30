export interface Review {
  id: string;
  name: string;
  avatar: string;
  timeOnAirbnb: string;
  rating: number;
  date: string;
  text: string;
}

export const reviews: Review[] = [
  {
    id: "amit",
    name: "Amit",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    timeOnAirbnb: "3 years on Airbnb",
    rating: 5,
    date: "September 2026",
    text: "Beautiful, spotless apartment right in the heart of Candolim. The jacuzzi was a lovely surprise and the host was incredibly responsive throughout our stay.",
  },
  {
    id: "aheesh",
    name: "Aheesh",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    timeOnAirbnb: "5 years on Airbnb",
    rating: 5,
    date: "August 2026",
    text: "Great location, walking distance to the beach and restaurants. Check-in was smooth and the place matched the photos exactly.",
  },
  {
    id: "samiksha",
    name: "Samiksha",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    timeOnAirbnb: "2 years on Airbnb",
    rating: 5,
    date: "July 2026",
    text: "Perfect for a romantic weekend away. The pool and alfresco dining area were an unexpected highlight — would happily stay again.",
  },
  {
    id: "vedant",
    name: "Vedant",
    avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80",
    timeOnAirbnb: "1 year on Airbnb",
    rating: 5,
    date: "June 2026",
    text: "Clean, comfortable and well equipped. The host team responded within minutes whenever we had a question.",
  },
  {
    id: "vaibhav-s",
    name: "Vaibhav S",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    timeOnAirbnb: "4 years on Airbnb",
    rating: 5,
    date: "May 2026",
    text: "Loved the interiors and the hot tub in the second living space. Great value for the location in Candolim.",
  },
  {
    id: "mohd",
    name: "Mohd",
    avatar: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80",
    timeOnAirbnb: "2 years on Airbnb",
    rating: 4,
    date: "April 2026",
    text: "Solid stay overall — comfortable bed, good AC, and a short walk to the beach. Only minor issue was slow hot water in the mornings.",
  },
];
