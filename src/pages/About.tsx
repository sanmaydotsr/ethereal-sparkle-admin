import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Target, Award, Heart, Zap, Shield } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/landing/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Ethical Sourcing",
      description: "Every diamond is created in our labs with zero environmental impact and complete transparency."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We leverage cutting-edge technology to create diamonds that are identical to natural ones."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Blockchain verification ensures complete traceability of every piece we create."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Our lab-grown diamonds meet the highest international standards for brilliance and clarity."
    }
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Gemologist",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
      description: "15+ years in gemology and sustainable jewelry design"
    },
    {
      name: "Arjun Mehta",
      role: "Technology Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      description: "Leading expert in diamond synthesis technology"
    },
    {
      name: "Kavita Agarwal",
      role: "Sustainability Officer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      description: "Environmental science background with focus on ethical manufacturing"
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
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary-gold" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6">
              About Ethéla
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-primary-gold mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              We're pioneering the future of luxury jewelry in India through sustainable lab-grown diamonds, 
              combining traditional craftsmanship with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2024, Ethéla emerged from a vision to revolutionize India's jewelry industry. 
                  We saw an opportunity to create stunning diamonds without the environmental and ethical 
                  concerns associated with traditional mining.
                </p>
                <p>
                  Our founders, a team of gemologists, technologists, and sustainability experts, came together 
                  with a shared mission: to create jewelry that honors both tradition and innovation. 
                  Today, we're proud to serve customers across India with lab-grown diamonds that are 
                  indistinguishable from mined diamonds in every way except their origin.
                </p>
                <p>
                  Every piece of Ethéla jewelry tells a story of conscious luxury, where beauty meets 
                  responsibility, and where the brilliance of our diamonds matches the brightness of our future.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?auto=format&fit=crop&w=800&q=80"
                alt="Ethéla jewelry workshop"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="border-0 card-shadow">
              <CardContent className="p-6 lg:p-8 text-center">
                <Target className="h-12 w-12 text-primary-gold mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize luxury by making stunning, ethically-created diamonds accessible to 
                  every Indian family, while setting new standards for sustainability in the jewelry industry.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 card-shadow">
              <CardContent className="p-6 lg:p-8 text-center">
                <Zap className="h-12 w-12 text-primary-gold mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become India's most trusted luxury jewelry brand, known for innovation, transparency, 
                  and our commitment to creating a more sustainable future for the jewelry industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">Our Values</h2>
            <div className="w-20 sm:w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from the diamonds we create to the relationships we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:scale-105 transition-luxury border-0 card-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full luxury-gradient group-hover:scale-110 transition-luxury">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-serif font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">Meet Our Team</h2>
            <div className="w-20 sm:w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in gemology, 
              technology, and sustainable practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:scale-105 transition-luxury border-0 card-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-gold font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
            Ready to Experience Ethéla?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Discover the perfect piece that reflects your values and style.
          </p>
          <Button size="lg" className="luxury-gradient text-white hover:scale-105 transition-luxury">
            Explore Our Collections
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;