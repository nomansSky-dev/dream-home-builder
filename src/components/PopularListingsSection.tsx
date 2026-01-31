import { Bed, Bath, Square, ArrowRight } from "lucide-react";
import house1 from "@/assets/properties/house-1.jpg";
import house2 from "@/assets/properties/house-2.jpg";
import house3 from "@/assets/properties/house-3.jpg";
import house4 from "@/assets/properties/house-4.jpg";
import house5 from "@/assets/properties/house-5.jpg";
import house6 from "@/assets/properties/house-6.jpg";

const properties = [
  {
    id: 1,
    image: house1,
    price: "$485,000",
    address: "1234 Maple Avenue, Beverly Hills",
    beds: 4,
    baths: 3,
    sqft: "2,450",
  },
  {
    id: 2,
    image: house2,
    price: "$1,250,000",
    address: "567 Ocean View Dr, Malibu",
    beds: 5,
    baths: 4,
    sqft: "3,800",
  },
  {
    id: 3,
    image: house3,
    price: "$2,100,000",
    address: "890 Palm Boulevard, Miami",
    beds: 6,
    baths: 5,
    sqft: "5,200",
  },
  {
    id: 4,
    image: house4,
    price: "$875,000",
    address: "321 Highland Park, Denver",
    beds: 4,
    baths: 3,
    sqft: "2,900",
  },
  {
    id: 5,
    image: house5,
    price: "$1,450,000",
    address: "654 Sunset Ridge, Los Angeles",
    beds: 5,
    baths: 4,
    sqft: "4,100",
  },
  {
    id: 6,
    image: house6,
    price: "$925,000",
    address: "789 Garden Lane, San Diego",
    beds: 4,
    baths: 3,
    sqft: "3,200",
  },
];

export const PopularListingsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Popular Listings
          </h2>
          <a 
            href="#" 
            className="flex items-center gap-2 text-sm font-medium text-earthy hover:text-earthy/80 transition-colors"
          >
            See all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-card-accent transition-all duration-300 hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Light Green accent strip */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-card-accent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="font-heading text-xl font-bold text-foreground mb-2">
                  {property.price}
                </p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-1">
                  {property.address}
                </p>

                {/* Property Details */}
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
      </div>
    </section>
  );
};
