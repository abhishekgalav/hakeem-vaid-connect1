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
    },
    {
      service: "Wellness Therapies",
      icon: Leaf,
      policies: [
        { condition: "Cancelled 24+ hours before", refund: "100% refund", status: "success" },
        { condition: "Cancelled within 24 hours", refund: "50% refund", status: "warning" },
        { condition: "No-show without notice", refund: "No refund", status: "error" },
        { condition: "Therapist unavailable", refund: "Full refund + ₹200 credit", status: "success" }
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

      {/* Important Notes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 lg:p-12 max-w-4xl mx-auto border-0 shadow-soft">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Important Refund Information
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-blue-800 mb-3">Processing Time</h3>
                <p className="text-blue-700 leading-relaxed">
                  Refunds are processed within 5-7 business days to your original payment method. 
                  The exact time may vary depending on your bank or payment provider.
                </p>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-amber-800 mb-3">Partial Refunds</h3>
                <p className="text-amber-700 leading-relaxed">
                  In some cases, partial refunds may be issued based on the service utilization 
                  and timing of the cancellation request.
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-green-800 mb-3">Wallet Credits</h3>
                <p className="text-green-700 leading-relaxed">
                  For certain cancellations, we may offer wallet credits that can be used for 
                  future purchases on our platform. Credits never expire.
                </p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-red-800 mb-3">Non-Refundable Items</h3>
                <p className="text-red-700 leading-relaxed">
                  Opened medicines, completed consultations, and processed lab tests are 
                  generally non-refundable unless there was an error on our part.
                </p>
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