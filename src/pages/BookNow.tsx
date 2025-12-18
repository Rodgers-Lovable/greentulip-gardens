import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-home.jpg';

const eventTypes = [
  'Wedding & Ceremony',
  'Picnic & Day Out',
  'Accommodation',
  'Team Building & Retreat',
  'Photoshoot & Filming',
  'Other',
];

const budgetRanges = [
  'Below KSh 50,000',
  'KSh 50,000 - 100,000',
  'KSh 100,000 - 250,000',
  'KSh 250,000 - 500,000',
  'Above KSh 500,000',
  'Flexible / Not Sure',
];

export default function BookNow() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventType: '',
    preferredDate: '',
    alternativeDate: '',
    guests: '',
    budget: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Booking Enquiry Submitted!',
      description: 'Our team will contact you within 24 hours to discuss your event.',
    });

    setIsSubmitting(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      eventType: '',
      preferredDate: '',
      alternativeDate: '',
      guests: '',
      budget: '',
      message: '',
    });
  };

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
              Start Planning
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-6">
              Book Your Event
            </h1>
            <p className="text-cream/90 text-lg max-w-2xl mx-auto">
              Ready to create unforgettable memories? Complete the form below and our 
              team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-background rounded-2xl p-8 md:p-10 shadow-soft">
                <h2 className="font-heading text-2xl text-forest mb-2">
                  Booking Enquiry Form
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill in your details and we'll help plan your perfect event.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Details */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-forest font-medium">
                        Full Name <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        required
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-forest font-medium">
                        Phone Number <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+254 700 000 000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-forest font-medium">
                      Email Address <span className="text-gold">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  {/* Event Details */}
                  <div className="space-y-2">
                    <Label htmlFor="eventType" className="text-forest font-medium">
                      Event Type <span className="text-gold">*</span>
                    </Label>
                    <Select
                      value={formData.eventType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, eventType: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate" className="text-forest font-medium">
                        Preferred Date <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="alternativeDate" className="text-forest font-medium">
                        Alternative Date
                      </Label>
                      <Input
                        id="alternativeDate"
                        type="date"
                        value={formData.alternativeDate}
                        onChange={(e) =>
                          setFormData({ ...formData, alternativeDate: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-forest font-medium">
                        Estimated Guests <span className="text-gold">*</span>
                      </Label>
                      <Input
                        id="guests"
                        type="number"
                        required
                        placeholder="50"
                        min="1"
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({ ...formData, guests: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-forest font-medium">
                        Budget Range <span className="text-muted-foreground text-sm">(optional)</span>
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          setFormData({ ...formData, budget: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-forest font-medium">
                      Message / Special Requests
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your event, any special requirements, or questions you have..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Booking Enquiry'}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div className="bg-forest rounded-2xl p-8 text-cream">
                <h3 className="font-heading text-xl mb-6">Quick Contact</h3>
                <ul className="space-y-5">
                  <li>
                    <a
                      href="tel:+254700000000"
                      className="flex items-center gap-4 hover:text-gold transition-colors"
                    >
                      <div className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-cream/70 text-sm">Call Us</p>
                        <p className="font-medium">+254 700 000 000</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/254700000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 hover:text-gold transition-colors"
                    >
                      <div className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-cream/70 text-sm">WhatsApp</p>
                        <p className="font-medium">+254 700 000 000</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@greentulipgardens.co.ke"
                      className="flex items-center gap-4 hover:text-gold transition-colors"
                    >
                      <div className="w-10 h-10 bg-cream/10 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-cream/70 text-sm">Email</p>
                        <p className="font-medium text-sm">info@greentulipgardens.co.ke</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Operating Hours */}
              <div className="bg-secondary rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-5 w-5 text-gold" />
                  <h3 className="font-heading text-xl text-forest">Operating Hours</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Sunday</span>
                    <span className="text-forest font-medium">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Events</span>
                    <span className="text-forest font-medium">By Appointment</span>
                  </li>
                </ul>
              </div>

              {/* Location */}
              <div className="bg-secondary rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-5 w-5 text-gold" />
                  <h3 className="font-heading text-xl text-forest">Location</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  GreenTulip Gardens<br />
                  Nkubu, Meru County<br />
                  Kenya
                </p>
                <Button variant="forest-outline" size="sm" asChild>
                  <a href="/location">Get Directions</a>
                </Button>
              </div>

              {/* Response Time */}
              <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6 text-center">
                <p className="text-forest font-medium">
                  We typically respond to enquiries within <span className="text-gold font-semibold">24 hours</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
