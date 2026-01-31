import { Button } from "@/components/ui/button";
import { ChevronDown, Search, MapPin, Building, Bed, Bath, Square, DollarSign } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[650px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full">
        <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between min-h-[600px] lg:min-h-[650px] py-12 gap-8">
          
          {/* Left Side - Headline */}
          <div className="lg:self-end lg:pb-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Buy, Rent & Sell
              <br />
              Property
            </h1>
            <Button 
              className="font-button bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8"
            >
              Explore All Properties
            </Button>
          </div>

          {/* Right Side - Search Card */}
          <div className="w-full lg:w-auto lg:max-w-sm bg-card/50 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
            {/* Card Header */}
            <div className="mb-5">
              <h2 className="font-heading text-xl font-bold text-foreground">
                Finding your Best Property
              </h2>
              <p className="text-muted-foreground text-sm">What you want!</p>
            </div>

            {/* Location */}
            <div className="space-y-2 mb-4">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</label>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-lg text-left hover:border-sage transition-colors">
                <MapPin className="h-4 w-4 text-sage" />
                <span className="text-foreground">Brisbane, Australia</span>
              </button>
            </div>

            {/* Property Type */}
            <div className="space-y-2 mb-4">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Property Type</label>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-lg text-left hover:border-sage transition-colors">
                <Building className="h-4 w-4 text-sage" />
                <span className="text-foreground">Apartment Name</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground ml-auto" />
              </button>
            </div>

            {/* Specs Row */}
            <div className="flex gap-2 mb-4">
              <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-background border border-border rounded-lg text-sm hover:border-sage transition-colors">
                <Bed className="h-4 w-4 text-sage" />
                <span className="text-foreground">3 Beds</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-background border border-border rounded-lg text-sm hover:border-sage transition-colors">
                <Bath className="h-4 w-4 text-sage" />
                <span className="text-foreground">4 showers</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 bg-background border border-border rounded-lg text-sm hover:border-sage transition-colors">
                <Square className="h-4 w-4 text-sage" />
                <span className="text-foreground">6 x 3 m2</span>
              </button>
            </div>

            {/* Max Price */}
            <div className="space-y-2 mb-5">
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Max Price</label>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-lg text-left hover:border-sage transition-colors">
                <DollarSign className="h-4 w-4 text-sage" />
                <span className="text-foreground">799.00 max</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground ml-auto" />
              </button>
            </div>

            {/* Search Button - using Soft Gold #D5AA9F */}
            <Button 
              className="w-full font-button bg-accent hover:bg-accent/90 text-accent-foreground h-12 text-base"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
