import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';
import heroImage from "@/assets/images/image_1.jpg";

const faqCategories = [
  {
    title: 'Booking & Reservations',
    questions: [
      {
        question: 'How do I book GreenTulip Gardens for my event?',
        answer: 'You can book by filling out our booking enquiry form, calling us directly, or sending us a WhatsApp message. We recommend booking at least 3-6 months in advance for weddings and large events.',
      },
      {
        question: 'Is a deposit required to secure my booking?',
        answer: 'Yes, a deposit is required to confirm your booking. The deposit amount varies depending on the type of event and package selected. Full details will be provided during the booking process.',
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'Cancellation terms depend on how far in advance notice is given. Please contact us for specific details. We recommend reviewing the cancellation policy when booking.',
      },
    ],
  },
  {
    title: 'Venue & Capacity',
    questions: [
      {
        question: 'What is the maximum capacity of the venue?',
        answer: 'Our venue can accommodate up to 500 guests for outdoor events. For indoor spaces and specific setups, capacity may vary. Contact us for details based on your event type.',
      },
      {
        question: 'Can I bring my own vendors (caterers, decorators, etc.)?',
        answer: 'Yes, you are welcome to bring your own vendors. We also have a list of preferred vendors we can recommend if needed.',
      },
      {
        question: 'Is there parking available at the venue?',
        answer: 'Yes, we have ample free parking for all guests. For larger events, we can arrange additional parking assistance.',
      },
    ],
  },
  {
    title: 'Services & Amenities',
    questions: [
      {
        question: 'Do you provide catering services?',
        answer: 'We can recommend trusted catering partners, or you may bring your own caterer. We have facilities to support on-site catering.',
      },
      {
        question: 'Are restroom facilities available?',
        answer: 'Yes, we have clean, well-maintained restroom facilities on-site. For large events, additional portable facilities can be arranged.',
      },
      {
        question: 'Is the venue wheelchair accessible?',
        answer: 'Yes, our main event areas are wheelchair accessible. Please let us know about any specific accessibility requirements when booking.',
      },
    ],
  },
  {
    title: 'Policies & Rules',
    questions: [
      {
        question: 'What are your operating hours?',
        answer: 'We are open Monday through Sunday, 7:00 AM to 10:00 PM. Events can be scheduled outside these hours by arrangement.',
      },
      {
        question: 'Are pets allowed at the venue?',
        answer: 'Pets are generally not allowed to ensure the comfort of all guests. Service animals are welcome with advance notice.',
      },
      {
        question: 'Is there a noise restriction policy?',
        answer: 'We ask that music and loud activities end by 10:00 PM out of respect for the surrounding community.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-sage/30">
      <button
        className="w-full py-5 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-forest pr-4">{question}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 text-gold shrink-0 transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        )}
      >
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQs() {
  return (
    <Layout>
      <SEOHead
        title="FAQs - Frequently Asked Questions"
        description="Find answers to common questions about booking, pricing, facilities, and services at GreenTulip Gardens venue in Meru, Kenya."
        keywords="GreenTulip Gardens FAQ, venue questions, booking information, pricing details, venue services, event planning"
        url="https://greentulip.co.ke/faqs"
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
              Help Center
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-cream/90 text-lg max-w-2xl mx-auto">
              Find answers to common questions about GreenTulip Gardens
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl text-forest mb-6">
                {category.title}
              </h2>
              <div className="bg-background rounded-2xl p-6 md:p-8">
                {category.questions.map((faq) => (
                  <FAQItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-forest text-cream">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4">
              Still Have Questions?
            </h2>
            <p className="text-cream/80 mb-8 max-w-xl mx-auto">
              Our team is here to help. Get in touch and we'll be happy to answer 
              any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/book">Contact Us</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
