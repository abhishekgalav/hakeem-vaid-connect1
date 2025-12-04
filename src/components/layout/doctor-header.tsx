import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Users, 
  Calendar, 
  FileText, 
  BarChart3, 
  Settings,
  Menu,
  Bell,
  LogOut
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export const DoctorHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/doctor/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-herbal flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Hakeem Portal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Practice</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/doctor/dashboard"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-herbal p-6 no-underline outline-none focus:shadow-md"
                        >
                          <Stethoscope className="h-6 w-6 text-white" />
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            Dashboard
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Overview of your practice and today's schedule
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/doctor/appointments"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Appointments
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Manage your appointment schedule
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/doctor/patients"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Patients
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            View patient records and history
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/doctor/prescriptions"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            Prescriptions
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Create and manage prescriptions
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/doctor/analytics"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none flex items-center gap-2">
                            <BarChart3 className="w-4 h-4" />
                            Analytics
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            View practice insights and reports
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/doctor/consultation/new" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
                  Start Consultation
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full text-xs bg-destructive">
              3
            </Badge>
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="icon" asChild className="hidden md:flex">
            <Link to="/doctor/settings">
              <Settings className="w-4 h-4" />
            </Link>
          </Button>

          {/* Logout */}
          <Button variant="ghost" size="icon" asChild className="hidden md:flex">
            <Link to="/doctor/login">
              <LogOut className="w-4 h-4" />
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-6">
                <Link to="/doctor/dashboard" className="flex items-center gap-2 text-sm font-medium">
                  <Stethoscope className="w-4 h-4" />
                  Dashboard
                </Link>
                <Link to="/doctor/appointments" className="flex items-center gap-2 text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  Appointments
                </Link>
                <Link to="/doctor/patients" className="flex items-center gap-2 text-sm font-medium">
                  <Users className="w-4 h-4" />
                  Patients
                </Link>
                <Link to="/doctor/prescriptions" className="flex items-center gap-2 text-sm font-medium">
                  <FileText className="w-4 h-4" />
                  Prescriptions
                </Link>
                <Link to="/doctor/analytics" className="flex items-center gap-2 text-sm font-medium">
                  <BarChart3 className="w-4 h-4" />
                  Analytics
                </Link>
                <Link to="/doctor/settings" className="flex items-center gap-2 text-sm font-medium">
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
                <Link to="/doctor/login" className="flex items-center gap-2 text-sm font-medium">
                  <LogOut className="w-4 h-4" />
                  Logout
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};