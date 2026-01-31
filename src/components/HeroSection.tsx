import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-16 lg:pt-24">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Find your dream
            <br />
            <span className="text-card-accent">property</span> today
          </h1>
          
          <p className="text-white/80 text-lg mb-8 max-w-lg">
            Discover thousands of properties for sale and rent in your desired location.
          </p>

          {/* Search Card */}
          <div className="bg-card rounded-xl p-6 shadow-xl max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Location</label>
                <button className="w-full flex items-center justify-between px-4 py-3 bg-background border border-border rounded-lg text-left hover:border-sage transition-colors">
                  <span className="text-muted-foreground">Select location</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>

              {/* Property Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Property Type</label>
                <button className="w-full flex items-center justify-between px-4 py-3 bg-background border border-border rounded-lg text-left hover:border-sage transition-colors">
                  <span className="text-muted-foreground">Select type</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>

              {/* Amenities */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Amenities</label>
                <button className="w-full flex items-center justify-between px-4 py-3 bg-background border border-border rounded-lg text-left hover:border-sage transition-colors">
                  <span className="text-muted-foreground">Select amenities</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>

              {/* Max Price */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Max Price</label>
                <button className="w-full flex items-center justify-between px-4 py-3 bg-background border border-border rounded-lg text-left hover:border-sage transition-colors">
                  <span className="text-muted-foreground">Select price</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Search Button */}
            <Button 
              className="w-full font-button bg-sage hover:bg-sage/90 text-sage-foreground h-12 text-base"
            >
              <Search className="h-5 w-5 mr-2" />
              Search Properties
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
