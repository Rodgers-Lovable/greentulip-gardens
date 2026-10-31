import companyData from "@/data/company.json";
import { type Enquiry, detailRows, enquiryLabel, firstName, whatsappNumber } from "@/lib/enquiry";

// Plain-text versions of the emails. Written by hand because the automatic
// HTML-to-text conversion runs table cells together.

const { company } = companyData;

const lines = (rows: { label: string; value: string }[]) =>
  rows.map((row) => `${row.label}: ${row.value}`).join("\n");

const footer = [
  "--",
  company.name,
  company.address.full,
  `${company.contact.phone} | ${company.contact.email}`,
  company.contact.website,
].join("\n");

export function notificationText(enquiry: Enquiry) {
  const label = enquiryLabel(enquiry);
  const rows = detailRows(enquiry);
  return [
    `New ${label} from ${enquiry.fullName}`,
    "",
    lines([
      { label: "Name", value: enquiry.fullName },
      { label: "Phone", value: enquiry.phone },
      { label: "Email", value: enquiry.email || "Not given" },
    ]),
    `WhatsApp: https://wa.me/${whatsappNumber(enquiry.phone)}`,
    "",
    rows.length ? lines(rows) : "No event details given.",
    "",
    "Message:",
    enquiry.message || "No message.",
    "",
    enquiry.email
      ? `Replying to this email goes to ${enquiry.email}. They have also received an automatic confirmation.`
      : "No email address was given, so no confirmation was sent. Reach them by phone or WhatsApp.",
    "",
    footer,
  ].join("\n");
}

export function confirmationText(enquiry: Enquiry) {
  const label = enquiryLabel(enquiry);
  const rows = detailRows(enquiry);
  return [
    `Thank you, ${firstName(enquiry.fullName)}.`,
    "",
    `We have your ${label}. Our team will get back to you within 24 hours, usually by phone on ${enquiry.phone}.`,
    "",
    ...(rows.length ? ["Your request:", lines(rows), ""] : []),
    ...(enquiry.message ? ["Your message:", enquiry.message, ""] : []),
    "What happens next:",
    "1. We check availability for your date.",
    "2. We call or email you with options and pricing.",
    "3. Once you are happy with the plan, we confirm your booking.",
    "",
    `Want to talk sooner? Message us on WhatsApp (https://wa.me/${whatsappNumber(company.contact.phone)}) or call ${company.contact.phone}.`,
    "",
    "Need to change something? Reply to this email and it will reach our team.",
    "",
    "Warm regards,",
    `The ${company.name} team`,
    "",
    footer,
  ].join("\n");
}
