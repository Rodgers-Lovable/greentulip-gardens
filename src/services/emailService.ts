// Form submissions go to /api/send-enquiry, which sends the email through
// Resend on the server. No email credentials live in the browser.

export interface QuoteRequestData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  preferredDate: string;
  guests: string;
  message: string;
}

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

type EnquiryPayload =
  | ({ type: "quote" } & QuoteRequestData)
  | ({ type: "booking" } & BookingEnquiryData);

const sendEnquiry = async (payload: EnquiryPayload): Promise<boolean> => {
  try {
    const response = await fetch("/api/send-enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null);
      console.error(`Failed to send ${payload.type} enquiry:`, error ?? response.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`Failed to send ${payload.type} enquiry:`, error);
    return false;
  }
};

export const sendQuoteRequest = (data: QuoteRequestData) =>
  sendEnquiry({ type: "quote", ...data });

export const sendBookingEnquiry = (data: BookingEnquiryData) =>
  sendEnquiry({ type: "booking", ...data });
