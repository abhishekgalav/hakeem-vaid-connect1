import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Plus, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import logoImage from "@/assets/logo-hakeem-miyaa.png";

type DoctorEnrollmentForm = {
  name: string;
  role: "vaid" | "hakeem" | "homeopathic" | "";
  phone: string;
  email: string;
  specialization: string;
  education: string;
  experienceYears: string;
  languages: string;
  consultationFee: string;
  tags: string[];
  profileImage?: FileList;
};

type Availability = {
  [key: string]: string[];
};

const DoctorEnrollment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<DoctorEnrollmentForm>({
    name: "",
    role: "",
    phone: "",
    email: "",
    specialization: "",
    education: "",
    experienceYears: "",
    languages: "",
    consultationFee: "",
    tags: [],
  });

  const [availability, setAvailability] = useState<Availability>({});
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const daysOfWeek = [
    { value: "mon", label: "Monday" },
    { value: "tue", label: "Tuesday" },
    { value: "wed", label: "Wednesday" },
    { value: "thu", label: "Thursday" },
    { value: "fri", label: "Friday" },
    { value: "sat", label: "Saturday" },
    { value: "sun", label: "Sunday" },
  ];

  const availableTags = [
    "Panchakarma",
    "Skin",
    "Male Health",
    "Female Health",
    "Digestive Health",
    "Respiratory",
    "Joint & Bone",
    "Mental Health",
    "Immunity",
    "Weight Management",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (field: keyof DoctorEnrollmentForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleTagToggle = (tag: string) => {
    if (formData.tags.includes(tag)) {
      setFormData((prev) => ({
        ...prev,
        tags: prev.tags.filter((t) => t !== tag),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    }
  };

  const handleDayToggle = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
      const newAvailability = { ...availability };
      delete newAvailability[day];
      setAvailability(newAvailability);
    } else {
      setSelectedDays([...selectedDays, day]);
      setAvailability({ ...availability, [day]: [""] });
    }
  };

  const handleTimeChange = (day: string, index: number, value: string) => {
    const newAvailability = { ...availability };
    newAvailability[day][index] = value;
    setAvailability(newAvailability);
  };

  const addTimeSlot = (day: string) => {
    setAvailability({
      ...availability,
      [day]: [...(availability[day] || []), ""],
    });
  };

  const removeTimeSlot = (day: string, index: number) => {
    const newAvailability = { ...availability };
    newAvailability[day] = newAvailability[day].filter((_, i) => i !== index);
    setAvailability(newAvailability);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      availability: Object.keys(availability).length > 0 ? availability : undefined,
    };
    console.log("Doctor Enrollment Data:", submissionData);
    toast({
      title: "Enrollment Submitted!",
      description: "Your application has been received. We'll review and get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <a href="/" className="inline-block">
                  <img
                    src={logoImage}
                    alt="Hakeem Miyaa | Vaid Ji - Bharat ka Ayurvedic aur Unani Portal"
                    className="h-20 w-auto"
                  />
                </a>
              </div>
              <h1 className="font-display text-4xl font-bold text-foreground mb-2">
                Doctor Enrollment
              </h1>
              <p className="text-muted-foreground">
                Join our network of traditional healers and help patients across India
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Professional Information</CardTitle>
                <CardDescription>
                  Please fill in your details carefully. All fields are required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Dr. Your Name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>

                  {/* Role Selection */}
                  <div className="space-y-2">
                    <Label>Healer Type *</Label>
                    <RadioGroup
                      onValueChange={(value) => handleChange("role", value)}
                      value={formData.role}
                      required
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="vaid" id="vaid" />
                        <Label htmlFor="vaid" className="font-normal cursor-pointer">
                          Vaid (Ayurvedic Practitioner)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hakeem" id="hakeem" />
                        <Label htmlFor="hakeem" className="font-normal cursor-pointer">
                          Hakeem (Unani Practitioner)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="homeopathic" id="homeopathic" />
                        <Label htmlFor="homeopathic" className="font-normal cursor-pointer">
                          Homeopathic Practitioner
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="doctor@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Professional Details */}
                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization *</Label>
                    <Input
                      id="specialization"
                      placeholder="e.g., Ayurveda, Unani Medicine, Homeopathy"
                      value={formData.specialization}
                      onChange={(e) => handleChange("specialization", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="education">Education Qualifications *</Label>
                    <Input
                      id="education"
                      placeholder="e.g., BAMS, MD (Ayurveda), BHMS"
                      value={formData.education}
                      onChange={(e) => handleChange("education", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experienceYears">Years of Experience *</Label>
                    <Input
                      id="experienceYears"
                      type="number"
                      placeholder="e.g., 5"
                      value={formData.experienceYears}
                      onChange={(e) => handleChange("experienceYears", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="languages">Languages Spoken *</Label>
                    <Input
                      id="languages"
                      placeholder="e.g., Hindi, English, Urdu"
                      value={formData.languages}
                      onChange={(e) => handleChange("languages", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="consultationFee">Consultation Fee (₹) *</Label>
                    <Input
                      id="consultationFee"
                      type="number"
                      placeholder="e.g., 500"
                      value={formData.consultationFee}
                      onChange={(e) => handleChange("consultationFee", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <Label>Specialization Tags (Optional)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {availableTags.map((tag) => (
                        <div key={tag} className="flex items-center space-x-2">
                          <Checkbox
                            id={tag}
                            checked={formData.tags.includes(tag)}
                            onCheckedChange={() => handleTagToggle(tag)}
                          />
                          <Label
                            htmlFor={tag}
                            className="font-normal cursor-pointer"
                          >
                            {tag}
                          </Label>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Select areas of expertise that best describe your practice
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Label>Available Time Slots (Optional)</Label>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {daysOfWeek.map((day) => (
                          <div key={day.value} className="flex items-center space-x-2">
                            <Checkbox
                              id={day.value}
                              checked={selectedDays.includes(day.value)}
                              onCheckedChange={() => handleDayToggle(day.value)}
                            />
                            <Label
                              htmlFor={day.value}
                              className="font-normal cursor-pointer"
                            >
                              {day.label}
                            </Label>
                          </div>
                        ))}
                      </div>

                      {selectedDays.length > 0 && (
                        <div className="space-y-4 border rounded-lg p-4">
                          {selectedDays.map((day) => (
                            <div key={day} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label className="capitalize font-medium">
                                  {daysOfWeek.find((d) => d.value === day)?.label}
                                </Label>
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="sm"
                                  onClick={() => addTimeSlot(day)}
                                >
                                  <Plus className="w-4 h-4 mr-1" />
                                  Add Time
                                </Button>
                              </div>
                              <div className="space-y-2">
                                {availability[day]?.map((time, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <Input
                                      type="time"
                                      value={time}
                                      onChange={(e) =>
                                        handleTimeChange(day, index, e.target.value)
                                      }
                                      className="flex-1"
                                    />
                                    {availability[day].length > 1 && (
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => removeTimeSlot(day, index)}
                                      >
                                        <X className="w-4 h-4" />
                                      </Button>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Select days and add time slots when you're available for consultations
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="profileImage">Profile Image (Optional)</Label>
                    <Input
                      id="profileImage"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFormData((prev) => ({ ...prev, profileImage: e.target.files || undefined }))}
                    />
                    <p className="text-sm text-muted-foreground">
                      Upload a professional photo (JPG, PNG)
                    </p>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Enrollment Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DoctorEnrollment;
