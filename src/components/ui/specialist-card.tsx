import { Star, MapPin, Clock, Video, Calendar } from "lucide-react";
import { Card } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";

interface SpecialistCardProps {
  name: string;
  specialty: string;
  rating: number;
  experience: number;
  location: string;
  consultationFee: number;
  videoFee: number;
  image: string;
  languages: string[];
  nextSlot: string;
  isVerified?: boolean;
}

export const SpecialistCard = ({
  name,
  specialty,
  rating,
  experience,
  location,
  consultationFee,
  videoFee,
  image,
  languages,
  nextSlot,
  isVerified = true
}: SpecialistCardProps) => {
  return (
    <Card className="p-6 bg-card border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
      <div className="flex gap-4">
        <div className="relative">
          <img 
            src={image} 
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
          />
          {isVerified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-brand-gold rounded-full flex items-center justify-center">
              <Star className="w-3 h-3 text-white fill-current" />
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-display font-semibold text-lg text-foreground">
                {name}
              </h3>
              <p className="text-brand-green font-medium">{specialty}</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-brand-gold fill-current" />
              <span className="font-medium text-sm">{rating}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              {experience}+ years exp
            </Badge>
            {languages.slice(0, 2).map((lang) => (
              <Badge key={lang} variant="outline" className="text-xs">
                {lang}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{nextSlot}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <div className="flex items-center gap-4">
                <span>
                  <span className="text-muted-foreground">Clinic:</span> ₹{consultationFee}
                </span>
                <span>
                  <span className="text-muted-foreground">Video:</span> ₹{videoFee}
                </span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4" />
                Book
              </Button>
              <Button variant="gold" size="sm">
                <Video className="w-4 h-4" />
                Video
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};