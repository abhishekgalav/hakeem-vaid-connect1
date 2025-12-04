import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Bell,
  Shield,
  Moon,
  Globe,
  Mail,
  Phone,
  Lock,
  Trash2,
  Download,
  Eye
} from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-display font-bold text-foreground mb-8">Settings</h1>
          
          <div className="space-y-6">
            {/* Notifications */}
            <Card className="p-6">
              <h2 className="text-xl font-display font-semibold mb-4 flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notifications
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Appointment Reminders</h3>
                    <p className="text-sm text-muted-foreground">Get notified about upcoming appointments</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Prescription Updates</h3>
                    <p className="text-sm text-muted-foreground">Notifications about prescription changes</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Health Tips</h3>
                    <p className="text-sm text-muted-foreground">Daily health tips and articles</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </Card>

            {/* Privacy & Security */}
            <Card className="p-6">
              <h2 className="text-xl font-display font-semibold mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Privacy & Security
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" placeholder="Enter current password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" placeholder="Enter new password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" placeholder="Confirm new password" />
                </div>
                <Button className="w-full">
                  <Lock className="w-4 h-4 mr-2" />
                  Update Password
                </Button>
                <Separator />
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
              </div>
            </Card>

            {/* Preferences */}
            <Card className="p-6">
              <h2 className="text-xl font-display font-semibold mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Preferences
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Dark Mode</h3>
                    <p className="text-sm text-muted-foreground">Switch to dark theme</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <select className="w-full p-2 border rounded-md bg-background">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Urdu</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <select className="w-full p-2 border rounded-md bg-background">
                    <option>Asia/Kolkata (IST)</option>
                    <option>Asia/Dubai (GST)</option>
                    <option>Europe/London (GMT)</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Data & Privacy */}
            <Card className="p-6">
              <h2 className="text-xl font-display font-semibold mb-4 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Data & Privacy
              </h2>
              <div className="space-y-4">
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download My Data
                </Button>
                <Button variant="outline" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  View Privacy Policy
                </Button>
                <Separator />
                <Button variant="destructive" className="w-full">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Settings;