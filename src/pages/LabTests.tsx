import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Home, 
  Clock, 
  FileText, 
  Shield,
  TestTube,
  Heart,
  Droplets,
  Activity,
  Zap
} from "lucide-react";

const LabTests = () => {
  const popularTests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      description: "Comprehensive blood analysis including RBC, WBC, platelets",
      price: 299,
      originalPrice: 399,
      reportTime: "6 hours",
      homeCollection: true,
      preparations: "8-12 hours fasting required",
      category: "Blood Tests",
      icon: Droplets
    },
    {
      id: 2,
      name: "Liver Function Test (LFT)",
      description: "Assess liver health with enzymes and protein levels",
      price: 449,
      originalPrice: 599,
      reportTime: "12 hours",
      homeCollection: true,
      preparations: "12 hours fasting recommended",
      category: "Organ Function",
      icon: Activity
    },
    {
      id: 3,
      name: "Lipid Profile",
      description: "Cholesterol and triglyceride levels assessment",
      price: 399,
      originalPrice: 499,
      reportTime: "8 hours",
      homeCollection: true,
      preparations: "12-14 hours fasting required",
      category: "Heart Health",
      icon: Heart
    },
    {
      id: 4,
      name: "Thyroid Profile (T3, T4, TSH)",
      description: "Complete thyroid hormone evaluation",
      price: 649,
      originalPrice: 799,
      reportTime: "24 hours",
      homeCollection: true,
      preparations: "No fasting required",
      category: "Hormones",
      icon: Zap
    },
    {
      id: 5,
      name: "HbA1c (Diabetes)",
      description: "3-month average blood sugar levels",
      price: 249,
      originalPrice: 349,
      reportTime: "6 hours",
      homeCollection: true,
      preparations: "No fasting required",
      category: "Diabetes",
      icon: TestTube
    },
    {
      id: 6,
      name: "Vitamin D Test",
      description: "25-OH Vitamin D deficiency screening",
      price: 899,
      originalPrice: 1199,
      reportTime: "48 hours",
      homeCollection: true,
      preparations: "No special preparation needed",
      category: "Vitamins",
      icon: Activity
    }
  ];

  const healthPackages = [
    {
      name: "Basic Health Checkup",
      tests: 25,
      price: 1499,
      originalPrice: 2499,
      includes: ["CBC", "LFT", "Lipid Profile", "Kidney Function", "Diabetes Panel"]
    },
    {
      name: "Comprehensive Health Package",
      tests: 50,
      price: 2799,
      originalPrice: 4299,
      includes: ["All Basic Tests", "Thyroid", "Vitamins", "Cardiac Markers", "Tumor Markers"]
    },
    {
      name: "Women's Health Package",
      tests: 35,
      price: 2199,
      originalPrice: 3499,
      includes: ["Hormonal Profile", "PCOS Panel", "Bone Health", "Iron Studies", "Breast Cancer Markers"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-herbal py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-on-dark mb-6">
            Lab Tests at Home
          </h1>
          <p className="text-xl text-text-on-dark/90 mb-8 max-w-2xl mx-auto">
            Book lab tests online with free home sample collection. 
            Get accurate reports from NABL certified laboratories.
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for tests, health packages, or conditions..."
                className="pl-12 h-14 text-base bg-white rounded-[1.25rem] shadow-elegant"
              />
              <Button variant="gold" className="absolute right-2 top-2 h-10">
                Search
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-white/20 text-text-on-dark border-white/30">
              <Home className="w-4 h-4 mr-1" />
              Free Home Collection
            </Badge>
            <Badge className="bg-white/20 text-text-on-dark border-white/30">
              <Shield className="w-4 h-4 mr-1" />
              NABL Certified Labs
            </Badge>
            <Badge className="bg-white/20 text-text-on-dark border-white/30">
              <FileText className="w-4 h-4 mr-1" />
              Digital Reports
            </Badge>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-8 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Blood Tests", icon: Droplets, color: "bg-red-100 text-red-600" },
              { name: "Heart Health", icon: Heart, color: "bg-pink-100 text-pink-600" },
              { name: "Diabetes", icon: TestTube, color: "bg-blue-100 text-blue-600" },
              { name: "Thyroid", icon: Zap, color: "bg-purple-100 text-purple-600" },
              { name: "Liver", icon: Activity, color: "bg-green-100 text-green-600" },
              { name: "Vitamins", icon: Activity, color: "bg-orange-100 text-orange-600" }
            ].map((category, index) => (
              <Card key={index} className="p-4 text-center cursor-pointer hover:shadow-elegant transition-all duration-300 border-0 shadow-soft">
                <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-3`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-medium text-sm">{category.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Health Packages */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Health Packages
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive health checkups at unbeatable prices
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {healthPackages.map((pkg, index) => (
              <Card key={index} className="p-8 border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="font-display text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.tests} Tests Included</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-3xl font-bold text-brand-green">₹{pkg.price}</span>
                    <span className="text-lg text-muted-foreground line-through">₹{pkg.originalPrice}</span>
                  </div>
                  
                  <Badge className="bg-brand-gold text-white">
                    {Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
                
                <div className="space-y-2 mb-6">
                  {pkg.includes.map((test, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                      <span>{test}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="gold" className="w-full">
                  Book Package
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tests */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Lab Tests
            </h2>
            <p className="text-muted-foreground text-lg">
              Most booked tests with free home sample collection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTests.map((test) => (
              <Card key={test.id} className="p-6 border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <test.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{test.name}</h3>
                    <p className="text-muted-foreground text-sm">{test.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Category:</span>
                    <Badge variant="outline">{test.category}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Report Time:</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{test.reportTime}</span>
                    </div>
                  </div>
                  
                  {test.homeCollection && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Collection:</span>
                      <div className="flex items-center gap-1 text-green-600">
                        <Home className="w-4 h-4" />
                        <span>Home Sample</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Preparation:</span>
                    <span className="text-right text-xs">{test.preparations}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-brand-green">₹{test.price}</span>
                    {test.originalPrice > test.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{test.originalPrice}
                      </span>
                    )}
                  </div>
                  {test.originalPrice > test.price && (
                    <Badge className="bg-brand-gold text-white">
                      {Math.round(((test.originalPrice - test.price) / test.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
                
                <Button variant="gold" className="w-full">
                  Book Test
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg">
              Simple steps to get your lab tests done at home
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Book Online</h3>
              <p className="text-muted-foreground text-sm">
                Choose your tests and select a convenient time slot
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Sample Collection</h3>
              <p className="text-muted-foreground text-sm">
                Trained phlebotomist visits your home for sample collection
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Lab Processing</h3>
              <p className="text-muted-foreground text-sm">
                Samples processed in NABL certified laboratories
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Reports</h3>
              <p className="text-muted-foreground text-sm">
                Digital reports delivered via email and app
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LabTests;