import { DoctorHeader } from "@/components/layout/doctor-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Printer, 
  Send, 
  Edit, 
  User, 
  Calendar, 
  Clock, 
  FileText,
  Pill,
  Stethoscope,
  Phone,
  Mail
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

// Mock prescription data - in real app this would come from API/database
const mockPrescription = {
  id: "RX-2024-001",
  patient: {
    name: "Rajesh Kumar",
    age: 45,
    gender: "Male",
    phone: "+91 98765 43210",
    email: "rajesh.kumar@email.com",
    address: "123 Gandhi Nagar, New Delhi - 110001"
  },
  doctor: {
    name: "Dr. Amit Sharma",
    qualification: "BAMS, MD (Ayurveda)",
    registration: "AYU-12345-DL",
    clinic: "Sharma Ayurvedic Clinic"
  },
  diagnosis: "Chronic Gastritis with Pitta Imbalance",
  symptoms: ["Burning sensation in stomach", "Acid reflux", "Loss of appetite", "Fatigue"],
  medicines: [
    {
      id: 1,
      name: "Avipattikar Churna",
      type: "registered",
      dosage: "1 tsp",
      frequency: "Twice daily",
      duration: "30 days",
      instructions: "Take with lukewarm water after meals"
    },
    {
      id: 2,
      name: "Custom Digestive Formula",
      type: "own-formula",
      formulaDetails: "Sunthi 2g, Pippali 1g, Maricha 0.5g, Vidanga 1g",
      dosage: "500mg",
      frequency: "Three times daily",
      duration: "15 days",
      instructions: "Take with honey before meals"
    },
    {
      id: 3,
      name: "Kumaryasava",
      type: "registered",
      dosage: "15ml",
      frequency: "Twice daily",
      duration: "30 days",
      instructions: "Mix with equal water after meals"
    }
  ],
  dietaryAdvice: [
    "Avoid spicy and fried foods",
    "Consume cooling foods like cucumber, coconut water",
    "Eat at regular intervals",
    "Avoid citrus fruits and tomatoes"
  ],
  lifestyleAdvice: [
    "Practice Pranayama (Shitali, Shitkari) daily",
    "Avoid sleeping immediately after meals",
    "Maintain regular sleep schedule",
    "Reduce stress through meditation"
  ],
  followUpDate: "2024-02-15",
  createdAt: "2024-01-15",
  createdTime: "10:30 AM",
  status: "sent",
  notes: "Patient has history of acidity. Advised to continue treatment for at least 3 months for complete relief."
};

const DoctorPrescriptionView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const prescription = mockPrescription; // In real app, fetch by id

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sent":
        return <Badge className="bg-herbal-green/10 text-herbal-green border-herbal-green/20">Sent</Badge>;
      case "draft":
        return <Badge variant="secondary">Draft</Badge>;
      case "viewed":
        return <Badge className="bg-ayurvedic-gold/10 text-ayurvedic-gold border-ayurvedic-gold/20">Viewed</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DoctorHeader />
      
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate("/doctor/prescriptions")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-foreground">Prescription {prescription.id}</h1>
                {getStatusBadge(prescription.status)}
              </div>
              <p className="text-muted-foreground text-sm mt-1">
                Created on {prescription.createdAt} at {prescription.createdTime}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm">
              <Send className="h-4 w-4 mr-2" />
              Resend
            </Button>
            <Button size="sm" className="bg-herbal-green hover:bg-herbal-green/90">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
        </div>

        {/* Patient Information */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="h-5 w-5 text-herbal-green" />
              Patient Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{prescription.patient.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Age / Gender</p>
                  <p className="font-medium">{prescription.patient.age} years / {prescription.patient.gender}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium">{prescription.patient.address}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{prescription.patient.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{prescription.patient.email}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Diagnosis */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-herbal-green" />
              Diagnosis & Symptoms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-1">Primary Diagnosis</p>
              <p className="font-semibold text-lg">{prescription.diagnosis}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Symptoms</p>
              <div className="flex flex-wrap gap-2">
                {prescription.symptoms.map((symptom, index) => (
                  <Badge key={index} variant="outline" className="bg-muted/50">
                    {symptom}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medicines */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Pill className="h-5 w-5 text-herbal-green" />
              Prescribed Medicines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {prescription.medicines.map((medicine, index) => (
              <div key={medicine.id}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">{index + 1}. {medicine.name}</p>
                      <Badge 
                        variant="outline" 
                        className={medicine.type === "own-formula" 
                          ? "bg-ayurvedic-gold/10 text-ayurvedic-gold border-ayurvedic-gold/20 text-xs" 
                          : "text-xs"
                        }
                      >
                        {medicine.type === "own-formula" ? "Own Formula" : "Registered"}
                      </Badge>
                    </div>
                    {medicine.type === "own-formula" && medicine.formulaDetails && (
                      <p className="text-sm text-muted-foreground mb-2 italic">
                        Composition: {medicine.formulaDetails}
                      </p>
                    )}
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Dosage: </span>
                        <span className="font-medium">{medicine.dosage}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Frequency: </span>
                        <span className="font-medium">{medicine.frequency}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Duration: </span>
                        <span className="font-medium">{medicine.duration}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      <span className="font-medium">Instructions:</span> {medicine.instructions}
                    </p>
                  </div>
                </div>
                {index < prescription.medicines.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Dietary & Lifestyle Advice */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Dietary Advice</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {prescription.dietaryAdvice.map((advice, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-herbal-green mt-1">•</span>
                    <span>{advice}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Lifestyle Advice</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {prescription.lifestyleAdvice.map((advice, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-herbal-green mt-1">•</span>
                    <span>{advice}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Follow-up & Notes */}
        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-herbal-green" />
              Additional Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Calendar className="h-5 w-5 text-ayurvedic-gold" />
                <div>
                  <p className="text-sm text-muted-foreground">Follow-up Date</p>
                  <p className="font-medium">{prescription.followUpDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Clock className="h-5 w-5 text-ayurvedic-gold" />
                <div>
                  <p className="text-sm text-muted-foreground">Created</p>
                  <p className="font-medium">{prescription.createdAt} at {prescription.createdTime}</p>
                </div>
              </div>
            </div>
            {prescription.notes && (
              <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Doctor's Notes</p>
                <p className="text-sm">{prescription.notes}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Doctor Signature */}
        <Card>
          <CardContent className="py-4">
            <div className="flex justify-between items-end">
              <div>
                <p className="font-semibold">{prescription.doctor.name}</p>
                <p className="text-sm text-muted-foreground">{prescription.doctor.qualification}</p>
                <p className="text-sm text-muted-foreground">Reg. No: {prescription.doctor.registration}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">{prescription.doctor.clinic}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DoctorPrescriptionView;
