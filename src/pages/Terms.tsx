import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <Layout>
      <div className="pt-28 pb-16 bg-cream">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using the services of GreenTulip Gardens, you agree to be bound 
                  by these Terms and Conditions. If you do not agree to these terms, please do not 
                  use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">2. Booking and Reservations</h2>
                <p className="text-muted-foreground mb-4">
                  All bookings are subject to availability and confirmation. A booking is only 
                  confirmed once you receive written confirmation and have paid the required deposit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">3. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  A deposit is required to secure your booking. The deposit amount and payment 
                  schedule will be communicated during the booking process. Full payment is 
                  typically required before the event date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">4. Cancellation Policy</h2>
                <p className="text-muted-foreground mb-4">
                  Cancellation terms vary based on the notice period provided. Please contact us 
                  for specific cancellation policies applicable to your booking. Deposits may be 
                  non-refundable depending on circumstances.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">5. Venue Rules</h2>
                <p className="text-muted-foreground mb-4">
                  Guests must adhere to the following rules:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Respect the natural environment and gardens</li>
                  <li>Music and loud activities must end by 10:00 PM</li>
                  <li>No smoking in indoor areas</li>
                  <li>Guests are responsible for any damages caused</li>
                  <li>Follow all safety guidelines provided by staff</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">6. Liability</h2>
                <p className="text-muted-foreground mb-4">
                  GreenTulip Gardens is not liable for any loss, damage, or injury to persons or 
                  property, except where caused by our negligence. Guests are responsible for 
                  their personal belongings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">7. Force Majeure</h2>
                <p className="text-muted-foreground mb-4">
                  We are not liable for failure to perform our obligations due to circumstances 
                  beyond our reasonable control, including but not limited to natural disasters, 
                  government actions, or public health emergencies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">8. Changes to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify these Terms and Conditions at any time. 
                  Changes will be effective upon posting to our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">9. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms and Conditions, please contact us at:<br />
                  Email: info@greentulipgardens.co.ke<br />
                  Phone: +254 700 000 000
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
