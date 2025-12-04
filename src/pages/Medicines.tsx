import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Heart, 
  Star, 
  Truck,
  Shield,
  Leaf,
  Award
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import productsImage from "@/assets/ayurvedic-products.jpg";

const Medicines = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to Cart!",
      description: `${productName} has been added to your cart.`,
    });
  };
  
  const products = [
    {
      id: 1,
      name: "Triphala Churna",
      brand: "Himalaya",
      price: 299,
      originalPrice: 399,
      rating: 4.6,
      reviews: 1243,
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=300&h=300&fit=crop",
      category: "Digestive Health",
      inStock: true,
      certification: "AYUSH Certified"
    },
    {
      id: 2,
      name: "Ashwagandha Capsules",
      brand: "Patanjali",
      price: 249,
      originalPrice: 299,
      rating: 4.5,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1550572017-edd951aa8743?w=300&h=300&fit=crop",
      category: "Stress & Immunity",
      inStock: true,
      certification: "GMP Certified"
    },
    {
      id: 3,
      name: "Arjun Bark Powder",
      brand: "Baidyanath",
      price: 180,
      originalPrice: 220,
      rating: 4.4,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      category: "Heart Health",
      inStock: true,
      certification: "Organic"
    },
    {
      id: 4,
      name: "Neem Capsules",
      brand: "Dabur",
      price: 199,
      originalPrice: 249,
      rating: 4.3,
      reviews: 421,
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=300&h=300&fit=crop",
      category: "Skin Care",
      inStock: false,
      certification: "AYUSH Certified"
    },
    {
      id: 5,
      name: "Giloy Tablets",
      brand: "Zandu",
      price: 320,
      originalPrice: 380,
      rating: 4.7,
      reviews: 789,
      image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=300&h=300&fit=crop",
      category: "Immunity Booster",
      inStock: true,
      certification: "ISO Certified"
    },
    {
      id: 6,
      name: "Brahmi Syrup",
      brand: "Kerala Ayurveda",
      price: 425,
      originalPrice: 499,
      rating: 4.8,
      reviews: 1156,
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=300&h=300&fit=crop",
      category: "Brain Health",
      inStock: true,
      certification: "GMP Certified"
    }
  ];

  const categories = [
    "All Categories",
    "Digestive Health", 
    "Stress & Immunity",
    "Heart Health",
    "Skin Care", 
    "Immunity Booster",
    "Brain Health"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-herbal py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text-on-dark mb-6">
                Authentic Ayurvedic Medicines
              </h1>
              <p className="text-xl text-text-on-dark/90 mb-8">
                Shop genuine herbal medicines from trusted brands. 100% authentic, 
                laboratory tested, and delivered to your doorstep.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge className="bg-white/20 text-text-on-dark border-white/30">
                  <Shield className="w-4 h-4 mr-1" />
                  100% Authentic
                </Badge>
                <Badge className="bg-white/20 text-text-on-dark border-white/30">
                  <Truck className="w-4 h-4 mr-1" />
                  Free Delivery
                </Badge>
                <Badge className="bg-white/20 text-text-on-dark border-white/30">
                  <Award className="w-4 h-4 mr-1" />
                  Lab Tested
                </Badge>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={productsImage} 
                alt="Ayurvedic medicines and herbs" 
                className="rounded-[1.25rem] shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search medicines, brands, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            
            <div className="flex gap-3">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase().replace(' ', '-')}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="himalaya">Himalaya</SelectItem>
                  <SelectItem value="patanjali">Patanjali</SelectItem>
                  <SelectItem value="baidyanath">Baidyanath</SelectItem>
                  <SelectItem value="dabur">Dabur</SelectItem>
                  <SelectItem value="zandu">Zandu</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-gold p-6 text-center border-0">
            <div className="flex items-center justify-center gap-4">
              <Leaf className="w-8 h-8 text-white" />
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  Monsoon Special: Up to 30% OFF
                </h3>
                <p className="text-white/90">
                  Free shipping on orders above ₹499 | Use code: MONSOON30
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Popular Medicines</h2>
              <p className="text-muted-foreground">{products.length} products found</p>
            </div>
            
            <Select defaultValue="popular">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-soft">
                <div className="relative overflow-hidden rounded-t-[1.25rem]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  {product.originalPrice > product.price && (
                    <Badge className="absolute top-3 left-3 bg-brand-gold">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs mb-2">
                      {product.certification}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{product.brand}</p>
                    <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-brand-gold fill-current" />
                      <span className="text-xs font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">₹{product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button
                    className="w-full"
                    variant={product.inStock ? "gold" : "outline"}
                    disabled={!product.inStock}
                    onClick={() => handleAddToCart(product.name)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Why Choose Our Medicines?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">100% Authentic</h3>
              <p className="text-muted-foreground text-sm">
                Sourced directly from certified manufacturers
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Lab Tested</h3>
              <p className="text-muted-foreground text-sm">
                Quality checked in certified laboratories
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Free shipping on orders above ₹499
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Natural & Safe</h3>
              <p className="text-muted-foreground text-sm">
                Made from pure herbs with no side effects
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Medicines;