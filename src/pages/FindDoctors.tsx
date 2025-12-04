import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SearchBar } from "@/components/ui/search-bar";
import { SpecialistCard } from "@/components/ui/specialist-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Filter, MapPin, Grid, List } from "lucide-react";

const FindDoctors = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([500]);

  const doctors = [
    {
      name: "Dr. Rajesh Sharma",
      specialty: "Ayurvedic Physician",
      rating: 4.8,
      experience: 15,
      location: "Delhi",
      consultationFee: 800,
      videoFee: 600,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      languages: ["Hindi", "English"],
      nextSlot: "Today 2:30 PM"
    },
    {
      name: "Hakeem Abdul Rahman",
      specialty: "Unani Medicine Expert",
      rating: 4.9,
      experience: 20,
      location: "Mumbai",
      consultationFee: 1000,
      videoFee: 750,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      languages: ["Urdu", "Hindi", "English"],
      nextSlot: "Tomorrow 10:00 AM"
    },
    {
      name: "Dr. Priya Patel",
      specialty: "Panchakarma Specialist",
      rating: 4.7,
      experience: 12,
      location: "Bangalore",
      consultationFee: 900,
      videoFee: 650,
      image: "https://images.unsplash.com/photo-1594824627147-5aa0c1c522ee?w=400&h=400&fit=crop&crop=face",
      languages: ["Gujarati", "Hindi", "English"],
      nextSlot: "Today 4:00 PM"
    },
    {
      name: "Dr. Suresh Kumar",
      specialty: "Herbal Medicine Specialist",
      rating: 4.6,
      experience: 18,
      location: "Chennai",
      consultationFee: 700,
      videoFee: 500,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      languages: ["Tamil", "Hindi", "English"],
      nextSlot: "Today 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-herbal py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-on-dark mb-6">
            Find Qualified Ayurvedic & Unani Practitioners
          </h1>
          <p className="text-xl text-text-on-dark/90 mb-8 max-w-2xl mx-auto">
            Connect with verified Hakeems, Vaids, and specialists across India
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Filters & Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80">
              <Card className="p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Filters</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-3">Specialty</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ayurvedic">Ayurvedic Physician</SelectItem>
                        <SelectItem value="unani">Unani Practitioner</SelectItem>
                        <SelectItem value="panchakarma">Panchakarma Specialist</SelectItem>
                        <SelectItem value="herbal">Herbal Medicine</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Location</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="chennai">Chennai</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Experience</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5+ years</SelectItem>
                        <SelectItem value="10">10+ years</SelectItem>
                        <SelectItem value="15">15+ years</SelectItem>
                        <SelectItem value="20">20+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      Consultation Fee: ₹{priceRange[0]}
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={2000}
                      min={200}
                      step={100}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Gender</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Languages</label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer hover:bg-accent">Hindi</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-accent">English</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-accent">Urdu</Badge>
                      <Badge variant="outline" className="cursor-pointer hover:bg-accent">Tamil</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Results */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Available Practitioners</h2>
                  <p className="text-muted-foreground">{doctors.length} doctors found</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <Select defaultValue="relevance">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="experience">Experience</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="flex border rounded-lg">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 gap-6' : 'space-y-6'}>
                {doctors.map((doctor, index) => (
                  <SpecialistCard key={index} {...doctor} />
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline">Load More Doctors</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindDoctors;