import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Search, 
  Shield, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  QrCode,
  Copy,
  ExternalLink,
  Sparkles
} from "lucide-react";

interface VerificationResult {
  isValid: boolean;
  productName: string;
  blockchainHash: string;
  verificationDate: string;
  manufacturer: string;
  certificateUrl: string;
  details: {
    carat: string;
    color: string;
    clarity: string;
    cut: string;
    origin: string;
  };
}

const BlockchainVerification = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verificationCode.trim()) return;

    setIsVerifying(true);
    setError(null);
    setResult(null);

    // Simulate blockchain verification
    setTimeout(() => {
      const mockResult: VerificationResult = {
        isValid: true,
        productName: "Ethereal Diamond Ring - Classic Solitaire",
        blockchainHash: "0x7a8b9c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c2d3e4f5a6b7c8d9e0f1a2b",
        verificationDate: new Date().toISOString(),
        manufacturer: "Ethela Jewelry Co.",
        certificateUrl: "https://blockchain.ethela.com/certificate/7a8b9c2d3e4f5a6b",
        details: {
          carat: "1.5 CT",
          color: "D",
          clarity: "VVS1",
          cut: "Excellent",
          origin: "Lab-Grown"
        }
      };

      setResult(mockResult);
      setIsVerifying(false);
    }, 2000);
  };

  const handleQRScan = () => {
    // Simulate QR code scanning
    setVerificationCode("ETH-2024-001234567");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 luxury-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Shield className="h-16 w-16 text-primary-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Blockchain Verification
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Verify the authenticity and provenance of your Ethela jewelry using advanced blockchain technology
            </p>
          </div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl font-serif">
                Verify Your Jewelry
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleVerification} className="space-y-6">
                <div>
                  <Label htmlFor="verification-code" className="text-lg">
                    Verification Code
                  </Label>
                  <div className="flex gap-2 mt-2">
                    <Input
                      id="verification-code"
                      placeholder="Enter your verification code (e.g., ETH-2024-001234567)"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={handleQRScan}
                      className="px-4"
                    >
                      <QrCode className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Find your verification code on your certificate or product packaging
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full luxury-gradient text-white"
                  disabled={isVerifying || !verificationCode.trim()}
                >
                  {isVerifying ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      Verify Authenticity
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Verification Result */}
      {result && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="flex items-center gap-3">
                  {result.isValid ? (
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  ) : (
                    <XCircle className="h-8 w-8 text-red-600" />
                  )}
                  <div>
                    <CardTitle className="text-2xl font-serif">
                      {result.isValid ? "Verification Successful" : "Verification Failed"}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {result.isValid 
                        ? "This product has been verified as authentic" 
                        : "This product could not be verified"
                      }
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Product Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Product Information</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Product Name:</span>
                        <span className="font-medium">{result.productName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Manufacturer:</span>
                        <span className="font-medium">{result.manufacturer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Verification Date:</span>
                        <span className="font-medium">
                          {new Date(result.verificationDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Diamond Specifications */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Diamond Specifications</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Carat:</span>
                        <span className="font-medium">{result.details.carat}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Color:</span>
                        <span className="font-medium">{result.details.color}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Clarity:</span>
                        <span className="font-medium">{result.details.clarity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Cut:</span>
                        <span className="font-medium">{result.details.cut}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Origin:</span>
                        <span className="font-medium">{result.details.origin}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blockchain Information */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">Blockchain Information</h3>
                  <div className="space-y-3">
                    <div>
                      <Label className="text-sm text-muted-foreground">Blockchain Hash</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded flex-1">
                          {result.blockchainHash}
                        </code>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => copyToClipboard(result.blockchainHash)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(result.certificateUrl, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Certificate
                      </Button>
                      <Badge variant="secondary">
                        <Sparkles className="h-3 w-3 mr-1" />
                        Blockchain Verified
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Error Message */}
      {error && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </div>
        </section>
      )}

      {/* Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Why Blockchain Verification?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Authenticity Guarantee</h3>
                <p className="text-muted-foreground">
                  Every Ethela piece is recorded on the blockchain, ensuring complete transparency and authenticity.
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-primary-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Permanent Record</h3>
                <p className="text-muted-foreground">
                  Your jewelry's details are permanently stored on the blockchain, creating an immutable record.
                </p>
              </div>
              <div className="text-center">
                <Sparkles className="h-12 w-12 text-primary-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lifetime Verification</h3>
                <p className="text-muted-foreground">
                  Verify your jewelry's authenticity anytime, anywhere with our blockchain verification system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlockchainVerification; 