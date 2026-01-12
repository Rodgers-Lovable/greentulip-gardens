import { motion } from 'framer-motion';
import { Leaf, Award, Heart, Users, MapPin, Trees, Sun, Mountain, Sparkles, Camera, PartyPopper, Home, UsersRound } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import SEOHead from '@/components/SEOHead';
import heroImage from '@/assets/images/image_1.jpg';
import hero1Image from '@/assets/images/image_6.jpg';
import groundsImage from '@/assets/images/grounds.jpeg';
import grounds1Image from '@/assets/images/grounds1.jpeg';
import grounds2Image from '@/assets/images/grounds2.jpeg';
import riverImage from '@/assets/images/river.jpg';

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

const groundsFeatures = [
  {
    icon: Trees,
    title: 'Manicured Gardens',
    description: 'Over 5 acres of carefully maintained gardens featuring indigenous trees, flowering shrubs, and lush green lawns perfect for any outdoor event.',
  },
  {
    icon: Sun,
    title: 'Open Meadows',
    description: 'Expansive open spaces bathed in natural sunlight, ideal for large gatherings, outdoor ceremonies, and picnic setups.',
  },
  {
    icon: Mountain,
    title: 'Scenic Views',
    description: 'Breathtaking views of Mount Kenya and the surrounding Meru highlands create a stunning natural backdrop for your special moments.',
  },
  {
    icon: MapPin,
    title: 'Riverside Location',
    description: 'A serene river runs through our property, adding a peaceful ambiance and unique photo opportunities for your events.',
  },
];

const experiences = [
  {
    icon: Heart,
    title: 'Weddings & Ceremonies',
    description: 'Say "I do" surrounded by nature\'s beauty. Our gardens provide the perfect romantic setting for your dream wedding.',
  },
  {
    icon: PartyPopper,
    title: 'Picnics & Day Outs',
    description: 'Escape the city and enjoy a refreshing day in nature with family and friends. Perfect for birthdays and celebrations.',
  },
  {
    icon: Home,
    title: 'Accommodation',
    description: 'Stay overnight in our comfortable rooms and wake up to birdsong and fresh mountain air.',
  },
  {
    icon: UsersRound,
    title: 'Team Building',
    description: 'Strengthen your team bonds with outdoor activities and retreats in an inspiring natural environment.',
  },
  {
    icon: Camera,
    title: 'Photoshoots',
    description: 'Capture stunning images with our diverse natural backdrops—from gardens to meadows to riverside settings.',
  },
  {
    icon: Sparkles,
    title: 'Private Events',
    description: 'Host exclusive gatherings, anniversaries, or intimate celebrations in a serene and private garden setting.',
  },
];

const testimonials = [
  {
    name: 'Janet Mwende',
    role: 'Bride',
    quote: 'GreenTulip Gardens made our wedding absolutely magical. The gardens were stunning, and the team was incredibly supportive throughout the planning process.',
    rating: 5,
  },
  {
    name: 'Peter Kariuki',
    role: 'Corporate Event Organizer',
    quote: 'Our company retreat at GreenTulip was a huge success. The serene environment helped our team bond and recharge. Highly recommend for team building!',
    rating: 5,
  },
  {
    name: 'Sarah Njoki',
    role: 'Birthday Celebrant',
    quote: 'The picnic setup was perfect! My family had the best time celebrating my birthday surrounded by beautiful nature. The staff went above and beyond.',
    rating: 5,
  },
  {
    name: 'David Mutua',
    role: 'Photographer',
    quote: 'As a professional photographer, I\'ve worked at many venues, but GreenTulip stands out. The variety of natural backdrops is incredible for any shoot.',
    rating: 5,
  },
  {
    name: 'Grace Wanjiru',
    role: 'Mother of the Bride',
    quote: 'From the first visit to the wedding day, the GreenTulip team was professional and caring. Our daughter\'s wedding was everything we dreamed of.',
    rating: 5,
  },
  {
    name: 'Michael Otieno',
    role: 'Groom',
    quote: 'The riverside ceremony location was breathtaking. Our guests are still talking about how beautiful the venue was. Thank you, GreenTulip!',
    rating: 5,
  },
  {
    name: 'Anne Muthoni',
    role: 'Event Planner',
    quote: 'I\'ve partnered with GreenTulip for multiple client events. Their attention to detail and flexibility makes my job so much easier. A true gem in Meru!',
    rating: 5,
  },
  {
    name: 'James Kimani',
    role: 'Anniversary Celebrant',
    quote: 'We celebrated our 25th anniversary at GreenTulip. The peaceful atmosphere and beautiful gardens made it an unforgettable experience for our family.',
    rating: 5,
  },
];

