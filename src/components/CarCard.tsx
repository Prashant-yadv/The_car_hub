import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarCardProps {
  id: number;
  name: string;
  brand: string;
  image: string;
  topSpeed: string;
  horsepower: string;
  year: number;
}

const CarCard = ({ id, name, brand, image, topSpeed, horsepower, year }: CarCardProps) => {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border card-hover">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={`${brand} ${name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        
        {/* Year Badge */}
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-orbitron font-bold">
          {year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Brand & Name */}
        <div>
          <p className="text-sm text-muted-foreground font-inter uppercase tracking-wide">
            {brand}
          </p>
          <h3 className="text-2xl font-orbitron font-bold text-foreground mt-1">
            {name}
          </h3>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Gauge className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-inter">Top Speed</p>
              <p className="text-sm font-orbitron font-bold text-foreground">{topSpeed}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-inter">Power</p>
              <p className="text-sm font-orbitron font-bold text-foreground">{horsepower}</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          variant="outline"
          className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary font-inter group"
          asChild
        >
          <Link to={`/car/${id}`}>
            View Details
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-shine" />
      </div>
    </div>
  );
};

export default CarCard;
