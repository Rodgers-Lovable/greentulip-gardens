import { Button, Section, Text } from "@react-email/components";
import companyData from "@/data/company.json";
import { type Enquiry, detailRows, enquiryLabel, firstName, whatsappNumber } from "@/lib/enquiry";
import {
  DetailsTable,
  EmailLayout,
  MessageBox,
  SectionTitle,
  colors,
  fonts,
  paragraph,
} from "./EmailLayout";

// Automatic reply sent to the visitor who filled in the form.

const { company } = companyData;

const steps = [
  "We check availability for your date.",
  "We call or email you with options and pricing.",
  "Once you are happy with the plan, we confirm your booking.",
];

export function EnquiryConfirmation({ enquiry }: { enquiry: Enquiry }) {
  const label = enquiryLabel(enquiry);
  const rows = detailRows(enquiry);

  return (
    <EmailLayout
      preview={`We have your ${label} and will be in touch within 24 hours.`}
      eyebrow="Request received"
      heading={`Thank you, ${firstName(enquiry.fullName)}`}
      subheading={`We have your ${label}.`}
    >
      <Text style={paragraph}>
        Thanks for getting in touch with {company.name}. Our team will get back to you within 24 hours, usually
        by phone on {enquiry.phone}.
      </Text>
      <Text style={paragraph}>Here is a copy of what you sent, for your records.</Text>

      {rows.length ? (
        <>
          <SectionTitle>Your request</SectionTitle>
          <DetailsTable rows={rows} />
        </>
      ) : null}

      {enquiry.message ? (
        <>
          <SectionTitle>Your message</SectionTitle>
          <MessageBox>{enquiry.message}</MessageBox>
        </>
      ) : null}

      <SectionTitle>What happens next</SectionTitle>
      <table role="presentation" cellPadding={0} cellSpacing={0} style={{ borderCollapse: "collapse" }}>
        <tbody>
          {steps.map((step, index) => (
            <tr key={step}>
              <td style={{ padding: "0 12px 10px 0", verticalAlign: "top" }}>
                <div
                  style={{
                    width: 24,
                    height: 24,
                    lineHeight: "24px",
                    borderRadius: 12,
                    backgroundColor: colors.gold,
                    color: colors.forestDark,
                    fontSize: 13,
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {index + 1}
                </div>
              </td>
              <td style={{ padding: "2px 0 10px", color: colors.text, fontSize: 15, lineHeight: "22px" }}>{step}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Section style={{ backgroundColor: colors.sageLight, borderRadius: 8, padding: "20px", margin: "20px 0 8px", textAlign: "center" }}>
        <Text style={{ margin: "0 0 4px", color: colors.forest, fontFamily: fonts.heading, fontSize: 18 }}>
          Want to talk sooner?
        </Text>
        <Text style={{ margin: "0 0 14px", color: colors.muted, fontSize: 14, lineHeight: "21px" }}>
          Message us on WhatsApp or call {company.contact.phone}.
        </Text>
        <Button
          href={`https://wa.me/${whatsappNumber(company.contact.phone)}`}
          style={{
            backgroundColor: colors.gold,
            color: colors.forestDark,
            borderRadius: 6,
            padding: "12px 22px",
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Chat on WhatsApp
        </Button>
      </Section>

      <Text style={{ ...paragraph, margin: "20px 0 4px" }}>
        Need to change something? Reply to this email and it will reach our team.
      </Text>
      <Text style={{ ...paragraph, margin: "16px 0 20px" }}>
        Warm regards,
        <br />
        The {company.name} team
      </Text>
    </EmailLayout>
  );
}

export default EnquiryConfirmation;
