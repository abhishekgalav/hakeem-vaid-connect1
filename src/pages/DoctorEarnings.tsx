import { DoctorHeader } from "@/components/layout/doctor-header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  IndianRupee, 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  Download,
  Filter,
  CreditCard,
  Wallet,
  Clock
} from "lucide-react";

const DoctorEarnings = () => {
  const monthlyEarnings = [
    { month: "Jan 2024", amount: 45200, consultations: 28, growth: 12.5 },
    { month: "Dec 2023", amount: 40200, consultations: 25, growth: -5.2 },
    { month: "Nov 2023", amount: 42400, consultations: 27, growth: 8.1 },
    { month: "Oct 2023", amount: 39200, consultations: 24, growth: 15.3 },
  ];

  const recentTransactions = [
    {
      id: "1",
      date: "Jan 10, 2024",
      patient: "Rahul Kumar",
      type: "Video Consultation",
      amount: 800,
      status: "completed",
      paymentMethod: "UPI"
    },
    {
      id: "2", 
      date: "Jan 10, 2024",
      patient: "Priya Sharma",
      type: "In-person Consultation",
      amount: 1200,
      status: "completed",
      paymentMethod: "Card"
    },
    {
      id: "3",
      date: "Jan 09, 2024",
      patient: "Amit Mehta", 
      type: "Follow-up Consultation",
      amount: 600,
      status: "completed",
      paymentMethod: "Cash"
    },
    {
      id: "4",
      date: "Jan 09, 2024",
      patient: "Sunita Devi",
      type: "Video Consultation",
      amount: 800,
      status: "pending",
      paymentMethod: "UPI"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-primary text-primary-foreground";
      case "pending": return "bg-accent text-accent-foreground";
      case "failed": return "bg-destructive text-destructive-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getPaymentIcon = (method: string) => {
    switch (method) {
      case "UPI": return <Wallet className="w-4 h-4" />;
      case "Card": return <CreditCard className="w-4 h-4" />;
      case "Cash": return <IndianRupee className="w-4 h-4" />;
      default: return <Wallet className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DoctorHeader />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">Earnings & Reports</h1>
            <p className="text-muted-foreground">Track your practice revenue and financial insights</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <h3 className="text-2xl font-bold text-primary">₹45,200</h3>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-4 h-4 text-brand-gold" />
                  <span className="text-sm text-brand-gold">+12.5%</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Consultations</p>
                <h3 className="text-2xl font-bold text-accent">28</h3>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-4 h-4 text-brand-gold" />
                  <span className="text-sm text-brand-gold">+3 from last month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Per Session</p>
                <h3 className="text-2xl font-bold text-brand-gold">₹1,614</h3>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-4 h-4 text-brand-gold" />
                  <span className="text-sm text-brand-gold">+8.2%</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-brand-gold" />
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <h3 className="text-2xl font-bold text-muted-foreground">₹2,400</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">3 payments</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-muted/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Earnings Chart & History */}
          <div className="lg:col-span-2 space-y-6">
            {/* Monthly Earnings */}
            <Card className="p-6 shadow-soft">
              <h2 className="text-xl font-display font-semibold mb-4">Monthly Earnings</h2>
              <div className="space-y-4">
                {monthlyEarnings.map((earning, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{earning.month}</h3>
                      <p className="text-sm text-muted-foreground">{earning.consultations} consultations</p>
                    </div>
                    <div className="text-right space-y-1">
                      <h3 className="text-lg font-bold">₹{earning.amount.toLocaleString()}</h3>
                      <div className="flex items-center gap-1">
                        {earning.growth > 0 ? (
                          <TrendingUp className="w-4 h-4 text-brand-gold" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-destructive" />
                        )}
                        <span className={`text-sm ${earning.growth > 0 ? 'text-brand-gold' : 'text-destructive'}`}>
                          {earning.growth > 0 ? '+' : ''}{earning.growth}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Transactions */}
            <Card className="p-6 shadow-soft">
              <h2 className="text-xl font-display font-semibold mb-4">Recent Transactions</h2>
              <Tabs defaultValue="all" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-3">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          {getPaymentIcon(transaction.paymentMethod)}
                        </div>
                        <div>
                          <h4 className="font-medium">{transaction.patient}</h4>
                          <p className="text-sm text-muted-foreground">{transaction.type}</p>
                          <p className="text-xs text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <h4 className="font-semibold">₹{transaction.amount}</h4>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="completed" className="space-y-3">
                  {recentTransactions.filter(t => t.status === "completed").map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          {getPaymentIcon(transaction.paymentMethod)}
                        </div>
                        <div>
                          <h4 className="font-medium">{transaction.patient}</h4>
                          <p className="text-sm text-muted-foreground">{transaction.type}</p>
                          <p className="text-xs text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <h4 className="font-semibold">₹{transaction.amount}</h4>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="pending" className="space-y-3">
                  {recentTransactions.filter(t => t.status === "pending").map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          {getPaymentIcon(transaction.paymentMethod)}
                        </div>
                        <div>
                          <h4 className="font-medium">{transaction.patient}</h4>
                          <p className="text-sm text-muted-foreground">{transaction.type}</p>
                          <p className="text-xs text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <h4 className="font-semibold">₹{transaction.amount}</h4>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Summary Cards */}
          <div className="space-y-6">
            {/* Payment Methods */}
            <Card className="p-6 shadow-soft">
              <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">UPI/Digital</span>
                  </div>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Card Payments</span>
                  </div>
                  <span className="text-sm font-medium">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Cash</span>
                  </div>
                  <span className="text-sm font-medium">10%</span>
                </div>
              </div>
            </Card>

            {/* Consultation Rates */}
            <Card className="p-6 shadow-soft">
              <h3 className="text-lg font-semibold mb-4">Consultation Rates</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Video Consultation</span>
                  <span className="font-medium">₹800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">In-person Visit</span>
                  <span className="font-medium">₹1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Follow-up</span>
                  <span className="font-medium">₹600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Emergency</span>
                  <span className="font-medium">₹2,000</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Update Rates
              </Button>
            </Card>

            {/* Tax Information */}
            <Card className="p-6 shadow-soft">
              <h3 className="text-lg font-semibold mb-4">Tax Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Gross Income (Jan)</span>
                  <span className="font-medium">₹45,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Platform Fee</span>
                  <span className="font-medium">₹2,260</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">TDS Deducted</span>
                  <span className="font-medium">₹452</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold">
                  <span>Net Earnings</span>
                  <span className="text-primary">₹42,488</span>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Download className="w-4 h-4 mr-2" />
                Download Tax Receipt
              </Button>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorEarnings;