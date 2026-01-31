import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { PopularListingsSection } from "@/components/PopularListingsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <PopularListingsSection />
      
      {/* Placeholder for more sections */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <p className="text-muted-foreground">
            More sections coming soon...
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
