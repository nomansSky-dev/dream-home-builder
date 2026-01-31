import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { PopularListingsSection } from "@/components/PopularListingsSection";
import { PopularCountriesSection } from "@/components/PopularCountriesSection";
import { FeaturedListingSection } from "@/components/FeaturedListingSection";
import { TestimonialStatsSection } from "@/components/TestimonialStatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <PopularListingsSection />
      <PopularCountriesSection />
      <FeaturedListingSection />
      <TestimonialStatsSection />
      
      {/* Placeholder for footer */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            Footer coming soon...
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
