import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building, Check, ChevronDown } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { QuoteModal } from '@/components/QuoteModal';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';
import heroImage from '@/assets/hero-home.jpg';
import accomImg1 from '@/assets/images/accomodation.jpeg';
import accomImg2 from '@/assets/images/accomodation1.jpeg';
import accomImg3 from '@/assets/images/accomodation2.jpeg';
import accomImg4 from '@/assets/images/accomodation3.jpeg';
import accomImg5 from '@/assets/images/room.jpeg';
import accomImg6 from '@/assets/images/room1.jpeg';

const galleryImages = [
  { src: accomImg1, alt: 'Comfortable cottage exterior' },
  { src: accomImg2, alt: 'Cozy bedroom with garden views' },
  { src: accomImg3, alt: 'Spacious accommodation interior' },
  { src: accomImg4, alt: 'Relaxing guest quarters' },
  { src: accomImg5, alt: 'Well-appointed guest room' },
  { src: accomImg6, alt: 'Peaceful sleeping quarters' },
];

const features = [
  "Comfortable cottages",
  "En-suite bathrooms",
  "Garden and mountain views",
  "Breakfast included",
  "Free Wi-Fi",
  "24-hour security",
  "Room service available",
  "Wake up to birdsong",
];

const faqs = [
  {
    question: "What types of accommodation do you offer?",
    answer:
      "We offer cozy cottages with various room configurations to suit couples, families, and groups. Each unit has private facilities and garden views.",
  },
  // {
  //   question: 'Is breakfast included?',
  //   answer: 'Yes, a complimentary breakfast is included with all accommodation bookings. Additional meals can be arranged upon request.',
  // },
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Standard check-in is from 2:00 PM and check-out is at or before 10:00 AM. Early check-in or late check-out may be available upon request.",
  },
  {
    question: "Can I book accommodation for my wedding guests?",
    answer:
      "Absolutely! We offer special rates for wedding parties. Contact us to discuss group bookings and packages.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-sage/30">
      <button
        className="w-full py-4 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-forest pr-4">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gold shrink-0 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}

export default function Accommodation() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <Layout>
      <SEOHead
        title="Accommodation - Comfortable Stays at GreenTulip Gardens"
        description="Stay overnight at GreenTulip Gardens with comfortable accommodation options in Nkubu, Meru. Perfect for wedding parties, events, and peaceful retreats."
        keywords="accommodation Meru, overnight stay Nkubu, wedding accommodation, retreat accommodation, garden lodge Kenya"
        url="https://greentulip.co.ke/experiences/accommodation"
      />
      <section className="relative min-h-[70vh] flex items-center justify-center">
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
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="h-8 w-8 text-gold" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-6">
              Accommodation
            </h1>
            <p className="text-cream/90 text-lg max-w-2xl mx-auto mb-8">
              Extend your stay and wake up surrounded by nature. Our charming
              cottages offer comfort and tranquility in the heart of Meru.
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

      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
                Stay in Nature's Embrace
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our cottages offer a peaceful retreat where you can unwind after
                your event or simply enjoy a getaway. Each accommodation is
                designed to blend comfort with the natural beauty of our
                surroundings.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={heroImage}
                alt="Accommodation at GreenTulip Gardens"
                className="rounded-2xl shadow-large"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-4">Accommodation Gallery</h2>
            <p className="text-muted-foreground">View our comfortable cottages and guest rooms</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'overflow-hidden rounded-xl',
                  index === 0 && 'md:col-span-2 md:row-span-2'
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={cn(
                    'w-full object-cover hover:scale-105 transition-transform duration-500',
                    index === 0 ? 'h-64 md:h-full' : 'h-48 md:h-64'
                  )}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-4">
              Accommodation FAQs
            </h2>
          </motion.div>
          <div className="bg-cream rounded-2xl p-6 md:p-8">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-forest text-cream">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4">
              Book Your Stay
            </h2>
            <p className="text-cream/80 mb-8 max-w-xl mx-auto">
              Experience the serenity of GreenTulip Gardens.
            </p>
            <Button
              variant="gold"
              size="xl"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Request a Quote
            </Button>
          </motion.div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        eventType="Accommodation"
      />
    </Layout>
  );
}