export default function About() {
  return (
    <Layout>
      <SEOHead
        title="About Us - Our Story & Values"
        description="Learn about GreenTulip Gardens' mission to provide exceptional garden venue experiences in Meru, Kenya. Discover our values of nature preservation, heartfelt service, and community focus."
        keywords="about GreenTulip Gardens, garden venue story, Meru Kenya venue, nature preservation, venue values, community focused venue"
        url="https://greentulip.co.ke/about"
      />
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
                src={hero1Image}
                alt="GreenTulip Gardens"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Grounds Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Explore Our Space
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest mb-4">
              Our Beautiful Grounds
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Set on over 5 acres of pristine land in Nkubu, Meru County, our grounds offer 
              diverse natural settings for every type of event and celebration.
            </p>
          </motion.div>

          {/* Grounds Image Gallery */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img src={groundsImage} alt="GreenTulip Gardens Grounds" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img src={grounds1Image} alt="Garden Pathways" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden aspect-[4/3]"
            >
              <img src={grounds2Image} alt="Natural Landscapes" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>
          </div>

          {/* Grounds Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {groundsFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-forest" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-forest mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlight Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="rounded-2xl overflow-hidden aspect-video">
                <img 
                  src={riverImage} 
                  alt="Riverside at GreenTulip Gardens" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
                Prime Location
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
                Perfectly Situated in Meru County
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Located in the heart of Nkubu, GreenTulip Gardens enjoys a privileged 
                  position that combines accessibility with natural serenity. Just a short 
                  drive from Meru town, our venue offers an escape from the bustle while 
                  remaining convenient for guests traveling from across Kenya.
                </p>
                <p>
                  The cool highland climate of Meru County provides comfortable temperatures 
                  year-round, making our gardens suitable for events in any season. The 
                  fertile soil and abundant rainfall ensure our landscapes remain lush and 
                  vibrant throughout the year.
                </p>
                <p>
                  With clear views of Mount Kenya on fine days and the gentle sounds of 
                  our riverside setting, GreenTulip Gardens offers a truly unique atmosphere 
                  that cannot be replicated anywhere else in the region.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-forest">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span className="text-sm font-medium">Nkubu, Meru County</span>
                </div>
                <div className="flex items-center gap-2 text-forest">
                  <Mountain className="h-5 w-5 text-gold" />
                  <span className="text-sm font-medium">Mt. Kenya Views</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experiences Overview Section */}
      <section className="section-padding bg-forest text-cream">
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
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream mb-4">
              Experiences at GreenTulip
            </h2>
            <p className="text-cream/80 max-w-2xl mx-auto">
              From intimate ceremonies to grand celebrations, our versatile grounds 
              accommodate a wide range of events and experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream/10 backdrop-blur-sm rounded-2xl p-6 border border-cream/20 hover:bg-cream/15 transition-colors"
              >
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                  <exp.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-cream mb-2">
                  {exp.title}
                </h3>
                <p className="text-cream/70 text-sm">
                  {exp.description}
                </p>
              </motion.div>
            ))}
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

      {/* Testimonials Section - Horizontal Scroll */}
      <section className="section-padding bg-cream overflow-hidden">
        <div className="container mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Guest Experiences
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-forest mb-4">
              What Our Guests Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from the couples, families, and organizations who have celebrated 
              their special moments at GreenTulip Gardens.
            </p>
          </motion.div>
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {/* Double the testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] bg-secondary rounded-2xl p-6 border border-forest/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Sparkles key={i} className="h-4 w-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-forest/10 pt-4">
                  <p className="font-heading font-semibold text-forest">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
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
