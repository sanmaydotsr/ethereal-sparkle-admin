import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Sparkles,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/landing/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@ethela.in",
      subDetails: "support@ethela.in",
      action: "mailto:contact@ethela.in"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98765 43210",
      subDetails: "Mon - Sat, 10 AM - 7 PM IST",
      action: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      details: "123 Jewelry Street, Karol Bagh",
      subDetails: "New Delhi, Delhi 110005",
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Saturday: 10 AM - 7 PM",
      subDetails: "Sunday: 11 AM - 6 PM",
      action: null
    }
  ];

  const faqs = [
    {
      question: "Are lab-grown diamonds real diamonds?",
      answer: "Yes! Lab-grown diamonds are chemically, physically, and optically identical to mined diamonds. They have the same brilliance, fire, and scintillation."
    },
    {
      question: "How can I verify the authenticity of my diamond?",
      answer: "Every Ethéla diamond comes with a blockchain certificate. Simply scan the QR code or visit the blockchain URL to view the complete history and certification."
    },
    {
      question: "Do you offer customization services?",
      answer: "Absolutely! We offer custom design services for engagement rings, wedding bands, and other special pieces. Contact us to discuss your vision."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in original condition. Custom pieces have a 14-day return window."
    },
    {
      question: "Do you ship across India?",
      answer: "Yes, we ship to all major cities across India. Free shipping on orders above ₹50,000. Express delivery available in metro cities."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-primary-gold" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6">
              Get in Touch
            </h1>
            <div className="w-20 sm:w-24 h-1 bg-primary-gold mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
              Have questions about our lab-grown diamonds or need help choosing the perfect piece? 
              We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="group hover:scale-105 transition-luxury border-0 card-shadow text-center">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full luxury-gradient group-hover:scale-110 transition-luxury">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-serif font-semibold mb-2">{info.title}</h3>
                    {info.action ? (
                      <a href={info.action} className="text-primary-gold hover:underline">
                        <p className="text-sm font-medium">{info.details}</p>
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{info.details}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">{info.subDetails}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="border-0 card-shadow">
              <CardHeader>
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary-gold" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full luxury-gradient text-white hover:scale-105 transition-luxury"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Social */}
            <div className="space-y-6">
              {/* Map */}
              <Card className="border-0 card-shadow">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.898!2d77.186!3d28.651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzAzLjYiTiA3N8KwMTEnMDkuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ethéla Showroom Location"
                    ></iframe>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Visit our showroom in the heart of Delhi's jewelry district to see our collection in person.
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 card-shadow">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Stay connected with us on social media for the latest updates and jewelry inspiration.
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
            <div className="w-20 sm:w-24 h-1 bg-primary-gold mx-auto mb-6"></div>
            <p className="text-muted-foreground">
              Quick answers to common questions about our lab-grown diamonds and services.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 card-shadow">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold mb-3 text-lg">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;