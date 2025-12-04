import { Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  Clock, 
  Heart, 
  FileText, 
  User, 
  ShoppingBag,
  Video,
  Pill,
  Bell,
  Settings,
  HelpCircle
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-display font-bold text-foreground">Welcome back, Rahul!</h1>
                <p className="text-muted-foreground">Here's what's happening with your health journey</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link to="/profile">
                  <User className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link to="/settings">
                  <Settings className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link to="/medical-records">
                  <FileText className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link to="/help-center">
                  <HelpCircle className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">12</h3>
            <p className="text-sm text-muted-foreground">Consultations</p>
          </Card>
          <Card className="p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
              <FileText className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg">8</h3>
            <p className="text-sm text-muted-foreground">Prescriptions</p>
          </Card>
          <Card className="p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-2">
              <Heart className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="font-semibold text-lg">24</h3>
            <p className="text-sm text-muted-foreground">Favorites</p>
          </Card>
          <Card className="p-4 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <ShoppingBag className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">6</h3>
            <p className="text-sm text-muted-foreground">Orders</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Recent Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Appointments */}
            <Card className="p-6">
              <h2 className="text-xl font-display font-semibold mb-4">Upcoming Appointments</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=48&h=48&fit=crop&crop=face" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">Dr. Rajesh Sharma</h3>
                    <p className="text-sm text-muted-foreground">Ayurvedic Physician</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Today, 2:30 PM</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link to="/video-consult">
                        <Video className="w-4 h-4 mr-1" />
                        Join
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link to="/appointments">Reschedule</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=48&h=48&fit=crop&crop=face" />
                    <AvatarFallback>HA</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">Hakeem Abdul Rahman</h3>
                    <p className="text-sm text-muted-foreground">Unani Medicine Expert</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">Tomorrow, 10:00 AM</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">In-person</Badge>
                    <Button size="sm" variant="outline" asChild>
                      <Link to="/appointments">View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Prescriptions */}
            <Card className="p-6">
              <h2 className="text-xl font-display font-semibold mb-4">Recent Prescriptions</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Pill className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium">Ashwagandha Churna</h4>
                      <p className="text-sm text-muted-foreground">By Dr. Rajesh Sharma</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">Active</Badge>
                    <p className="text-xs text-muted-foreground mt-1">7 days left</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Pill className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium">Triphala Tablets</h4>
                      <p className="text-sm text-muted-foreground">By Hakeem Abdul Rahman</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">Completed</Badge>
                    <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link to="/prescriptions">View All Prescriptions</Link>
              </Button>
            </Card>
          </div>

          {/* Right Column - Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h2 className="text-xl font-display font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/find-doctors">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/video-consult">
                    <Video className="w-4 h-4 mr-2" />
                    Start Video Consult
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/medicines">
                    <Pill className="w-4 h-4 mr-2" />
                    Order Medicines
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/lab-tests">
                    <FileText className="w-4 h-4 mr-2" />
                    View Lab Reports
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Health Tips */}
            <Card className="p-6">
              <h2 className="text-xl font-display font-semibold mb-4">Today's Health Tip</h2>
              <div className="text-sm text-muted-foreground mb-3">
                Start your day with warm water and honey to boost digestion and metabolism according to Ayurveda.
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link to="/articles">Read More Tips</Link>
              </Button>
            </Card>

            {/* Account Settings */}
            <Card className="p-6">
              <h2 className="text-xl font-display font-semibold mb-4">Account</h2>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="ghost" asChild>
                  <Link to="/settings">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="ghost" asChild>
                  <Link to="/favorites">
                    <Heart className="w-4 h-4 mr-2" />
                    Favorites
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="ghost" asChild>
                  <Link to="/medical-records">
                    <FileText className="w-4 h-4 mr-2" />
                    Medical Records
                  </Link>
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

export default Dashboard;