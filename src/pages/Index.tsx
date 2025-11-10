import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarCard from "@/components/CarCard";
import Footer from "@/components/Footer";
import { carsData } from "@/data/carsData";
import { Button } from "@/components/ui/button";
import { TrendingUp, Newspaper, Play } from "lucide-react";
import newsImage1 from "@/assets/news-1.jpg";
import newsImage2 from "@/assets/news-2.jpg";
import newsImage3 from "@/assets/news-3.jpg";

const Index = () => {
  const [selectedType, setSelectedType] = useState<string>("All");
  
  const carTypes = ["All", "Supercar", "Hypercar", "Racing", "Grand Tourer"];
  
  const filteredCars = selectedType === "All" 
    ? carsData 
    : carsData.filter(car => car.type === selectedType);
  
  const trendingCars = carsData.filter(car => car.trending);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />
      
      <Hero />

      {/* Gallery Section */}
      <section id="gallery" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-orbitron font-black gradient-text mb-4">
              Exclusive Collection
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse through our curated selection of the world's finest sports cars
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {carTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => setSelectedType(type)}
                className={
                  selectedType === type
                    ? "bg-gradient-to-r from-primary to-orange-500 font-orbitron"
                    : "border-border hover:border-primary font-orbitron"
                }
              >
                {type}
              </Button>
            ))}
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-12 animate-fade-in">
            <TrendingUp className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-orbitron font-black gradient-text">
              Trending Now
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCars.map((car) => (
              <div
                key={car.id}
                className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {car.brand}
                  </p>
                  <h3 className="text-lg font-orbitron font-bold text-foreground">
                    {car.name}
                  </h3>
                  <p className="text-sm text-primary font-inter mt-1">{car.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Play className="w-4 h-4 text-primary" />
                <span className="text-sm font-inter text-primary">Featured Video</span>
              </div>
              <h2 className="text-4xl font-orbitron font-black gradient-text mb-4">
                See Them In Action
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the thrill of performance through our exclusive video content
              </p>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/20 glow-effect">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/WcjN20FjDuQ"
                title="Sports Car Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-12 animate-fade-in">
            <Newspaper className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-orbitron font-black gradient-text">
              Latest News
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <article className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 card-hover">
              <div className="aspect-video overflow-hidden">
                <img
                  src={newsImage1}
                  alt="Electric Supercar"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Dec 18, 2024</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-foreground">
                  The Rise of Electric Supercars
                </h3>
                <p className="text-muted-foreground font-inter text-sm">
                  Discover how electric powertrains are revolutionizing high-performance
                  vehicles with instant torque and zero emissions.
                </p>
                <Button variant="link" className="text-primary p-0 h-auto font-inter">
                  Read More →
                </Button>
              </div>
            </article>

            <article className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 card-hover">
              <div className="aspect-video overflow-hidden">
                <img
                  src={newsImage2}
                  alt="Racing Supercar"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Dec 15, 2024</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-foreground">
                  Track-Ready Performance Leaders
                </h3>
                <p className="text-muted-foreground font-inter text-sm">
                  The latest supercars designed for ultimate performance on both road
                  and track, pushing the limits of speed and handling.
                </p>
                <Button variant="link" className="text-primary p-0 h-auto font-inter">
                  Read More →
                </Button>
              </div>
            </article>

            <article className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 card-hover">
              <div className="aspect-video overflow-hidden">
                <img
                  src={newsImage3}
                  alt="Supercar Design Studio"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Dec 12, 2024</span>
                  <span>•</span>
                  <span>10 min read</span>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-foreground">
                  Behind the Scenes: Design Process
                </h3>
                <p className="text-muted-foreground font-inter text-sm">
                  An exclusive look at how the world's most beautiful sports cars are
                  conceptualized and brought to life by top designers.
                </p>
                <Button variant="link" className="text-primary p-0 h-auto font-inter">
                  Read More →
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
