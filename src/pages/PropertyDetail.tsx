import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Bed, Bath, Square, MapPin, Calendar, Car, LandPlot,
  Phone, Mail, ChevronLeft, ChevronRight, Home,
} from "lucide-react";
import { useState } from "react";
import { allProperties } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = allProperties.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-28 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground">Property Not Found</h1>
          <Link to="/listing" className="text-accent underline mt-4 inline-block">Back to Listings</Link>
        </div>
      </div>
    );
  }

  const similarProperties = allProperties.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[28rem] md:h-[32rem] overflow-hidden">
        <img
          src={property.gallery[activeImage]}
          alt={property.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />

        {/* Nav arrows */}
        <button
          onClick={() => setActiveImage((prev) => (prev === 0 ? property.gallery.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur p-2 rounded-full hover:bg-card transition"
        >
          <ChevronLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={() => setActiveImage((prev) => (prev === property.gallery.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur p-2 rounded-full hover:bg-card transition"
        >
          <ChevronRight className="h-5 w-5 text-foreground" />
        </button>

        {/* Overlay info */}
        <div className="absolute bottom-8 left-8 right-8 text-primary-foreground">
          <div className="flex items-center gap-2 mb-2">
            <Link to="/listing" className="text-sm hover:underline opacity-80 flex items-center gap-1">
              <Home className="h-3.5 w-3.5" /> Listings
            </Link>
            <span className="opacity-50">/</span>
            <span className="text-sm">{property.name}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-2">{property.name}</h1>
          <div className="flex flex-wrap items-center gap-4 text-base font-body">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{property.location}</span>
            <span className="flex items-center gap-1.5"><Bed className="h-4 w-4" />{property.beds} Beds</span>
            <span className="flex items-center gap-1.5"><Bath className="h-4 w-4" />{property.baths} Baths</span>
            <span className="flex items-center gap-1.5"><Square className="h-4 w-4" />{property.sqft} sqft</span>
          </div>
        </div>
      </section>

      {/* Thumbnail strip */}
      <div className="container mx-auto px-4 -mt-6 relative z-10">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {property.gallery.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition ${
                idx === activeImage ? "border-accent" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          {/* Left column */}
          <div className="space-y-10">
            {/* Description */}
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">About This Property</h2>
              <p className="font-body text-muted-foreground leading-relaxed">{property.description}</p>
            </section>

            {/* Key Details */}
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Key Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Bed, label: "Bedrooms", value: property.beds },
                  { icon: Bath, label: "Bathrooms", value: property.baths },
                  { icon: Square, label: "Area", value: `${property.sqft} sqft` },
                  { icon: Calendar, label: "Year Built", value: property.yearBuilt },
                  { icon: Car, label: "Garage", value: `${property.garage}-Car` },
                  { icon: LandPlot, label: "Lot Size", value: property.lotSize },
                ].map((detail) => (
                  <Card key={detail.label} className="p-4 flex items-center gap-3 bg-card border-border">
                    <div className="p-2 rounded-lg bg-card-accent/30">
                      <detail.icon className="h-5 w-5 text-sage" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{detail.label}</p>
                      <p className="font-heading font-semibold text-foreground">{detail.value}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {property.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Map placeholder */}
            <section>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Location</h2>
              <Card className="aspect-video bg-muted/30 flex items-center justify-center border-border">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-10 w-10 mx-auto mb-2 text-sage" />
                  <p className="font-heading font-medium">{property.address}</p>
                  <p className="text-xs mt-1">Map integration coming soon</p>
                </div>
              </Card>
            </section>
          </div>

          {/* Right column — Sticky Summary */}
          <div>
            <Card className="sticky top-24 p-6 border-border shadow-lg space-y-5">
              <div>
                <Badge className="bg-card-accent text-card-accent-foreground capitalize mb-3">{property.type}</Badge>
                <p className="font-heading text-3xl font-bold text-accent">{property.priceLabel}</p>
                <p className="text-sm text-muted-foreground mt-1">{property.status}</p>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-primary-foreground font-button rounded-full">
                Schedule a Tour
              </Button>

              {/* Agent */}
              <div className="p-4 bg-muted/20 rounded-lg space-y-2">
                <p className="font-heading font-semibold text-foreground">{property.agent.name}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-sage" />{property.agent.phone}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-sage" />{property.agent.email}</p>
              </div>

              {/* Lead Form */}
              <div className="space-y-3 pt-2 border-t border-border">
                <p className="font-heading font-semibold text-foreground text-sm">Send a Message</p>
                <Input placeholder="Your Name" className="bg-background" />
                <Input placeholder="Your Email" type="email" className="bg-background" />
                <Textarea placeholder="I'm interested in this property..." className="bg-background resize-none" rows={3} />
                <Button className="w-full bg-sage hover:bg-sage/90 text-sage-foreground font-button rounded-full">
                  Send Message
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Similar Listings */}
      <section className="bg-muted/10 py-12">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProperties.map((p) => (
              <Link key={p.id} to={`/property/${p.id}`} className="group">
                <Card className="overflow-hidden border-border hover:border-card-accent transition-all hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <span className="absolute top-3 left-3 bg-card-accent text-card-accent-foreground text-xs font-semibold px-3 py-1 rounded-full capitalize">{p.type}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading font-semibold text-foreground">{p.name}</h3>
                    <p className="font-heading text-lg font-bold text-sage">{p.priceLabel}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1"><MapPin className="h-3 w-3" />{p.location}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;
