import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import australiaImg from "@/assets/countries/australia.jpg";
import newZealandImg from "@/assets/countries/new-zealand.jpg";
import canadaImg from "@/assets/countries/canada.jpg";
import usaImg from "@/assets/countries/usa.jpg";

const countries = [
  { id: 1, name: "Australia", image: australiaImg, listings: 1243 },
  { id: 2, name: "New Zealand", image: newZealandImg, listings: 856 },
  { id: 3, name: "Canada", image: canadaImg, listings: 2105 },
  { id: 4, name: "USA", image: usaImg, listings: 4521 },
  { id: 5, name: "United Kingdom", image: australiaImg, listings: 3421 },
  { id: 6, name: "Germany", image: newZealandImg, listings: 1876 },
  { id: 7, name: "France", image: canadaImg, listings: 2345 },
  { id: 8, name: "Spain", image: usaImg, listings: 1654 },
  { id: 9, name: "Italy", image: australiaImg, listings: 1432 },
  { id: 10, name: "Japan", image: newZealandImg, listings: 987 },
];

const VISIBLE_COUNT = 4;

export const PopularCountriesSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + VISIBLE_COUNT < countries.length;

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

  const visibleCountries = countries.slice(startIndex, startIndex + VISIBLE_COUNT);

  return (
    <section className="py-16 lg:py-24 bg-secondary/30 dark:bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Popular Countries
        </h2>

        {/* Countries Carousel */}
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={!canGoLeft}
            className="flex-shrink-0 w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous countries"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>

          {/* Countries */}
          <div className="flex-1 flex justify-center gap-8 lg:gap-12 overflow-hidden">
            {visibleCountries.map((country) => (
              <a
                key={country.id}
                href="#"
                className="group flex flex-col items-center transition-all duration-300 ease-out"
              >
                {/* Circular Image */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-card-accent group-hover:border-sage transition-colors duration-300 shadow-lg">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                </div>
                
                {/* Country Info */}
                <div className="mt-4 text-center">
                  <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-sage transition-colors">
                    {country.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {country.listings.toLocaleString()} listings
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={!canGoRight}
            className="flex-shrink-0 w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next countries"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};
