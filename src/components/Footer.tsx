import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary to-orange-500 p-2 rounded-lg glow-effect">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-orbitron font-bold gradient-text">
                SPORTS CAR GALLERY
              </span>
            </div>
            <p className="text-muted-foreground font-inter text-sm">
              Your premier destination for exploring the world's most exclusive and high-performance sports cars.
            </p>
            {/* Social Media */}
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary transition-colors flex items-center justify-center group"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-orbitron font-bold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "Gallery", "Blog", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : link === "Gallery" ? "/#gallery" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-orbitron font-bold text-foreground mb-4">
              Categories
            </h3>
            <ul className="space-y-3">
              {["Supercars", "Hypercars", "Classic", "Electric", "Racing"].map((category) => (
                <li key={category}>
                  <a
                    href="/#gallery"
                    className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-orbitron font-bold text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground font-inter text-sm">
                   Shikohabad, Road Etah, (U.P) 207001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground font-inter text-sm">
                  +91 (807) 796-8633
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground font-inter text-sm">
                  prashantkinguniverse@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-inter text-sm text-center md:text-left">
            © {currentYear} Sports Car Gallery. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
