import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart,
  Star,
  MapPin,
  Clock,
  Phone,
  ShoppingBag,
  Calendar,
  Video,
  Pill
} from "lucide-react";

const Favorites = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-display font-bold text-foreground mb-8 flex items-center">
            <Heart className="w-8 h-8 mr-3 text-destructive" />
            My Favorites
          </h1>
          
          <Tabs defaultValue="doctors" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="doctors">Doctors</TabsTrigger>
              <TabsTrigger value="medicines">Medicines</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
            </TabsList>
            
            <TabsContent value="doctors" className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=64&h=64&fit=crop&crop=face" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Dr. Rajesh Sharma</h3>
                    <p className="text-muted-foreground">Ayurvedic Physician • 15 years experience</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">4.8 (124 reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">New Delhi</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      Book Now
                    </Button>
                    <Button size="sm" variant="outline">
                      <Video className="w-4 h-4 mr-1" />
                      Video Call
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop&crop=face" />
                    <AvatarFallback>HA</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Hakeem Abdul Rahman</h3>
                    <p className="text-muted-foreground">Unani Medicine Expert • 20 years experience</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">4.9 (89 reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Mumbai</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      Book Now
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="medicines" className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Pill className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Ashwagandha Churna</h3>
                    <p className="text-muted-foreground">Natural stress reliever and energy booster</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">4.6 (45 reviews)</span>
                      </div>
                      <Badge variant="secondary">In Stock</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">₹450</p>
                    <Button size="sm" className="mt-2">
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Pill className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Triphala Tablets</h3>
                    <p className="text-muted-foreground">Digestive health and detoxification</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">4.7 (67 reviews)</span>
                      </div>
                      <Badge variant="secondary">In Stock</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">₹320</p>
                    <Button size="sm" className="mt-2">
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="articles" className="space-y-4">
              <Card className="p-6">
                <div className="flex gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=120&fit=crop" 
                    alt="Ayurvedic herbs" 
                    className="w-32 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">10 Benefits of Ashwagandha for Modern Life</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Discover how this ancient herb can help manage stress, improve energy levels, and boost immunity in today's fast-paced world.
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>5 min read</span>
                      <span>•</span>
                      <span>Health & Wellness</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Read Article</Button>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=200&h=120&fit=crop" 
                    alt="Unani medicine" 
                    className="w-32 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Understanding Unani Medicine Principles</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Learn about the fundamental concepts of Unani medicine and how it approaches holistic healing through natural remedies.
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>8 min read</span>
                      <span>•</span>
                      <span>Traditional Medicine</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Read Article</Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Favorites;