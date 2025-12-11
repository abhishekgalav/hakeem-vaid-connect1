import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Eye, EyeOff, Stethoscope, Shield, Users, Award, CalendarOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DoctorLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [awayMode, setAwayMode] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication - in real app, this would call an API
    if (formData.email && formData.password) {
      toast({
        title: "Welcome back!",
        description: "Successfully logged in to your doctor dashboard.",
      });
      navigate("/doctor/dashboard");
    } else {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-col justify-center space-y-8 p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Hakeem Miyaa</h1>
                <p className="text-sm text-muted-foreground">Doctor Portal</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-foreground">
              Welcome back, Doctor
            </h2>
            <p className="text-lg text-muted-foreground">
              Continue providing exceptional care to your patients with our comprehensive healthcare platform.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Patient Management</h3>
                <p className="text-sm text-muted-foreground">Comprehensive patient records and history</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Secure Platform</h3>
                <p className="text-sm text-muted-foreground">HIPAA compliant and fully encrypted</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft">
              <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                <Award className="w-5 h-5 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Professional Growth</h3>
                <p className="text-sm text-muted-foreground">Analytics and performance insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex justify-center">
          <Card className="w-full max-w-md shadow-elegant">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 lg:hidden">
                <Stethoscope className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Doctor Login</CardTitle>
              <CardDescription>
                Access your professional dashboard and patient management tools
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Medical License Email</Label>
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
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
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
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => handleChange("rememberMe", checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm">Remember me</Label>
                  </div>
                  <Button variant="link" className="px-0 font-normal text-sm">
                    Forgot password?
                  </Button>
                </div>

                {/* Away Mode Toggle */}
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                        <CalendarOff className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      </div>
                      <div>
                        <Label htmlFor="away-mode" className="text-sm font-medium text-amber-800 dark:text-amber-200">
                          Away Mode (On Leave)
                        </Label>
                        <p className="text-xs text-amber-600 dark:text-amber-400">
                          Enable if you're unavailable this week
                        </p>
                      </div>
                    </div>
                    <Switch
                      id="away-mode"
                      checked={awayMode}
                      onCheckedChange={setAwayMode}
                    />
                  </div>
                  {awayMode && (
                    <p className="text-xs text-amber-700 dark:text-amber-300 mt-2 pl-11">
                      Your profile will show as "On Leave" and patients won't be able to book appointments.
                    </p>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-4">
                <Button type="submit" className="w-full">
                  Sign In to Dashboard
                </Button>

                <Separator />

                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    New to our platform?
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/doctor/signup">
                      Register as Healthcare Provider
                    </Link>
                  </Button>
                </div>

                <div className="text-center">
                  <Button variant="link" asChild className="text-xs">
                    <Link to="/login">
                      Patient Login Instead
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;