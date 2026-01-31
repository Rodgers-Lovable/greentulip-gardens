import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Calendar, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 px-4">
        <div className="text-center max-w-xl mx-auto">
          {/* Decorative leaf element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-24 h-24 mx-auto text-primary/20"
              fill="currentColor"
            >
              <path d="M50 10 C30 30, 20 50, 25 75 C30 85, 40 90, 50 90 C60 90, 70 85, 75 75 C80 50, 70 30, 50 10 Z M50 25 C45 40, 42 55, 45 70 M50 25 C55 40, 58 55, 55 70" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    className="text-primary/30"
              />
              <path d="M50 25 L50 80" stroke="currentColor" strokeWidth="1.5" className="text-primary/40" />
            </svg>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight"
          >
            You've stepped off the garden path
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl mb-10 max-w-md mx-auto leading-relaxed"
          >
            Don't worry — the page you're looking for doesn't exist, but you're still very welcome here.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <Button asChild variant="gold" size="lg" className="min-w-[180px]">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>

            {/* Secondary CTAs */}
            <Button asChild variant="forest-outline" size="lg" className="min-w-[180px]">
              <Link to="/book">
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Link>
            </Button>

            <Button asChild variant="ghost" size="lg" className="text-primary hover:text-primary/80">
              <Link to="/experiences">
                <Compass className="w-4 h-4 mr-2" />
                Explore Experiences
              </Link>
            </Button>
          </motion.div>

          {/* Subtle decorative line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto"
          />
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
