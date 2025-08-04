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
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground">
          Eternal Shine.
          <span className="block text-primary-gold">Ethical Origins.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover lab-grown diamonds that capture nature's brilliance while honoring your values. 
          Every stone tells a story of innovation, sustainability, and timeless beauty.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="luxury-gradient text-white hover:scale-105 transition-luxury luxury-shadow text-lg px-8 py-4"
          >
            Explore the Collection
            <ShoppingCart className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-luxury text-lg px-8 py-4"
          >
            Learn Our Story
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-gold rounded-full" />
            <span>Certified Authentic</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-gold rounded-full" />
            <span>Ethically Sourced</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary-gold rounded-full" />
            <span>Lifetime Warranty</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;