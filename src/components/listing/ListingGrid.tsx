import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Bed, Bath, Square, MapPin } from "lucide-react";
import { allProperties } from "@/data/properties";

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
          <Link
            key={property.id}
            to={`/property/${property.id}`}
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
          </Link>
        ))}
      </div>
    </>
  );
};
