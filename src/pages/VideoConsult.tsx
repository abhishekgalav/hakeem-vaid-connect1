import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SpecialistCard } from "@/components/ui/specialist-card";
import { 
  Video, 
  Clock, 
  Shield, 
  FileText, 
  MessageCircle, 
  Star,
  CheckCircle,
  Users,
  Calendar
} from "lucide-react";
import videoConsultImage from "@/assets/video-consult.jpg";

const VideoConsult = () => {
  const onlineDoctors = [
    {
      name: "Dr. Rajesh Sharma",
      specialty: "Ayurvedic Physician", 
      rating: 4.8,
      experience: 15,
      location: "Online",
      consultationFee: 800,
      videoFee: 600,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      languages: ["Hindi", "English"],
      nextSlot: "Available Now"
    },
    {
      name: "Hakeem Abdul Rahman",
      specialty: "Unani Medicine Expert",
      rating: 4.9,
      experience: 20,
      location: "Online",
      consultationFee: 1000,
      videoFee: 750,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      languages: ["Urdu", "Hindi", "English"],
      nextSlot: "Available in 15 mins"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-herbal py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-text-on-dark mb-6">
                Instant Video Consultation
              </h1>
              <p className="text-xl text-text-on-dark/90 mb-8">
                Connect with qualified Ayurvedic and Unani practitioners from anywhere in India. 
                Get expert advice without leaving your home.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge className="bg-white/20 text-text-on-dark border-white/30">
                  <Clock className="w-4 h-4 mr-1" />
                  Available 24/7
                </Badge>
                <Badge className="bg-white/20 text-text-on-dark border-white/30">
                  <Shield className="w-4 h-4 mr-1" />
                  Verified Doctors
                </Badge>
                <Badge className="bg-white/20 text-text-on-dark border-white/30">
                  <FileText className="w-4 h-4 mr-1" />
                  Digital Prescription
                </Badge>
              </div>
              
              <Button variant="gold" size="lg" className="mr-4">
                <Video className="w-5 h-5 mr-2" />
                Start Consultation Now
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={videoConsultImage} 
                alt="Doctor video consultation" 
                className="rounded-[1.25rem] shadow-elegant w-full"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Live Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Video Consultation Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Simple, secure, and convenient healthcare at your fingertips
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 shadow-soft">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-4">1. Choose Your Doctor</h3>
              <p className="text-muted-foreground">
                Browse through our verified Ayurvedic and Unani specialists. 
                Check their profiles, experience, and availability.
              </p>
            </Card>
            
            <Card className="p-8 text-center border-0 shadow-soft">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-4">2. Book & Pay</h3>
              <p className="text-muted-foreground">
                Select a convenient time slot and make secure payment. 
                Instant bookings available for urgent consultations.
              </p>
            </Card>
            
            <Card className="p-8 text-center border-0 shadow-soft">
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-4">3. Connect & Consult</h3>
              <p className="text-muted-foreground">
                Join the video call at your scheduled time. Discuss your health 
                concerns and receive personalized treatment advice.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
                Why Choose Video Consultation?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Convenience</h4>
                    <p className="text-muted-foreground">
                      Consult from the comfort of your home. No travel, no waiting rooms.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Quick Access</h4>
                    <p className="text-muted-foreground">
                      Get expert medical advice within minutes, even for urgent health concerns.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Digital Prescriptions</h4>
                    <p className="text-muted-foreground">
                      Receive digital prescriptions instantly. Order medicines online with ease.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Follow-up Care</h4>
                    <p className="text-muted-foreground">
                      Scheduled follow-ups included. Track your health progress over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">4.8/5 Rating</h3>
                <p className="text-muted-foreground">Based on 50,000+ consultations</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm italic mb-2">
                    "Excellent consultation with Dr. Sharma. Got proper Ayurvedic treatment 
                    for my chronic digestive issues from home."
                  </p>
                  <p className="text-xs text-muted-foreground">- Priya K., Mumbai</p>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm italic mb-2">
                    "Hakeem sahab provided great Unani remedies for my joint pain. 
                    Very convenient and effective treatment."
                  </p>
                  <p className="text-xs text-muted-foreground">- Ahmed R., Delhi</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Doctors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Doctors Available Now
            </h2>
            <p className="text-muted-foreground text-lg">
              Start your consultation with these available specialists
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {onlineDoctors.map((doctor, index) => (
              <SpecialistCard key={index} {...doctor} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="premium" size="lg">
              View All Available Doctors
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VideoConsult;