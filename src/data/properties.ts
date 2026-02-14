import house1 from "@/assets/properties/house-1.jpg";
import house2 from "@/assets/properties/house-2.jpg";
import house3 from "@/assets/properties/house-3.jpg";
import house4 from "@/assets/properties/house-4.jpg";
import house5 from "@/assets/properties/house-5.jpg";
import house6 from "@/assets/properties/house-6.jpg";

const images = [house1, house2, house3, house4, house5, house6];

export interface Property {
  id: number;
  image: string;
  gallery: string[];
  name: string;
  price: number;
  priceLabel: string;
  location: string;
  address: string;
  type: string;
  status: string;
  beds: number;
  baths: number;
  sqft: string;
  yearBuilt: number;
  garage: number;
  lotSize: string;
  description: string;
  features: string[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

export const allProperties: Property[] = [
  {
    id: 1, image: images[0],
    gallery: [images[0], images[1], images[2], images[3]],
    name: "Georgian Estate", price: 485000, priceLabel: "$485,000",
    location: "Beverly Hills, CA", address: "1234 Maple Drive, Beverly Hills, CA 90210",
    type: "house", status: "For Sale", beds: 4, baths: 3, sqft: "2,450",
    yearBuilt: 2018, garage: 2, lotSize: "0.35 acres",
    description: "This stunning Georgian estate features classic architectural lines paired with modern luxury finishes. Nestled in the heart of Beverly Hills, the home boasts expansive living spaces, hardwood floors throughout, and a gourmet chef's kitchen with premium appliances. The lush backyard includes a sparkling pool, mature landscaping, and a covered patio perfect for entertaining.",
    features: ["Hardwood Floors", "Central Air", "Swimming Pool", "Chef's Kitchen", "Walk-in Closets", "Smart Home System", "Fireplace", "Wine Cellar", "Covered Patio"],
    agent: { name: "Sarah Mitchell", phone: "(310) 555-0142", email: "sarah@nestfind.com" },
  },
  {
    id: 2, image: images[1],
    gallery: [images[1], images[2], images[3], images[4]],
    name: "Coastal Haven", price: 1250000, priceLabel: "$1,250,000",
    location: "Malibu, CA", address: "789 Pacific Coast Hwy, Malibu, CA 90265",
    type: "villa", status: "For Sale", beds: 5, baths: 4, sqft: "3,800",
    yearBuilt: 2020, garage: 3, lotSize: "0.5 acres",
    description: "Perched above the Pacific, this contemporary villa offers breathtaking ocean views from nearly every room. Floor-to-ceiling glass walls blur the line between indoor and outdoor living. The open-concept main level flows seamlessly to an infinity-edge pool and outdoor kitchen.",
    features: ["Ocean Views", "Infinity Pool", "Floor-to-Ceiling Windows", "Outdoor Kitchen", "Home Theater", "Elevator", "Solar Panels", "EV Charging", "Spa Bathroom"],
    agent: { name: "James Romano", phone: "(310) 555-0198", email: "james@nestfind.com" },
  },
  {
    id: 3, image: images[2],
    gallery: [images[2], images[3], images[4], images[5]],
    name: "Tropical Paradise", price: 2100000, priceLabel: "$2,100,000",
    location: "Miami, FL", address: "456 Palm Island Dr, Miami, FL 33139",
    type: "villa", status: "For Sale", beds: 6, baths: 5, sqft: "5,200",
    yearBuilt: 2021, garage: 3, lotSize: "0.75 acres",
    description: "This ultra-luxury villa on Palm Island embodies tropical elegance. With six spacious bedrooms, a resort-style pool, and private dock access, it's the pinnacle of waterfront living. Italian marble, custom millwork, and smart home technology are standard throughout.",
    features: ["Waterfront", "Private Dock", "Resort Pool", "Italian Marble", "Smart Home", "Summer Kitchen", "Guest Suite", "Home Gym", "Impact Windows"],
    agent: { name: "Maria Gonzalez", phone: "(305) 555-0176", email: "maria@nestfind.com" },
  },
  {
    id: 4, image: images[3],
    gallery: [images[3], images[4], images[5], images[0]],
    name: "Modern Vista", price: 875000, priceLabel: "$875,000",
    location: "Denver, CO", address: "321 Mountain View Rd, Denver, CO 80202",
    type: "house", status: "For Sale", beds: 4, baths: 3, sqft: "2,900",
    yearBuilt: 2019, garage: 2, lotSize: "0.28 acres",
    description: "A sleek modern home with panoramic mountain views. The open floor plan features soaring ceilings, a statement fireplace, and a designer kitchen. The finished basement adds extra living space with a media room and wet bar.",
    features: ["Mountain Views", "Vaulted Ceilings", "Designer Kitchen", "Finished Basement", "Media Room", "Wet Bar", "Heated Garage", "Mudroom", "Energy Efficient"],
    agent: { name: "David Chen", phone: "(720) 555-0134", email: "david@nestfind.com" },
  },
  {
    id: 5, image: images[4],
    gallery: [images[4], images[5], images[0], images[1]],
    name: "Luxe Retreat", price: 1450000, priceLabel: "$1,450,000",
    location: "Los Angeles, CA", address: "567 Sunset Blvd, Los Angeles, CA 90028",
    type: "condo", status: "For Sale", beds: 5, baths: 4, sqft: "4,100",
    yearBuilt: 2022, garage: 2, lotSize: "N/A",
    description: "This penthouse-level luxury condo offers unparalleled city views and resort-style amenities. The unit features a private terrace, custom Italian cabinetry, and Miele appliances. Building amenities include a rooftop pool, concierge, and state-of-the-art fitness center.",
    features: ["City Views", "Private Terrace", "Concierge", "Rooftop Pool", "Fitness Center", "Italian Cabinetry", "Miele Appliances", "Valet Parking", "Pet Friendly"],
    agent: { name: "Sarah Mitchell", phone: "(310) 555-0142", email: "sarah@nestfind.com" },
  },
  {
    id: 6, image: images[5],
    gallery: [images[5], images[0], images[1], images[2]],
    name: "Villa Serene", price: 925000, priceLabel: "$925,000",
    location: "San Diego, CA", address: "890 La Jolla Shores Dr, San Diego, CA 92037",
    type: "townhouse", status: "For Sale", beds: 4, baths: 3, sqft: "3,200",
    yearBuilt: 2017, garage: 2, lotSize: "0.15 acres",
    description: "A beautifully appointed townhouse steps from La Jolla Shores. This tri-level home offers ocean breezes, a rooftop deck, and high-end finishes throughout. The chef's kitchen flows to a dining area with coastal views.",
    features: ["Near Beach", "Rooftop Deck", "Ocean Breezes", "Chef's Kitchen", "Custom Lighting", "Quartz Counters", "Built-in Storage", "Tankless Water Heater", "Low HOA"],
    agent: { name: "James Romano", phone: "(310) 555-0198", email: "james@nestfind.com" },
  },
  {
    id: 7, image: images[0],
    gallery: [images[0], images[3], images[4], images[5]],
    name: "Sunset Manor", price: 3200000, priceLabel: "$3,200,000",
    location: "Santa Monica, CA", address: "1500 Ocean Ave, Santa Monica, CA 90401",
    type: "house", status: "For Sale", beds: 7, baths: 6, sqft: "6,500",
    yearBuilt: 2023, garage: 4, lotSize: "1.2 acres",
    description: "An architectural masterpiece on over an acre in Santa Monica. This newly built estate features seven bedrooms, a grand foyer, home theater, wine cellar, and a resort-style backyard with a pool, spa, and cabana.",
    features: ["New Construction", "Grand Foyer", "Home Theater", "Wine Cellar", "Pool & Spa", "Cabana", "4-Car Garage", "Smart Home", "Professional Landscaping"],
    agent: { name: "Maria Gonzalez", phone: "(305) 555-0176", email: "maria@nestfind.com" },
  },
  {
    id: 8, image: images[1],
    gallery: [images[1], images[4], images[5], images[0]],
    name: "Harbor View Apt", price: 620000, priceLabel: "$620,000",
    location: "San Francisco, CA", address: "200 Embarcadero St, San Francisco, CA 94105",
    type: "apartment", status: "For Sale", beds: 2, baths: 2, sqft: "1,200",
    yearBuilt: 2016, garage: 1, lotSize: "N/A",
    description: "A modern apartment with stunning harbor and Bay Bridge views. Features an open layout, floor-to-ceiling windows, in-unit laundry, and access to a full-service building with doorman, gym, and rooftop lounge.",
    features: ["Harbor Views", "Doorman Building", "In-Unit Laundry", "Rooftop Lounge", "Gym", "Bike Storage", "Pet Friendly", "Transit Nearby", "Secure Parking"],
    agent: { name: "David Chen", phone: "(720) 555-0134", email: "david@nestfind.com" },
  },
  {
    id: 9, image: images[2],
    gallery: [images[2], images[5], images[0], images[1]],
    name: "Parkside Condo", price: 540000, priceLabel: "$540,000",
    location: "Portland, OR", address: "45 NW Park Ave, Portland, OR 97209",
    type: "condo", status: "For Sale", beds: 3, baths: 2, sqft: "1,800",
    yearBuilt: 2015, garage: 1, lotSize: "N/A",
    description: "A bright, airy condo overlooking a lush city park. This unit features bamboo floors, a modern open kitchen, and a private balcony. Building amenities include a communal garden, bike room, and package locker.",
    features: ["Park Views", "Bamboo Floors", "Private Balcony", "Communal Garden", "Bike Room", "Package Lockers", "Energy Star", "Open Kitchen", "Ample Storage"],
    agent: { name: "Sarah Mitchell", phone: "(310) 555-0142", email: "sarah@nestfind.com" },
  },
];
