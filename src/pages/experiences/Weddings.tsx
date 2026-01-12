import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Check, ChevronDown } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { QuoteModal } from '@/components/QuoteModal';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';
import heroImage from '@/assets/hero-home.jpg';
import weddingImg1 from '@/assets/images/image_1.jpg';
import weddingImg2 from '@/assets/images/image_2.jpg';
import weddingImg3 from '@/assets/images/tulip.jpg';
import weddingImg4 from '@/assets/images/grounds.jpeg';
import weddingImg5 from '@/assets/images/grounds1.jpeg';
import weddingImg6 from '@/assets/images/lounge.jpeg';

const galleryImages = [
  { src: weddingImg1, alt: 'Garden ceremony setup at GreenTulip' },
  { src: weddingImg2, alt: 'Wedding reception area' },
  { src: weddingImg3, alt: 'Beautiful tulip gardens for photos' },
  { src: weddingImg4, alt: 'Manicured grounds for outdoor wedding' },
  { src: weddingImg5, alt: 'Scenic wedding venue setting' },
  { src: weddingImg6, alt: 'Indoor reception lounge area' },
];

const features = [
  'Multiple ceremony locations',
  'Indoor and outdoor reception areas',
  'Bridal suite with preparation area',
  'Groom\'s preparation room',
  'Ample guest parking',
  'On-site coordination support',
  'Customizable decor options',
  'Garden photo opportunities',
];

const faqs = [
  {
    question: 'How far in advance should I book for a wedding?',
    answer: 'We recommend booking at least 6-12 months in advance for weddings, especially for peak season dates (April-August and November-December). Popular dates fill up quickly.',
  },
  {
    question: 'Can I bring my own caterer and decorator?',
    answer: 'Yes, you are welcome to bring your own vendors. We also have a list of trusted partners we can recommend if you need suggestions.',
  },
  {
    question: 'What is the maximum capacity for a wedding?',
    answer: 'Our venue can accommodate weddings of up to 500 guests. For larger events, please contact us to discuss customized arrangements.',
  },
  {
    question: 'Do you have backup plans for rain?',
    answer: 'Yes, we have covered areas and tents available as backup for outdoor ceremonies. We work with you to ensure your day goes smoothly regardless of weather.',
  },
  {
    question: 'Can we visit the venue before booking?',
    answer: 'Absolutely! We encourage couples to schedule a site visit. This helps you visualize your big day and allows us to understand your vision better.',
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
        <ChevronDown className={cn('h-5 w-5 text-gold shrink-0 transition-transform', isOpen && 'rotate-180')} />
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-96 pb-4' : 'max-h-0')}>
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}

export default function Weddings() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <Layout>
      <SEOHead
        title="Wedding Venue - Dream Weddings at GreenTulip Gardens"
        description="Create your perfect wedding at GreenTulip Gardens in Meru, Kenya. Beautiful garden ceremony locations, reception areas, bridal suites, and professional coordination."
        keywords="wedding venue Meru, garden wedding Kenya, outdoor ceremony, wedding reception Nkubu, bridal suite, dream wedding venue"
        url="https://greentulip.co.ke/experiences/weddings"
      />
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-forest-dark/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-gold" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-6">
              Weddings & Ceremonies
            </h1>
            <p className="text-cream/90 text-lg max-w-2xl mx-auto mb-8">
              Say "I do" in a stunning garden setting. Create unforgettable memories 
              surrounded by natural beauty and the majestic landscapes of Meru County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => setIsQuoteModalOpen(true)}>
                Request a Quote
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/book">Book Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
                Your Dream Wedding Venue in Meru
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                From intimate garden ceremonies to grand celebrations, GreenTulip Gardens 
                provides the perfect canvas for your love story. Our experienced team will 
                work with you to bring your wedding vision to life.
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
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={heroImage} alt="Wedding at GreenTulip Gardens" className="rounded-2xl shadow-large" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-4">Wedding Venue Gallery</h2>
            <p className="text-muted-foreground">Explore our stunning ceremony and reception spaces</p>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-4">Wedding FAQs</h2>
            <p className="text-muted-foreground">Common questions about hosting your wedding at GreenTulip Gardens</p>
          </motion.div>
          <div className="bg-cream rounded-2xl p-6 md:p-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest text-cream">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4">
              Ready to Plan Your Wedding?
            </h2>
            <p className="text-cream/80 mb-8 max-w-xl mx-auto">
              Let's create the wedding of your dreams. Contact us today for a personalized consultation.
            </p>
            <Button variant="gold" size="xl" onClick={() => setIsQuoteModalOpen(true)}>
              Request a Quote
            </Button>
          </motion.div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} eventType="Wedding & Ceremony" />
    </Layout>
  );
}
