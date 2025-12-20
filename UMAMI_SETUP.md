# Umami Analytics Setup Guide for GreenTulip Gardens

This guide will help you set up Umami analytics for your website to track customer behavior and improve conversions.

## Prerequisites

1. A server or cloud hosting account (VPS, DigitalOcean, AWS, etc.)
2. Docker and Docker Compose installed
3. A domain or subdomain for your Umami instance

## 1. Deploy Umami Instance

### Option A: Using Docker Compose (Recommended)

Create a new directory for your Umami installation:

```bash
mkdir umami-analytics
cd umami-analytics
```

Create a `docker-compose.yml` file:

```yaml
version: '3'
services:
  umami:
    image: ghcr.io/umami-software/umami:postgresql-latest
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://umami:umami@db:5432/umami
      DATABASE_TYPE: postgresql
      APP_SECRET: your-random-secret-key-here
    depends_on:
      db:
        condition: service_healthy
    restart: always
    healthcheck:
      test: ["CMD-SHELL", "curl http://localhost:3000/api/heartbeat"]
      interval: 5s
      timeout: 5s
      retries: 5
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: umami
      POSTGRES_USER: umami
      POSTGRES_PASSWORD: umami
    volumes:
      - umami-db-data:/var/lib/postgresql/data
    restart: always
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U $${POSTGRES_USER} -d $${POSTGRES_DB}"]
      interval: 5s
      timeout: 5s
      retries: 5

volumes:
  umami-db-data:
```

Deploy Umami:

```bash
docker-compose up -d
```

### Option B: Using Umami Cloud

Visit [umami.is](https://umami.is) and sign up for their hosted solution if you prefer not to self-host.

## 2. Initial Setup

1. Access your Umami instance at `http://your-server:3000`
2. Log in with default credentials: `admin / umami`
3. Change the default password immediately
4. Add your website:
   - Name: "GreenTulip Gardens"
   - Domain: "greentulip.co.ke"
   - Enable "Track users across devices"

## 3. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Update your `.env.local` file with your Umami details:

```env
# Umami Analytics Configuration
VITE_UMAMI_SCRIPT_SRC=https://your-umami-domain.com/script.js
VITE_UMAMI_WEBSITE_ID=your-website-id-from-umami-dashboard
```

## 4. Key Metrics Being Tracked

### Conversion Events
- **Quote Requests**: Modal opens, form submissions, success/failure
- **Booking Enquiries**: Full booking form submissions with event details
- **Contact Interactions**: Phone calls, emails, WhatsApp, directions

### User Behavior
- **Page Views**: Automatic tracking of all pages
- **Form Interactions**: Which fields cause abandonment
- **Content Engagement**: Gallery views, package interactions

### Business Insights
- **Event Type Preferences**: Which events are most popular
- **Budget Analysis**: Budget range selections
- **Seasonal Patterns**: Booking request timing
- **Conversion Funnels**: Entry point → booking flow

## 5. Custom Events Available

The implementation includes these predefined events:

```javascript
// Booking funnel
'quote-modal-open'          // When quote modal is opened
'quote-form-submit'         // Quote form submission attempt
'quote-form-success'        // Successful quote submission
'booking-form-submit'       // Booking form submission attempt
'booking-form-success'      // Successful booking submission

// Contact interactions
'phone-click'               // Phone number clicked
'email-click'              // Email address clicked
'whatsapp-click'           // WhatsApp link clicked
'directions-click'         // Get directions clicked

// Conversion goals
'conversion-quote-request'  // Quote request completed
'conversion-booking-enquiry' // Booking enquiry completed
```

## 6. Setting Up Goals in Umami

1. Go to your website dashboard in Umami
2. Click on "Goals"
3. Add these conversion goals:
   - **Quote Requests**: Event = "conversion-quote-request"
   - **Booking Enquiries**: Event = "conversion-booking-enquiry"
   - **Contact Engagement**: Event = "phone-click" OR "email-click" OR "whatsapp-click"

## 7. Recommended Dashboard Setup

Create custom dashboards for:

### Business Overview
- Total visitors vs. conversions
- Conversion rate by traffic source
- Most popular event types

### Customer Journey
- Entry pages leading to bookings
- Form abandonment points
- Time from first visit to booking

### Content Performance
- Most visited pages
- Gallery engagement rates
- FAQ interaction patterns

## 8. Privacy Compliance

Umami is GDPR compliant by default:
- No cookies required
- No personal data collection
- IP addresses are anonymized
- Full data ownership

## 9. Troubleshooting

### Development Mode
Events are logged to console in development mode for testing:

```javascript
// Check browser console for:
[Umami Dev] Event: quote-modal-open { event_type: 'wedding' }
```

### Production Issues
- Verify environment variables are set correctly
- Check browser developer tools for script loading errors
- Ensure Umami instance is accessible from your domain

## 10. Analytics Insights You'll Gain

### Customer Behavior
- Which pages drive the most bookings
- Where users drop off in the booking process
- Most popular event types and budget ranges

### Marketing Effectiveness
- Which traffic sources convert best
- Content that engages users most
- Seasonal booking patterns

### Business Optimization
- Form field optimization opportunities
- Contact method preferences
- Content gaps and improvements needed

## Next Steps

1. Deploy your Umami instance
2. Configure environment variables
3. Test in development mode first
4. Deploy to production
5. Set up conversion goals in Umami dashboard
6. Create custom reports for key metrics

## Support

For Umami-specific issues, refer to:
- [Umami Documentation](https://umami.is/docs)
- [Umami GitHub](https://github.com/umami-software/umami)

For implementation questions about this setup, check the code comments in `/src/config/umami.ts`.