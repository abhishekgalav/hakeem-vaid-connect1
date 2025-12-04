import { DoctorHeader } from "@/components/layout/doctor-header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  Video, 
  MapPin, 
  Phone, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Calendar as CalendarIcon,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const DoctorAppointments = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const todayAppointments = [
    {
      id: "1",
      time: "09:00 AM",
      patient: "Rajesh Patel",
      type: "video",
      condition: "Follow-up - Diabetes Management",
      status: "confirmed",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face",
      phone: "+91 98765 43210"
    },
    {
      id: "2", 
      time: "10:00 AM",
      patient: "Rahul Kumar",
      type: "in-person",
      condition: "Digestive Issues",
      status: "in-progress",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face",
      phone: "+91 98765 43211"
    },
    {
      id: "3",
      time: "11:30 AM", 
      patient: "Priya Sharma",
      type: "video",
      condition: "Stress & Anxiety - New Patient",
      status: "waiting",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=48&h=48&fit=crop&crop=face",
      phone: "+91 98765 43212"
    },
    {
      id: "4",
      time: "02:00 PM",
      patient: "Amit Mehta", 
      type: "in-person",
      condition: "Joint Pain Treatment",
      status: "confirmed",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face",
      phone: "+91 98765 43213"
    },
    {
      id: "5",
      time: "03:30 PM",
      patient: "Sunita Devi",
      type: "video", 
      condition: "Blood Pressure Monitoring",
      status: "confirmed",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=48&h=48&fit=crop&crop=face",
      phone: "+91 98765 43214"
    }
  ];

  const upcomingAppointments = [
    {
      id: "6",
      date: "Tomorrow",
      time: "10:00 AM",
      patient: "Vikram Singh",
      type: "in-person",
      condition: "Chronic Pain Management",
      status: "confirmed",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face"
    },
    {
      id: "7",
      date: "Jan 12, 2024",
      time: "11:30 AM", 
      patient: "Meera Joshi",
      type: "video",
      condition: "Skin Condition Follow-up",
      status: "confirmed",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-primary text-primary-foreground";
      case "in-progress": return "bg-brand-gold text-brand-ink";
      case "waiting": return "bg-accent text-accent-foreground";
      case "completed": return "bg-muted text-muted-foreground";
      case "cancelled": return "bg-destructive text-destructive-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed": return <CheckCircle className="w-4 h-4" />;
      case "in-progress": return <Clock className="w-4 h-4" />;
      case "waiting": return <AlertCircle className="w-4 h-4" />;
      case "cancelled": return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DoctorHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">Appointments</h1>
            <p className="text-muted-foreground">Manage your appointment schedule and patient consultations</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button>
              <CalendarIcon className="w-4 h-4 mr-2" />
              Schedule New
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Calendar Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-4 shadow-soft">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border-0"
              />
            </Card>

            {/* Today's Stats */}
            <Card className="p-4 mt-4 shadow-soft">
              <h3 className="font-semibold mb-3">Today's Overview</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-medium">8 appointments</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Completed</span>
                  <span className="font-medium text-primary">3</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Upcoming</span>
                  <span className="font-medium text-accent">5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Revenue</span>
                  <span className="font-medium text-brand-gold">₹4,200</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="today" className="space-y-4">
              <TabsList>
                <TabsTrigger value="today">Today</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>

              <TabsContent value="today" className="space-y-4">
                <div className="grid gap-4">
                  {todayAppointments.map((appointment) => (
                    <Card key={appointment.id} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-primary">{appointment.time.split(' ')[0]}</div>
                            <div className="text-xs text-muted-foreground">{appointment.time.split(' ')[1]}</div>
                          </div>
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={appointment.avatar} />
                            <AvatarFallback>{appointment.patient.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h3 className="font-semibold text-lg">{appointment.patient}</h3>
                            <p className="text-sm text-muted-foreground">{appointment.condition}</p>
                            <div className="flex items-center gap-3">
                              <Badge 
                                className={getStatusColor(appointment.status)}
                              >
                                {getStatusIcon(appointment.status)}
                                <span className="ml-1 capitalize">{appointment.status.replace('-', ' ')}</span>
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {appointment.type === "video" ? (
                                  <>
                                    <Video className="w-3 h-3 mr-1" />
                                    Video Call
                                  </>
                                ) : (
                                  <>
                                    <MapPin className="w-3 h-3 mr-1" />
                                    In-person
                                  </>
                                )}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          {appointment.status === "in-progress" && (
                            <Button size="sm" className="bg-brand-gold text-brand-ink hover:bg-brand-gold/80">
                              <Clock className="w-4 h-4 mr-2" />
                              In Session
                            </Button>
                          )}
                          {appointment.status === "waiting" && (
                            <Button size="sm" asChild>
                              <Link to={`/doctor/consultation/${appointment.id}`}>
                                {appointment.type === "video" ? <Video className="w-4 h-4 mr-2" /> : <MapPin className="w-4 h-4 mr-2" />}
                                Start
                              </Link>
                            </Button>
                          )}
                          {appointment.status === "confirmed" && (
                            <Button size="sm" variant="outline" disabled>
                              <Clock className="w-4 h-4 mr-2" />
                              Scheduled
                            </Button>
                          )}
                          <Button size="sm" variant="ghost" asChild>
                            <Link to={`/doctor/patients/${appointment.id}`}>
                              View Patient
                            </Link>
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="upcoming" className="space-y-4">
                <div className="grid gap-4">
                  {upcomingAppointments.map((appointment) => (
                    <Card key={appointment.id} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-sm font-medium text-primary">{appointment.date}</div>
                            <div className="text-lg font-bold">{appointment.time.split(' ')[0]}</div>
                            <div className="text-xs text-muted-foreground">{appointment.time.split(' ')[1]}</div>
                          </div>
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={appointment.avatar} />
                            <AvatarFallback>{appointment.patient.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h3 className="font-semibold text-lg">{appointment.patient}</h3>
                            <p className="text-sm text-muted-foreground">{appointment.condition}</p>
                            <div className="flex items-center gap-3">
                              <Badge className={getStatusColor(appointment.status)}>
                                {getStatusIcon(appointment.status)}
                                <span className="ml-1 capitalize">{appointment.status}</span>
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {appointment.type === "video" ? (
                                  <>
                                    <Video className="w-3 h-3 mr-1" />
                                    Video Call
                                  </>
                                ) : (
                                  <>
                                    <MapPin className="w-3 h-3 mr-1" />
                                    In-person
                                  </>
                                )}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <Link to={`/doctor/patients/${appointment.id}`}>
                              View Patient
                            </Link>
                          </Button>
                          <Button size="sm" variant="ghost">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                <div className="text-center py-12">
                  <CalendarIcon className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Appointment History</h3>
                  <p className="text-muted-foreground mb-4">View your past consultations and patient interactions</p>
                  <Button variant="outline">Load History</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorAppointments;