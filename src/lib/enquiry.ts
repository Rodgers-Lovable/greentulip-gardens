import { format, isValid, parseISO } from "date-fns";
import { z } from "zod";

// Shared by the send-enquiry API route and the email templates.

const text = (max: number) => z.string().trim().max(max);
const optionalText = (max: number) => text(max).optional().default("");

const baseFields = {
  fullName: text(120).min(1, "Name is required"),
  phone: text(40).min(1, "Phone is required"),
  eventType: optionalText(80),
  preferredDate: optionalText(40),
  guests: optionalText(20),
  message: optionalText(5000),
  // Honeypot: hidden from people, filled in by bots.
  website: optionalText(200),
};

const quoteSchema = z.object({
  ...baseFields,
  type: z.literal("quote"),
  email: z
    .union([z.literal(""), z.string().trim().email().max(200)])
    .optional()
    .default(""),
});

const bookingSchema = z.object({
  ...baseFields,
  type: z.literal("booking"),
  email: z.string().trim().email().max(200),
  alternativeDate: optionalText(40),
  checkInDate: optionalText(40),
  checkOutDate: optionalText(40),
  budget: optionalText(80),
});

export const enquirySchema = z.discriminatedUnion("type", [
  quoteSchema,
  bookingSchema,
]);

export type Enquiry = z.infer<typeof enquirySchema>;

export const enquiryLabel = (enquiry: Enquiry) =>
  enquiry.type === "quote" ? "quote request" : "booking enquiry";

export const firstName = (fullName: string) => fullName.split(/\s+/)[0] ?? fullName;

// "2026-12-12" becomes "Sat, 12 Dec 2026". Anything unparseable is shown as typed.
export const formatDate = (value: string) => {
  if (!value) return "";
  const date = parseISO(value);
  return isValid(date) ? format(date, "EEE, d MMM yyyy") : value;
};

// Kenyan numbers typed as 07... become 2547... for wa.me links.
export const whatsappNumber = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("0") ? `254${digits.slice(1)}` : digits;
};

export type DetailRow = { label: string; value: string };

// Only the fields the visitor filled in, in reading order.
export const detailRows = (enquiry: Enquiry): DetailRow[] => {
  const rows: [string, string][] = [
    ["Event type", enquiry.eventType],
    ...(enquiry.type === "booking"
      ? ([
          ["Check-in", formatDate(enquiry.checkInDate)],
          ["Check-out", formatDate(enquiry.checkOutDate)],
        ] as [string, string][])
      : []),
    ["Preferred date", formatDate(enquiry.preferredDate)],
    ...(enquiry.type === "booking"
      ? ([["Alternative date", formatDate(enquiry.alternativeDate)]] as [string, string][])
      : []),
    ["Guests", enquiry.guests],
    ...(enquiry.type === "booking"
      ? ([["Budget", enquiry.budget]] as [string, string][])
      : []),
  ];
  return rows
    .filter(([, value]) => value)
    .map(([label, value]) => ({ label, value }));
};
