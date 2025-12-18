import { motion } from 'framer-motion';
import { Leaf, Award, Heart, Users } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import heroImage from '@/assets/hero-home.jpg';

const values = [
  {
    icon: Leaf,
    title: 'Nature First',
    description: 'We preserve and enhance our natural environment, ensuring our gardens remain a sanctuary for both guests and wildlife.',
  },
  {
    icon: Heart,
    title: 'Heartfelt Service',
    description: 'Every guest is treated like family. We go above and beyond to ensure your experience exceeds expectations.',
  },
  {
    icon: Award,
    title: 'Excellence Always',
    description: 'From our manicured lawns to our attentive service, we maintain the highest standards in everything we do.',
  },
  {
    icon: Users,
    title: 'Community Focused',
    description: 'We proudly support local suppliers and contribute to the growth of Meru County\'s hospitality sector.',
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
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
              Our Story
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-6">
              About GreenTulip Gardens
            </h1>
            <p className="text-cream/90 text-lg max-w-2xl mx-auto">
              A premier garden venue in Meru County, Kenya, where nature's beauty 
              enhances every celebration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
                Our Journey
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  GreenTulip Gardens was born from a simple dream: to create a space 
                  where the natural beauty of Meru County could serve as the perfect 
                  backdrop for life's most precious moments.
                </p>
                <p>
                  Nestled in the lush landscapes of Nkubu, our gardens have grown from 
                  a family-owned green space into one of the region's most sought-after 
                  event venues. We've had the privilege of hosting countless weddings, 
                  celebrations, and gatherings, each one leaving its own unique mark on 
                  our story.
                </p>
                <p>
                  Today, GreenTulip Gardens continues to evolve, but our commitment 
                  remains unchanged: to provide an exceptional natural setting where 
                  memories are made and dreams come true.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-forest/10 rounded-2xl aspect-[4/3] overflow-hidden"
            >
              <img
                src={heroImage}
                alt="GreenTulip Gardens"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              What We Stand For
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-forest" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-forest mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-forest text-cream">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              The GreenTulip Difference
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-gold text-5xl font-heading font-bold mb-4">5+</div>
              <h3 className="font-heading text-xl mb-2">Acres of Gardens</h3>
              <p className="text-cream/70 text-sm">Sprawling grounds with diverse landscapes for any event style</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-gold text-5xl font-heading font-bold mb-4">500+</div>
              <h3 className="font-heading text-xl mb-2">Events Hosted</h3>
              <p className="text-cream/70 text-sm">A track record of successful celebrations and happy guests</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-gold text-5xl font-heading font-bold mb-4">100%</div>
              <h3 className="font-heading text-xl mb-2">Dedication</h3>
              <p className="text-cream/70 text-sm">Complete commitment to making your event perfect</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
