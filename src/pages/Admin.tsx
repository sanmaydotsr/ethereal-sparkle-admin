import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, ArrowLeft, Shield } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Admin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();
  const { user, loading, signIn } = useAuth();

  useEffect(() => {
    // Redirect authenticated users to main page
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn(formData.email, formData.password);
    
    if (!result.error) {
      // Additional admin verification could be added here
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 hover:bg-muted text-sm sm:text-base"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Store
          </Button>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="p-3 rounded-full luxury-gradient">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary-gold" />
            <span className="text-xl sm:text-2xl font-serif font-bold">Ethéla</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-serif font-bold mb-2">Admin Portal</h1>
          <p className="text-muted-foreground text-sm sm:text-base px-4">
            Secure access to manage your luxury jewelry collection
          </p>
        </div>

        {/* Admin Login Form */}
        <Card className="border-border/50 card-shadow">
          <CardHeader className="text-center pb-4">
            <CardTitle className="font-serif text-lg sm:text-xl">Administrator Access</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Enter your admin credentials to manage products, orders, and content
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="admin-email" className="text-sm font-medium">Admin Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  placeholder="admin@ethela.in"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="text-sm sm:text-base py-2 sm:py-3"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="admin-password" className="text-sm font-medium">Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  placeholder="Enter your secure password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="text-sm sm:text-base py-2 sm:py-3"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full luxury-gradient text-white hover:scale-105 transition-luxury text-sm sm:text-base py-2 sm:py-3 mt-6"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Access Admin Portal'}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            This is a secure admin area. Only authorized personnel can access 
            the management dashboard and inventory system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;