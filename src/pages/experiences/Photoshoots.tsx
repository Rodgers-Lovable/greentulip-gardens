import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Check, ChevronDown } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { QuoteModal } from '@/components/QuoteModal';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';
import heroImage from '@/assets/hero-home.jpg';

const features = [
  'Diverse natural backdrops',
  'Golden hour lighting',
  'Changing rooms available',
  'Multiple scenic locations',
  'Vehicle access for equipment',
  'Power supply on-site',
  'Flexible scheduling',
  'All production sizes welcome',
];

const faqs = [
  {
    question: 'What types of photoshoots can be done here?',
    answer: 'Our venue is perfect for portraits, engagement shoots, pre-wedding photography, fashion shoots, product photography, music videos, and film productions.',
  },
  {
    question: 'Can I bring a large production crew?',
    answer: 'Yes, we can accommodate productions of all sizes. For larger crews, please contact us to discuss logistics, parking, and power requirements.',
  },
  {
    question: 'Are there changing facilities available?',
    answer: 'Yes, we have changing rooms and prep areas available for models and talent. Please let us know your needs when booking.',
  },
  {
    question: 'What are the best times for photography here?',
    answer: 'The golden hours (early morning and late afternoon) offer beautiful lighting. We can help you plan your shoot for optimal natural light.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-sage/30">
      <button className="w-full py-4 flex items-center justify-between text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="font-medium text-forest pr-4">{question}</span>
        <ChevronDown className={cn('h-5 w-5 text-gold shrink-0 transition-transform', isOpen && 'rotate-180')} />
      </button>
      <div className={cn('overflow-hidden transition-all duration-300', isOpen ? 'max-h-96 pb-4' : 'max-h-0')}>
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}

export default function Photoshoots() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <Layout>
      <SEOHead
        title="Photography Sessions - Beautiful Backdrops at GreenTulip Gardens"
        description="Capture stunning photos at GreenTulip Gardens with beautiful natural backdrops, perfect for weddings, portraits, and professional photography in Meru."
        keywords="photography venue Meru, photo sessions Kenya, wedding photography, portrait photography, natural backdrops Nkubu"
        url="https://greentulip.co.ke/experiences/photoshoots"
      />
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-forest-dark/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="h-8 w-8 text-gold" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-6">
              Photoshoots & Filming
            </h1>
            <p className="text-cream/90 text-lg max-w-2xl mx-auto mb-8">
              Capture stunning visuals in our diverse natural settings. From intimate 
              portraits to full-scale productions, our gardens provide endless creative possibilities.
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

      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
                Your Creative Canvas
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our sprawling gardens offer a variety of natural backdrops - from 
                lush green lawns to flowering gardens and rustic pathways. Whatever 
                your creative vision, we provide the perfect setting.
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
              <img src={heroImage} alt="Photoshoot at GreenTulip Gardens" className="rounded-2xl shadow-large" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-4">Production FAQs</h2>
          </motion.div>
          <div className="bg-cream rounded-2xl p-6 md:p-8">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-forest text-cream">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4">Book Your Shoot</h2>
            <p className="text-cream/80 mb-8 max-w-xl mx-auto">
              Let's create something beautiful together.
            </p>
            <Button variant="gold" size="xl" onClick={() => setIsQuoteModalOpen(true)}>
              Request a Quote
            </Button>
          </motion.div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} eventType="Photoshoot & Filming" />
    </Layout>
  );
}
