import HeroSection from "@/components/landing/HeroSection";
import FeaturedProducts from "@/components/landing/FeaturedProducts";
import BlockchainSection from "@/components/landing/BlockchainSection";
import SustainabilitySection from "@/components/landing/SustainabilitySection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <BlockchainSection />
      <SustainabilitySection />
      <Footer />
    </div>
  );
};

export default Index;
