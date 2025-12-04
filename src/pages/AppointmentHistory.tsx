import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  Star, 
  Search,
  Filter,
  Download,
  MessageCircle,
  RefreshCw
} from "lucide-react";

const AppointmentHistory = () => {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. Rajesh Sharma",
      specialty: "Ayurvedic Physician",
      date: "2024-01-15",
      time: "2:30 PM",
      type: "Video Consultation",
      status: "Completed",
      rating: 5,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=48&h=48&fit=crop&crop=face",
      fee: 600,
      prescription: true
    },
    {
      id: 2,
      doctor: "Hakeem Abdul Rahman",
      specialty: "Unani Medicine Expert",
      date: "2024-01-10",
      time: "10:00 AM",
      type: "In-person",
      status: "Completed",
      rating: 4,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=48&h=48&fit=crop&crop=face",
      fee: 800,
      prescription: true
    },
    {
      id: 3,
      doctor: "Dr. Priya Patel",
      specialty: "Panchakarma Specialist",
      date: "2024-01-05",
      time: "4:00 PM",
      type: "Video Consultation",
      status: "Completed",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594824627147-5aa0c1c522ee?w=48&h=48&fit=crop&crop=face",
      fee: 650,
      prescription: false
    },
    {
      id: 4,
      doctor: "Dr. Rajesh Sharma",
      specialty: "Ayurvedic Physician",
      date: "2024-01-20",
      time: "3:00 PM",
      type: "Video Consultation",
      status: "Upcoming",
      rating: null,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=48&h=48&fit=crop&crop=face",
      fee: 600,
      prescription: false
    },
    {
      id: 5,
      doctor: "Dr. Anjali Gupta",
      specialty: "Herbal Medicine Expert",
      date: "2023-12-28",
      time: "11:30 AM",
      type: "In-person",
      status: "Cancelled",
      rating: null,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=48&h=48&fit=crop&crop=face",
      fee: 750,
      prescription: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-display font-bold text-foreground">Appointment History</h1>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export History
            </Button>
          </div>

          {/* Filters and Search */}
          <Card className="p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input className="pl-10" placeholder="Search by doctor name or specialty..." />
                </div>
              </div>
              <div className="flex gap-2">
                <select className="px-3 py-2 border border-input rounded-md bg-background">
                  <option>All Status</option>
                  <option>Completed</option>
                  <option>Upcoming</option>
                  <option>Cancelled</option>
                </select>
                <select className="px-3 py-2 border border-input rounded-md bg-background">
                  <option>All Types</option>
                  <option>Video Consultation</option>
                  <option>In-person</option>
                </select>
                <Button variant="outline">
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Appointments List */}
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={appointment.image} />
                      <AvatarFallback>
                        {appointment.doctor.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h3 className="text-lg font-semibold">{appointment.doctor}</h3>
                      <p className="text-muted-foreground">{appointment.specialty}</p>
                      
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(appointment.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {appointment.time}
                        </div>
                        <div className="flex items-center gap-1">
                          {appointment.type === 'Video Consultation' ? (
                            <>
                              <Video className="w-4 h-4" />
                              Video Call
                            </>
                          ) : (
                            <>
                              <MapPin className="w-4 h-4" />
                              In-person
                            </>
                          )}
                        </div>
                      </div>
                      
                      {appointment.rating && (
                        <div className="flex items-center gap-1 mt-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < appointment.rating! ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-muted-foreground ml-1">
                            ({appointment.rating}/5)
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge className={getStatusColor(appointment.status)}>
                      {appointment.status}
                    </Badge>
                    <p className="text-lg font-semibold mt-2">₹{appointment.fee}</p>
                    
                    <div className="flex gap-2 mt-3">
                      {appointment.status === 'Completed' && (
                        <>
                          <Button size="sm" variant="outline">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Feedback
                          </Button>
                          {appointment.prescription && (
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4 mr-1" />
                              Prescription
                            </Button>
                          )}
                          <Button size="sm">
                            <RefreshCw className="w-4 h-4 mr-1" />
                            Book Again
                          </Button>
                        </>
                      )}
                      
                      {appointment.status === 'Upcoming' && (
                        <>
                          <Button size="sm" variant="outline">
                            Reschedule
                          </Button>
                          <Button size="sm" variant="destructive">
                            Cancel
                          </Button>
                          <Button size="sm">
                            <Video className="w-4 h-4 mr-1" />
                            Join
                          </Button>
                        </>
                      )}
                      
                      {appointment.status === 'Cancelled' && (
                        <Button size="sm">
                          <RefreshCw className="w-4 h-4 mr-1" />
                          Book Again
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AppointmentHistory;