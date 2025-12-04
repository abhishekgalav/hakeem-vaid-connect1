import { DoctorHeader } from "@/components/layout/doctor-header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Phone, 
  Award,
  Clock,
  Star,
  Calendar,
  Edit,
  MapPin,
  Languages,
  IndianRupee,
  GraduationCap,
  FileText,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const DoctorProfileView = () => {
  // In a real app, this would come from database/API
  const profileData = {
    name: "Dr. Rajesh Sharma",
    role: "Ayurvedic Practitioner (Vaid)",
    email: "dr.rajesh@example.com",
    phone: "+91 9876543210",
    specialization: "Ayurvedic Medicine, Panchakarma",
    education: "BAMS, MD (Ayurveda)",
    experienceYears: "15",
    languages: "Hindi, English, Marathi",
    consultationFee: "500",
    tags: ["Panchakarma", "Digestive Health", "Joint & Bone"],
    rating: "4.8",
    totalPatients: "1,247",
    totalConsultations: "2,156",
    availability: {
      mon: ["10:00", "14:00"],
      tue: ["10:00", "13:00"],
      wed: ["10:00"],
      fri: ["15:00"],
    },
  };

  const daysOfWeek: { [key: string]: string } = {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
    sun: "Sunday",
  };

  return (
    <div className="min-h-screen bg-background">
      <DoctorHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link to="/doctor/dashboard">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <Button asChild>
              <Link to="/doctor/profile/edit">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Link>
            </Button>
          </div>

          {/* Profile Header Card */}
          <Card className="shadow-soft mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face" />
                  <AvatarFallback className="text-2xl">RS</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h1 className="text-3xl font-display font-bold text-foreground mb-1">
                        {profileData.name}
                      </h1>
                      <p className="text-lg text-muted-foreground mb-3">{profileData.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profileData.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Star className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Rating</p>
                        <p className="font-semibold">{profileData.rating}/5</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Patients</p>
                        <p className="font-semibold">{profileData.totalPatients}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Consultations</p>
                        <p className="font-semibold">{profileData.totalConsultations}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Contact Information */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{profileData.email}</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{profileData.phone}</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Languages className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Languages</p>
                    <p className="font-medium">{profileData.languages}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Information */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Professional Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Specialization</p>
                    <p className="font-medium">{profileData.specialization}</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium">{profileData.education}</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">{profileData.experienceYears} years</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <IndianRupee className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Consultation Fee</p>
                    <p className="font-medium">₹{profileData.consultationFee}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Availability Schedule */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Availability Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              {Object.keys(profileData.availability).length > 0 ? (
                <div className="space-y-3">
                  {Object.entries(profileData.availability).map(([day, times]) => (
                    <div
                      key={day}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-muted-foreground" />
                        <span className="font-medium">{daysOfWeek[day]}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {times.map((time, index) => (
                          <Badge key={index} variant="outline">
                            {time}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-center py-4">
                  No availability schedule set
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorProfileView;
