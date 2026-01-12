import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import companyData from "@/data/company.json";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Experiences", href: "/experiences" },
  { name: "Gallery", href: "/gallery" },
  { name: "Book Now", href: "/book" },
];

const experiences = [
  { name: "Weddings & Ceremonies", href: "/experiences/weddings" },
  { name: "Picnics & Day Outs", href: "/experiences/picnics" },
  { name: "Accommodation", href: "/experiences/accommodation" },
  { name: "Team Building", href: "/experiences/team-building" },
  { name: "Photoshoots", href: "/experiences/photoshoots" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "FAQs", href: "/faqs" },
];

export function Footer() {
  const { company, developer } = companyData;

  return (
    <footer className="bg-forest text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-semibold">
                {company.name}
              </h3>
              <p className="text-cream/70 mt-1">{company.address.full}</p>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed">
              A premier nature-based event venue nestled in the heart of Meru
              County. Where beautiful moments meet breathtaking landscapes.
            </p>
            <div className="flex gap-4">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cream/10 rounded-full hover:bg-gold hover:text-forest-dark transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={company.social.instagram}
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
            <h4 className="font-heading text-lg font-semibold mb-6">
              Quick Links
            </h4>
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
            <h4 className="font-heading text-lg font-semibold mb-6">
              Experiences
            </h4>
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
            <h4 className="font-heading text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-cream/80 text-sm">
                  {company.name}
                  <br />
                  {company.address.town}, {company.address.city}
                  <br />
                  {company.address.country}
                </span>
              </li>
              <li className="flex items-end">
                <Phone className="h-5 w-5 text-gold shrink-0 mr-2" />

                <a
                  href={`tel:${company.contact.phone}`}
                  className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors text-sm"
                >
                  {company.contact.phone}
                </a>
                <p className="mx-1 text-xs">{"or"}</p>
                <a
                  href={`tel:${company.contact.phone1}`}
                  className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors text-sm"
                >
                  {company.contact.phone1}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-center gap-3 text-cream/80 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="h-5 w-5 text-gold shrink-0" />
                  info@greentulipgardens.co.ke
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-cream/80 text-sm">
                  Weekday: 7:00 AM - 10:00 PM
                  <br />
                  Weekend: 7:00 AM - 10:00 PM
                  <br />
                  Holiday: 7:00 AM - 10:00 PM
                  <br />
                  <br />
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
              Developed & Maintained by{" "}
              <a
                className="underline text-secondary"
                href={`mailto:${developer.contact.email}`}
              >
                {developer.lastName}
              </a>
            </p>

            <p className="text-cream/60 text-sm">
              © {new Date().getFullYear()} {company.name}. All rights reserved.
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
