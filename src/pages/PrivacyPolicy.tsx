import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Users } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-herbal py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-on-dark mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-text-on-dark/90 mb-4 max-w-2xl mx-auto">
            Your privacy and data security are our top priorities
          </p>
          <Badge className="bg-white/20 text-text-on-dark border-white/30">
            Last updated: January 15, 2024
          </Badge>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-8 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Data Protection", icon: Shield },
              { name: "Secure Storage", icon: Lock },
              { name: "Transparency", icon: Eye },
              { name: "User Control", icon: Users }
            ].map((principle, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-soft">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-3">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm">{principle.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 lg:p-12 max-w-4xl mx-auto border-0 shadow-soft">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">1. Information We Collect</h2>
              
              <h3 className="font-semibold text-lg text-foreground mb-4">Personal Information</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Name, email address, phone number, and date of birth</li>
                <li>Medical history, symptoms, and health information</li>
                <li>Payment information and billing address</li>
                <li>Communication preferences and feedback</li>
              </ul>

              <h3 className="font-semibold text-lg text-foreground mb-4">Health Information</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-blue-800 font-medium mb-2">Protected Health Information (PHI):</p>
                <p className="text-blue-700 leading-relaxed">
                  We collect and process health information to provide medical services. This includes consultation notes, prescriptions, lab results, and treatment history. This information is protected under applicable healthcare privacy laws.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Provide and improve our healthcare services</li>
                <li>Facilitate consultations between you and healthcare providers</li>
                <li>Process payments and fulfill orders</li>
                <li>Send appointment reminders and health-related communications</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Prevent fraud and ensure platform security</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">3. Information Sharing and Disclosure</h2>
              
              <h3 className="font-semibold text-lg text-foreground mb-4">With Healthcare Providers</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We share your health information with the doctors and practitioners you choose to consult with. This is essential for providing proper medical care and treatment.
              </p>

              <h3 className="font-semibold text-lg text-foreground mb-4">With Service Providers</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We may share your information with trusted third-party service providers who help us operate our platform:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Payment processors for secure transaction handling</li>
                <li>Cloud storage providers for data backup and security</li>
                <li>Communication service providers for SMS and email delivery</li>
                <li>Analytics providers for platform improvement (anonymized data only)</li>
              </ul>

              <h3 className="font-semibold text-lg text-foreground mb-4">Legal Requirements</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We may disclose your information when required by law, such as to comply with a subpoena, court order, or other legal process, or to protect the rights, property, or safety of our users or others.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">4. Data Security</h2>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                <p className="text-green-800 font-medium mb-2">Security Measures:</p>
                <ul className="list-disc pl-6 text-green-700 space-y-2">
                  <li>End-to-end encryption for all data transmission</li>
                  <li>Secure servers with regular security audits</li>
                  <li>Multi-factor authentication for healthcare providers</li>
                  <li>Regular security training for all staff members</li>
                  <li>Compliance with healthcare data protection standards</li>
                </ul>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">5. Data Retention</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We retain your personal information for as long as necessary to provide our services and comply with legal requirements. Health information is typically retained for 7 years as required by medical record retention laws. You may request deletion of your account and associated data, subject to legal retention requirements.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">6. Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another provider</li>
                <li><strong>Restriction:</strong> Request limitation of processing your data</li>
                <li><strong>Objection:</strong> Object to certain types of data processing</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Remember your preferences and login information</li>
                <li>Analyze platform usage and improve user experience</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                You can control cookie settings through your browser preferences. However, disabling certain cookies may affect platform functionality.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">8. International Data Transfers</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">9. Children's Privacy</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">10. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. We will notify you of material changes via email or through our platform. Your continued use of our services after such modifications constitutes acceptance of the updated Privacy Policy.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">11. Contact Us</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-card p-6 rounded-lg">
                <p className="text-foreground font-medium mb-2">Privacy Officer</p>
                <p className="text-muted-foreground">Hakeem Miyaa | Vaid Ji</p>
                <p className="text-muted-foreground">Email: privacy@hakeemmiyaa.com</p>
                <p className="text-muted-foreground">Phone: +91 98765 43210</p>
                <p className="text-muted-foreground">Address: New Delhi, India</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;