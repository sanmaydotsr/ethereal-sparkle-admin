import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/landing/Footer";
import BlockchainSection from "@/components/landing/BlockchainSection";
import SustainabilitySection from "@/components/landing/SustainabilitySection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Factory, Users, ArrowRight, Sparkles } from "lucide-react";

const Sustainability = () => {
  const impactStats = [
    {
      icon: Leaf,
      number: "85%",
      label: "Less Energy Used",
      description: "Compared to traditional diamond mining"
    },
    {
      icon: Recycle,
      number: "100%",
      label: "Renewable Energy",
      description: "Our labs run on clean energy sources"
    },
    {
      icon: Factory,
      number: "0",
      label: "Environmental Damage",
      description: "No land displacement or ecosystem disruption"
    },
    {
      icon: Users,
      number: "500+",
      label: "Jobs Created",
      description: "Supporting local communities in India"
    }
  ];

  const certifications = [
    {
      name: "SCS Global Services",
      description: "Certified Carbon Neutral Operations",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Green Business Network",
      description: "Sustainable Manufacturing Practices",
      logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "ISO 14001",
      description: "Environmental Management System",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-primary-gold" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6">
              Sustainability at Ethéla
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-primary-gold mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              We're committed to creating beautiful jewelry while protecting our planet. 
              Discover how our lab-grown diamonds are revolutionizing sustainable luxury in India.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">Our Environmental Impact</h2>
            <div className="w-20 sm:w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real numbers that demonstrate our commitment to sustainable practices and environmental protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="group hover:scale-105 transition-luxury border-0 card-shadow text-center">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full luxury-gradient group-hover:scale-110 transition-luxury">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-primary-gold mb-2">{stat.number}</div>
                    <h3 className="text-lg font-serif font-semibold mb-2">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Comparison */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">Lab-Grown vs. Mined Diamonds</h2>
            <div className="w-20 sm:w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mined Diamonds */}
            <Card className="border-2 border-destructive/20">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center">Traditional Mining</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <span className="text-sm">Displaces 250 tons of earth per carat</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <span className="text-sm">Uses 126 gallons of water per carat</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <span className="text-sm">Generates 57kg of carbon emissions per carat</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <span className="text-sm">Often involves community displacement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <span className="text-sm">Complex supply chain with ethical concerns</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lab-Grown Diamonds */}
            <Card className="border-2 border-primary-gold/20 luxury-gradient bg-opacity-5">
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center">Lab-Grown Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary-gold rounded-full"></div>
                    <span className="text-sm">Zero land displacement or mining</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary-gold rounded-full"></div>
                    <span className="text-sm">Minimal water usage in controlled environment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary-gold rounded-full"></div>
                    <span className="text-sm">85% lower carbon footprint</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary-gold rounded-full"></div>
                    <span className="text-sm">Creates local jobs and communities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary-gold rounded-full"></div>
                    <span className="text-sm">100% traceable supply chain</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <SustainabilitySection />

      {/* Blockchain Section */}
      <BlockchainSection />

      {/* Certifications */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">Our Certifications</h2>
            <div className="w-20 sm:w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're proud to be certified by leading environmental and sustainability organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:scale-105 transition-luxury border-0 card-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="w-16 h-16 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary-gold" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Join the Sustainable Luxury Movement
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Choose jewelry that reflects your values. Every purchase supports a more sustainable future.
          </p>
          <Button size="lg" className="luxury-gradient text-white hover:scale-105 transition-luxury">
            Shop Sustainable Diamonds
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;