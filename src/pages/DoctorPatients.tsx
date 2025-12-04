import { DoctorHeader } from "@/components/layout/doctor-header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search,
  Filter,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock,
  FileText,
  Stethoscope,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const DoctorPatients = () => {
  const patients = [
    {
      id: "123",
      name: "Rahul Kumar",
      age: 34,
      gender: "Male",
      phone: "+91 98765 43210",
      email: "rahul.kumar@email.com",
      location: "Mumbai, Maharashtra",
      lastVisit: "2024-01-08",
      condition: "Digestive Issues",
      status: "Active",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face"
    },
    {
      id: "124",
      name: "Priya Sharma", 
      age: 28,
      gender: "Female",
      phone: "+91 98765 43211",
      email: "priya.sharma@email.com",
      location: "Delhi, India",
      lastVisit: "2024-01-07",
      condition: "Stress & Anxiety",
      status: "New",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=48&h=48&fit=crop&crop=face"
    },
    {
      id: "125",
      name: "Amit Mehta",
      age: 45,
      gender: "Male", 
      phone: "+91 98765 43212",
      email: "amit.mehta@email.com",
      location: "Pune, Maharashtra",
      lastVisit: "2024-01-05",
      condition: "Joint Pain",
      status: "Regular",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
    },
    {
      id: "126",
      name: "Sunita Devi",
      age: 52,
      gender: "Female",
      phone: "+91 98765 43213", 
      email: "sunita.devi@email.com",
      location: "Jaipur, Rajasthan",
      lastVisit: "2024-01-03",
      condition: "Blood Pressure",
      status: "Regular",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=48&h=48&fit=crop&crop=face"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New": return "bg-brand-gold text-brand-ink";
      case "Active": return "bg-primary text-primary-foreground";
      case "Regular": return "bg-accent text-accent-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DoctorHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">Patient Records</h1>
            <p className="text-muted-foreground">Manage your patient information and medical history</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="p-4 mb-6 shadow-soft">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search patients by name, condition, or contact..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </Card>

        {/* Patient Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 text-center shadow-soft">
            <h3 className="text-2xl font-bold text-primary">1,247</h3>
            <p className="text-sm text-muted-foreground">Total Patients</p>
          </Card>
          <Card className="p-4 text-center shadow-soft">
            <h3 className="text-2xl font-bold text-accent">8</h3>
            <p className="text-sm text-muted-foreground">New This Week</p>
          </Card>
          <Card className="p-4 text-center shadow-soft">
            <h3 className="text-2xl font-bold text-brand-gold">156</h3>
            <p className="text-sm text-muted-foreground">Active Cases</p>
          </Card>
          <Card className="p-4 text-center shadow-soft">
            <h3 className="text-2xl font-bold text-primary">892</h3>
            <p className="text-sm text-muted-foreground">Regular Patients</p>
          </Card>
        </div>

        {/* Patient List */}
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Patients</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="regular">Regular</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {patients.map((patient) => (
              <Card key={patient.id} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={patient.avatar} />
                      <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{patient.name}</h3>
                        <Badge className={getStatusColor(patient.status)}>
                          {patient.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{patient.age} years • {patient.gender}</p>
                      <p className="text-sm font-medium text-accent">{patient.condition}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {patient.phone}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {patient.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Last visit: {patient.lastVisit}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm" asChild>
                      <Link to={`/doctor/patients/${patient.id}`}>
                        <FileText className="w-4 h-4 mr-2" />
                        View Records
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link to={`/doctor/consultation/${patient.id}`}>
                        <Stethoscope className="w-4 h-4 mr-2" />
                        Consult
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="new" className="space-y-4">
            {patients.filter(p => p.status === "New").map((patient) => (
              <Card key={patient.id} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={patient.avatar} />
                      <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{patient.name}</h3>
                        <Badge className={getStatusColor(patient.status)}>
                          {patient.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{patient.age} years • {patient.gender}</p>
                      <p className="text-sm font-medium text-accent">{patient.condition}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {patient.phone}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {patient.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm" asChild>
                      <Link to={`/doctor/patients/${patient.id}`}>
                        <FileText className="w-4 h-4 mr-2" />
                        View Records
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link to={`/doctor/consultation/${patient.id}`}>
                        <Stethoscope className="w-4 h-4 mr-2" />
                        Start Consultation
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            {patients.filter(p => p.status === "Active").map((patient) => (
              <Card key={patient.id} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={patient.avatar} />
                      <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{patient.name}</h3>
                        <Badge className={getStatusColor(patient.status)}>
                          {patient.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{patient.age} years • {patient.gender}</p>
                      <p className="text-sm font-medium text-accent">{patient.condition}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {patient.phone}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {patient.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Last visit: {patient.lastVisit}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm" asChild>
                      <Link to={`/doctor/patients/${patient.id}`}>
                        <FileText className="w-4 h-4 mr-2" />
                        View Records
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link to={`/doctor/consultation/${patient.id}`}>
                        <Stethoscope className="w-4 h-4 mr-2" />
                        Consult
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="regular" className="space-y-4">
            {patients.filter(p => p.status === "Regular").map((patient) => (
              <Card key={patient.id} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={patient.avatar} />
                      <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{patient.name}</h3>
                        <Badge className={getStatusColor(patient.status)}>
                          {patient.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{patient.age} years • {patient.gender}</p>
                      <p className="text-sm font-medium text-accent">{patient.condition}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {patient.phone}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {patient.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Last visit: {patient.lastVisit}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm" asChild>
                      <Link to={`/doctor/patients/${patient.id}`}>
                        <FileText className="w-4 h-4 mr-2" />
                        View Records
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link to={`/doctor/consultation/${patient.id}`}>
                        <Stethoscope className="w-4 h-4 mr-2" />
                        Consult
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorPatients;