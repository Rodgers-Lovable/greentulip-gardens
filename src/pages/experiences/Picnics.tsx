import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TreePine, Check, ChevronDown } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { QuoteModal } from '@/components/QuoteModal';
import { cn } from '@/lib/utils';
import heroImage from '@/assets/hero-home.jpg';

const features = [
  'Scenic picnic spots',
  'Shaded seating areas',
  'Garden walking paths',
  'Children\'s play area',
  'Clean restroom facilities',
  'Parking included',
  'Bring your own food allowed',
  'Photography friendly',
];

const faqs = [
  {
    question: 'Can we bring our own food and drinks?',
    answer: 'Yes, you are welcome to bring your own food and drinks for your picnic. We also have options to arrange catering if you prefer.',
  },
  {
    question: 'Is there a minimum group size for picnics?',
    answer: 'No minimum! We welcome individuals, couples, families, and groups of all sizes for day visits and picnics.',
  },
  {
    question: 'Are there activities for children?',
    answer: 'Yes, we have designated play areas safe for children. The gardens also offer plenty of space for kids to explore and play.',
  },
  {
    question: 'What should we bring for a picnic?',
    answer: 'We recommend bringing a picnic blanket, food, drinks, sunscreen, and comfortable walking shoes. We provide seating areas and restrooms.',
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

export default function Picnics() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-forest-dark/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TreePine className="h-8 w-8 text-gold" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-6">
              Picnics & Day Outs
            </h1>
            <p className="text-cream/90 text-lg max-w-2xl mx-auto mb-8">
              Escape the everyday and reconnect with nature. Perfect for family 
              gatherings, birthday celebrations, or a peaceful day with friends.
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
                A Perfect Day in Nature
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Leave the hustle behind and spend quality time in our beautiful gardens. 
                Whether you're celebrating a special occasion or simply seeking peace, 
                our grounds offer the ideal setting for a memorable day out.
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
              <img src={heroImage} alt="Picnic at GreenTulip Gardens" className="rounded-2xl shadow-large" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-4">Picnic FAQs</h2>
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
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4">Plan Your Day Out</h2>
            <p className="text-cream/80 mb-8 max-w-xl mx-auto">
              Book your visit to GreenTulip Gardens today.
            </p>
            <Button variant="gold" size="xl" onClick={() => setIsQuoteModalOpen(true)}>
              Request a Quote
            </Button>
          </motion.div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} eventType="Picnic & Day Out" />
    </Layout>
  );
}
