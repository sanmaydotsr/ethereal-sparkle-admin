
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Index from "./pages/Index";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Sustainability from "./pages/Sustainability";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import BlockchainVerification from "./pages/BlockchainVerification";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blockchain-verification" element={<BlockchainVerification />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="lg"
            className="rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            onClick={() => {
              const message = encodeURIComponent("Hi! I'm interested in learning more about Ethela's lab-grown diamond jewelry. Could you please share more details about your collections and pricing?");
              const whatsappUrl = `https://wa.me/918618780343?text=${message}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            <MessageCircle className="h-6 w-6 mr-2" />
            <span className="font-medium">WhatsApp Us</span>
          </Button>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
