import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCarImage from "@/assets/hero-car.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const handleGalleryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("gallery");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("video");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background z-10" />
        <img
          src={heroCarImage}
          alt="Luxury sports car"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 animate-scale-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-inter text-muted-foreground">
              Premium Digital Showroom
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-orbitron font-black leading-tight">
            Experience The
            <span className="block gradient-text mt-2">
              Future of Speed
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Discover the world's most exclusive sports cars with stunning photography,
            detailed specifications, and immersive video content.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 font-orbitron text-base px-8 glow-effect group"
              onClick={handleGalleryClick}
            >
              Explore Gallery
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 font-orbitron text-base px-8 group"
              onClick={handleVideoClick}
            >
              <Play className="mr-2 w-5 h-5 fill-primary group-hover:scale-110 transition-transform" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-border/50">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-orbitron font-bold gradient-text">
                500+
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                Sports Cars
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-orbitron font-bold gradient-text">
                50+
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                Top Brands
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-orbitron font-bold gradient-text">
                24/7
              </div>
              <div className="text-sm text-muted-foreground font-inter">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
