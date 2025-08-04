import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, LogOut, UserCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface UserAuthModalProps {
  trigger?: React.ReactNode;
}

const UserAuthModal = ({ trigger }: UserAuthModalProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: ''
  });
  
  const { user, loading, signIn, signUp, signOut } = useAuth();

  const handleSubmit = async (e: React.FormEvent, isSignUp: boolean) => {
    e.preventDefault();
    
    let result;
    if (isSignUp) {
      result = await signUp(formData.email, formData.password, formData.fullName);
    } else {
      result = await signIn(formData.email, formData.password);
    }

    if (!result.error) {
      setOpen(false);
      setFormData({ email: '', password: '', fullName: '' });
    }
  };

  const handleSignOut = async () => {
    await signOut();
    setOpen(false);
  };

  // If user is logged in, show user menu
  if (user) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger || (
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <UserCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Account</span>
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif">My Account</DialogTitle>
            <DialogDescription>
              Welcome back, {user.email}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <UserCircle className="h-8 w-8 text-primary-gold" />
              <div>
                <p className="font-medium text-sm">{user.email}</p>
                <p className="text-xs text-muted-foreground">Customer Account</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start" size="sm">
                <User className="mr-2 h-4 w-4" />
                View Profile
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                Order History
              </Button>
              <Button variant="outline" className="w-full justify-start" size="sm">
                Wishlist
              </Button>
            </div>
            
            <Button 
              variant="destructive" 
              className="w-full" 
              onClick={handleSignOut}
              size="sm"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // If user is not logged in, show auth modal
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <User className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">Sign In</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-center">Welcome to Ethéla</DialogTitle>
          <DialogDescription className="text-center">
            Sign in to your account or create a new one to start shopping
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin" className="text-xs sm:text-sm">Sign In</TabsTrigger>
            <TabsTrigger value="signup" className="text-xs sm:text-sm">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin" className="mt-4">
            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signin-email" className="text-sm">Email</Label>
                <Input
                  id="signin-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="text-sm"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signin-password" className="text-sm">Password</Label>
                <Input
                  id="signin-password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="text-sm"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full luxury-gradient text-white hover:scale-105 transition-luxury text-sm"
                disabled={loading}
                size="sm"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="signup" className="mt-4">
            <form onSubmit={(e) => handleSubmit(e, true)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name" className="text-sm">Full Name</Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  className="text-sm"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-sm">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="text-sm"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="signup-password" className="text-sm">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="Minimum 6 characters"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="text-sm"
                  required
                  minLength={6}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full luxury-gradient text-white hover:scale-105 transition-luxury text-sm"
                disabled={loading}
                size="sm"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default UserAuthModal;