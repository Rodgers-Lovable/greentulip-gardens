import { Resend } from "resend";
import { z } from "zod";

const text = (max: number) => z.string().trim().max(max);
const optionalText = (max: number) => text(max).optional().default("");

const quoteSchema = z.object({
  type: z.literal("quote"),
  fullName: text(120).min(1, "Name is required"),
  phone: text(40).min(1, "Phone is required"),
  email: z
    .union([z.literal(""), z.string().trim().email().max(200)])
    .optional()
    .default(""),
  eventType: optionalText(80),
  preferredDate: optionalText(40),
  guests: optionalText(20),
  message: optionalText(5000),
});

const bookingSchema = z.object({
  type: z.literal("booking"),
  fullName: text(120).min(1, "Name is required"),
  phone: text(40).min(1, "Phone is required"),
  email: z.string().trim().email().max(200),
  eventType: optionalText(80),
  preferredDate: optionalText(40),
  alternativeDate: optionalText(40),
  checkInDate: optionalText(40),
  checkOutDate: optionalText(40),
  guests: optionalText(20),
  budget: optionalText(80),
  message: optionalText(5000),
});

const enquirySchema = z.discriminatedUnion("type", [
  quoteSchema,
  bookingSchema,
]);

type Enquiry = z.infer<typeof enquirySchema>;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const orDefault = (value: string, fallback = "Not specified") =>
  value || fallback;

function buildEmail(enquiry: Enquiry) {
  const rows: [string, string][] =
    enquiry.type === "quote"
      ? [
          ["Name", enquiry.fullName],
          ["Phone", enquiry.phone],
          ["Email", orDefault(enquiry.email)],
          ["Event type", orDefault(enquiry.eventType)],
          ["Preferred date", orDefault(enquiry.preferredDate)],
          ["Guests", orDefault(enquiry.guests)],
        ]
      : [
          ["Name", enquiry.fullName],
          ["Phone", enquiry.phone],
          ["Email", enquiry.email],
          ["Event type", orDefault(enquiry.eventType)],
          ["Preferred date", orDefault(enquiry.preferredDate)],
          ["Alternative date", orDefault(enquiry.alternativeDate)],
          ["Check-in date", orDefault(enquiry.checkInDate)],
          ["Check-out date", orDefault(enquiry.checkOutDate)],
          ["Guests", orDefault(enquiry.guests)],
          ["Budget", orDefault(enquiry.budget)],
        ];

  const heading =
    enquiry.type === "quote" ? "New quote request" : "New booking enquiry";
  const subject = `${heading} from ${enquiry.fullName}`;
  const message = orDefault(enquiry.message, "No message");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#1f2d1f;max-width:600px">
      <h2 style="margin:0 0 16px">${escapeHtml(heading)}</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight:bold;vertical-align:top">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="margin:24px 0 8px">Message</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
    </div>`;

  const plain = [
    heading,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message,
  ].join("\n");

  return { subject, html, text: plain };
}

const json = (body: unknown, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error(
      "send-enquiry: RESEND_API_KEY, RESEND_FROM_EMAIL and ENQUIRY_TO_EMAIL must be set",
    );
    return json({ message: "Email service is not configured" }, 500);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ message: "Invalid JSON body" }, 400);
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    return json(
      {
        message: "Invalid form data",
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      },
      400,
    );
  }

  const enquiry = parsed.data;
  const { subject, html, text: plain } = buildEmail(enquiry);

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: to.split(",").map((address) => address.trim()),
    subject,
    html,
    text: plain,
    ...(enquiry.email ? { replyTo: enquiry.email } : {}),
  });

  if (error) {
    console.error("send-enquiry: Resend error", error);
    return json({ message: "Failed to send email" }, 502);
  }

  return json({ ok: true });
}
