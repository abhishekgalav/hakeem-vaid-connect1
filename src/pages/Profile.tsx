import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Camera,
  Shield,
  Bell,
  Lock,
  CreditCard
} from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-display font-bold text-foreground mb-8">Profile Settings</h1>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Profile Overview */}
            <Card className="p-6">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face" />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <h2 className="text-xl font-semibold">Rahul Kumar</h2>
                <p className="text-muted-foreground mb-4">rahul.kumar@email.com</p>
                <Badge variant="secondary" className="mb-4">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified Account
                </Badge>
                <p className="text-sm text-muted-foreground">Member since March 2024</p>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="ghost">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Lock className="w-4 h-4 mr-2" />
                  Privacy & Security
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Payment Methods
                </Button>
              </div>
            </Card>

            {/* Profile Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-display font-semibold mb-6">Personal Information</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Rahul" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Kumar" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="rahul.kumar@email.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+91 9876543210" />
                  </div>
                  
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input id="dateOfBirth" type="date" defaultValue="1990-05-15" />
                  </div>
                  
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      <option>Prefer not to say</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" placeholder="Enter your full address" defaultValue="123 Main Street, Delhi, India" />
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Button>Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </Card>

              {/* Medical Information */}
              <Card className="p-6">
                <h2 className="text-xl font-display font-semibold mb-6">Medical Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="bloodGroup">Blood Group</Label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Select Blood Group</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input id="height" placeholder="175" />
                  </div>
                  
                  <div>
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" placeholder="70" />
                  </div>
                  
                  <div>
                    <Label htmlFor="allergies">Known Allergies</Label>
                    <Textarea id="allergies" placeholder="List any known allergies or medical conditions" />
                  </div>
                  
                  <div>
                    <Label htmlFor="medications">Current Medications</Label>
                    <Textarea id="medications" placeholder="List any current medications or treatments" />
                  </div>
                  
                  <div>
                    <Label htmlFor="medicalHistory">Medical History</Label>
                    <Textarea id="medicalHistory" placeholder="Brief medical history or relevant information for practitioners" />
                  </div>
                </div>
                
                <div className="flex gap-4 mt-6">
                  <Button>Update Medical Info</Button>
                  <Button variant="outline">Reset</Button>
                </div>
              </Card>

              {/* Emergency Contacts */}
              <Card className="p-6">
                <h2 className="text-xl font-display font-semibold mb-6">Emergency Contacts</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="emergencyName1">Contact Name</Label>
                      <Input id="emergencyName1" placeholder="Name" />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone1">Phone Number</Label>
                      <Input id="emergencyPhone1" placeholder="+91 XXXXXXXXXX" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="emergencyRelation1">Relationship</Label>
                    <Input id="emergencyRelation1" placeholder="e.g., Spouse, Parent, Sibling" />
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="emergencyName2">Contact Name</Label>
                      <Input id="emergencyName2" placeholder="Name" />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone2">Phone Number</Label>
                      <Input id="emergencyPhone2" placeholder="+91 XXXXXXXXXX" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="emergencyRelation2">Relationship</Label>
                    <Input id="emergencyRelation2" placeholder="e.g., Spouse, Parent, Sibling" />
                  </div>
                </div>
                
                <Button className="mt-6">Save Emergency Contacts</Button>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;