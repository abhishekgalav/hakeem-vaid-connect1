import { LucideIcon } from "lucide-react";
import { Card } from "./card";
import { cn } from "@/lib/utils";

interface QuickActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
}

export const QuickActionCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
  onClick 
}: QuickActionCardProps) => {
  return (
    <Card 
      className={cn(
        "p-6 cursor-pointer transition-all duration-300 hover:shadow-elegant hover:scale-105 group bg-card border-0 shadow-soft",
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center group-hover:shadow-gold transition-all duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};