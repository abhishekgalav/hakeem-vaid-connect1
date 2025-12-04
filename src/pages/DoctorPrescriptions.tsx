import { useState } from "react";
import { DoctorHeader } from "@/components/layout/doctor-header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Search, 
  Filter,
  Eye,
  Printer,
  Send,
  Pill,
  Calendar,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

interface Prescription {
  id: string;
  patientName: string;
  patientAvatar?: string;
  patientAge: number;
  patientGender: string;
  diagnosis: string;
  medicines: string[];
  date: string;
  time: string;
  status: "sent" | "draft" | "expired";
  followUpDate?: string;
}

const DoctorPrescriptions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const prescriptions: Prescription[] = [
    {
      id: "1",
      patientName: "Rahul Kumar",
      patientAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face",
      patientAge: 35,
      patientGender: "Male",
      diagnosis: "Digestive Issues - Mandagni",
      medicines: ["Ashwagandha Churna", "Brahmi Vati", "Triphala"],
      date: "2024-12-04",
      time: "10:15 AM",
      status: "sent",
      followUpDate: "2024-12-18",
    },
    {
      id: "2",
      patientName: "Priya Sharma",
      patientAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=48&h=48&fit=crop&crop=face",
      patientAge: 28,
      patientGender: "Female",
      diagnosis: "Stress & Anxiety - Vata Imbalance",
      medicines: ["Brahmi", "Jatamansi", "Shankhpushpi"],
      date: "2024-12-03",
      time: "4:30 PM",
      status: "sent",
      followUpDate: "2024-12-17",
    },
    {
      id: "3",
      patientName: "Amit Mehta",
      patientAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face",
      patientAge: 45,
      patientGender: "Male",
      diagnosis: "Joint Pain - Vata Vyadhi",
      medicines: ["Guggulu", "Shallaki", "Dashmool"],
      date: "2024-12-03",
      time: "2:00 PM",
      status: "sent",
    },
    {
      id: "4",
      patientName: "Sunita Devi",
      patientAge: 52,
      patientGender: "Female",
      diagnosis: "Digestive Disorders",
      medicines: ["Triphala", "Ajwain", "Hingwashtak Churna"],
      date: "2024-12-02",
      time: "11:00 AM",
      status: "sent",
    },
    {
      id: "5",
      patientName: "Vikram Singh",
      patientAge: 40,
      patientGender: "Male",
      diagnosis: "Skin Issues - Pitta Imbalance",
      medicines: ["Neem", "Manjistha", "Sariva"],
      date: "2024-12-01",
      time: "3:45 PM",
      status: "expired",
    },
    {
      id: "6",
      patientName: "New Patient",
      patientAge: 30,
      patientGender: "Male",
      diagnosis: "General Weakness",
      medicines: ["Chyawanprash", "Ashwagandha"],
      date: "2024-12-04",
      time: "9:00 AM",
      status: "draft",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sent":
        return <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Sent</Badge>;
      case "draft":
        return <Badge variant="secondary">Draft</Badge>;
      case "expired":
        return <Badge variant="outline" className="text-muted-foreground">Expired</Badge>;
      default:
        return null;
    }
  };

  const filteredPrescriptions = prescriptions.filter((prescription) => {
    const matchesSearch = 
      prescription.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prescription.diagnosis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prescription.medicines.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesStatus = statusFilter === "all" || prescription.status === statusFilter;
    
    let matchesDate = true;
    if (dateFilter === "today") {
      matchesDate = prescription.date === "2024-12-04";
    } else if (dateFilter === "week") {
      matchesDate = ["2024-12-04", "2024-12-03", "2024-12-02", "2024-12-01"].includes(prescription.date);
    }

    return matchesSearch && matchesStatus && matchesDate;
  });

  const stats = {
    total: prescriptions.length,
    sent: prescriptions.filter(p => p.status === "sent").length,
    drafts: prescriptions.filter(p => p.status === "draft").length,
    thisWeek: prescriptions.filter(p => 
      ["2024-12-04", "2024-12-03", "2024-12-02", "2024-12-01"].includes(p.date)
    ).length,
  };

  return (
    <div className="min-h-screen bg-background">
      <DoctorHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-foreground">
                Prescriptions
              </h1>
              <p className="text-muted-foreground">
                Manage and view all your prescriptions
              </p>
            </div>
          </div>
          <Button asChild>
            <Link to="/doctor/prescriptions/new">
              <Plus className="w-4 h-4 mr-2" />
              Create Prescription
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center shadow-soft">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">{stats.total}</h3>
            <p className="text-sm text-muted-foreground">Total</p>
          </Card>
          <Card className="p-4 text-center shadow-soft">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2">
              <Send className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-semibold text-lg">{stats.sent}</h3>
            <p className="text-sm text-muted-foreground">Sent</p>
          </Card>
          <Card className="p-4 text-center shadow-soft">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mx-auto mb-2">
              <FileText className="w-5 h-5 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg">{stats.drafts}</h3>
            <p className="text-sm text-muted-foreground">Drafts</p>
          </Card>
          <Card className="p-4 text-center shadow-soft">
            <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-2">
              <Calendar className="w-5 h-5 text-brand-gold" />
            </div>
            <h3 className="font-semibold text-lg">{stats.thisWeek}</h3>
            <p className="text-sm text-muted-foreground">This Week</p>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-4 mb-6 shadow-soft">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                className="pl-10"
                placeholder="Search by patient, diagnosis, or medicine..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                </SelectContent>
              </Select>
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-[140px]">
                  <Calendar className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Prescriptions List */}
        <div className="space-y-4">
          {filteredPrescriptions.length === 0 ? (
            <Card className="p-12 text-center shadow-soft">
              <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold text-lg mb-2">No Prescriptions Found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery || statusFilter !== "all" || dateFilter !== "all"
                  ? "Try adjusting your filters"
                  : "Create your first prescription"}
              </p>
              <Button asChild>
                <Link to="/doctor/prescriptions/new">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Prescription
                </Link>
              </Button>
            </Card>
          ) : (
            filteredPrescriptions.map((prescription) => (
              <Card key={prescription.id} className="p-4 shadow-soft hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Patient Info */}
                  <div className="flex items-center gap-4 flex-1">
                    <Avatar className="h-12 w-12">
                      {prescription.patientAvatar ? (
                        <AvatarImage src={prescription.patientAvatar} />
                      ) : null}
                      <AvatarFallback>
                        {prescription.patientName.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold">{prescription.patientName}</h3>
                        {getStatusBadge(prescription.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {prescription.patientAge} yrs • {prescription.patientGender}
                      </p>
                      <p className="text-sm text-primary font-medium mt-1">
                        {prescription.diagnosis}
                      </p>
                    </div>
                  </div>

                  {/* Medicines */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Pill className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Medicines</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {prescription.medicines.slice(0, 3).map((medicine, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {medicine}
                        </Badge>
                      ))}
                      {prescription.medicines.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{prescription.medicines.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="text-sm text-right">
                    <div className="flex items-center gap-1 justify-end text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(prescription.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1 justify-end text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{prescription.time}</span>
                    </div>
                    {prescription.followUpDate && (
                      <p className="text-xs text-primary mt-1">
                        Follow-up: {new Date(prescription.followUpDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Printer className="w-4 h-4" />
                    </Button>
                    {prescription.status === "draft" && (
                      <Button size="sm">
                        <Send className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DoctorPrescriptions;