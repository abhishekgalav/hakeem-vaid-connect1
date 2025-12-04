import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Package, Home, FileText } from "lucide-react";

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId") || "HM" + Date.now().toString().slice(-8);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                </div>
              </div>

              <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                Order Placed Successfully!
              </h1>
              
              <p className="text-muted-foreground mb-8">
                Thank you for your order. Your order has been confirmed and will be delivered soon.
              </p>

              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <p className="text-sm text-muted-foreground mb-2">Order ID</p>
                <p className="text-2xl font-bold text-primary font-mono">
                  {orderId}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <Package className="w-5 h-5 text-primary" />
                  <div className="text-left flex-1">
                    <p className="font-semibold text-sm">Estimated Delivery</p>
                    <p className="text-sm text-muted-foreground">3-5 business days</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <FileText className="w-5 h-5 text-primary" />
                  <div className="text-left flex-1">
                    <p className="font-semibold text-sm">Order Confirmation</p>
                    <p className="text-sm text-muted-foreground">Sent to your email</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1">
                  <Link to="/dashboard">
                    <Home className="mr-2 h-4 w-4" />
                    Go to Dashboard
                  </Link>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <Link to="/medicines">
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrderSuccess;
