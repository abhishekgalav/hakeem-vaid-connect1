import { Search, MapPin } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

export const SearchBar = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[1.25rem] shadow-elegant p-2 flex items-center gap-2">
      <div className="flex-1 flex items-center gap-3 px-4">
        <Search className="w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search for Hakeem, Vaid, specialty, or medicine..."
          className="border-0 focus-visible:ring-0 text-base placeholder:text-muted-foreground bg-transparent"
        />
      </div>
      <div className="h-8 w-px bg-border" />
      <div className="flex items-center gap-3 px-4">
        <MapPin className="w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Location"
          className="border-0 focus-visible:ring-0 text-base placeholder:text-muted-foreground bg-transparent w-32"
        />
      </div>
      <Button variant="gold" size="lg" className="h-12 px-8">
        <Search className="w-5 h-5" />
        Search
      </Button>
    </div>
  );
};