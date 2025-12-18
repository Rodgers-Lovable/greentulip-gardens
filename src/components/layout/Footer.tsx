import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Book Now', href: '/book' },
];

const experiences = [
  { name: 'Weddings & Ceremonies', href: '/experiences/weddings' },
  { name: 'Picnics & Day Outs', href: '/experiences/picnics' },
  { name: 'Accommodation', href: '/experiences/accommodation' },
  { name: 'Team Building', href: '/experiences/team-building' },
  { name: 'Photoshoots', href: '/experiences/photoshoots' },
];

const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'FAQs', href: '/faqs' },
];

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-semibold">GreenTulip Gardens</h3>
              <p className="text-cream/70 mt-1">Nkubu, Meru County, Kenya</p>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed">
              A premier nature-based event venue nestled in the heart of Meru County. 
              Where beautiful moments meet breathtaking landscapes.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cream/10 rounded-full hover:bg-gold hover:text-forest-dark transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cream/10 rounded-full hover:bg-gold hover:text-forest-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Experiences</h4>
            <ul className="space-y-3">
              {experiences.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-cream/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-cream/80 text-sm">
                  GreenTulip Gardens<br />
                  Nkubu, Meru County<br />
                  Kenya
                </span>
              </li>
              <li>
                <a
                  href="tel:+254700000000"
                  className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors text-sm"
                >
                  <Phone className="h-5 w-5 text-gold shrink-0" />
                  +254 700 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@greentulipgardens.co.ke"
                  className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="h-5 w-5 text-gold shrink-0" />
                  info@greentulipgardens.co.ke
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-cream/80 text-sm">
                  Mon - Sun: 8:00 AM - 6:00 PM<br />
                  Events: By Appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/60 text-sm">
              © {new Date().getFullYear()} GreenTulip Gardens. All rights reserved.
            </p>
            <div className="flex gap-6">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-cream/60 hover:text-gold transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
