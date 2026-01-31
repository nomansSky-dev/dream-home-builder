import { Quote } from "lucide-react";

export const TestimonialStatsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30 dark:bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Testimonial */}
          <div className="space-y-6">
            <Quote className="h-12 w-12 text-card-accent" />
            
            <blockquote className="font-heading text-xl md:text-2xl text-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              <span className="text-sage font-semibold"> Ut enim ad minim veniam</span>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </blockquote>

            {/* Customer Info */}
            <div className="flex items-center gap-4 pt-4">
              {/* Placeholder Avatar */}
              <div className="w-14 h-14 rounded-full bg-earthy/30 dark:bg-earthy/50 flex items-center justify-center">
                <span className="font-heading font-bold text-lg text-earthy">JD</span>
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">John Doe</p>
                <p className="text-sm text-muted-foreground">Happy Homeowner, California</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <p className="font-heading text-4xl md:text-5xl font-bold text-sage mb-2">
                1500+
              </p>
              <p className="text-muted-foreground font-medium">
                Properties Sold
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <p className="font-heading text-4xl md:text-5xl font-bold text-sage mb-2">
                1.9M+
              </p>
              <p className="text-muted-foreground font-medium">
                Happy Customers
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <p className="font-heading text-4xl md:text-5xl font-bold text-sage mb-2">
                50+
              </p>
              <p className="text-muted-foreground font-medium">
                Cities Covered
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <p className="font-heading text-4xl md:text-5xl font-bold text-sage mb-2">
                99%
              </p>
              <p className="text-muted-foreground font-medium">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
