import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Placeholder content - will be replaced with sections */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
            Find your dream property today
          </h1>
          <p className="text-muted-foreground">
            More sections coming soon...
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
