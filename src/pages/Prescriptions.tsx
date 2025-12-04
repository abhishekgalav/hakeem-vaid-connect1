import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Pill,
  Download,
  Search,
  Filter,
  Calendar,
  Clock,
  ShoppingBag,
  FileText,
  AlertCircle
} from "lucide-react";

const Prescriptions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-display font-bold text-foreground mb-8 flex items-center">
            <Pill className="w-8 h-8 mr-3 text-accent" />
            My Prescriptions
          </h1>

          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input className="pl-10" placeholder="Search prescriptions..." />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="space-y-6">
            {/* Active Prescription */}
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=48&h=48&fit=crop&crop=face" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">Digestive Health Treatment</h3>
                    <p className="text-muted-foreground">Prescribed by Dr. Rajesh Sharma</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">January 15, 2024</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-primary/10 text-primary">Active</Badge>
                  <Badge variant="outline" className="text-destructive border-destructive">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    7 days left
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Medicines</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                          <Pill className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium">Triphala Churna</p>
                          <p className="text-sm text-muted-foreground">1 tsp twice daily</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <ShoppingBag className="w-4 h-4 mr-1" />
                        Buy Now
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                          <Pill className="w-4 h-4 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium">Ajwain Powder</p>
                          <p className="text-sm text-muted-foreground">1/2 tsp after meals</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <ShoppingBag className="w-4 h-4 mr-1" />
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Instructions</h4>
                  <div className="space-y-2 text-sm">
                    <p>• Take medicines after meals</p>
                    <p>• Drink warm water throughout the day</p>
                    <p>• Avoid cold and spicy foods</p>
                    <p>• Light exercise daily recommended</p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Next review: February 5, 2024</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                <Button size="sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  Book Follow-up
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-1" />
                  Download PDF
                </Button>
                <Button size="sm" variant="outline">
                  <FileText className="w-4 h-4 mr-1" />
                  View Details
                </Button>
              </div>
            </Card>

            {/* Completed Prescription */}
            <Card className="p-6 border-l-4 border-l-muted">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=48&h=48&fit=crop&crop=face" />
                    <AvatarFallback>HA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">Immunity Booster Course</h3>
                    <p className="text-muted-foreground">Prescribed by Hakeem Abdul Rahman</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">December 10, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">Completed</Badge>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Course Finished
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Medicines</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                          <Pill className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">Ashwagandha Churna</p>
                          <p className="text-sm text-muted-foreground">1 tsp daily</p>
                        </div>
                      </div>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                          <Pill className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">Chyawanprash</p>
                          <p className="text-sm text-muted-foreground">1 tbsp morning</p>
                        </div>
                      </div>
                      <Badge variant="outline">Completed</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Results</h4>
                  <div className="space-y-2 text-sm">
                    <p>• Improved energy levels</p>
                    <p>• Better sleep quality</p>
                    <p>• Enhanced immunity</p>
                    <p>• No side effects reported</p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Completed on: January 10, 2024</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-1" />
                  Download PDF
                </Button>
                <Button size="sm" variant="outline">
                  <FileText className="w-4 h-4 mr-1" />
                  View Details
                </Button>
                <Button size="sm" variant="outline">
                  <Calendar className="w-4 h-4 mr-1" />
                  Reorder
                </Button>
              </div>
            </Card>

            {/* Old Prescription */}
            <Card className="p-6 opacity-80">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=48&h=48&fit=crop&crop=face" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">Joint Pain Relief</h3>
                    <p className="text-muted-foreground">Prescribed by Dr. Rajesh Sharma</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">November 5, 2023</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Expired</Badge>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-1" />
                  Download PDF
                </Button>
                <Button size="sm" variant="outline">
                  <FileText className="w-4 h-4 mr-1" />
                  View Details
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Prescriptions;