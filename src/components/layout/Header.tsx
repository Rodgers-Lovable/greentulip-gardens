import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import companyData from "../../data/company.json";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experiences", href: "/experiences" },
  { name: "Gallery", href: "/gallery" },
  { name: "Location", href: "/location" },
  { name: "FAQs", href: "/faqs" },
];

export function Header() {
  const { company } = companyData;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span
              className={cn(
                "font-heading text-2xl font-semibold transition-colors duration-300",
                isScrolled ? "text-forest" : "text-cream"
              )}
            >
              {company.firstName}
            </span>
            <span
              className={cn(
                "hidden sm:inline font-heading text-lg transition-colors duration-300",
                isScrolled ? "text-forest-light" : "text-cream/80"
              )}
            >
              {company.lastName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-gold",
                  location.pathname === item.href
                    ? isScrolled
                      ? "text-gold"
                      : "text-gold"
                    : isScrolled
                    ? "text-foreground"
                    : "text-cream/90"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${company.contact.phone}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled
                  ? "text-forest hover:text-gold"
                  : "text-cream hover:text-gold"
              )}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{company.contact.phone}</span>
            </a>
            <Button variant="gold" size="default" asChild>
              <Link to="/book">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={cn(
                  "h-6 w-6",
                  isScrolled ? "text-forest" : "text-cream"
                )}
              />
            ) : (
              <Menu
                className={cn(
                  "h-6 w-6",
                  isScrolled ? "text-forest" : "text-cream"
                )}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-cream shadow-large transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "block py-3 text-lg font-medium border-b border-sage/30 transition-colors",
                location.pathname === item.href
                  ? "text-gold"
                  : "text-forest hover:text-gold"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-2 text-forest font-medium"
            >
              <Phone className="h-5 w-5" />
              +254 700 000 000
            </a>
            <Button variant="gold" size="lg" className="w-full" asChild>
              <Link to="/book">Book Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
