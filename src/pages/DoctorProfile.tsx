import { DoctorHeader } from "@/components/layout/doctor-header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award,
  Clock,
  Star,
  Settings,
  Camera,
  Shield,
  Bell,
  CreditCard,
  Globe
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DoctorProfile = () => {
  const { toast } = useToast();
  const [profileData, setProfileData] = useState({
    firstName: "Dr. Rajesh",
    lastName: "Sharma",
    email: "rajesh.sharma@hakeemmiyaa.com",
    phone: "+91 98765 43210",
    specialty: "Ayurvedic Medicine",
    experience: "15 years",
    qualification: "BAMS, MD (Ayurveda)",
    licenseNumber: "MH/12345/2008",
    consultationFee: "800",
    languages: "English, Hindi, Marathi",
    bio: "Experienced Ayurvedic practitioner specializing in chronic diseases and holistic wellness. With over 15 years of practice, I focus on traditional treatments combined with modern diagnostic approaches.",
    hospitalAffiliation: "Ayurved Medical College & Hospital, Pune",
    address: "123 Wellness Street, Pune, Maharashtra 411001",
    availability: {
      monday: { enabled: true, start: "09:00", end: "17:00" },
      tuesday: { enabled: true, start: "09:00", end: "17:00" },
      wednesday: { enabled: true, start: "09:00", end: "17:00" },
      thursday: { enabled: true, start: "09:00", end: "17:00" },
      friday: { enabled: true, start: "09:00", end: "17:00" },
      saturday: { enabled: true, start: "09:00", end: "13:00" },
      sunday: { enabled: false, start: "", end: "" }
    },
    notifications: {
      appointments: true,
      messages: true,
      reminders: true,
      marketing: false
    }
  });

  const handleSaveProfile = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleSaveAvailability = () => {
    toast({
      title: "Availability Updated", 
      description: "Your schedule has been updated successfully.",
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: "Settings Updated",
      description: "Your notification preferences have been saved.",
    });
  };

  const stats = [
    { label: "Total Patients", value: "1,247", icon: User },
    { label: "Consultations", value: "2,156", icon: Calendar },
    { label: "Rating", value: "4.8/5", icon: Star },
    { label: "Experience", value: "15 Years", icon: Award }
  ];

  const weekDays = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DoctorHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">Profile Settings</h1>
            <p className="text-muted-foreground">Manage your professional profile and preferences</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Profile Summary Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face" />
                    <AvatarFallback className="text-lg">RS</AvatarFallback>
                  </Avatar>
                  <Button 
                    size="sm" 
                    className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <h3 className="font-bold text-lg">{profileData.firstName} {profileData.lastName}</h3>
                <p className="text-sm text-muted-foreground mb-2">{profileData.specialty}</p>
                <Badge className="mb-4">{profileData.experience} Experience</Badge>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{profileData.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{profileData.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{profileData.qualification}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-soft">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Quick Stats</h3>
                <div className="space-y-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <stat.icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                      </div>
                      <span className="font-medium text-sm">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="availability">Schedule</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Basic Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={profileData.address}
                        onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                      />
                    </div>

                    <Button onClick={handleSaveProfile}>Save Basic Information</Button>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Professional Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="specialty">Specialty</Label>
                        <Select value={profileData.specialty} onValueChange={(value) => setProfileData({...profileData, specialty: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="General Medicine">General Medicine</SelectItem>
                            <SelectItem value="Ayurvedic Medicine">Ayurvedic Medicine</SelectItem>
                            <SelectItem value="Unani Medicine">Unani Medicine</SelectItem>
                            <SelectItem value="Homeopathy">Homeopathy</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="consultationFee">Consultation Fee (₹)</Label>
                        <Input
                          id="consultationFee"
                          value={profileData.consultationFee}
                          onChange={(e) => setProfileData({...profileData, consultationFee: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="qualification">Qualification</Label>
                        <Input
                          id="qualification"
                          value={profileData.qualification}
                          onChange={(e) => setProfileData({...profileData, qualification: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="licenseNumber">License Number</Label>
                        <Input
                          id="licenseNumber"
                          value={profileData.licenseNumber}
                          onChange={(e) => setProfileData({...profileData, licenseNumber: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="languages">Languages</Label>
                      <Input
                        id="languages"
                        value={profileData.languages}
                        onChange={(e) => setProfileData({...profileData, languages: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Professional Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                        rows={4}
                      />
                    </div>

                    <Button onClick={handleSaveProfile}>Save Professional Information</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="availability" className="space-y-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Weekly Availability
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {weekDays.map((day) => (
                      <div key={day.key} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Switch
                            checked={profileData.availability[day.key as keyof typeof profileData.availability].enabled}
                            onCheckedChange={(checked) => {
                              setProfileData({
                                ...profileData,
                                availability: {
                                  ...profileData.availability,
                                  [day.key]: {
                                    ...profileData.availability[day.key as keyof typeof profileData.availability],
                                    enabled: checked
                                  }
                                }
                              });
                            }}
                          />
                          <span className="font-medium w-20">{day.label}</span>
                        </div>
                        
                        {profileData.availability[day.key as keyof typeof profileData.availability].enabled && (
                          <div className="flex items-center gap-2">
                            <Input
                              type="time"
                              className="w-32"
                              value={profileData.availability[day.key as keyof typeof profileData.availability].start}
                              onChange={(e) => {
                                setProfileData({
                                  ...profileData,
                                  availability: {
                                    ...profileData.availability,
                                    [day.key]: {
                                      ...profileData.availability[day.key as keyof typeof profileData.availability],
                                      start: e.target.value
                                    }
                                  }
                                });
                              }}
                            />
                            <span>to</span>
                            <Input
                              type="time"
                              className="w-32"
                              value={profileData.availability[day.key as keyof typeof profileData.availability].end}
                              onChange={(e) => {
                                setProfileData({
                                  ...profileData,
                                  availability: {
                                    ...profileData.availability,
                                    [day.key]: {
                                      ...profileData.availability[day.key as keyof typeof profileData.availability],
                                      end: e.target.value
                                    }
                                  }
                                });
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                    
                    <Button onClick={handleSaveAvailability}>Save Schedule</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="w-5 h-5" />
                      Notification Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Appointment Notifications</h3>
                        <p className="text-sm text-muted-foreground">Get notified about new appointments and cancellations</p>
                      </div>
                      <Switch
                        checked={profileData.notifications.appointments}
                        onCheckedChange={(checked) => setProfileData({
                          ...profileData,
                          notifications: { ...profileData.notifications, appointments: checked }
                        })}
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Patient Messages</h3>
                        <p className="text-sm text-muted-foreground">Receive notifications for patient messages</p>
                      </div>
                      <Switch
                        checked={profileData.notifications.messages}
                        onCheckedChange={(checked) => setProfileData({
                          ...profileData,
                          notifications: { ...profileData.notifications, messages: checked }
                        })}
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Schedule Reminders</h3>
                        <p className="text-sm text-muted-foreground">Get reminded about upcoming appointments</p>
                      </div>
                      <Switch
                        checked={profileData.notifications.reminders}
                        onCheckedChange={(checked) => setProfileData({
                          ...profileData,
                          notifications: { ...profileData.notifications, reminders: checked }
                        })}
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Marketing Communications</h3>
                        <p className="text-sm text-muted-foreground">Receive updates about new features and promotions</p>
                      </div>
                      <Switch
                        checked={profileData.notifications.marketing}
                        onCheckedChange={(checked) => setProfileData({
                          ...profileData,
                          notifications: { ...profileData.notifications, marketing: checked }
                        })}
                      />
                    </div>

                    <Button onClick={handleSaveNotifications}>Save Notification Settings</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Security Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="w-4 h-4 mr-2" />
                      Change Password
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <Globe className="w-4 h-4 mr-2" />
                      Two-Factor Authentication
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
                      Login Activity
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Connected Devices
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorProfile;