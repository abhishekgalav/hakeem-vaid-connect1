import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Search, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock,
  HelpCircle,
  BookOpen,
  Shield,
  CreditCard
} from "lucide-react";

const HelpCenter = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "How do I book an appointment with a doctor?",
          answer: "You can book an appointment by searching for doctors on our platform, selecting your preferred practitioner, choosing an available time slot, and completing the payment. You'll receive a confirmation via SMS and email."
        },
        {
          question: "Are all doctors on your platform verified?",
          answer: "Yes, all practitioners on Hakeem Miyaa | Vaid Ji are thoroughly verified. We check their medical degrees, licenses, experience certificates, and conduct background verification before listing them on our platform."
        },
        {
          question: "What is the difference between Ayurvedic and Unani medicine?",
          answer: "Ayurveda is an ancient Indian system focusing on balancing three doshas (Vata, Pitta, Kapha) using herbs, diet, and lifestyle. Unani medicine, originating from Greece and refined in the Islamic world, emphasizes four humors and uses natural remedies, cupping, and dietary regulation."
        }
      ]
    },
    {
      category: "Appointments",
      questions: [
        {
          question: "Can I reschedule my appointment?",
          answer: "Yes, you can reschedule your appointment up to 2 hours before the scheduled time through your account dashboard or by calling our support team. Rescheduling is free of charge."
        },
        {
          question: "What happens if I miss my appointment?",
          answer: "If you miss your appointment without prior notice, the consultation fee will not be refunded. However, you can book a new appointment. We recommend setting reminders and arriving 5 minutes early."
        },
        {
          question: "How do video consultations work?",
          answer: "Video consultations are conducted through our secure platform. You'll receive a link via SMS/email 15 minutes before your appointment. Ensure you have a stable internet connection and a device with camera and microphone."
        }
      ]
    },
    {
      category: "Payments & Refunds",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards, UPI, net banking, and digital wallets. We also offer Cash on Delivery (COD) for medicine orders above ₹299."
        },
        {
          question: "How do refunds work?",
          answer: "Refunds are processed within 5-7 business days to your original payment method. Consultation fees are refundable if cancelled 2+ hours in advance. Medicine refunds are subject to our return policy."
        },
        {
          question: "Are there any hidden charges?",
          answer: "No, we maintain complete transparency. The price you see during booking is the final amount. For medicines, shipping charges (if any) are clearly mentioned before checkout."
        }
      ]
    },
    {
      category: "Medicines & Lab Tests",
      questions: [
        {
          question: "Are your medicines authentic?",
          answer: "Yes, all medicines are sourced directly from licensed manufacturers and certified suppliers. We maintain strict quality control and all products are batch-tested for authenticity and safety."
        },
        {
          question: "How long does medicine delivery take?",
          answer: "Standard delivery takes 2-5 business days depending on your location. Express delivery (1-2 days) is available in major cities for an additional charge. Same-day delivery is available in select areas."
        },
        {
          question: "Is home sample collection really free?",
          answer: "Yes, home sample collection is completely free for all lab test bookings. Our trained phlebotomists will visit your address at the scheduled time with all necessary equipment and safety protocols."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: "Call Us",
      description: "24/7 Emergency Support",
      contact: "+91 98765 43210",
      action: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help",
      contact: "Chat with our support team",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Response within 2 hours",
      contact: "support@hakeemmiyaa.com",
      action: "Send Email"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-herbal py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-on-dark mb-6">
            How Can We Help You?
          </h1>
          <p className="text-xl text-text-on-dark/90 mb-8 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support team
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for help topics, FAQs, or keywords..."
                className="pl-12 h-14 text-base bg-white rounded-[1.25rem] shadow-elegant"
              />
              <Button variant="gold" className="absolute right-2 top-2 h-10">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="py-8 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Appointments", icon: Clock, count: "8 articles" },
              { name: "Payments", icon: CreditCard, count: "6 articles" },
              { name: "Account", icon: Shield, count: "5 articles" },
              { name: "General", icon: HelpCircle, count: "12 articles" }
            ].map((category, index) => (
              <Card key={index} className="p-6 text-center cursor-pointer hover:shadow-elegant transition-all duration-300 border-0 shadow-soft">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-3">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-muted-foreground text-lg">
              Our support team is available 24/7 to assist you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactOptions.map((option, index) => (
              <Card key={index} className="p-8 text-center border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-3">{option.description}</p>
                <p className="text-sm text-foreground font-medium mb-6">{option.contact}</p>
                <Button variant="gold" className="w-full">
                  {option.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find quick answers to the most common questions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-5 h-5 text-brand-gold" />
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-border rounded-[1.25rem] px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-herbal p-12 text-center border-0">
            <h2 className="font-display text-3xl font-bold text-text-on-dark mb-4">
              Still Need Help?
            </h2>
            <p className="text-text-on-dark/90 text-lg mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our dedicated support team is here to help you with any questions or concerns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Live Chat
              </Button>
              <Button variant="hero" size="lg">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HelpCenter;