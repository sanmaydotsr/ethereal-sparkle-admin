import { Button } from "@/components/ui/button";
import { Leaf, Heart, Users, ArrowRight } from "lucide-react";

const SustainabilitySection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary-gold/10 text-primary-gold px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Leaf className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="font-medium text-xs sm:text-sm">Sustainable Luxury</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6">
              Beauty That Cares
            </h2>
            
            <div className="w-20 sm:w-24 h-1 bg-primary-gold mb-4 sm:mb-6"></div>
            
            <p className="text-lg text-foreground font-medium mb-8 leading-relaxed">
              Our lab-grown diamonds represent more than just beauty—they're a conscious choice 
              for a sustainable future. By replicating nature's process in controlled environments, 
              we create stunning gems while preserving our planet's precious resources.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary-gold/10 flex-shrink-0">
                  <Leaf className="h-5 w-5 text-primary-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold mb-2">Environmental Impact</h3>
                  <p className="text-foreground">
                    Lab-grown diamonds use 85% less energy and virtually no water compared to mined alternatives.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary-gold/10 flex-shrink-0">
                  <Heart className="h-5 w-5 text-primary-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold mb-2">Ethical Sourcing</h3>
                  <p className="text-foreground">
                    Every diamond is created ethically, ensuring no communities are displaced or exploited.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary-gold/10 flex-shrink-0">
                  <Users className="h-5 w-5 text-primary-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold mb-2">Artisan Support</h3>
                  <p className="text-foreground">
                    We partner with skilled craftspeople, ensuring fair wages and celebrating traditional techniques.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="luxury-gradient text-white hover:scale-105 transition-luxury">
              Learn More About Our Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 luxury-gradient rounded-2xl transform rotate-3 opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden card-shadow">
              <img
                src="/lovable-uploads/7f99e987-6a55-4f16-a382-bc2de3cf00cf.png"
                alt="Advanced lab technology creating sustainable diamonds"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="font-medium text-sm">
                      Creating sustainable diamonds with advanced technology
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;