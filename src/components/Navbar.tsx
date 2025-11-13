import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    if (path === "/#gallery") {
      e.preventDefault();
      if (location.pathname === "/") {
        // Already on homepage, just scroll
        const element = document.getElementById("gallery");
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to homepage and scroll after navigation
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById("gallery");
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/#gallery" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-primary to-orange-500 p-2 rounded-lg glow-effect">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-orbitron font-bold gradient-text hidden sm:inline">
              SPORTS CAR GALLERY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(link.path, e)}
                className={`font-inter font-medium transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-orange-500 transform origin-left transition-transform duration-300 ${
                    isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 font-orbitron glow-effect"
              asChild
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-slide-up">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(link.path, e)}
                className={`block py-2 px-4 rounded-lg font-inter font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="w-full bg-gradient-to-r from-primary to-orange-500 font-orbitron"
              asChild
            >
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
