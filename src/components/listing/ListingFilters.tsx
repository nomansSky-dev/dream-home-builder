import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface Filters {
  search: string;
  type: string;
  minPrice: number;
  maxPrice: number;
  beds: number;
  baths: number;
}

interface ListingFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

const propertyTypes = ["All", "House", "Apartment", "Condo", "Villa", "Townhouse"];
const bedOptions = [0, 1, 2, 3, 4, 5];
const bathOptions = [0, 1, 2, 3, 4];

export const ListingFilters = ({ filters, onFilterChange }: ListingFiltersProps) => {
  const update = (partial: Partial<Filters>) =>
    onFilterChange({ ...filters, ...partial });

  return (
    <aside className="lg:sticky lg:top-24 h-fit bg-card border border-border rounded-xl p-6 space-y-6">
      <h2 className="font-heading text-lg font-semibold text-foreground">Filters</h2>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search by location..."
          value={filters.search}
          onChange={(e) => update({ search: e.target.value })}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Property Type */}
      <div>
        <label className="font-heading text-sm font-medium text-foreground mb-2 block">
          Property Type
        </label>
        <div className="flex flex-wrap gap-2">
          {propertyTypes.map((type) => (
            <button
              key={type}
              onClick={() => update({ type: type.toLowerCase() })}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filters.type === type.toLowerCase()
                  ? "bg-sage text-sage-foreground"
                  : "bg-muted/40 text-muted-foreground hover:bg-muted"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="font-heading text-sm font-medium text-foreground mb-2 block">
          Max Price
        </label>
        <Slider
          defaultValue={[filters.maxPrice]}
          max={5000000}
          step={50000}
          onValueChange={([val]) => update({ maxPrice: val })}
          className="mb-2"
        />
        <p className="text-xs text-muted-foreground">
          Up to ${(filters.maxPrice / 1000000).toFixed(1)}M
        </p>
      </div>

      {/* Beds */}
      <div>
        <label className="font-heading text-sm font-medium text-foreground mb-2 block">
          Bedrooms
        </label>
        <div className="flex gap-2">
          {bedOptions.map((n) => (
            <button
              key={n}
              onClick={() => update({ beds: n })}
              className={`w-9 h-9 rounded-lg text-xs font-medium transition-colors ${
                filters.beds === n
                  ? "bg-sage text-sage-foreground"
                  : "bg-muted/40 text-muted-foreground hover:bg-muted"
              }`}
            >
              {n === 0 ? "Any" : `${n}+`}
            </button>
          ))}
        </div>
      </div>

      {/* Baths */}
      <div>
        <label className="font-heading text-sm font-medium text-foreground mb-2 block">
          Bathrooms
        </label>
        <div className="flex gap-2">
          {bathOptions.map((n) => (
            <button
              key={n}
              onClick={() => update({ baths: n })}
              className={`w-9 h-9 rounded-lg text-xs font-medium transition-colors ${
                filters.baths === n
                  ? "bg-sage text-sage-foreground"
                  : "bg-muted/40 text-muted-foreground hover:bg-muted"
              }`}
            >
              {n === 0 ? "Any" : `${n}+`}
            </button>
          ))}
        </div>
      </div>

      <Button
        className="w-full font-button bg-accent hover:bg-accent/90 text-accent-foreground"
        onClick={() =>
          onFilterChange({
            search: "",
            type: "all",
            minPrice: 0,
            maxPrice: 5000000,
            beds: 0,
            baths: 0,
          })
        }
      >
        Reset Filters
      </Button>
    </aside>
  );
};
