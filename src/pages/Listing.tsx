import { useState } from "react";
import { Header } from "@/components/Header";
import { ListingFilters } from "@/components/listing/ListingFilters";
import { ListingGrid } from "@/components/listing/ListingGrid";
import { ListingPagination } from "@/components/listing/ListingPagination";

const Listing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    minPrice: 0,
    maxPrice: 5000000,
    beds: 0,
    baths: 0,
  });
  const totalPages = 10;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Banner */}
      <section className="bg-primary pt-28 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
            Property Listings
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto">
            Browse our curated collection of premium properties across the globe
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <ListingFilters filters={filters} onFilterChange={setFilters} />
          <div>
            <ListingGrid filters={filters} page={currentPage} />
            <ListingPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
