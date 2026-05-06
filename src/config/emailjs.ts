export const emailjsConfig = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templates: {
    quoteRequest: process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID,
    bookingEnquiry: process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID,
  },
}
