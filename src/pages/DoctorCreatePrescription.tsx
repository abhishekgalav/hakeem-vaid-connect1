import { useState } from "react";
import { DoctorHeader } from "@/components/layout/doctor-header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  FileText, 
  Plus, 
  Trash2, 
  Search, 
  User, 
  Calendar as CalendarIcon,
  Clock,
  Pill,
  Save,
  Send,
  Printer,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface Medicine {
  id: string;
  type: "own-formula" | "registered";
  name: string;
  formulaDetails?: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string;
}

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
}

const DoctorCreatePrescription = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [patientSearch, setPatientSearch] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [generalInstructions, setGeneralInstructions] = useState("");
  const [followUpDate, setFollowUpDate] = useState<Date | undefined>(undefined);
  const [validityDays, setValidityDays] = useState("30");

  // Mock patients data
  const patients: Patient[] = [
    { id: "1", name: "Ahmed Khan", age: 35, gender: "Male", phone: "+92 300 1234567" },
    { id: "2", name: "Fatima Ali", age: 28, gender: "Female", phone: "+92 301 2345678" },
    { id: "3", name: "Muhammad Hassan", age: 45, gender: "Male", phone: "+92 302 3456789" },
    { id: "4", name: "Ayesha Siddiqui", age: 32, gender: "Female", phone: "+92 303 4567890" },
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(patientSearch.toLowerCase()) ||
    patient.phone.includes(patientSearch)
  );

  // Mock registered medicines
  const registeredMedicines = [
    "Triphala Churna",
    "Ashwagandha Capsules",
    "Brahmi Vati",
    "Chyawanprash",
    "Arjunarishta",
    "Dashmool Kwath",
    "Giloy Ghanvati",
    "Mahasudarshan Churna",
    "Punarnava Mandur",
    "Shatavari Churna",
    "Sitopaladi Churna",
    "Trikatu Churna",
    "Yashtimadhu Churna",
    "Amla Juice",
    "Kumari Asava",
  ];

  const addMedicine = () => {
    const newMedicine: Medicine = {
      id: Date.now().toString(),
      type: "registered",
      name: "",
      formulaDetails: "",
      dosage: "",
      frequency: "",
      duration: "",
      instructions: "",
    };
    setMedicines([...medicines, newMedicine]);
  };

  const updateMedicine = (id: string, field: keyof Medicine, value: string) => {
    setMedicines(medicines.map(med => 
      med.id === id ? { ...med, [field]: value } : med
    ));
  };

  const removeMedicine = (id: string) => {
    setMedicines(medicines.filter(med => med.id !== id));
  };

  const handleSaveDraft = () => {
    toast({
      title: "Draft Saved",
      description: "Prescription draft has been saved successfully.",
    });
  };

  const handleSendPrescription = () => {
    if (!selectedPatient) {
      toast({
        title: "Error",
        description: "Please select a patient first.",
        variant: "destructive",
      });
      return;
    }

    if (medicines.length === 0) {
      toast({
        title: "Error",
        description: "Please add at least one medicine.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Prescription Sent",
      description: `Prescription sent to ${selectedPatient.name} successfully.`,
    });
    navigate("/doctor/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <DoctorHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-foreground">
                  Create Prescription
                </h1>
                <p className="text-muted-foreground">
                  Write a new prescription for your patient
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleSaveDraft}>
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button variant="outline">
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Patient Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <User className="w-5 h-5" />
                    Patient Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedPatient ? (
                    <div className="flex items-center justify-between p-4 bg-accent/5 rounded-lg border">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{selectedPatient.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {selectedPatient.age} years • {selectedPatient.gender}
                          </p>
                          <p className="text-sm text-muted-foreground">{selectedPatient.phone}</p>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setSelectedPatient(null)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          className="pl-10"
                          placeholder="Search patient by name or phone..."
                          value={patientSearch}
                          onChange={(e) => setPatientSearch(e.target.value)}
                        />
                      </div>
                      {patientSearch && (
                        <div className="border rounded-lg divide-y max-h-48 overflow-y-auto">
                          {filteredPatients.map((patient) => (
                            <button
                              key={patient.id}
                              className="w-full p-3 text-left hover:bg-accent/5 transition-colors flex items-center gap-3"
                              onClick={() => {
                                setSelectedPatient(patient);
                                setPatientSearch("");
                              }}
                            >
                              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                                <User className="w-5 h-5 text-muted-foreground" />
                              </div>
                              <div>
                                <p className="font-medium">{patient.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {patient.age} years • {patient.gender} • {patient.phone}
                                </p>
                              </div>
                            </button>
                          ))}
                          {filteredPatients.length === 0 && (
                            <p className="p-3 text-center text-muted-foreground">
                              No patients found
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Diagnosis */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Diagnosis & Symptoms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="symptoms">Symptoms / Chief Complaints</Label>
                    <Textarea
                      id="symptoms"
                      placeholder="Enter patient's symptoms..."
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="diagnosis">Diagnosis</Label>
                    <Textarea
                      id="diagnosis"
                      placeholder="Enter your diagnosis..."
                      value={diagnosis}
                      onChange={(e) => setDiagnosis(e.target.value)}
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Medicines */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Pill className="w-5 h-5" />
                      Medicines
                    </CardTitle>
                    <Button size="sm" onClick={addMedicine}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Medicine
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {medicines.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <Pill className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p>No medicines added yet</p>
                      <p className="text-sm">Click "Add Medicine" to start</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {medicines.map((medicine, index) => (
                        <div 
                          key={medicine.id} 
                          className="p-4 border rounded-lg space-y-4 bg-accent/5"
                        >
                          <div className="flex items-center justify-between">
                            <Badge variant="outline">Medicine {index + 1}</Badge>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="text-destructive hover:text-destructive"
                              onClick={() => removeMedicine(medicine.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          {/* Medicine Type Selector */}
                          <div className="space-y-2 mb-4">
                            <Label>Medicine Type</Label>
                            <div className="flex gap-2">
                              <Button
                                type="button"
                                variant={medicine.type === "registered" ? "default" : "outline"}
                                size="sm"
                                className="flex-1"
                                onClick={() => updateMedicine(medicine.id, "type", "registered")}
                              >
                                <Pill className="w-4 h-4 mr-2" />
                                Registered Medicine
                              </Button>
                              <Button
                                type="button"
                                variant={medicine.type === "own-formula" ? "default" : "outline"}
                                size="sm"
                                className="flex-1"
                                onClick={() => updateMedicine(medicine.id, "type", "own-formula")}
                              >
                                <FileText className="w-4 h-4 mr-2" />
                                Own Formula
                              </Button>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label>{medicine.type === "own-formula" ? "Formula Name" : "Medicine Name"}</Label>
                              {medicine.type === "registered" ? (
                                <Select
                                  value={medicine.name}
                                  onValueChange={(value) => updateMedicine(medicine.id, "name", value)}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select medicine" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {registeredMedicines.map((med) => (
                                      <SelectItem key={med} value={med}>{med}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              ) : (
                                <Input
                                  placeholder="e.g., Custom Herbal Mix"
                                  value={medicine.name}
                                  onChange={(e) => updateMedicine(medicine.id, "name", e.target.value)}
                                />
                              )}
                            </div>
                            <div className="space-y-2">
                              <Label>Dosage</Label>
                              <Input
                                placeholder="e.g., 1 tsp, 500mg"
                                value={medicine.dosage}
                                onChange={(e) => updateMedicine(medicine.id, "dosage", e.target.value)}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label>Frequency</Label>
                              <Select
                                value={medicine.frequency}
                                onValueChange={(value) => updateMedicine(medicine.id, "frequency", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select frequency" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="once-daily">Once Daily</SelectItem>
                                  <SelectItem value="twice-daily">Twice Daily</SelectItem>
                                  <SelectItem value="thrice-daily">Three Times Daily</SelectItem>
                                  <SelectItem value="before-meals">Before Meals</SelectItem>
                                  <SelectItem value="after-meals">After Meals</SelectItem>
                                  <SelectItem value="morning">Morning Only</SelectItem>
                                  <SelectItem value="night">Night Only</SelectItem>
                                  <SelectItem value="as-needed">As Needed</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label>Duration</Label>
                              <Select
                                value={medicine.duration}
                                onValueChange={(value) => updateMedicine(medicine.id, "duration", value)}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select duration" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="3-days">3 Days</SelectItem>
                                  <SelectItem value="5-days">5 Days</SelectItem>
                                  <SelectItem value="7-days">7 Days</SelectItem>
                                  <SelectItem value="10-days">10 Days</SelectItem>
                                  <SelectItem value="14-days">14 Days</SelectItem>
                                  <SelectItem value="21-days">21 Days</SelectItem>
                                  <SelectItem value="30-days">30 Days</SelectItem>
                                  <SelectItem value="60-days">60 Days</SelectItem>
                                  <SelectItem value="90-days">90 Days</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          {/* Formula Details - only for Own Formula */}
                          {medicine.type === "own-formula" && (
                            <div className="space-y-2">
                              <Label>Formula Composition</Label>
                              <Textarea
                                placeholder="Enter formula ingredients and proportions..."
                                value={medicine.formulaDetails || ""}
                                onChange={(e) => updateMedicine(medicine.id, "formulaDetails", e.target.value)}
                                rows={3}
                              />
                            </div>
                          )}

                          <div className="space-y-2">
                            <Label>Special Instructions</Label>
                            <Input
                              placeholder="e.g., Take with warm water"
                              value={medicine.instructions}
                              onChange={(e) => updateMedicine(medicine.id, "instructions", e.target.value)}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* General Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">General Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Enter general instructions for the patient (diet, lifestyle, precautions)..."
                    value={generalInstructions}
                    onChange={(e) => setGeneralInstructions(e.target.value)}
                    rows={4}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Prescription Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Prescription Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Prescription Date</Label>
                    <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">
                        {new Date().toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Follow-up Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !followUpDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {followUpDate ? format(followUpDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={followUpDate}
                          onSelect={setFollowUpDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Validity Period</Label>
                    <Select value={validityDays} onValueChange={setValidityDays}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7">7 Days</SelectItem>
                        <SelectItem value="14">14 Days</SelectItem>
                        <SelectItem value="30">30 Days</SelectItem>
                        <SelectItem value="60">60 Days</SelectItem>
                        <SelectItem value="90">90 Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Patient</span>
                    <span className="font-medium">
                      {selectedPatient ? selectedPatient.name : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Medicines</span>
                    <span className="font-medium">{medicines.length} items</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Validity</span>
                    <span className="font-medium">{validityDays} days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Follow-up</span>
                    <span className="font-medium">
                      {followUpDate ? format(followUpDate, "PP") : "Not set"}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleSendPrescription}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Prescription
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/doctor/dashboard")}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DoctorCreatePrescription;