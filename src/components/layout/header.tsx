import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import logoImage from "@/assets/logo-hakeem-miyaa.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="Hakeem Miyaa | Vaid Ji - Bharat ka Ayurvedic aur Unani Portal" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/find-doctors" className="text-foreground hover:text-brand-green transition-colors font-medium">
              Find Doctors
            </Link>
            <Link to="/video-consult" className="text-foreground hover:text-brand-green transition-colors font-medium">
              Video Consult
            </Link>
            <Link to="/medicines" className="text-foreground hover:text-brand-green transition-colors font-medium">
              Medicines
            </Link>
            <Link to="/lab-tests" className="text-foreground hover:text-brand-green transition-colors font-medium">
              Lab Tests
            </Link>
            <Link to="/articles" className="text-foreground hover:text-brand-green transition-colors font-medium">
              Articles
            </Link>
            <Link to="/mens-sexual-health" className="text-foreground hover:text-brand-green transition-colors font-medium">
              Men's Health
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link to="/cart">
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-brand-gold">
                  2
                </Badge>
              </Link>
            </Button>

            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="gold" asChild>
                <Link to="/profile">Profile</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link to="/find-doctors" className="text-foreground hover:text-brand-green transition-colors font-medium">
                Find Doctors
              </Link>
              <Link to="/video-consult" className="text-foreground hover:text-brand-green transition-colors font-medium">
                Video Consult
              </Link>
              <Link to="/medicines" className="text-foreground hover:text-brand-green transition-colors font-medium">
                Medicines
              </Link>
              <Link to="/lab-tests" className="text-foreground hover:text-brand-green transition-colors font-medium">
                Lab Tests
              </Link>
              <Link to="/articles" className="text-foreground hover:text-brand-green transition-colors font-medium">
                Articles
              </Link>
              <Link to="/mens-sexual-health" className="text-foreground hover:text-brand-green transition-colors font-medium">
                Men's Health
              </Link>
              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1" asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button variant="gold" className="flex-1" asChild>
                  <Link to="/profile">Profile</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};