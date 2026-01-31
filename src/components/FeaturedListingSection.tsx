import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, MapPin, ArrowRight } from "lucide-react";
import featuredImg from "@/assets/featured-listing.jpg";

export const FeaturedListingSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Featured Listing
        </h2>

        {/* Featured Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={featuredImg}
              alt="Palmstone Residences"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            {/* Badge */}
            <div className="absolute top-4 left-4 bg-card-accent text-card-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
              Featured
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sage font-medium text-sm uppercase tracking-wider mb-2">
                Premium Property
              </p>
              <h3 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Palmstone Residences
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-sage" />
                <span>1847 Oak Valley Drive, Lake Forest, Illinois</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Experience luxury living at its finest in this stunning prairie-style estate. 
              Nestled among mature trees, this architectural masterpiece features stone and 
              wood craftsmanship, expansive windows, and serene natural surroundings.
            </p>

            {/* Property Details */}
            <div className="flex flex-wrap gap-6 py-4 border-y border-border">
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-sage" />
                <span className="text-foreground font-medium">5 Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-sage" />
                <span className="text-foreground font-medium">4 Bathrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Square className="h-5 w-5 text-sage" />
                <span className="text-foreground font-medium">4,850 sqft</span>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div>
                <p className="text-sm text-muted-foreground">Starting from</p>
                <p className="font-heading text-3xl font-bold text-foreground">
                  $2,450,000
                </p>
              </div>
              <Button 
                className="font-button bg-sage hover:bg-sage/90 text-sage-foreground h-12 px-8"
              >
                View Property
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
