import { render } from "@react-email/components";
import { createElement } from "react";
import { Resend } from "resend";
import { EnquiryConfirmation } from "@/emails/EnquiryConfirmation";
import { EnquiryNotification } from "@/emails/EnquiryNotification";
import { confirmationText, notificationText } from "@/emails/plainText";
import { enquiryLabel, enquirySchema, formatDate } from "@/lib/enquiry";

// Server-only. RESEND_API_KEY never reaches the browser.

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

  // Honeypot filled in: a bot. Pretend it worked so it doesn't retry.
  if (enquiry.website) {
    return json({ ok: true });
  }

  const teamAddresses = to.split(",").map((address) => address.trim()).filter(Boolean);
  const label = enquiryLabel(enquiry);
  const resend = new Resend(apiKey);

  // 1. Team notification. This one must succeed.
  const subjectBits = [enquiry.eventType, formatDate(enquiry.preferredDate)].filter(Boolean).join(", ");
  const notification = await resend.emails.send({
    from,
    to: teamAddresses,
    subject: `New ${label} from ${enquiry.fullName}${subjectBits ? ` (${subjectBits})` : ""}`,
    html: await render(createElement(EnquiryNotification, { enquiry })),
    text: notificationText(enquiry),
    ...(enquiry.email ? { replyTo: enquiry.email } : {}),
  });

  if (notification.error) {
    console.error("send-enquiry: team notification failed", notification.error);
    return json({ message: "Failed to send email" }, 502);
  }

  // 2. Confirmation to the visitor. The team already has the enquiry, so a
  //    failure here is logged but not shown to the visitor as an error.
  if (enquiry.email) {
    const confirmation = await resend.emails.send({
      from,
      to: enquiry.email,
      subject: `We've received your ${label} | GreenTulip Gardens`,
      html: await render(createElement(EnquiryConfirmation, { enquiry })),
      text: confirmationText(enquiry),
      replyTo: teamAddresses,
    });

    if (confirmation.error) {
      console.error("send-enquiry: visitor confirmation failed", confirmation.error);
    }
  }

  return json({ ok: true });
}
