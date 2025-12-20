import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Rocket } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background stars-bg">
      <div className="text-center px-4">
        <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6 animate-float">
          <Rocket className="w-10 h-10 text-primary" />
        </div>
        <h1 className="font-display text-8xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! This page drifted into the stratosphere.
        </p>
        <Link to="/">
          <Button variant="hero" size="lg">
            <Home className="w-4 h-4" />
            Return to Mission Control
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
