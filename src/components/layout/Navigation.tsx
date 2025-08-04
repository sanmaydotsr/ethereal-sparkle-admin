import { Button } from "@/components/ui/button";
import { Sparkles, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary-gold" />
            <span className="text-xl sm:text-2xl font-serif font-bold">Ethéla</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#collections" className="text-foreground hover:text-primary-gold transition-colors">Collections</a>
            <a href="#about" className="text-foreground hover:text-primary-gold transition-colors">About</a>
            <a href="#sustainability" className="text-foreground hover:text-primary-gold transition-colors">Sustainability</a>
            <a href="#contact" className="text-foreground hover:text-primary-gold transition-colors">Contact</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary-gold text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/auth')}
              className="border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-white"
            >
              <User className="mr-2 h-4 w-4" />
              Admin
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center gap-2">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary-gold text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden border-t border-border bg-background">
            <div className="py-4 space-y-4">
              <a href="#collections" className="block px-4 py-2 text-foreground hover:text-primary-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Collections</a>
              <a href="#about" className="block px-4 py-2 text-foreground hover:text-primary-gold transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#sustainability" className="block px-4 py-2 text-foreground hover:text-primary-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Sustainability</a>
              <a href="#contact" className="block px-4 py-2 text-foreground hover:text-primary-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <div className="px-4 py-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    navigate('/auth');
                    setIsMenuOpen(false);
                  }}
                  className="w-full border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-white"
                >
                  <User className="mr-2 h-4 w-4" />
                  Admin Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;