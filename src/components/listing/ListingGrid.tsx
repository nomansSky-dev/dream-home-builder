import { useMemo } from "react";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import house1 from "@/assets/properties/house-1.jpg";
import house2 from "@/assets/properties/house-2.jpg";
import house3 from "@/assets/properties/house-3.jpg";
import house4 from "@/assets/properties/house-4.jpg";
import house5 from "@/assets/properties/house-5.jpg";
import house6 from "@/assets/properties/house-6.jpg";

const images = [house1, house2, house3, house4, house5, house6];

interface Property {
  id: number;
  image: string;
  name: string;
  price: number;
  priceLabel: string;
  location: string;
  type: string;
  beds: number;
  baths: number;
  sqft: string;
}

const allProperties: Property[] = [
  { id: 1, image: images[0], name: "Georgian Estate", price: 485000, priceLabel: "$485,000", location: "Beverly Hills, CA", type: "house", beds: 4, baths: 3, sqft: "2,450" },
  { id: 2, image: images[1], name: "Coastal Haven", price: 1250000, priceLabel: "$1,250,000", location: "Malibu, CA", type: "villa", beds: 5, baths: 4, sqft: "3,800" },
  { id: 3, image: images[2], name: "Tropical Paradise", price: 2100000, priceLabel: "$2,100,000", location: "Miami, FL", type: "villa", beds: 6, baths: 5, sqft: "5,200" },
  { id: 4, image: images[3], name: "Modern Vista", price: 875000, priceLabel: "$875,000", location: "Denver, CO", type: "house", beds: 4, baths: 3, sqft: "2,900" },
  { id: 5, image: images[4], name: "Luxe Retreat", price: 1450000, priceLabel: "$1,450,000", location: "Los Angeles, CA", type: "condo", beds: 5, baths: 4, sqft: "4,100" },
  { id: 6, image: images[5], name: "Villa Serene", price: 925000, priceLabel: "$925,000", location: "San Diego, CA", type: "townhouse", beds: 4, baths: 3, sqft: "3,200" },
  { id: 7, image: images[0], name: "Sunset Manor", price: 3200000, priceLabel: "$3,200,000", location: "Santa Monica, CA", type: "house", beds: 7, baths: 6, sqft: "6,500" },
  { id: 8, image: images[1], name: "Harbor View Apt", price: 620000, priceLabel: "$620,000", location: "San Francisco, CA", type: "apartment", beds: 2, baths: 2, sqft: "1,200" },
  { id: 9, image: images[2], name: "Parkside Condo", price: 540000, priceLabel: "$540,000", location: "Portland, OR", type: "condo", beds: 3, baths: 2, sqft: "1,800" },
];

interface ListingGridProps {
  filters: {
    search: string;
    type: string;
    maxPrice: number;
    beds: number;
    baths: number;
  };
  page: number;
}

export const ListingGrid = ({ filters }: ListingGridProps) => {
  const filtered = useMemo(() => {
    return allProperties.filter((p) => {
      if (filters.search && !p.location.toLowerCase().includes(filters.search.toLowerCase()) && !p.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
      if (filters.type !== "all" && p.type !== filters.type) return false;
      if (p.price > filters.maxPrice) return false;
      if (filters.beds > 0 && p.beds < filters.beds) return false;
      if (filters.baths > 0 && p.baths < filters.baths) return false;
      return true;
    });
  }, [filters]);

  if (filtered.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="font-heading text-xl font-semibold text-foreground mb-2">No properties found</p>
        <p className="text-muted-foreground text-sm">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <>
      <p className="text-sm text-muted-foreground mb-6">
        Showing <span className="font-semibold text-foreground">{filtered.length}</span> properties
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((property) => (
          <div
            key={property.id}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:border-card-accent transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={property.image}
                alt={property.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-card-accent text-card-accent-foreground text-xs font-semibold px-3 py-1 rounded-full capitalize">
                {property.type}
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-card-accent" />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                {property.name}
              </h3>
              <p className="font-heading text-xl font-bold text-sage mb-2">
                {property.priceLabel}
              </p>
              <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
                <MapPin className="h-3.5 w-3.5 text-sage" />
                <span className="line-clamp-1">{property.location}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Bed className="h-4 w-4 text-sage" />
                  <span>{property.beds} Beds</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Bath className="h-4 w-4 text-sage" />
                  <span>{property.baths} Baths</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Square className="h-4 w-4 text-sage" />
                  <span>{property.sqft} sqft</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
