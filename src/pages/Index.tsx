import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Camera, Building, TreePine } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { QuoteModal } from '@/components/QuoteModal';
import heroImage from '@/assets/hero-home.jpg';

const experiences = [
  {
    icon: Heart,
    title: 'Weddings & Ceremonies',
    description: 'Create unforgettable moments in our stunning garden setting, perfect for your dream wedding.',
    href: '/experiences/weddings',
  },
  {
    icon: TreePine,
    title: 'Picnics & Day Outs',
    description: 'Escape the city and enjoy a peaceful day surrounded by lush greenery and natural beauty.',
    href: '/experiences/picnics',
  },
  {
    icon: Building,
    title: 'Accommodation',
    description: 'Stay overnight in our comfortable cottages and wake up to birdsong and mountain views.',
    href: '/experiences/accommodation',
  },
  {
    icon: Users,
    title: 'Team Building & Retreats',
    description: 'Bond with your team in an inspiring environment that fosters creativity and connection.',
    href: '/experiences/team-building',
  },
  {
    icon: Camera,
    title: 'Photoshoots & Filming',
    description: 'Capture stunning visuals with our diverse natural backdrops and golden hour lighting.',
    href: '/experiences/photoshoots',
  },
];

const testimonials = [
  {
    quote: "GreenTulip Gardens made our wedding day absolutely magical. The setting was breathtaking and the team was incredibly professional.",
    author: "Sarah & James",
    event: "Wedding Ceremony"
  },
  {
    quote: "Our corporate retreat was a huge success. The peaceful environment helped our team reconnect and recharge.",
    author: "Michael K.",
    event: "Team Building Event"
  },
  {
    quote: "The perfect backdrop for our photoshoot. The gardens are stunning and the staff went above and beyond.",
    author: "Diana M.",
    event: "Professional Photoshoot"
  }
];

export default function Index() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/50 via-forest-dark/60 to-forest-dark/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Premier Garden Venue in Meru, Kenya
            </p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-cream mb-6 leading-tight">
              Where Beautiful Moments
              <span className="block italic text-gold-light">Meet Nature</span>
            </h1>
            <p className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Nestled in the heart of Nkubu, Meru County, GreenTulip Gardens offers 
              a breathtaking natural setting for weddings, events, and memorable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/book">Book Your Event</Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/experiences">
                  Explore Experiences
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-gold rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest mb-6">
              Welcome to GreenTulip Gardens
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Set against the majestic backdrop of Mount Kenya, our gardens offer a 
              serene escape where nature's beauty enhances every celebration. Whether 
              you're planning an intimate gathering or a grand celebration, our team 
              is dedicated to making your vision a reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              What We Offer
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest">
              Unforgettable Experiences
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={experience.href}
                  className="group block bg-cream rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <experience.icon className="h-7 w-7 text-forest group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-forest mb-3">
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {experience.description}
                  </p>
                  <span className="inline-flex items-center text-gold font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-forest-dark/85" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream mb-6">
              Ready to Create Your Perfect Event?
            </h2>
            <p className="text-cream/80 text-lg mb-8">
              Let us help you plan an unforgettable experience. Get in touch today 
              for a personalized quote tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="xl"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Request a Quote
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/book">Book Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Testimonials
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest">
              What Our Guests Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary rounded-2xl p-8"
              >
                <div className="text-gold text-4xl font-heading mb-4">"</div>
                <p className="text-foreground mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold text-forest">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="section-padding bg-forest text-cream">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
                Find Us
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">
                Located in the Heart of Meru County
              </h2>
              <p className="text-cream/80 text-lg mb-6">
                GreenTulip Gardens is conveniently located in Nkubu, Meru County, 
                with easy access from major towns. Just a scenic drive from Meru Town, 
                our venue offers ample parking and is well-connected to main roads.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/location">Get Directions</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-forest-light/30 rounded-2xl aspect-video flex items-center justify-center"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.25647785982!2d37.5969!3d-0.0756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18287c9c95c42c65%3A0x8fd4b7e65bbae96c!2sNkubu!5e0!3m2!1sen!2ske!4v1702500000000!5m2!1sen!2ske"
                className="w-full h-full rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GreenTulip Gardens Location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </Layout>
  );
}
