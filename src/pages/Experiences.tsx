import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  TreePine,
  Building,
  Users,
  Camera,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/QuoteModal";
import heroImage from "@/assets/images/image_1.jpg";
import weddingImage from "@/assets/images/image_1.jpg";
import pickinImage from "@/assets/images/image_1.jpg";
import roomImage from "@/assets/images/room.jpeg";
import experiencesData from "@/data/experiences.json";

export default function Experiences() {
  const { experiences } = experiencesData;

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

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
              What We Offer
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-6">
              Our Experiences
            </h1>
            <p className="text-cream/90 text-lg max-w-2xl mx-auto">
              From dream weddings to peaceful retreats, discover the perfect
              experience for your next celebration at GreenTulip Gardens
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiences List */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center">
                      {/* {<experience.icon className="h-6 w-6 text-forest" />} */}
                    </div>
                    <span className="text-gold text-sm font-medium">
                      {experience.capacity}
                    </span>
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl text-forest mb-4">
                    {experience.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {experience.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {experience.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <Button variant="gold" asChild>
                      <Link to={experience.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="forest-outline"
                      onClick={() => setIsQuoteModalOpen(true)}
                    >
                      Request Quote
                    </Button>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-secondary rounded-2xl aspect-[4/3] overflow-hidden">
                    <img
                      src={heroImage}
                      alt={experience.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-forest text-cream">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-6">
              Ready to Plan Your Experience?
            </h2>
            <p className="text-cream/80 text-lg mb-8">
              Contact us today to discuss your requirements and receive a
              personalized quote for your event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/book">Book Now</Link>
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Request a Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </Layout>
  );
}
