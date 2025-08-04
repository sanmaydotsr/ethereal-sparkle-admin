import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { ShoppingCart, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  blockchain_url: string;
  featured: boolean;
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('featured', true)
        .limit(4);

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
    // Get or create session ID for cart
    let sessionId = localStorage.getItem('cart_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem('cart_session_id', sessionId);
    }

    // Add to cart logic here
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Featured Collection</h2>
            <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted rounded-lg h-80 mb-4"></div>
                <div className="h-4 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Featured Collection</h2>
          <div className="w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-foreground font-medium max-w-2xl mx-auto px-4">
            Handpicked pieces that showcase the perfect harmony of innovation and elegance. 
            Each diamond is certified and traceable through blockchain technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:scale-105 transition-luxury card-shadow border-0 flex flex-col h-full">
              <CardHeader className="p-0 flex-shrink-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image_url || "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80"}
                    alt={product.name}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-luxury"
                  />
                  <Badge className="absolute top-3 left-3 luxury-gradient text-white text-xs">
                    Featured
                  </Badge>
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
        
        {products.length === 0 && (
          <div className="text-center py-8 sm:py-12 col-span-full">
            <p className="text-muted-foreground text-sm sm:text-base">No featured products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;