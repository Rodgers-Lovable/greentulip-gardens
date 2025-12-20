export const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templates: {
    quoteRequest: import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID,
    bookingEnquiry: import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID,
  },
};
