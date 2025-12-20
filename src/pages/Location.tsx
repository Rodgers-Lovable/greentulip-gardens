import { motion } from "framer-motion";
import { MapPin, Car, Clock, Phone } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import heroImage from "@/assets/images/image_1.jpg";
import companyData from "@/data/company.json";

const directions = [
  {
    from: "Meru Town",
    distance: "15 km",
    time: "20 minutes",
    description:
      "Head south on the Meru-Nanyuki Highway. Take the Nkubu turn-off and follow signs to GreenTulip Gardens.",
  },
  {
    from: "Nairobi",
    distance: "230 km",
    time: "4 hours",
    description:
      "Take the A2 Highway through Thika and Embu. Continue to Meru Town, then proceed to Nkubu.",
  },
  {
    from: "Nanyuki",
    distance: "50 km",
    time: "1 hour",
    description:
      "Drive east on the Nanyuki-Meru Road through the scenic Mount Kenya region to Nkubu.",
  },
];

export default function Location() {
  const { company } = companyData;

  return (
    <Layout>
      <SEOHead
        title="Location & Directions - Find Us in Nkubu, Meru"
        description="Find GreenTulip Gardens in Nkubu, Meru County, Kenya. Get directions, contact information, and plan your visit to our beautiful garden venue."
        keywords="GreenTulip Gardens location, Nkubu venue, Meru County directions, garden venue address, how to find venue"
        url="https://greentulip.co.ke/location"
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
              Find Us
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream mb-6">
              Location & Directions
            </h1>
            <p className="text-cream/90 text-lg max-w-2xl mx-auto">
              Conveniently located in Nkubu, Meru County, our gardens are easily
              accessible from major towns in the region
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl text-forest mb-6">
                Our Address
              </h2>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-forest" />
                </div>
                <div>
                  <p className="text-lg text-forest font-medium">
                    {company.name}
                  </p>
                  <p className="text-muted-foreground">Nkubu, Meru County</p>
                  <p className="text-muted-foreground">
                    {company.address.country}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center">
                    <Car className="h-6 w-6 text-forest" />
                  </div>
                  <div>
                    <p className="text-forest font-medium">Ample Parking</p>
                    <p className="text-muted-foreground text-sm">
                      Free parking for all guests
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-forest" />
                  </div>
                  <div>
                    <p className="text-forest font-medium">Operating Hours</p>
                    <p className="text-muted-foreground text-sm">
                      Weekdays: 7:00 AM - 10:00 PM
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Weekend: 7:00 AM - 10:00 PM
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Holidays: 7:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-forest" />
                  </div>

                  <div>
                    <p className="text-forest font-medium">
                      Need Help Finding Us?
                    </p>
                    <div className="flex">
                      <a
                        href={`tel:${company.contact.phone}`}
                        className="text-gold text-sm hover:underline"
                      >
                        Call {company.contact.phone}
                      </a>
                      <p>{", "}</p>
                      <a
                        href={`tel:${company.contact.phone}`}
                        className="text-gold text-sm hover:underline"
                      >
                        Call {company.contact.phone1}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Button variant="gold" asChild>
                  <a
                    href={company.address.location}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-large"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.816866666446!2d37.63956147547471!3d-0.04890969995060542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18278ba0abdd1051%3A0x3b481d7a43899438!2sThe%20GreenTulip%20Gardens!5e0!3m2!1sen!2ske!4v1766129578159!5m2!1sen!2ske"
                className="w-full h-full rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GreenTulip Gardens Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-4">
              How to Get Here
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Directions from major towns in the region
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {directions.map((route, index) => (
              <motion.div
                key={route.from}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream rounded-2xl p-8"
              >
                <h3 className="font-heading text-xl text-forest mb-4">
                  From {route.from}
                </h3>
                <div className="flex gap-6 mb-4">
                  <div>
                    <p className="text-muted-foreground text-sm">Distance</p>
                    <p className="text-gold font-semibold">{route.distance}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Drive Time</p>
                    <p className="text-gold font-semibold">{route.time}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {route.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-forest text-cream">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-cream mb-8">
              Visitor Amenities
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                "Free Parking",
                "Wheelchair Accessible",
                "Restroom Facilities",
                "Security On-Site",
              ].map((amenity) => (
                <div
                  key={amenity}
                  className="bg-cream/10 rounded-xl p-4 text-center"
                >
                  <p className="font-medium">{amenity}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
