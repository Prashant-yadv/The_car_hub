import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-inter">
      <div className="text-center space-y-8 px-4 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-9xl font-orbitron font-black gradient-text">404</h1>
          <h2 className="text-3xl font-orbitron font-bold text-foreground">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Looks like you've taken a wrong turn. The page you're looking for doesn't exist.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-orange-500 hover:opacity-90 font-orbitron group"
            asChild
          >
            <Link to="/">
              <Home className="mr-2 w-5 h-5" />
              Return Home
            </Link>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 font-orbitron group"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
