import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SearchBar } from "@/components/ui/search-bar";
import { QuickActionCard } from "@/components/ui/quick-action-card";
import { SpecialistCard } from "@/components/ui/specialist-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Video, 
  Pill, 
  FlaskConical, 
  Stethoscope, 
  Brain,
  Star,
  Clock,
  Shield
} from "lucide-react";

// Import generated images
import heroImage from "@/assets/hero-ayurvedic.jpg";
import videoConsultImage from "@/assets/video-consult.jpg";
import productsImage from "@/assets/ayurvedic-products.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-herbal">
        <div className="absolute inset-0 bg-brand-ink/90" />
        <div className="absolute inset-0 opacity-30">
          <img 
            src={heroImage} 
            alt="Ayurvedic herbs and medicines" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-text-on-dark mb-6">
              Bharat ka Ayurvedic aur{" "}
              <span className="text-brand-gold">Unani Portal</span>
            </h1>
            <p className="text-xl text-text-on-dark/90 mb-12 max-w-2xl mx-auto">
              Find verified Hakeems, Vaids, and Ayurvedic practitioners. Book appointments, 
              get instant video consultations, and shop authentic medicines.
            </p>
            
            <SearchBar />
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge className="bg-white/20 text-text-on-dark border-white/30">
                <Shield className="w-4 h-4 mr-1" />
                Verified Practitioners
              </Badge>
              <Badge className="bg-white/20 text-text-on-dark border-white/30">
                <Clock className="w-4 h-4 mr-1" />
                Instant Consultation
              </Badge>
              <Badge className="bg-white/20 text-text-on-dark border-white/30">
                <Star className="w-4 h-4 mr-1" />
                Trusted by 10,000+
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <QuickActionCard
              icon={Calendar}
              title="Physical Appointment"
              description="Book in-clinic visits"
            />
            <QuickActionCard
              icon={Video}
              title="Video Consult"
              description="Instant online consultation"
            />
            <QuickActionCard
              icon={Pill}
              title="Medicines"
              description="Authentic Ayurvedic products"
            />
            <QuickActionCard
              icon={FlaskConical}
              title="Lab Tests"
              description="Health checkups at home"
            />
            <QuickActionCard
              icon={Stethoscope}
              title="Surgeries"
              description="Traditional treatments"
            />
            <QuickActionCard
              icon={Brain}
              title="AI Symptom Checker"
              description="Get preliminary guidance"
            />
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-herbal p-8 text-center border-0 shadow-elegant">
            <div className="flex items-center justify-center gap-4">
              <img 
                src={productsImage} 
                alt="Ayurvedic products" 
                className="w-24 h-24 rounded-full object-cover shadow-gold"
              />
              <div className="text-left">
                <h3 className="font-display text-2xl font-bold text-text-on-dark mb-2">
                  Up to 30% OFF on Ayurvedic Medicines
                </h3>
                <p className="text-text-on-dark/80 mb-4">
                  Authentic herbs and formulations from certified manufacturers
                </p>
                <Button variant="gold" size="lg">
                  Shop Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Top Specialists */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Top Ayurvedic & Unani Specialists
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Connect with experienced practitioners who blend traditional wisdom with modern care
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpecialistCard
              name="Dr. Rajesh Sharma"
              specialty="Ayurvedic Physician"
              rating={4.8}
              experience={15}
              location="Delhi"
              consultationFee={800}
              videoFee={600}
              image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
              languages={["Hindi", "English"]}
              nextSlot="Today 2:30 PM"
            />
            <SpecialistCard
              name="Hakeem Abdul Rahman"
              specialty="Unani Medicine Expert"
              rating={4.9}
              experience={20}
              location="Mumbai"
              consultationFee={1000}
              videoFee={750}
              image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face"
              languages={["Urdu", "Hindi", "English"]}
              nextSlot="Tomorrow 10:00 AM"
            />
            <SpecialistCard
              name="Dr. Priya Patel"
              specialty="Panchakarma Specialist"
              rating={4.7}
              experience={12}
              location="Bangalore"
              consultationFee={900}
              videoFee={650}
              image="https://images.unsplash.com/photo-1594824627147-5aa0c1c522ee?w=400&h=400&fit=crop&crop=face"
              languages={["Gujarati", "Hindi", "English"]}
              nextSlot="Today 4:00 PM"
            />
          </div>
          
          <div className="text-center mt-8">
            <Button variant="premium" size="lg">
              View All Specialists
            </Button>
          </div>
        </div>
      </section>

      {/* Video Consultation CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Get Instant Video Consultation
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Connect with qualified Ayurvedic and Unani practitioners from the comfort of your home. 
                Available 24/7 for urgent consultations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Instant connection with verified practitioners</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Digital prescriptions and treatment plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span>Follow-up consultations included</span>
                </div>
              </div>
              
              <Button variant="gold" size="lg" className="mr-4">
                <Video className="w-5 h-5 mr-2" />
                Start Video Consult
              </Button>
              <Button variant="outline" size="lg">
                Learn More
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
                  Live
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;