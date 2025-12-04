import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Clock, 
  User, 
  BookOpen,
  Heart,
  Leaf,
  Zap,
  Shield
} from "lucide-react";

const Articles = () => {
  const featuredArticle = {
    title: "Complete Guide to Ayurvedic Diet for Better Digestion",
    excerpt: "Discover the ancient wisdom of Ayurveda to improve your digestive health naturally. Learn about the three doshas and how to balance them through proper nutrition.",
    author: "Dr. Priya Sharma",
    readTime: "8 min read",
    date: "2 days ago",
    category: "Ayurvedic Diet",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
    featured: true
  };

  const articles = [
    {
      id: 1,
      title: "5 Powerful Herbs for Boosting Immunity Naturally",
      excerpt: "Explore traditional herbs like Ashwagandha, Tulsi, and Giloy that can strengthen your immune system.",
      author: "Hakeem Abdullah",
      readTime: "5 min read",
      date: "1 week ago",
      category: "Immunity",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=250&fit=crop",
      icon: Shield
    },
    {
      id: 2,
      title: "Understanding Panchakarma: Ancient Detox Method",
      excerpt: "Learn about the five-step Ayurvedic detoxification process and its modern applications.",
      author: "Dr. Rajesh Kumar",
      readTime: "7 min read",
      date: "3 days ago",
      category: "Panchakarma",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      icon: Leaf
    },
    {
      id: 3,
      title: "Yoga and Ayurveda: Perfect Partners for Wellness",
      excerpt: "Discover how combining yoga practices with Ayurvedic principles can enhance your overall health.",
      author: "Dr. Meera Patel",
      readTime: "6 min read",
      date: "5 days ago",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      icon: Zap
    },
    {
      id: 4,
      title: "Heart Health Through Unani Medicine",
      excerpt: "Traditional Unani treatments and lifestyle changes for maintaining cardiovascular health.",
      author: "Hakeem Mohammad Ali",
      readTime: "8 min read",
      date: "1 week ago",
      category: "Heart Health",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      icon: Heart
    },
    {
      id: 5,
      title: "Managing Stress with Ayurvedic Remedies",
      excerpt: "Natural ways to combat modern stress using time-tested Ayurvedic techniques and herbs.",
      author: "Dr. Sanjay Gupta",
      readTime: "4 min read",
      date: "4 days ago",
      category: "Mental Health",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
      icon: Leaf
    },
    {
      id: 6,
      title: "Skin Care Secrets from Ancient Ayurveda",
      excerpt: "Discover natural ingredients and practices for healthy, glowing skin according to Ayurvedic wisdom.",
      author: "Dr. Kavita Sharma",
      readTime: "6 min read",
      date: "6 days ago",
      category: "Skin Care",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=250&fit=crop",
      icon: Leaf
    }
  ];

  const categories = [
    "All Categories",
    "Ayurvedic Diet",
    "Immunity", 
    "Panchakarma",
    "Wellness",
    "Heart Health",
    "Mental Health",
    "Skin Care"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-herbal py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-on-dark mb-6">
            Ayurvedic & Unani Health Articles
          </h1>
          <p className="text-xl text-text-on-dark/90 mb-8 max-w-2xl mx-auto">
            Discover ancient wisdom for modern wellness. Expert insights, 
            traditional remedies, and holistic health guidance.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search articles by topic, author, or keyword..."
                className="pl-12 h-14 text-base bg-white rounded-[1.25rem] shadow-elegant"
              />
              <Button variant="gold" className="absolute right-2 top-2 h-10">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <BookOpen className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold">Browse by Category</h2>
            </div>
            
            <div className="flex items-center gap-4">
              <Select defaultValue="all-categories">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase().replace(' ', '-')}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select defaultValue="latest">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
          
          <Card className="overflow-hidden border-0 shadow-elegant">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-brand-gold">
                  Featured
                </Badge>
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <Badge variant="outline" className="mb-3">
                    {featuredArticle.category}
                  </Badge>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>
                
                <Button variant="gold" size="lg">
                  Read Full Article
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
                      <article.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs mb-3">
                      {article.category}
                    </Badge>
                    <h3 className="font-display font-semibold text-lg mb-2 line-clamp-2 group-hover:text-brand-green transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-herbal p-12 text-center border-0">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-text-on-dark mb-4">
                Stay Updated with Health Tips
              </h2>
              <p className="text-text-on-dark/90 text-lg mb-8">
                Get weekly insights on Ayurvedic and Unani medicine, wellness tips, 
                and exclusive health content delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1 bg-white h-12"
                />
                <Button variant="gold" size="lg" className="px-8">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-text-on-dark/70 text-sm mt-4">
                No spam, unsubscribe anytime. Your privacy is protected.
              </p>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Articles;