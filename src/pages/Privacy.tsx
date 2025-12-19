import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import companyData from "@/data/company.json";

export default function Privacy() {
  const { company } = companyData;

  return (
    <Layout>
      <div className="pt-28 pb-16 bg-cream">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl text-forest mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">
                  Introduction
                </h2>
                <p className="text-muted-foreground mb-4">
                  GreenTulip Gardens ("we," "our," or "us") respects your
                  privacy and is committed to protecting your personal
                  information. This Privacy Policy explains how we collect, use,
                  and safeguard your information when you visit our website or
                  use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>
                    Personal information (name, email, phone number) provided
                    through our booking forms
                  </li>
                  <li>Event details and preferences you share with us</li>
                  <li>Communications and correspondence you send to us</li>
                  <li>
                    Website usage data collected through cookies and analytics
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Process and respond to your booking enquiries</li>
                  <li>Communicate with you about your event or reservation</li>
                  <li>Improve our services and website experience</li>
                  <li>
                    Send you promotional materials (only with your consent)
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your
                  personal information. However, no method of transmission over
                  the internet is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">
                  Your Rights
                </h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="font-heading text-2xl text-forest mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                  <br />
                  Email: info@greentulip.co.ke
                  <br />
                  Phone: {company.contact.phone}
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
