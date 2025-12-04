import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-herbal text-text-on-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/8078ba9e-4a08-4430-b5c2-ca802bd5b446.png" 
                alt="Hakeem Miyaa | Vaid Ji" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-text-on-dark/80 mb-6 leading-relaxed">
              Your trusted platform for authentic Ayurvedic and Unani medicine. Connect with qualified practitioners and experience holistic healing.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-on-dark/70 hover:text-brand-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-on-dark/70 hover:text-brand-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-on-dark/70 hover:text-brand-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-text-on-dark/70 hover:text-brand-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-on-dark/70 hover:text-brand-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <div className="space-y-3">
              <Link to="/find-doctors" className="block text-text-on-dark/80 hover:text-brand-gold transition-colors">
                Find Doctors
              </Link>
              <Link to="/video-consult" className="block text-text-on-dark/80 hover:text-brand-gold transition-colors">
                Video Consultation
              </Link>
              <Link to="/medicines" className="block text-text-on-dark/80 hover:text-brand-gold transition-colors">
                Medicines
              </Link>
              <Link to="/lab-tests" className="block text-text-on-dark/80 hover:text-brand-gold transition-colors">
                Lab Tests
              </Link>
              <Link to="/articles" className="block text-text-on-dark/80 hover:text-brand-gold transition-colors">
                Health Articles
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <div className="space-y-3">
              <Link to="/help" className="block text-text-on-dark/80 hover:text-brand-gold transition-colors">
                Help Center
              </Link>
              <Link to="/terms" className="block text-text-on-dark/80 hover:text-brand-gold transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="block text-text-on-dark/80 hover:text-brand-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/refunds" className="block text-text-on-dark/80 hover:text-brand-gold transition-colors">
                Refunds
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Emergency</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>emergency@hakeemmiyaa.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-text-on-dark/60">
            © 2024 Hakeem Miyaa | Vaid Ji. All rights reserved. | Not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};