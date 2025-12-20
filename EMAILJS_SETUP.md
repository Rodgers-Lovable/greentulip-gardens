# EmailJS Setup Guide for GreenTulip Gardens

This guide will help you configure EmailJS to handle form submissions from your website.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down the **Service ID** (you'll need this later)

## Step 3: Create Email Templates

You need to create two email templates:

### Template 1: Quote Request Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Quote Request from {{from_name}}

**Body:**
```
Hello {{to_name}},

You have received a new quote request from your website:

Client Details:
- Name: {{from_name}}
- Phone: {{phone}}
- Email: {{from_email}}

Event Details:
- Event Type: {{event_type}}
- Preferred Date: {{preferred_date}}
- Number of Guests: {{guests}}

Message:
{{message}}

Best regards,
GreenTulip Gardens Website
```

4. Save the template and note down the **Template ID**

### Template 2: Booking Enquiry Template

1. Create another template with this content:

**Subject:** New Booking Enquiry from {{from_name}}

**Body:**
```
Hello {{to_name}},

You have received a new booking enquiry from your website:

Client Details:
- Name: {{from_name}}
- Phone: {{phone}}
- Email: {{from_email}}

Event Details:
- Event Type: {{event_type}}
- Preferred Date: {{preferred_date}}
- Alternative Date: {{alternative_date}}
- Number of Guests: {{guests}}
- Budget Range: {{budget}}

Message:
{{message}}

Best regards,
GreenTulip Gardens Website
```

4. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys" in your EmailJS dashboard
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const emailjsConfig = {
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY_HERE',
  serviceId: 'YOUR_ACTUAL_SERVICE_ID_HERE',
  templates: {
    quoteRequest: 'YOUR_QUOTE_TEMPLATE_ID_HERE',
    bookingEnquiry: 'YOUR_BOOKING_TEMPLATE_ID_HERE',
  }
};
```

## Step 6: Test the Integration

1. Run your development server: `npm run dev`
2. Navigate to the "Book Now" page or try the quote modal
3. Fill out the form and submit
4. Check your email to confirm the form submission worked

## Optional: Use Environment Variables (Recommended for Production)

For better security, you can use environment variables:

1. Create a `.env` file in your project root:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_QUOTE_TEMPLATE_ID=your_quote_template_id_here
VITE_EMAILJS_BOOKING_TEMPLATE_ID=your_booking_template_id_here
```

2. Update `src/config/emailjs.ts`:
```typescript
export const emailjsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templates: {
    quoteRequest: import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID,
    bookingEnquiry: import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID,
  }
};
```

## Troubleshooting

- **Forms not sending emails**: Check browser console for error messages
- **EmailJS quota exceeded**: EmailJS free tier has monthly limits, consider upgrading
- **Emails going to spam**: Configure your email service properly and consider using a custom domain

## Features Included

✅ Quote request form integration
✅ Booking enquiry form integration
✅ Error handling with user feedback
✅ Form validation
✅ Success/error toast notifications
✅ Automatic form reset after successful submission

The integration is now complete and ready to use once you configure your EmailJS account!