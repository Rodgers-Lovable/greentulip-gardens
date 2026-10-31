import { Button, Section, Text } from "@react-email/components";
import {
  type Enquiry,
  detailRows,
  enquiryLabel,
  formatDate,
  whatsappNumber,
} from "@/lib/enquiry";
import {
  DetailsTable,
  EmailLayout,
  MessageBox,
  SectionTitle,
  colors,
  paragraph,
} from "./EmailLayout";

// Sent to the GreenTulip team for every form submission.

const button = (background: string, color: string) => ({
  backgroundColor: background,
  color,
  borderRadius: 6,
  padding: "11px 18px",
  fontSize: 14,
  fontWeight: 600,
  textDecoration: "none",
  display: "inline-block",
  margin: "0 6px 8px 0",
});

export function EnquiryNotification({ enquiry }: { enquiry: Enquiry }) {
  const label = enquiryLabel(enquiry);
  const summary = [enquiry.eventType, formatDate(enquiry.preferredDate || (enquiry.type === "booking" ? enquiry.checkInDate : ""))]
    .filter(Boolean)
    .join(" · ");

  const contactRows = [
    { label: "Name", value: enquiry.fullName },
    { label: "Phone", value: enquiry.phone },
    { label: "Email", value: enquiry.email || "Not given" },
  ];

  return (
    <EmailLayout
      preview={`${enquiry.fullName} sent a ${label}${summary ? `: ${summary}` : ""}`}
      eyebrow={`New ${label}`}
      heading={enquiry.fullName}
      subheading={summary || undefined}
    >
      <Text style={paragraph}>
        A new {label} came in through the website. The site tells visitors to expect a reply within 24 hours.
      </Text>

      <Section style={{ margin: "8px 0 4px" }}>
        <Button href={`tel:${enquiry.phone.replace(/\s/g, "")}`} style={button(colors.forest, colors.cream)}>
          Call {enquiry.phone}
        </Button>
        <Button href={`https://wa.me/${whatsappNumber(enquiry.phone)}`} style={button(colors.gold, colors.forestDark)}>
          WhatsApp
        </Button>
        {enquiry.email ? (
          <Button
            href={`mailto:${enquiry.email}`}
            style={{ ...button("#FFFFFF", colors.forest), border: `1px solid ${colors.sage}`, padding: "10px 17px" }}
          >
            Email
          </Button>
        ) : null}
      </Section>

      <SectionTitle>Contact</SectionTitle>
      <DetailsTable rows={contactRows} />

      <SectionTitle>Event</SectionTitle>
      <DetailsTable rows={detailRows(enquiry).length ? detailRows(enquiry) : [{ label: "Details", value: "None given" }]} />

      <SectionTitle>Message</SectionTitle>
      <MessageBox>{enquiry.message || "No message."}</MessageBox>

      <Text style={{ ...paragraph, margin: "24px 0 16px", color: colors.muted, fontSize: 13 }}>
        {enquiry.email
          ? `Hitting reply sends your answer straight to ${enquiry.email}. They have also received an automatic confirmation.`
          : "No email address was given, so no confirmation was sent. Reach them by phone or WhatsApp."}
      </Text>
    </EmailLayout>
  );
}

export default EnquiryNotification;
