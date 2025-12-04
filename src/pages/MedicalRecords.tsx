import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  FileText,
  Download,
  Calendar,
  Search,
  Filter,
  Upload,
  Heart,
  Activity,
  Pill,
  TestTube
} from "lucide-react";

const MedicalRecords = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-display font-bold text-foreground flex items-center">
              <FileText className="w-8 h-8 mr-3 text-primary" />
              Medical Records
            </h1>
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Upload Record
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input className="pl-10" placeholder="Search records..." />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All Records</TabsTrigger>
              <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
              <TabsTrigger value="lab-reports">Lab Reports</TabsTrigger>
              <TabsTrigger value="consultations">Consultations</TabsTrigger>
              <TabsTrigger value="vitals">Vitals</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {/* Recent Prescription */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Pill className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Prescription - Digestive Issues</h3>
                      <p className="text-sm text-muted-foreground">Dr. Rajesh Sharma • January 15, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>Active</Badge>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <p><strong>Medicines:</strong> Triphala Churna, Ajwain Powder, Ginger Tablets</p>
                  <p><strong>Instructions:</strong> Take after meals, continue for 21 days</p>
                  <p><strong>Next Review:</strong> February 5, 2024</p>
                </div>
              </Card>

              {/* Lab Report */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TestTube className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Complete Blood Count (CBC)</h3>
                      <p className="text-sm text-muted-foreground">PathLab Services • January 10, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Normal</Badge>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <p><strong>Hemoglobin:</strong> 14.2 g/dL (Normal)</p>
                  <p><strong>WBC Count:</strong> 7,200 cells/μL (Normal)</p>
                  <p><strong>Platelet Count:</strong> 250,000 cells/μL (Normal)</p>
                </div>
              </Card>

              {/* Consultation Note */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Consultation - General Checkup</h3>
                      <p className="text-sm text-muted-foreground">Hakeem Abdul Rahman • January 8, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Completed</Badge>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <p><strong>Chief Complaint:</strong> General fatigue and digestive issues</p>
                  <p><strong>Diagnosis:</strong> Mild digestive imbalance (Unani approach)</p>
                  <p><strong>Treatment:</strong> Natural herbs and dietary modifications recommended</p>
                </div>
              </Card>

              {/* Vitals Record */}
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Activity className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Vital Signs Record</h3>
                      <p className="text-sm text-muted-foreground">Self-recorded • January 5, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Normal</Badge>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <p><strong>Blood Pressure:</strong> 120/80 mmHg</p>
                  <p><strong>Heart Rate:</strong> 72 bpm</p>
                  <p><strong>Weight:</strong> 70 kg</p>
                  <p><strong>Temperature:</strong> 98.6°F</p>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="prescriptions" className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Pill className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Prescription - Digestive Issues</h3>
                      <p className="text-sm text-muted-foreground">Dr. Rajesh Sharma • January 15, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>Active</Badge>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <p><strong>Medicines:</strong> Triphala Churna, Ajwain Powder, Ginger Tablets</p>
                  <p><strong>Instructions:</strong> Take after meals, continue for 21 days</p>
                  <p><strong>Next Review:</strong> February 5, 2024</p>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="lab-reports" className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TestTube className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Complete Blood Count (CBC)</h3>
                      <p className="text-sm text-muted-foreground">PathLab Services • January 10, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Normal</Badge>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <p><strong>Hemoglobin:</strong> 14.2 g/dL (Normal)</p>
                  <p><strong>WBC Count:</strong> 7,200 cells/μL (Normal)</p>
                  <p><strong>Platelet Count:</strong> 250,000 cells/μL (Normal)</p>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="consultations" className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Consultation - General Checkup</h3>
                      <p className="text-sm text-muted-foreground">Hakeem Abdul Rahman • January 8, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Completed</Badge>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <p><strong>Chief Complaint:</strong> General fatigue and digestive issues</p>
                  <p><strong>Diagnosis:</strong> Mild digestive imbalance (Unani approach)</p>
                  <p><strong>Treatment:</strong> Natural herbs and dietary modifications recommended</p>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="vitals" className="space-y-4">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Activity className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Vital Signs Record</h3>
                      <p className="text-sm text-muted-foreground">Self-recorded • January 5, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Normal</Badge>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <p><strong>Blood Pressure:</strong> 120/80 mmHg</p>
                  <p><strong>Heart Rate:</strong> 72 bpm</p>
                  <p><strong>Weight:</strong> 70 kg</p>
                  <p><strong>Temperature:</strong> 98.6°F</p>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MedicalRecords;