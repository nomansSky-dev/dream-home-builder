const companyLogos = [
  { name: "TechCorp", initials: "TC" },
  { name: "BuildPro", initials: "BP" },
  { name: "HomeMax", initials: "HM" },
  { name: "RealtyOne", initials: "R1" },
  { name: "PropTech", initials: "PT" },
  { name: "EstateHub", initials: "EH" },
];

export const TrustedBySection = () => {
  return (
    <section className="py-12 lg:py-16 bg-secondary/30 dark:bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-muted-foreground font-medium mb-8">
          Trusted by over <span className="text-foreground font-semibold">150+</span> major companies
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {companyLogos.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {/* Placeholder logo circle */}
              <div className="w-10 h-10 rounded-full bg-earthy/20 dark:bg-earthy/30 flex items-center justify-center">
                <span className="font-heading font-bold text-sm text-earthy">
                  {company.initials}
                </span>
              </div>
              <span className="font-heading font-semibold text-sm">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
