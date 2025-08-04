import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, ArrowLeft, Shield } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { AdminDashboard } from "@/components/admin/AdminDashboard";

const Admin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: ''
  });
  
  const navigate = useNavigate();
  const { user, loading, signIn, signUp, signOut } = useAuth();

  // Show admin dashboard if user is authenticated
  if (user) {
    return <AdminDashboard user={user} onSignOut={() => signOut()} />;
  }

  const handleSubmit = async (e: React.FormEvent, isSignUp: boolean) => {
    e.preventDefault();
    
    let result;
    if (isSignUp) {
      result = await signUp(formData.email, formData.password, formData.fullName);
    } else {
      result = await signIn(formData.email, formData.password);
    }
    
    if (!result.error) {
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

        {/* Admin Auth Form */}
        <Card className="border-border/50 card-shadow">
          <CardHeader className="text-center pb-4">
            <CardTitle className="font-serif text-lg sm:text-xl">Administrator Access</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Sign in to existing admin account or create the admin account with: admin@ethela.in
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin" className="text-xs sm:text-sm">Sign In</TabsTrigger>
                <TabsTrigger value="signup" className="text-xs sm:text-sm">Create Admin</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin" className="mt-4">
                <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email" className="text-sm font-medium">Admin Email</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      placeholder="admin@ethela.in"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="text-sm sm:text-base py-2 sm:py-3"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="text-sm font-medium">Password</Label>
                    <Input
                      id="signin-password"
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
              </TabsContent>
              
              <TabsContent value="signup" className="mt-4">
                <div className="mb-4 p-3 bg-primary-gold/10 rounded-lg">
                  <p className="text-sm text-primary-gold font-medium">
                    ⚠️ Use these exact credentials to create the admin account:
                  </p>
                  <p className="text-xs mt-1">Email: admin@ethela.in</p>
                  <p className="text-xs">Password: SecureAdmin123!</p>
                </div>
                
                <form onSubmit={(e) => handleSubmit(e, true)} className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="text-sm font-medium">Full Name</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="Admin Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      className="text-sm sm:text-base py-2 sm:py-3"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-sm font-medium">Admin Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="admin@ethela.in"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="text-sm sm:text-base py-2 sm:py-3"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-sm font-medium">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="SecureAdmin123!"
                      value={formData.password}
                      onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      className="text-sm sm:text-base py-2 sm:py-3"
                      required
                      minLength={6}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full luxury-gradient text-white hover:scale-105 transition-luxury text-sm sm:text-base py-2 sm:py-3 mt-6"
                    disabled={loading}
                  >
                    {loading ? 'Creating Admin Account...' : 'Create Admin Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            First time? Use the "Create Admin" tab with the exact credentials shown above.
            This is a secure admin area for authorized personnel only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;