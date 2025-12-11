import { useState } from "react";
import { DoctorHeader } from "@/components/layout/doctor-header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Calendar, 
  Clock, 
  Users, 
  FileText, 
  Stethoscope, 
  TrendingUp,
  Video,
  Pill,
  Bell,
  Settings,
  IndianRupee,
  Star,
  UserCog,
  CalendarOff
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const DoctorDashboard = () => {
  const [awayMode, setAwayMode] = useState(false);
  const { toast } = useToast();

  const handleAwayModeChange = (checked: boolean) => {
    setAwayMode(checked);
    toast({
      title: checked ? "Away Mode Enabled" : "Away Mode Disabled",
      description: checked 
        ? "You are now marked as unavailable. Patients won't be able to book appointments." 
        : "You are now available for appointments.",
    });
  };
  return (
    <div className="min-h-screen bg-background">
      <DoctorHeader />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=64&h=64&fit=crop&crop=face" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-display font-bold text-foreground">Dr. Rajesh Sharma</h1>
                <p className="text-muted-foreground">Ayurvedic Physician • 15 years experience</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                  <span className="text-muted-foreground text-sm">•</span>
                  <span className="text-sm text-muted-foreground">1,247 consultations</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Away Mode Toggle */}
              <div className={`flex items-center gap-3 px-4 py-2 rounded-lg border ${awayMode ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800' : 'bg-muted/50 border-border'}`}>
                <CalendarOff className={`w-4 h-4 ${awayMode ? 'text-amber-600 dark:text-amber-400' : 'text-muted-foreground'}`} />
                <Label htmlFor="away-mode-dashboard" className={`text-sm font-medium ${awayMode ? 'text-amber-800 dark:text-amber-200' : 'text-foreground'}`}>
                  Away Mode
                </Label>
                <Switch
                  id="away-mode-dashboard"
                  checked={awayMode}
                  onCheckedChange={handleAwayModeChange}
                />
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link to="/doctor/settings">
                    <Settings className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Away Mode Banner */}
          {awayMode && (
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg flex items-center gap-3">
              <CalendarOff className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <div>
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  You are currently on leave
                </p>
                <p className="text-xs text-amber-600 dark:text-amber-400">
                  Your profile shows as "On Leave" and patients cannot book appointments with you.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center shadow-soft">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">8</h3>
            <p className="text-sm text-muted-foreground">Today's Appointments</p>
          </Card>
          <Card className="p-4 text-center shadow-soft">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg">1,247</h3>
            <p className="text-sm text-muted-foreground">Total Patients</p>
          </Card>
          <Card className="p-4 text-center shadow-soft">
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-2">
              <IndianRupee className="w-6 h-6 text-brand-gold" />
            </div>
            <h3 className="font-semibold text-lg">₹45,200</h3>
            <p className="text-sm text-muted-foreground">This Month</p>
          </Card>
          <Card className="p-4 text-center shadow-soft">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">4.8</h3>
            <p className="text-sm text-muted-foreground">Rating</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Today's Schedule */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Appointments */}
            <Card className="p-6 shadow-soft">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-display font-semibold">Today's Appointments</h2>
                <Badge variant="secondary">8 appointments</Badge>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg bg-gradient-subtle">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-sm text-muted-foreground">10:00</span>
                    <span className="text-sm text-muted-foreground">AM</span>
                  </div>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">Rahul Kumar</h3>
                    <p className="text-sm text-muted-foreground">Digestive Issues • Follow-up</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">In-person</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link to="/doctor/patients/123">View History</Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link to="/doctor/consultation/123">Start</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-sm text-muted-foreground">11:30</span>
                    <span className="text-sm text-muted-foreground">AM</span>
                  </div>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b742?w=48&h=48&fit=crop&crop=face" />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">Priya Sharma</h3>
                    <p className="text-sm text-muted-foreground">Stress & Anxiety • New Patient</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        <Video className="w-3 h-3 mr-1" />
                        Video Call
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" disabled>
                      <Clock className="w-4 h-4 mr-1" />
                      Wait
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-sm text-muted-foreground">2:00</span>
                    <span className="text-sm text-muted-foreground">PM</span>
                  </div>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">Amit Mehta</h3>
                    <p className="text-sm text-muted-foreground">Joint Pain • Regular</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">In-person</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link to="/doctor/patients/125">View History</Link>
                    </Button>
                    <Button size="sm" variant="outline" disabled>
                      <Clock className="w-4 h-4 mr-1" />
                      Scheduled
                    </Button>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link to="/doctor/appointments">View All Appointments</Link>
              </Button>
            </Card>

            {/* Recent Prescriptions */}
            <Card className="p-6 shadow-soft">
              <h2 className="text-xl font-display font-semibold mb-4">Recent Prescriptions</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Pill className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium">Ashwagandha Churna + Brahmi</h4>
                      <p className="text-sm text-muted-foreground">For Rahul Kumar</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">Today</Badge>
                    <p className="text-xs text-muted-foreground mt-1">10:15 AM</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Pill className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium">Triphala + Ajwain</h4>
                      <p className="text-sm text-muted-foreground">For Sunita Devi</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline">Yesterday</Badge>
                    <p className="text-xs text-muted-foreground mt-1">4:30 PM</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link to="/doctor/prescriptions">View All Prescriptions</Link>
              </Button>
            </Card>
          </div>

          {/* Right Column - Quick Actions & Insights */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6 shadow-soft">
              <h2 className="text-xl font-display font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button className="w-full justify-start" asChild>
                  <Link to="/doctor/consultation/new">
                    <Stethoscope className="w-4 h-4 mr-2" />
                    Start Consultation
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/doctor/profile">
                    <UserCog className="w-4 h-4 mr-2" />
                    View Profile
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/doctor/profile/edit">
                    <UserCog className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/doctor/patients">
                    <Users className="w-4 h-4 mr-2" />
                    Patient Records
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/doctor/prescriptions/new">
                    <FileText className="w-4 h-4 mr-2" />
                    Create Prescription
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/doctor/schedule">
                    <Calendar className="w-4 h-4 mr-2" />
                    Manage Schedule
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/doctor/earnings">
                    <IndianRupee className="w-4 h-4 mr-2" />
                    View Earnings
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Weekly Stats */}
            <Card className="p-6 shadow-soft">
              <h2 className="text-xl font-display font-semibold mb-4">This Week</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Consultations</span>
                  <span className="font-medium">32</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">New Patients</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Prescriptions</span>
                  <span className="font-medium">28</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Earnings</span>
                  <span className="font-medium">₹12,800</span>
                </div>
              </div>
            </Card>

            {/* Practice Tip */}
            <Card className="p-6 shadow-soft">
              <h2 className="text-xl font-display font-semibold mb-4">Practice Tip</h2>
              <div className="text-sm text-muted-foreground mb-3">
                Consider seasonal variations in treatment. During monsoon, emphasize digestive fire (Agni) strengthening herbs like ginger and black pepper.
              </div>
              <Button size="sm" variant="outline" asChild>
                <Link to="/doctor/resources">More Resources</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorDashboard;