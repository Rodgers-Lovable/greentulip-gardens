import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/config/emailjs";

// Initialize EmailJS with your public key
export const initializeEmailJS = () => {
  if (
    emailjsConfig.publicKey &&
    emailjsConfig.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY"
  ) {
    emailjs.init(emailjsConfig.publicKey);
  }
};

// Interface for quote request data
export interface QuoteRequestData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  preferredDate: string;
  guests: string;
  message: string;
}

// Interface for booking enquiry data
export interface BookingEnquiryData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  preferredDate: string;
  alternativeDate: string;
  checkInDate?: string;
  checkOutDate?: string;
  guests: string;
  budget: string;
  message: string;
}

// Send quote request email
export const sendQuoteRequest = async (
  data: QuoteRequestData
): Promise<boolean> => {
  try {
    // Check if EmailJS is configured
    if (emailjsConfig.publicKey === "YOUR_EMAILJS_PUBLIC_KEY") {
      console.warn(
        "EmailJS not configured. Please update the configuration in src/config/emailjs.ts"
      );
      return false;
    }

    const templateParams = {
      to_name: "GreenTulip Gardens Team",
      from_name: data.fullName,
      from_email: data.email,
      phone: data.phone,
      event_type: data.eventType,
      preferred_date: data.preferredDate,
      guests: data.guests,
      message: data.message || "No special requests",
      reply_to: data.email,
    };

    const result = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templates.quoteRequest,
      templateParams
    );

    return result.status === 200;
  } catch (error) {
    console.error("Failed to send quote request:", error);
    return false;
  }
};

// Send booking enquiry email
export const sendBookingEnquiry = async (
  data: BookingEnquiryData
): Promise<boolean> => {
  try {
    // Check if EmailJS is configured
    if (emailjsConfig.publicKey === "YOUR_EMAILJS_PUBLIC_KEY") {
      console.warn(
        "EmailJS not configured. Please update the configuration in src/config/emailjs.ts"
      );
      return false;
    }

    const templateParams = {
      to_name: "GreenTulip Gardens Team",
      from_name: data.fullName,
      from_email: data.email,
      phone: data.phone,
      event_type: data.eventType,
      preferred_date: data.preferredDate,
      alternative_date: data.alternativeDate || "Not specified",
      check_in_date: data.checkInDate || "Not specified",
      check_out_date: data.checkOutDate || "Not specified",
      guests: data.guests,
      budget: data.budget || "Not specified",
      message: data.message || "No additional message",
      reply_to: data.email,
    };

    const result = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templates.bookingEnquiry,
      templateParams
    );

    return result.status === 200;
  } catch (error) {
    console.error("Failed to send booking enquiry:", error);
    return false;
  }
};
