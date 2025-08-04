import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ShoppingCart, Eye, Sparkles, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/landing/Footer";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  blockchain_url: string;
  featured: boolean;
}

const Collections = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Error",
        description: "Failed to load products",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product: Product) => {
    let sessionId = localStorage.getItem('cart_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem('cart_session_id', sessionId);
    }

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [
    { name: "All", count: products.length },
    { name: "Rings", count: products.filter(p => p.name.toLowerCase().includes('ring')).length },
    { name: "Necklaces", count: products.filter(p => p.name.toLowerCase().includes('necklace')).length },
    { name: "Earrings", count: products.filter(p => p.name.toLowerCase().includes('earring')).length },
    { name: "Bracelets", count: products.filter(p => p.name.toLowerCase().includes('bracelet')).length },
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
              Our Jewelry Collections
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-primary-gold mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Discover our carefully curated collection of lab-grown diamond jewelry, 
              each piece crafted with precision and sustainable practices in mind.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search jewelry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "luxury-gradient text-white" : ""}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-muted rounded-lg h-80 mb-4"></div>
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:scale-105 transition-luxury card-shadow border-0 flex flex-col h-full">
                  <CardHeader className="p-0 flex-shrink-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image_url || "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80"}
                        alt={product.name}
                        className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-luxury"
                      />
                      {product.featured && (
                        <Badge className="absolute top-3 left-3 luxury-gradient text-white text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                    <CardTitle className="font-serif text-lg sm:text-xl mb-2 line-clamp-2">{product.name}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-3 sm:mb-4 line-clamp-3 flex-grow">
                      {product.description}
                    </p>
                    <div className="text-xl sm:text-2xl font-bold text-primary-gold mt-auto">
                      ₹{product.price.toLocaleString('en-IN')}
                    </div>
                  </CardContent>
                  
                  <div className="p-4 sm:p-6 pt-0 space-y-3 flex-shrink-0">
                    <Button 
                      className="w-full luxury-gradient text-white hover:scale-105 transition-luxury text-sm sm:text-base"
                      onClick={() => addToCart(product)}
                      size="sm"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                        <Eye className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="hidden sm:inline">View </span>Details
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs sm:text-sm"
                        onClick={() => window.open(product.blockchain_url, '_blank')}
                      >
                        <span className="hidden sm:inline">Verify </span>Auth
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {!loading && filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;