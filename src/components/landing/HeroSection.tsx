import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=80"
          alt="Elegant diamond jewelry"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center">
          <Sparkles className="h-12 w-12 text-primary-gold animate-pulse" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-foreground leading-tight">
          Eternal Shine.
          <span className="block text-primary-gold">Ethical Origins.</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed px-4">
          Discover lab-grown diamonds that capture nature's brilliance while honoring your values. 
          Perfect for Indian traditions and modern sensibilities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Button 
            size="lg" 
            className="luxury-gradient text-white hover:scale-105 transition-luxury luxury-shadow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
          >
            Explore the Collection
            <ShoppingCart className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-luxury text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
          >
            Learn Our Story
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-sm text-muted-foreground px-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-primary-gold rounded-full" />
            <span>Certified Authentic</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-primary-gold rounded-full" />
            <span>Made in India</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-primary-gold rounded-full" />
            <span>Lifetime Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;