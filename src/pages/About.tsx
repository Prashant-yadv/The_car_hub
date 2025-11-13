import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Target, Users, Zap, Shield, Heart, Sparkles, TrendingUp, Info } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import valueExcellence from "@/assets/value-excellence.jpg";
import valueInnovation from "@/assets/value-innovation.jpg";
import valueCommunity from "@/assets/value-community.jpg";
import valueTrust from "@/assets/value-trust.jpg";
import valuePassion from "@/assets/value-passion.jpg";
import valueQuality from "@/assets/value-quality.jpg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-inter text-primary">Our Story</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black leading-tight">
                <span className="gradient-text">Redefining</span> The Future of
                <span className="gradient-text block mt-2">Automotive Excellence</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                We're passionate about connecting enthusiasts with the world's most exclusive
                and high-performance sports cars through stunning visuals, immersive experiences,
                and comprehensive information that brings the showroom to your screen.
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-orbitron font-bold gradient-text">500+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Sports Cars</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-orbitron font-bold gradient-text">100K+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Enthusiasts</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 glow-effect">
                <img
                  src={aboutHero}
                  alt="Automotive Design Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-inter text-primary">Our Mission</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-black gradient-text mb-4 sm:mb-6">
                Creating Immersive Digital Experiences
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our mission is to create the ultimate online destination for sports car enthusiasts,
                providing an immersive experience that showcases the beauty, performance, and innovation
                of the world's finest automobiles through cutting-edge technology and premium content.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="relative rounded-2xl p-6 sm:p-8 border border-border card-hover animate-fade-in overflow-hidden group">
                <div className="absolute inset-0">
                  <img src={valueExcellence} alt="Excellence" className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/95" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6">
                    <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-3 sm:mb-4">Excellence</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We're committed to showcasing only the finest vehicles with the highest quality
                    content, photography, and attention to every detail.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl p-6 sm:p-8 border border-border card-hover animate-fade-in overflow-hidden group">
                <div className="absolute inset-0">
                  <img src={valueInnovation} alt="Innovation" className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/95" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-accent/10 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6">
                    <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-3 sm:mb-4">Innovation</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We continuously push boundaries to deliver cutting-edge digital experiences
                    that set new standards in automotive content.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl p-6 sm:p-8 border border-border card-hover animate-fade-in overflow-hidden group">
                <div className="absolute inset-0">
                  <img src={valueCommunity} alt="Community" className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/95" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6">
                    <Users className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-3 sm:mb-4">Community</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We foster a passionate community of automotive enthusiasts who share
                    our love for performance, design, and innovation.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl p-6 sm:p-8 border border-border card-hover animate-fade-in overflow-hidden group">
                <div className="absolute inset-0">
                  <img src={valueTrust} alt="Trust" className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/95" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-accent/10 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6">
                    <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-3 sm:mb-4">Trust</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Providing accurate specifications and authentic information that
                    enthusiasts can rely on for their automotive passion.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl p-6 sm:p-8 border border-border card-hover animate-fade-in overflow-hidden group">
                <div className="absolute inset-0">
                  <img src={valuePassion} alt="Passion" className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/95" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6">
                    <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-3 sm:mb-4">Passion</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Driven by genuine love for automotive excellence and the desire to
                    share that passion with the world.
                  </p>
                </div>
              </div>

              <div className="relative rounded-2xl p-6 sm:p-8 border border-border card-hover animate-fade-in overflow-hidden group">
                <div className="absolute inset-0">
                  <img src={valueQuality} alt="Quality" className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/95" />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-accent/10 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-6">
                    <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-3 sm:mb-4">Quality</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Every image, specification, and detail is carefully curated to
                    provide the premium experience you deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-black gradient-text mb-4">
                By The Numbers
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Our commitment to excellence reflected in data
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="relative text-center p-6 sm:p-8 bg-card rounded-2xl border border-border card-hover animate-scale-in cursor-pointer group">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Info className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-black gradient-text mb-2">
                      500+
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                      Sports Cars
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-card border-border">
                  <div className="space-y-3">
                    <h4 className="font-orbitron font-bold text-lg gradient-text">Sports Cars Collection</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our database includes over 500 meticulously documented sports cars from various manufacturers, eras, and categories.
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span>Supercars & Hypercars:</span>
                        <span className="text-primary font-bold">250+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Luxury Sports Cars:</span>
                        <span className="text-primary font-bold">150+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Racing & Track Cars:</span>
                        <span className="text-primary font-bold">100+</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="relative text-center p-6 sm:p-8 bg-card rounded-2xl border border-border card-hover animate-scale-in cursor-pointer group">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Info className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-black gradient-text mb-2">
                      50+
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                      Top Brands
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-card border-border">
                  <div className="space-y-3">
                    <h4 className="font-orbitron font-bold text-lg gradient-text">Premium Manufacturers</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We feature vehicles from over 50 prestigious automotive brands, from legendary Italian marques to cutting-edge electric manufacturers.
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span>Established Brands:</span>
                        <span className="text-primary font-bold">35+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Emerging Manufacturers:</span>
                        <span className="text-primary font-bold">10+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Boutique Builders:</span>
                        <span className="text-primary font-bold">5+</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground italic pt-2">
                      Including Ferrari, Lamborghini, Porsche, McLaren, Bugatti, Pagani, Koenigsegg, and more.
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="relative text-center p-6 sm:p-8 bg-card rounded-2xl border border-border card-hover animate-scale-in cursor-pointer group">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Info className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-black gradient-text mb-2">
                      100K+
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                      Monthly Visitors
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-card border-border">
                  <div className="space-y-3">
                    <h4 className="font-orbitron font-bold text-lg gradient-text">Engaged Community</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our platform attracts over 100,000 passionate automotive enthusiasts monthly, measured through verified analytics across all devices.
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span>Unique Visitors:</span>
                        <span className="text-primary font-bold">105,000+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average Session Time:</span>
                        <span className="text-primary font-bold">8.5 min</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pages per Visit:</span>
                        <span className="text-primary font-bold">12.3</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Return Visitor Rate:</span>
                        <span className="text-primary font-bold">68%</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="relative text-center p-6 sm:p-8 bg-card rounded-2xl border border-border card-hover animate-scale-in cursor-pointer group">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Info className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-black gradient-text mb-2">
                      4.9★
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
                      User Rating
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-card border-border">
                  <div className="space-y-3">
                    <h4 className="font-orbitron font-bold text-lg gradient-text">Exceptional Satisfaction</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Based on 15,000+ verified user reviews across multiple platforms, measuring content quality, user experience, and overall satisfaction.
                    </p>
                    <div className="space-y-2 text-xs text-muted-foreground border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span>5-Star Reviews:</span>
                        <span className="text-primary font-bold">82%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>4-Star Reviews:</span>
                        <span className="text-primary font-bold">13%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Reviews:</span>
                        <span className="text-primary font-bold">15,000+</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Would Recommend:</span>
                        <span className="text-primary font-bold">96%</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-black gradient-text">
              Join Our Community
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Be part of a global community of automotive enthusiasts. Explore the finest sports cars,
              share your passion, and stay updated with the latest in high-performance vehicles.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
