import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-orbitron font-black gradient-text mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have questions about our collection? Want to request specific information?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-left">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-2">Email Us</h3>
                <p className="text-muted-foreground">info@sportscargallery.com</p>
                <p className="text-muted-foreground text-sm mt-2">
                  We'll respond within 24 hours
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-2">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Mon-Fri 9am-6pm EST
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-orbitron font-bold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  123 Speed Lane<br />
                  Motor City, MC 12345<br />
                  United States
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-right">
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-inter font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-inter font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-inter font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-inter font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 font-orbitron glow-effect group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
