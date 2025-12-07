import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  RefreshCw,
  CreditCard,
  Package,
  Stethoscope,
  Leaf,
  Send,
  Phone,
  Mail
} from "lucide-react";
import { toast } from "sonner";

const Refunds = () => {
  const [refundDialogOpen, setRefundDialogOpen] = useState(false);
  const [supportDialogOpen, setSupportDialogOpen] = useState(false);
  const [refundForm, setRefundForm] = useState({
    orderType: "",
    orderId: "",
    reason: "",
    details: ""
  });
  const [supportForm, setSupportForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleRefundSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Refund request submitted successfully! We'll review and respond within 24 hours.");
    setRefundDialogOpen(false);
    setRefundForm({ orderType: "", orderId: "", reason: "", details: "" });
  };

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Support request sent! Our team will contact you soon.");
    setSupportDialogOpen(false);
    setSupportForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };
  const refundPolicies = [
    {
      service: "Consultations",
      icon: Stethoscope,
      policies: [
        { condition: "Cancelled 2+ hours before", refund: "100% refund", status: "success" },
        { condition: "Cancelled within 2 hours", refund: "50% refund", status: "warning" },
        { condition: "No-show without notice", refund: "No refund", status: "error" },
        { condition: "Doctor cancellation", refund: "Full refund + ₹100 credit", status: "success" }
      ]
    },
    {
      service: "Medicines",
      icon: Package,
      policies: [
        { condition: "Unopened, within 7 days", refund: "100% refund", status: "success" },
        { condition: "Damaged during delivery", refund: "Full refund + replacement", status: "success" },
        { condition: "Wrong item delivered", refund: "Full refund + replacement", status: "success" },
        { condition: "Opened or used products", refund: "No refund", status: "error" }
      ]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Request Refund",
      description: "Contact our support team or use the refund request form in your account",
      icon: RefreshCw
    },
    {
      step: 2,
      title: "Review Process",
      description: "Our team reviews your request within 24 hours based on our refund policy",
      icon: CheckCircle
    },
    {
      step: 3,
      title: "Refund Processing",
      description: "Approved refunds are processed within 5-7 business days to your original payment method",
      icon: CreditCard
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-herbal py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-on-dark mb-6">
            Refund Policy
          </h1>
          <p className="text-xl text-text-on-dark/90 mb-4 max-w-2xl mx-auto">
            Fair and transparent refund policies for all our services
          </p>
          <Badge className="bg-white/20 text-text-on-dark border-white/30">
            Effective from January 1, 2024
          </Badge>
        </div>
      </section>

      {/* Refund Timeline */}
      <section className="py-8 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <Card className="p-8 bg-gradient-gold text-white border-0 shadow-elegant">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Quick Processing</h3>
                <p className="text-sm opacity-90">Refund requests reviewed within 24 hours</p>
              </div>
              <div>
                <CreditCard className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Fast Refunds</h3>
                <p className="text-sm opacity-90">Money back in 5-7 business days</p>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Hassle-Free</h3>
                <p className="text-sm opacity-90">Simple refund request process</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Service-Specific Policies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Refund Policies by Service
            </h2>
            <p className="text-muted-foreground text-lg">
              Detailed refund conditions for each type of service
            </p>
          </div>
          
          <div className="space-y-8">
            {refundPolicies.map((service, index) => (
              <Card key={index} className="p-8 border-0 shadow-soft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {service.service}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {service.policies.map((policy, policyIndex) => (
                    <div key={policyIndex} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border">
                      <div className="flex items-center gap-3">
                        {policy.status === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                        {policy.status === 'warning' && <Clock className="w-5 h-5 text-yellow-500" />}
                        {policy.status === 'error' && <XCircle className="w-5 h-5 text-red-500" />}
                        <span className="text-sm font-medium">{policy.condition}</span>
                      </div>
                      <Badge 
                        variant={policy.status === 'success' ? 'default' : policy.status === 'warning' ? 'secondary' : 'destructive'}
                        className="text-xs"
                      >
                        {policy.refund}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Request Refund */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Request a Refund
            </h2>
            <p className="text-muted-foreground text-lg">
              Simple steps to get your money back when eligible
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <Card key={index} className="p-8 text-center border-0 shadow-soft relative">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <h3 className="font-semibold text-xl mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Refund & Cancellation Policy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 lg:p-12 max-w-4xl mx-auto border-0 shadow-soft">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Doctor Refund & Cancellation Policy
            </h2>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-center">
              This Refund & Cancellation Policy applies to all Healthcare Practitioners ("Doctor", "Practitioner", "You") 
              who register on the hakeemmiyaa.com platform and pay for onboarding, subscriptions, listing, or 
              promotional services offered by Hakeem Tech Review (herein "Company", "We", "Us", "Our").
            </p>
            
            <div className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h3 className="font-semibold text-base text-red-800 mb-2">1. NON-REFUNDABLE FEES</h3>
                <p className="text-red-700 text-sm leading-relaxed">
                  All payments made to the Company — including onboarding fees, subscription fees, promotional plans, 
                  visibility boosts, or any other charges — are 100% non-refundable, regardless of usage, outcomes, or 
                  cancellation requests.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <h3 className="font-semibold text-base text-amber-800 mb-2">2. NO GUARANTEE OF RESULTS</h3>
                <p className="text-amber-700 text-sm leading-relaxed mb-2">
                  The Platform provides exposure for visibility and potential patient acquisition but does not guarantee:
                </p>
                <ul className="list-disc list-inside text-amber-700 text-sm space-y-1 ml-2">
                  <li>A specific number of leads, calls, or consultation count</li>
                  <li>Patient bookings or guaranteed revenue</li>
                  <li>Any specific revenue, clinic growth, or business outcome</li>
                  <li>Lead quality, responsiveness, or conversion rate</li>
                </ul>
                <p className="text-amber-700 text-sm leading-relaxed mt-2">
                  The Doctor understands that all marketing is based on patient acquisition but fully assumes any risk from this listing.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <h3 className="font-semibold text-base text-blue-800 mb-2">3. AUTO-RENEWAL POLICY</h3>
                <p className="text-blue-700 text-sm leading-relaxed mb-2">
                  All plans are currently on auto-set not to auto-renew by default.
                </p>
                <ul className="list-disc list-inside text-blue-700 text-sm space-y-1 ml-2">
                  <li>If auto-renew is active, the Doctor authorizes automatic deduction on billing unit manually cancelled</li>
                  <li>The Doctor must cancel before the next billing cycle to avoid this charge</li>
                  <li>Once billed, after billing date, no refund applies</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                <h3 className="font-semibold text-base text-green-800 mb-2">4. CANCELLATION POLICY</h3>
                <p className="text-green-700 text-sm leading-relaxed mb-2">
                  Doctors may cancel their subscription at any time, but:
                </p>
                <ul className="list-disc list-inside text-green-700 text-sm space-y-1 ml-2">
                  <li>No refund will be issued for the remaining period</li>
                  <li>Subscription remains active until the billing period ends</li>
                  <li>Cancellation only affects future renewals, not current charges</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                <h3 className="font-semibold text-base text-purple-800 mb-2">5. LATE PAYMENT & GRACE PERIOD</h3>
                <p className="text-purple-700 text-sm leading-relaxed mb-2">
                  If a subscription payment fails:
                </p>
                <ul className="list-disc list-inside text-purple-700 text-sm space-y-1 ml-2">
                  <li>A 7-day grace period will be provided to update payment service</li>
                  <li>If payment is not completed, the account will be suspended</li>
                  <li>Suspended accounts lose access to leads, dashboards, and visibility</li>
                  <li>No extensions or refunds granted for suspension time</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                <h3 className="font-semibold text-base text-orange-800 mb-2">6. NO REFUND FOR LEAD QUALITY OR PATIENT RESPONSE</h3>
                <p className="text-orange-700 text-sm leading-relaxed mb-2">
                  Doctors agree that the following do NOT qualify for refund or dispute:
                </p>
                <ul className="list-disc list-inside text-orange-700 text-sm space-y-1 ml-2">
                  <li>Wrong numbers or inactive patients</li>
                  <li>Patients waiting for online consultation</li>
                  <li>Patients who cancel, dispute, or don't show</li>
                  <li>Poor patient feedback or low lead volume</li>
                  <li>Competition from other practitioners in same location</li>
                  <li>Cancelled or rescheduled patient consultations</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h3 className="font-semibold text-base text-red-800 mb-2">7. CHARGEBACK PROHIBITION</h3>
                <p className="text-red-700 text-sm leading-relaxed mb-2">
                  Any chargeback attempt will result in:
                </p>
                <ul className="list-disc list-inside text-red-700 text-sm space-y-1 ml-2">
                  <li>Permanent removal from platform</li>
                  <li>Legal recovery of all costs loss & damages</li>
                  <li>Blacklisting across all associated platforms</li>
                </ul>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-5">
                <h3 className="font-semibold text-base text-teal-800 mb-2">8. ONBOARDING FEE</h3>
                <p className="text-teal-700 text-sm leading-relaxed mb-2">
                  The onboarding fee is a one-time setup and verification charge. It cannot be refunded or waived for:
                </p>
                <ul className="list-disc list-inside text-teal-700 text-sm space-y-1 ml-2">
                  <li>Account inactivity</li>
                  <li>Profile de-activation due to the platform</li>
                  <li>Failure to generate leads or patients</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <h3 className="font-semibold text-base text-slate-800 mb-2">9. SERVICE INTERRUPTION</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  No refund will be issued for service interruption due to:
                </p>
                <ul className="list-disc list-inside text-slate-700 text-sm space-y-1 ml-2">
                  <li>Maintenance or technical issues</li>
                  <li>Third-party services/utility or unavailability</li>
                  <li>Changes in medical industry regulations</li>
                  <li>Patient demand fluctuations</li>
                  <li>Profile inconsistencies or low ratings</li>
                </ul>
              </div>

              <div className="bg-rose-50 border border-rose-200 rounded-lg p-5">
                <h3 className="font-semibold text-base text-rose-800 mb-2">10. TERMINATION BY COMPANY</h3>
                <p className="text-rose-700 text-sm leading-relaxed mb-2">
                  No refund will be issued if termination occurs due to:
                </p>
                <ul className="list-disc list-inside text-rose-700 text-sm space-y-1 ml-2">
                  <li>Misconduct</li>
                  <li>False credentials/errors</li>
                  <li>Misbehavior or legal complaints</li>
                  <li>Violation of platform policies</li>
                </ul>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
                <h3 className="font-semibold text-base text-emerald-800 mb-2">11. POLICY ACCEPTANCE</h3>
                <p className="text-emerald-700 text-sm leading-relaxed mb-2">
                  By registering, paying, or continuing to use the Platform, the doctor confirms that:
                </p>
                <ul className="list-disc list-inside text-emerald-700 text-sm space-y-1 ml-2">
                  <li>They have read and accepted this policy</li>
                  <li>They have rendered all payments as their final admission of liability</li>
                  <li>They accept the no-refund policy and waive any potential rights to a guarantee</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact for Refunds */}
      <section className="py-16 bg-gradient-herbal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-text-on-dark mb-6">
            Need Help with Refunds?
          </h2>
          <p className="text-xl text-text-on-dark/90 mb-8 max-w-2xl mx-auto">
            Our customer support team is here to help you with any refund-related queries
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" onClick={() => setRefundDialogOpen(true)}>
              <RefreshCw className="w-5 h-5 mr-2" />
              Request Refund
            </Button>
            <Button variant="hero" size="lg" onClick={() => setSupportDialogOpen(true)}>
              <Phone className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </div>
          
          <div className="mt-8 text-text-on-dark/80">
            <p>Email: refunds@hakeemmiyaa.com</p>
            <p>Phone: +91 98765 43210 (24/7 Support)</p>
          </div>
        </div>
      </section>

      {/* Request Refund Dialog */}
      <Dialog open={refundDialogOpen} onOpenChange={setRefundDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-brand-gold" />
              Request Refund
            </DialogTitle>
            <DialogDescription>
              Fill out the form below to request a refund for your order.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleRefundSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orderType">Order Type</Label>
              <Select 
                value={refundForm.orderType} 
                onValueChange={(value) => setRefundForm({...refundForm, orderType: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select order type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="medicine">Medicine Order</SelectItem>
                  <SelectItem value="therapy">Wellness Therapy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="orderId">Order/Booking ID</Label>
              <Input 
                id="orderId"
                placeholder="Enter your order or booking ID"
                value={refundForm.orderId}
                onChange={(e) => setRefundForm({...refundForm, orderId: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Refund</Label>
              <Select 
                value={refundForm.reason} 
                onValueChange={(value) => setRefundForm({...refundForm, reason: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cancelled">Cancelled booking</SelectItem>
                  <SelectItem value="wrong-item">Wrong item delivered</SelectItem>
                  <SelectItem value="damaged">Damaged product</SelectItem>
                  <SelectItem value="not-satisfied">Not satisfied with service</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="details">Additional Details</Label>
              <Textarea 
                id="details"
                placeholder="Please provide more details about your refund request..."
                value={refundForm.details}
                onChange={(e) => setRefundForm({...refundForm, details: e.target.value})}
                rows={3}
              />
            </div>
            
            <Button type="submit" variant="gold" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Submit Refund Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Contact Support Dialog */}
      <Dialog open={supportDialogOpen} onOpenChange={setSupportDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-brand-gold" />
              Contact Support
            </DialogTitle>
            <DialogDescription>
              Reach out to our support team for refund-related queries.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSupportSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name"
                placeholder="Enter your full name"
                value={supportForm.name}
                onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={supportForm.email}
                  onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input 
                  id="phone"
                  placeholder="+91 98765 43210"
                  value={supportForm.phone}
                  onChange={(e) => setSupportForm({...supportForm, phone: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject"
                placeholder="Brief subject of your query"
                value={supportForm.subject}
                onChange={(e) => setSupportForm({...supportForm, subject: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message"
                placeholder="Describe your issue in detail..."
                value={supportForm.message}
                onChange={(e) => setSupportForm({...supportForm, message: e.target.value})}
                rows={4}
                required
              />
            </div>
            
            <Button type="submit" variant="gold" className="w-full">
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
          
          <div className="pt-4 border-t text-center text-sm text-muted-foreground">
            <p>Or call us directly at <strong>+91 98765 43210</strong></p>
            <p className="text-xs mt-1">Available 24/7</p>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Refunds;