import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Globe, CheckCircle } from "lucide-react";

const BlockchainSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Certified Origin",
      description: "Every diamond's journey from lab to jewelry is documented and verified on the blockchain, ensuring complete transparency.",
    },
    {
      icon: Award,
      title: "Designer Royalty",
      description: "Support the artisans and designers behind each piece. Our blockchain tracks and fairly compensates creators.",
    },
    {
      icon: Globe,
      title: "Traceable Journey",
      description: "Follow your diamond's path from creation to your hands. View detailed records of each step in the process.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-gold/10 text-primary-gold px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
            <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="font-medium text-xs sm:text-sm">Blockchain Verified</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6">
            Unprecedented Transparency
          </h2>
          
          <div className="w-20 sm:w-24 h-1 bg-primary-gold mx-auto mb-4 sm:mb-6"></div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            In an age where authenticity matters more than ever, Ethéla leverages cutting-edge blockchain 
            technology to provide complete transparency in diamond certification. Every stone comes with 
            an immutable digital certificate that you can verify instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:scale-105 transition-luxury card-shadow border-0">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full luxury-gradient group-hover:scale-110 transition-luxury">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-serif font-semibold mb-4">{feature.title}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Flow */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-serif font-bold text-center mb-8">
            How It Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Lab Creation", desc: "Diamond grown in controlled lab environment" },
              { step: "02", title: "Quality Assessment", desc: "Certified by independent gemologists" },
              { step: "03", title: "Blockchain Registration", desc: "Immutable certificate created on blockchain" },
              { step: "04", title: "Your Verification", desc: "Scan QR code to view complete history" },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full luxury-gradient text-white flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-luxury">
                    {item.step}
                  </div>
                </div>
                <h4 className="font-serif font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainSection;