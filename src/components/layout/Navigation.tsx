import { Button } from "@/components/ui/button";
import { Sparkles, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserAuthModal from "@/components/auth/UserAuthModal";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-primary-gold" />
            <span className="text-lg sm:text-xl lg:text-2xl font-serif font-bold">Ethéla</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="/collections" className="text-sm xl:text-base text-foreground hover:text-primary-gold transition-colors">Collections</a>
            <a href="/about" className="text-sm xl:text-base text-foreground hover:text-primary-gold transition-colors">About</a>
            <a href="/sustainability" className="text-sm xl:text-base text-foreground hover:text-primary-gold transition-colors">Sustainability</a>
            <a href="/contact" className="text-sm xl:text-base text-foreground hover:text-primary-gold transition-colors">Contact</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-3">
            <Button variant="ghost" size="sm" className="relative p-2">
              <ShoppingCart className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="absolute -top-1 -right-1 bg-primary-gold text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Button>
            
            <UserAuthModal />
          </div>

          {/* Mobile Actions */}
          <div className="sm:hidden flex items-center gap-2">
            <Button variant="ghost" size="sm" className="relative p-2">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-primary-gold text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </Button>
            
            <UserAuthModal />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden border-t border-border bg-background/98 backdrop-blur-sm">
            <div className="py-3 space-y-1">
              <a href="/collections" className="block px-4 py-3 text-sm text-foreground hover:text-primary-gold hover:bg-muted/50 transition-colors rounded-md mx-2" onClick={() => setIsMenuOpen(false)}>Collections</a>
              <a href="/about" className="block px-4 py-3 text-sm text-foreground hover:text-primary-gold hover:bg-muted/50 transition-colors rounded-md mx-2" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="/sustainability" className="block px-4 py-3 text-sm text-foreground hover:text-primary-gold hover:bg-muted/50 transition-colors rounded-md mx-2" onClick={() => setIsMenuOpen(false)}>Sustainability</a>
              <a href="/contact" className="block px-4 py-3 text-sm text-foreground hover:text-primary-gold hover:bg-muted/50 transition-colors rounded-md mx-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
              
              {/* No admin button in mobile menu anymore */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;