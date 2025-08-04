import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Stay Connected with Ethéla
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be the first to discover new collections, exclusive offers, and stories 
            behind our sustainable luxury jewelry.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button className="luxury-gradient text-white hover:scale-105 transition-luxury">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Separator />
        
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary-gold" />
              <span className="text-2xl font-serif font-bold">Ethéla</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Crafting sustainable luxury through lab-grown diamonds and 
              blockchain transparency. Where innovation meets timeless beauty.
            </p>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="hover:bg-primary-gold hover:text-white transition-luxury">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="hover:bg-primary-gold hover:text-white transition-luxury">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="hover:bg-primary-gold hover:text-white transition-luxury">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Collections */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Collections</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary-gold transition-colors">Engagement Rings</a></li>
              <li><a href="#" className="hover:text-primary-gold transition-colors">Wedding Collections</a></li>
              <li><a href="#" className="hover:text-primary-gold transition-colors">Festival Jewelry</a></li>
              <li><a href="#" className="hover:text-primary-gold transition-colors">Earrings</a></li>
              <li><a href="#" className="hover:text-primary-gold transition-colors">Bracelets</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-gold transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-primary-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary-gold transition-colors">Blockchain Verification</a></li>
              <li><a href="#" className="hover:text-primary-gold transition-colors">Careers</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-gold flex-shrink-0" />
                <span>contact@ethela.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-gold flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary-gold flex-shrink-0 mt-0.5" />
                <span>123 Jewelry Street, Karol Bagh<br />New Delhi, Delhi 110005</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator />
        
        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © 2024 Ethéla. All rights reserved. | Made in India
          </div>
          <div className="flex flex-wrap gap-6 text-center">
            <a href="#" className="hover:text-primary-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-gold transition-colors">Shipping & Returns</a>
            <a href="#" className="hover:text-primary-gold transition-colors">GST Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;