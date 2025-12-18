import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-home.jpg';

const categories = [
  'All',
  'Weddings',
  'Picnics & Day Outs',
  'Accommodation',
  'Team Building',
  'Nature & Grounds',
];

// Using the hero image as placeholder for all gallery items
const galleryItems = [
  { id: 1, category: 'Weddings', title: 'Garden Wedding Ceremony' },
  { id: 2, category: 'Weddings', title: 'Reception Setup' },
  { id: 3, category: 'Picnics & Day Outs', title: 'Family Picnic' },
  { id: 4, category: 'Nature & Grounds', title: 'Garden Pathway' },
  { id: 5, category: 'Accommodation', title: 'Cottage Exterior' },
  { id: 6, category: 'Team Building', title: 'Corporate Retreat' },
  { id: 7, category: 'Weddings', title: 'Bridal Photoshoot' },
  { id: 8, category: 'Nature & Grounds', title: 'Sunset View' },
  { id: 9, category: 'Picnics & Day Outs', title: 'Birthday Celebration' },
  { id: 10, category: 'Accommodation', title: 'Room Interior' },
  { id: 11, category: 'Nature & Grounds', title: 'Flower Gardens' },
  { id: 12, category: 'Team Building', title: 'Outdoor Workshop' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
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
              Visual Journey
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-6">
              Our Gallery
            </h1>
            <p className="text-cream/90 text-lg max-w-2xl mx-auto">
              Explore the beauty of GreenTulip Gardens through our collection of 
              memorable moments and stunning landscapes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'gold' : 'secondary'}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden">
                    <img
                      src={heroImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-forest-dark/0 group-hover:bg-forest-dark/60 transition-colors duration-300 flex items-end">
                      <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-gold text-xs font-medium">{item.category}</p>
                        <p className="text-cream font-heading text-lg">{item.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-forest-dark/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6 text-cream" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={heroImage}
                alt={selectedImage.title}
                className="w-full rounded-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-gold font-medium">{selectedImage.category}</p>
                <p className="text-cream font-heading text-2xl">{selectedImage.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
