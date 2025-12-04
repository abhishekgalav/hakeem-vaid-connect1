import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Eye, EyeOff, Stethoscope, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DoctorSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    
    // Step 2: Professional Info
    licenseNumber: "",
    specialty: "",
    experience: "",
    qualification: "",
    hospitalAffiliation: "",
    
    // Step 3: Additional Details
    consultationFee: "",
    languages: "",
    bio: "",
    
    // Agreements
    termsAccepted: false,
    privacyAccepted: false,
    codeOfConductAccepted: false
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const specialties = [
    "General Medicine",
    "Ayurvedic Medicine",
    "Unani Medicine", 
    "Homeopathy",
    "Cardiology",
    "Dermatology",
    "Gastroenterology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
    "Gynecology",
    "ENT",
    "Ophthalmology"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      return;
    }

    // Final submission
    if (formData.termsAccepted && formData.privacyAccepted && formData.codeOfConductAccepted) {
      toast({
        title: "Registration Successful!",
        description: "Your account is under review. You'll be notified within 24-48 hours.",
      });
      navigate("/doctor/login");
    } else {
      toast({
        title: "Please accept all agreements",
        description: "You must accept the terms, privacy policy, and code of conduct to proceed.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && 
               formData.phone && formData.password && formData.confirmPassword &&
               formData.password === formData.confirmPassword;
      case 2:
        return formData.licenseNumber && formData.specialty && formData.experience && 
               formData.qualification;
      case 3:
        return formData.consultationFee && formData.languages && formData.bio &&
               formData.termsAccepted && formData.privacyAccepted && formData.codeOfConductAccepted;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  placeholder="Dr. First Name"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Professional Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="doctor@hospital.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="licenseNumber">Medical License Number</Label>
              <Input
                id="licenseNumber"
                placeholder="Enter your medical license number"
                value={formData.licenseNumber}
                onChange={(e) => handleChange("licenseNumber", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialty">Specialty</Label>
              <Select onValueChange={(value) => handleChange("specialty", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Select onValueChange={(value) => handleChange("experience", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">0-1 years</SelectItem>
                  <SelectItem value="2-5">2-5 years</SelectItem>
                  <SelectItem value="6-10">6-10 years</SelectItem>
                  <SelectItem value="11-15">11-15 years</SelectItem>
                  <SelectItem value="16-20">16-20 years</SelectItem>
                  <SelectItem value="20+">20+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="qualification">Primary Qualification</Label>
              <Input
                id="qualification"
                placeholder="MBBS, BAMS, BHMS, etc."
                value={formData.qualification}
                onChange={(e) => handleChange("qualification", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hospitalAffiliation">Hospital/Clinic Affiliation</Label>
              <Input
                id="hospitalAffiliation"
                placeholder="Current hospital or clinic name"
                value={formData.hospitalAffiliation}
                onChange={(e) => handleChange("hospitalAffiliation", e.target.value)}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="consultationFee">Consultation Fee (₹)</Label>
              <Input
                id="consultationFee"
                type="number"
                placeholder="500"
                value={formData.consultationFee}
                onChange={(e) => handleChange("consultationFee", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="languages">Languages Spoken</Label>
              <Input
                id="languages"
                placeholder="English, Hindi, Telugu, etc."
                value={formData.languages}
                onChange={(e) => handleChange("languages", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea
                id="bio"
                placeholder="Brief description of your expertise and experience..."
                value={formData.bio}
                onChange={(e) => handleChange("bio", e.target.value)}
                required
                rows={4}
              />
            </div>

            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => handleChange("termsAccepted", checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm">
                  I accept the <Link to="/terms" className="text-primary hover:underline">Terms and Conditions</Link>
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="privacy"
                  checked={formData.privacyAccepted}
                  onCheckedChange={(checked) => handleChange("privacyAccepted", checked as boolean)}
                />
                <Label htmlFor="privacy" className="text-sm">
                  I accept the <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="codeOfConduct"
                  checked={formData.codeOfConductAccepted}
                  onCheckedChange={(checked) => handleChange("codeOfConductAccepted", checked as boolean)}
                />
                <Label htmlFor="codeOfConduct" className="text-sm">
                  I agree to follow the Medical Code of Conduct
                </Label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-elegant">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Join as Healthcare Provider</CardTitle>
            <CardDescription>
              Step {currentStep} of 3: {currentStep === 1 ? "Basic Information" : currentStep === 2 ? "Professional Details" : "Final Setup"}
            </CardDescription>
            
            {/* Progress bar */}
            <div className="flex space-x-2 mt-4">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`flex-1 h-2 rounded-full ${
                    step <= currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent>
              {renderStepContent()}
            </CardContent>

            <CardContent className="flex flex-col space-y-4 pt-0">
              <div className="flex gap-2">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="flex-1"
                  >
                    Previous
                  </Button>
                )}
                
                <Button
                  type="submit"
                  disabled={!isStepValid()}
                  className="flex-1"
                >
                  {currentStep === 3 ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Submit Application
                    </>
                  ) : (
                    "Continue"
                  )}
                </Button>
              </div>

              <Separator />

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Button variant="link" asChild className="px-0">
                    <Link to="/doctor/login">Sign in here</Link>
                  </Button>
                </p>
              </div>
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default DoctorSignup;