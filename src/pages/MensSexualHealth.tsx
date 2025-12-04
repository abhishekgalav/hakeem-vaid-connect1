import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Shield, Stethoscope, User, AlertTriangle, Clock } from "lucide-react";

const MensSexualHealth = () => {
  const conditions = [
    {
      name: "Erectile Dysfunction",
      description: "Difficulty achieving or maintaining an erection sufficient for sexual intercourse",
      symptoms: ["Trouble getting an erection", "Trouble keeping an erection", "Reduced sexual desire"],
      ayurvedicTreatment: "Ashwagandha, Shilajit, Safed Musli",
      severity: "Common",
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: "Premature Ejaculation",
      description: "Ejaculation that occurs sooner than desired during sexual activity",
      symptoms: ["Ejaculation within one minute", "Inability to delay ejaculation", "Distress and frustration"],
      ayurvedicTreatment: "Kaunch Beej, Jaiphal, Yoga and meditation",
      severity: "Very Common",
      icon: <Clock className="w-6 h-6" />
    },
    {
      name: "Low Testosterone",
      description: "Decreased production of the male hormone testosterone",
      symptoms: ["Reduced sex drive", "Fatigue", "Loss of muscle mass", "Mood changes"],
      ayurvedicTreatment: "Gokshura, Vidarikand, Panchakarma therapy",
      severity: "Common",
      icon: <User className="w-6 h-6" />
    },
    {
      name: "Male Infertility",
      description: "Inability to conceive a child after one year of regular unprotected intercourse",
      symptoms: ["Problems with sexual function", "Pain or swelling in testicles", "Recurrent infections"],
      ayurvedicTreatment: "Shatavari, Kapikacchu, Specialized diet therapy",
      severity: "Moderate",
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "Prostate Disorders",
      description: "Various conditions affecting the prostate gland including enlargement and inflammation",
      symptoms: ["Frequent urination", "Difficulty urinating", "Pelvic pain", "Blood in urine"],
      ayurvedicTreatment: "Punarnava, Gokshura, Panchakarma detox",
      severity: "Common",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      name: "Sexually Transmitted Infections",
      description: "Infections transmitted through sexual contact",
      symptoms: ["Unusual discharge", "Burning sensation", "Sores or bumps", "Itching"],
      ayurvedicTreatment: "Neem, Turmeric, Immunity boosting herbs",
      severity: "Serious",
      icon: <AlertTriangle className="w-6 h-6" />
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Very Common":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Common":
        return "bg-green-100 text-green-800 border-green-200";
      case "Moderate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Serious":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Men's Sexual Health
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive information about common men's sexual health conditions and their traditional Ayurvedic & Unani treatments. Get expert consultation and natural remedies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Health Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Common Men's Sexual Health Conditions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding various conditions and their natural treatment approaches through Ayurveda and Unani medicine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {condition.icon}
                    </div>
                    <Badge className={getSeverityColor(condition.severity)}>
                      {condition.severity}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{condition.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {condition.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Common Symptoms:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {condition.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Ayurvedic Treatment:</h4>
                    <p className="text-sm text-muted-foreground">
                      {condition.ayurvedicTreatment}
                    </p>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Our Treatment Approach
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Comprehensive Diagnosis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Detailed consultation and examination to identify root causes using traditional diagnostic methods
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Natural Remedies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Herbal medicines and natural treatments tailored to individual constitution and condition
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Lifestyle Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Diet, exercise, and lifestyle modifications to support healing and prevent recurrence
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Get Expert Consultation Today
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let sexual health issues affect your quality of life. Our experienced practitioners provide confidential, effective treatments using time-tested natural methods.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book Private Consultation
            </Button>
            <Button variant="outline" size="lg">
              Call Now: +91-XXXXXXXXX
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MensSexualHealth;