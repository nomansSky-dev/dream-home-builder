import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const companies = [
  "Company 1",
  "Company 2", 
  "Company 3",
  "Company 4",
  "Company 5",
  "Company 6",
  "Company 7",
  "Company 8",
  "Company 9",
  "Company 10",
];

const VISIBLE_COUNT = 5;

export const TrustedBySection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + VISIBLE_COUNT < companies.length;

  const handlePrev = () => {
    if (canGoLeft) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (canGoRight) {
      setStartIndex(startIndex + 1);
    }
  };

  const visibleCompanies = companies.slice(startIndex, startIndex + VISIBLE_COUNT);

  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Row: Title + Description */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          {/* Left - Title */}
          <div className="lg:w-1/3">
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground leading-tight">
              Trusted by XXXX+
              <br />
              companies
            </h2>
          </div>

          {/* Right - Description + Buttons */}
          <div className="lg:w-1/2">
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </p>
            <div className="flex gap-3">
              <Button className="font-button bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                More Listing
              </Button>
              <Button 
                variant="outline" 
                className="font-button border-border text-foreground hover:bg-muted rounded-full px-6"
              >
                More Listing --&gt;
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Row: Company Carousel with Arrows */}
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={!canGoLeft}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous companies"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          {/* Companies */}
          <div className="flex-1 flex items-center justify-between overflow-hidden">
            {visibleCompanies.map((company) => (
              <div
                key={company}
                className="flex-1 text-center px-2"
              >
                <span className="font-heading font-semibold text-sm lg:text-base text-foreground">
                  {company}
                </span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={!canGoRight}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next companies"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};
