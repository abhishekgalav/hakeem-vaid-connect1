import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-herbal py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-on-dark mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-text-on-dark/90 mb-4 max-w-2xl mx-auto">
            Please read these terms carefully before using our services
          </p>
          <Badge className="bg-white/20 text-text-on-dark border-white/30">
            Last updated: January 15, 2024
          </Badge>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 lg:p-12 max-w-4xl mx-auto border-0 shadow-soft">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                By accessing and using Hakeem Miyaa | Vaid Ji platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">2. Services Provided</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Hakeem Miyaa | Vaid Ji provides an online platform that connects patients with qualified Ayurvedic and Unani practitioners. Our services include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Online appointment booking with verified doctors</li>
                <li>Video consultation services</li>
                <li>E-commerce platform for authentic Ayurvedic and Unani medicines</li>
                <li>Home lab test booking and sample collection</li>
                <li>Health articles and educational content</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">3. User Registration and Account</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                To use certain features of our platform, you must register for an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your information to keep it accurate and current</li>
                <li>Maintain the security of your password and accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">4. Medical Disclaimer</h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                <p className="text-amber-800 font-medium mb-2">Important Medical Disclaimer:</p>
                <p className="text-amber-700 leading-relaxed">
                  The information provided on this platform is for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers with any questions you may have regarding medical conditions.
                </p>
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">5. Doctor-Patient Relationship</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Hakeem Miyaa | Vaid Ji facilitates connections between patients and healthcare practitioners but does not establish a direct doctor-patient relationship. The consultation and treatment decisions are solely between the patient and the chosen practitioner.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">6. Payment Terms</h2>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>All fees for consultations and services must be paid in advance</li>
                <li>Prices are subject to change without notice</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Payment processing is handled through secure third-party payment gateways</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">7. Cancellation and Refund Policy</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Consultation cancellations and refunds are governed by the following terms:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Cancellations made 2+ hours before appointment: Full refund</li>
                <li>Cancellations made within 2 hours: 50% refund</li>
                <li>No-shows without prior notice: No refund</li>
                <li>Medicine orders: Refundable only if unopened and returned within 7 days</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">8. Privacy and Data Protection</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We are committed to protecting your privacy and personal health information. Our privacy practices are detailed in our Privacy Policy, which is incorporated into these terms by reference.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">9. Prohibited Uses</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                You may not use our platform to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit harmful, fraudulent, or misleading information</li>
                <li>Impersonate any person or entity</li>
                <li>Share or distribute copyrighted content without permission</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">10. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Hakeem Miyaa | Vaid Ji shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our liability is limited to the amount paid for the specific service in question.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">11. Governing Law</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">12. Changes to Terms</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our platform. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">13. Contact Information</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <div className="bg-card p-6 rounded-lg">
                <p className="text-foreground font-medium mb-2">Hakeem Miyaa | Vaid Ji</p>
                <p className="text-muted-foreground">Email: legal@hakeemmiyaa.com</p>
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

export default TermsConditions;