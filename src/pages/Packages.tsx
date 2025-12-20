import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { QuoteModal } from '@/components/QuoteModal';
import SEOHead from '@/components/SEOHead';
import heroImage from '@/assets/hero-home.jpg';

const packages = [
  {
    name: 'Garden Day Out',
    ideal: 'Perfect for families, friends, and casual gatherings',
    capacity: '2-50 guests',
    includes: [
      'Full day access to gardens',
      'Designated picnic area',
      'Access to walking paths',
      'Parking for all guests',
      'Basic amenities and restrooms',
    ],
    eventType: 'Picnic & Day Out',
  },
  {
    name: 'Intimate Celebration',
    ideal: 'Ideal for small weddings, birthdays, and anniversaries',
    capacity: '20-100 guests',
    includes: [
      'Private garden area',
      'Event setup assistance',
      'Tables and chairs',
      'Access to preparation rooms',
      'Dedicated event coordinator',
      'Extended hours available',
    ],
    eventType: 'Wedding & Ceremony',
    featured: true,
  },
  {
    name: 'Grand Event',
    ideal: 'Best for large weddings and corporate events',
    capacity: '100-500 guests',
    includes: [
      'Exclusive use of venue',
      'Premium setup and decor support',
      'Full event coordination',
      'Bridal and groom preparation suites',
      'Ample parking with assistance',
      'Extended hours and flexibility',
      'Security personnel',
    ],
    eventType: 'Wedding & Ceremony',
  },
  {
    name: 'Corporate Retreat',
    ideal: 'Perfect for team building and business retreats',
    capacity: '10-200 participants',
    includes: [
      'Conference and meeting facilities',
      'Outdoor activity areas',
      'Breakout spaces',
      'Catering coordination',
      'AV equipment support',
      'Accommodation options available',
    ],
    eventType: 'Team Building & Retreat',
  },
  {
    name: 'Creative Shoot',
    ideal: 'For photographers, filmmakers, and content creators',
    capacity: 'All production sizes',
    includes: [
      'Access to diverse backdrops',
      'Golden hour sessions available',
      'Changing and prep rooms',
      'Flexible scheduling',
      'Power supply access',
      'Vehicle access for equipment',
    ],
    eventType: 'Photoshoot & Filming',
  },
];

export default function Packages() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState('');

  const handleRequestQuote = (eventType: string) => {
    setSelectedEventType(eventType);
    setIsQuoteModalOpen(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Packages & Pricing - Event Packages at GreenTulip Gardens"
        description="Discover our event packages for weddings, celebrations, and corporate events. Flexible pricing and customizable options at GreenTulip Gardens, Meru."
        keywords="event packages Meru, wedding packages Kenya, venue pricing, celebration packages, corporate event packages, GreenTulip Gardens rates"
        url="https://greentulip.co.ke/packages"
      />
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-forest-dark/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Tailored For You
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-6">
              Packages & Experiences
            </h1>
            <p className="text-cream/90 text-lg max-w-2xl mx-auto">
              Flexible packages designed to meet your unique needs. Each experience 
              can be customized to create your perfect event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl p-8 ${
                  pkg.featured
                    ? 'bg-forest text-cream ring-4 ring-gold'
                    : 'bg-background shadow-soft'
                }`}
              >
                {pkg.featured && (
                  <span className="inline-block bg-gold text-forest-dark text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-heading text-2xl mb-2 ${
                  pkg.featured ? 'text-cream' : 'text-forest'
                }`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-4 ${
                  pkg.featured ? 'text-cream/70' : 'text-muted-foreground'
                }`}>
                  {pkg.ideal}
                </p>
                <p className={`font-semibold mb-6 ${
                  pkg.featured ? 'text-gold' : 'text-gold'
                }`}>
                  {pkg.capacity}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 shrink-0 mt-0.5 ${
                        pkg.featured ? 'text-gold' : 'text-forest'
                      }`} />
                      <span className={`text-sm ${
                        pkg.featured ? 'text-cream/90' : 'text-foreground'
                      }`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.featured ? 'gold' : 'forest-outline'}
                  className="w-full"
                  onClick={() => handleRequestQuote(pkg.eventType)}
                >
                  Request a Quote
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-4">
              Need Something Different?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              All our packages are fully customizable. Tell us about your vision 
              and we'll create a tailored experience just for you.
            </p>
            <Button
              variant="gold"
              size="xl"
              onClick={() => handleRequestQuote('Other')}
            >
              Request Custom Quote
            </Button>
          </motion.div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        eventType={selectedEventType}
      />
    </Layout>
  );
}
