import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Gauge, Zap, DollarSign, Timer, Settings, Cog } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { carsData } from "@/data/carsData";

const CarDetail = () => {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-orbitron font-bold gradient-text mb-4">
            Car Not Found
          </h1>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />

      {/* Hero Image */}
      <section className="relative h-[70vh] mt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <img
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            className="mb-8 font-inter"
            asChild
          >
            <Link to="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Gallery
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Details */}
            <div className="space-y-8 animate-fade-in-left">
              {/* Header */}
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  {car.brand}
                </p>
                <h1 className="text-5xl font-orbitron font-black gradient-text mb-4">
                  {car.name}
                </h1>
                <p className="text-3xl font-orbitron font-bold text-primary">
                  {car.price}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {car.description}
              </p>

              {/* Specifications Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Gauge className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Top Speed</span>
                  </div>
                  <p className="text-2xl font-orbitron font-bold">{car.topSpeed}</p>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">Horsepower</span>
                  </div>
                  <p className="text-2xl font-orbitron font-bold">{car.horsepower}</p>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Timer className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">0-60 mph</span>
                  </div>
                  <p className="text-2xl font-orbitron font-bold">{car.acceleration}</p>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">MSRP</span>
                  </div>
                  <p className="text-2xl font-orbitron font-bold">{car.price}</p>
                </div>
              </div>

              {/* Technical Specs */}
              <div className="bg-card rounded-xl p-6 border border-border space-y-4">
                <h3 className="text-xl font-orbitron font-bold flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Technical Specifications
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Engine</span>
                    <span className="font-orbitron">{car.engine}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Transmission</span>
                    <span className="font-orbitron">{car.transmission}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Year</span>
                    <span className="font-orbitron">{car.year}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-orbitron">{car.type}</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 font-orbitron glow-effect"
                  asChild
                >
                  <Link to="/contact">Request Info</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-primary/50 hover:bg-primary/10 font-orbitron"
                  asChild
                >
                  <Link to="/#gallery">View More</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Video */}
            <div className="space-y-6 animate-fade-in-right">
              <div className="sticky top-24">
                <h3 className="text-2xl font-orbitron font-bold mb-4">
                  Watch in Action
                </h3>
                <div className="aspect-video rounded-2xl overflow-hidden border-2 border-primary/20 glow-effect">
                  <iframe
                    className="w-full h-full"
                    src={car.videoUrl}
                    title={`${car.brand} ${car.name} showcase`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarDetail;
