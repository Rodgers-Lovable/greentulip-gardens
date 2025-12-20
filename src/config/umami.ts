// Umami Analytics Configuration
export const umamiConfig = {
  // Replace with your Umami instance URL and website ID
  scriptSrc: process.env.VITE_UMAMI_SCRIPT_SRC || '',
  websiteId: process.env.VITE_UMAMI_WEBSITE_ID || '',

  // Enable tracking only in production
  enabled: process.env.NODE_ENV === 'production' &&
           process.env.VITE_UMAMI_SCRIPT_SRC &&
           process.env.VITE_UMAMI_WEBSITE_ID,

  // Custom event names for consistent tracking
  events: {
    // Navigation events
    PAGE_VIEW: 'page-view',

    // Booking funnel events
    QUOTE_MODAL_OPEN: 'quote-modal-open',
    QUOTE_FORM_START: 'quote-form-start',
    QUOTE_FORM_SUBMIT: 'quote-form-submit',
    QUOTE_FORM_SUCCESS: 'quote-form-success',
    QUOTE_FORM_ERROR: 'quote-form-error',

    BOOKING_FORM_START: 'booking-form-start',
    BOOKING_FORM_SUBMIT: 'booking-form-submit',
    BOOKING_FORM_SUCCESS: 'booking-form-success',
    BOOKING_FORM_ERROR: 'booking-form-error',

    // Engagement events
    GALLERY_IMAGE_VIEW: 'gallery-image-view',
    PACKAGE_VIEW: 'package-view',
    CONTACT_CLICK: 'contact-click',
    PHONE_CLICK: 'phone-click',
    EMAIL_CLICK: 'email-click',
    WHATSAPP_CLICK: 'whatsapp-click',
    DIRECTIONS_CLICK: 'directions-click',

    // Content engagement
    FAQ_EXPAND: 'faq-expand',
    TESTIMONIAL_VIEW: 'testimonial-view',

    // Conversion goals
    CONVERSION_QUOTE_REQUEST: 'conversion-quote-request',
    CONVERSION_BOOKING_ENQUIRY: 'conversion-booking-enquiry',
  }
} as const;

// Type for event properties
export interface UmamiEventProperties {
  [key: string]: string | number | boolean;
}

// Umami tracking service
class UmamiService {
  private isInitialized = false;

  // Check if Umami is available
  private isUmamiAvailable(): boolean {
    return typeof window !== 'undefined' &&
           'umami' in window &&
           Boolean(umamiConfig.enabled);
  }

  // Initialize Umami (called when script loads)
  public initialize(): void {
    if (this.isUmamiAvailable() && !this.isInitialized) {
      this.isInitialized = true;
      console.log('Umami analytics initialized');
    }
  }

  // Track a custom event
  public trackEvent(eventName: string, properties?: UmamiEventProperties): void {
    if (!this.isUmamiAvailable()) {
      // Log for development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Umami Dev] Event: ${eventName}`, properties);
      }
      return;
    }

    try {
      // @ts-expect-error - umami is injected by the script
      window.umami?.track(eventName, properties);
    } catch (error) {
      console.warn('Failed to track Umami event:', error);
    }
  }

  // Track page view (usually automatic, but can be used for SPA navigation)
  public trackPageView(url?: string, referrer?: string): void {
    if (!this.isUmamiAvailable()) {
      if (process.env.NODE_ENV === 'development') {
        console.log(`[Umami Dev] Page view: ${url || window.location.pathname}`);
      }
      return;
    }

    try {
      // @ts-expect-error - umami is injected by the script
      window.umami?.track('pageview', { url, referrer });
    } catch (error) {
      console.warn('Failed to track Umami page view:', error);
    }
  }

  // Convenience methods for common events
  public trackQuoteModalOpen(eventType?: string): void {
    this.trackEvent(umamiConfig.events.QUOTE_MODAL_OPEN, {
      event_type: eventType || 'unknown'
    });
  }

  public trackQuoteSubmission(eventType: string, guests: number): void {
    this.trackEvent(umamiConfig.events.QUOTE_FORM_SUBMIT, {
      event_type: eventType,
      guest_count: guests
    });
  }

  public trackQuoteSuccess(eventType: string): void {
    this.trackEvent(umamiConfig.events.QUOTE_FORM_SUCCESS, {
      event_type: eventType
    });
    // Also track as conversion goal
    this.trackEvent(umamiConfig.events.CONVERSION_QUOTE_REQUEST, {
      event_type: eventType
    });
  }

  public trackBookingSubmission(eventType: string, guests: number, budget?: string): void {
    this.trackEvent(umamiConfig.events.BOOKING_FORM_SUBMIT, {
      event_type: eventType,
      guest_count: guests,
      budget_range: budget || 'not_specified'
    });
  }

  public trackBookingSuccess(eventType: string): void {
    this.trackEvent(umamiConfig.events.BOOKING_FORM_SUCCESS, {
      event_type: eventType
    });
    // Also track as conversion goal
    this.trackEvent(umamiConfig.events.CONVERSION_BOOKING_ENQUIRY, {
      event_type: eventType
    });
  }

  public trackContactInteraction(type: 'phone' | 'email' | 'whatsapp' | 'directions'): void {
    const eventMap = {
      phone: umamiConfig.events.PHONE_CLICK,
      email: umamiConfig.events.EMAIL_CLICK,
      whatsapp: umamiConfig.events.WHATSAPP_CLICK,
      directions: umamiConfig.events.DIRECTIONS_CLICK
    };

    this.trackEvent(eventMap[type], { contact_type: type });
  }

  public trackGalleryInteraction(imageId?: string): void {
    this.trackEvent(umamiConfig.events.GALLERY_IMAGE_VIEW, {
      image_id: imageId || 'unknown'
    });
  }

  public trackPackageView(packageName: string): void {
    this.trackEvent(umamiConfig.events.PACKAGE_VIEW, {
      package_name: packageName
    });
  }

  public trackFAQInteraction(question: string): void {
    this.trackEvent(umamiConfig.events.FAQ_EXPAND, {
      faq_question: question.substring(0, 50) // Truncate for privacy
    });
  }
}

// Export singleton instance
export const umami = new UmamiService();

// Declare umami on window for TypeScript
declare global {
  interface Window {
    umami?: {
      track: (event: string, properties?: Record<string, string | number | boolean>) => void;
    };
  }
}