import australiaImg from "@/assets/countries/australia.jpg";
import newZealandImg from "@/assets/countries/new-zealand.jpg";
import canadaImg from "@/assets/countries/canada.jpg";
import usaImg from "@/assets/countries/usa.jpg";

const countries = [
  {
    id: 1,
    name: "Australia",
    image: australiaImg,
    listings: 1243,
  },
  {
    id: 2,
    name: "New Zealand",
    image: newZealandImg,
    listings: 856,
  },
  {
    id: 3,
    name: "Canada",
    image: canadaImg,
    listings: 2105,
  },
  {
    id: 4,
    name: "USA",
    image: usaImg,
    listings: 4521,
  },
];

export const PopularCountriesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30 dark:bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Popular Countries
        </h2>

        {/* Countries Grid */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {countries.map((country) => (
            <a
              key={country.id}
              href="#"
              className="group flex flex-col items-center"
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
      </div>
    </section>
  );
};
