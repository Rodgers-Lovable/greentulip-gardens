import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { initializeEmailJS, sendQuoteRequest, type QuoteRequestData } from "@/services/emailService";
import { umami } from "@/config/umami";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventType?: string;
}

const eventTypes = [
  "Wedding & Ceremony",
  "Picnic & Day Out",
  "Accommodation",
  "Team Building & Retreat",
  "Photoshoot & Filming",
  "Other",
];

export function QuoteModal({ isOpen, onClose, eventType }: QuoteModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    eventType: eventType || "",
    preferredDate: "",
    guests: "",
    message: "",
  });

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initializeEmailJS();
  }, []);

  // Track modal open
  useEffect(() => {
    if (isOpen) {
      umami.trackQuoteModalOpen(eventType);
    }
  }, [isOpen, eventType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission attempt
    umami.trackQuoteSubmission(formData.eventType, parseInt(formData.guests) || 0);

    try {
      // Send email using EmailJS
      const emailData: QuoteRequestData = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        eventType: formData.eventType,
        preferredDate: formData.preferredDate,
        guests: formData.guests,
        message: formData.message,
      };

      const success = await sendQuoteRequest(emailData);

      if (success) {
        // Track successful quote submission
        umami.trackQuoteSuccess(formData.eventType);

        toast({
          title: "Quote Request Sent!",
          description: "We'll get back to you within 24 hours.",
        });

        // Reset form
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          eventType: eventType || "",
          preferredDate: "",
          guests: "",
          message: "",
        });
        onClose();
      } else {
        // Track failed quote submission
        umami.trackEvent('quote-form-error', {
          event_type: formData.eventType,
          error_type: 'email_send_failed'
        });

        toast({
          title: "Error Sending Quote Request",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Quote submission error:', error);

      // Track error
      umami.trackEvent('quote-form-error', {
        event_type: formData.eventType,
        error_type: 'exception'
      });

      toast({
        title: "Error Sending Quote Request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-forest-dark/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative w-full max-w-2xl mx-4 bg-cream rounded-xl shadow-large",
          "max-h-[90vh] overflow-y-auto",
          "animate-fade-up"
        )}
      >
        {/* Header */}
        <div className="sticky top-0 bg-cream px-6 pt-6 pb-4 border-b border-sage/30 flex items-center justify-between">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-forest">
              Request a Quote
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              We'll respond within 24 hours
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-sage/30 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-forest" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-forest font-medium">
              Full Name <span className="text-gold">*</span>
            </Label>
            <Input
              id="fullName"
              required
              placeholder="Your full name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="bg-background border-sage/50 focus:border-gold"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-forest font-medium">
              Phone Number <span className="text-gold">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              placeholder="+254 700 000 000"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="bg-background border-sage/50 focus:border-gold"
            />
          </div>

          {/* Event Type */}
          <div className="space-y-2">
            <Label htmlFor="eventType" className="text-forest font-medium">
              Event Type <span className="text-gold">*</span>
            </Label>
            <Select
              value={formData.eventType}
              onValueChange={(value) =>
                setFormData({ ...formData, eventType: value })
              }
            >
              <SelectTrigger className="bg-background border-sage/50 focus:border-gold">
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                {eventTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date and Guests Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="preferredDate"
                className="text-forest font-medium"
              >
                Preferred Date <span className="text-gold">*</span>
              </Label>
              <Input
                id="preferredDate"
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) =>
                  setFormData({ ...formData, preferredDate: e.target.value })
                }
                className="bg-background border-sage/50 focus:border-gold"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-forest font-medium">
                Est. Guests <span className="text-gold">*</span>
              </Label>
              <Input
                id="guests"
                type="number"
                required
                placeholder="50"
                min="1"
                value={formData.guests}
                onChange={(e) =>
                  setFormData({ ...formData, guests: e.target.value })
                }
                className="bg-background border-sage/50 focus:border-gold"
              />
            </div>
          </div>

          {/* Email (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-forest font-medium">
              Email Address{" "}
              <span className="text-muted-foreground text-sm">(optional)</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-background border-sage/50 focus:border-gold"
            />
          </div>

          {/* Message (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-forest font-medium">
              Special Requests{" "}
              <span className="text-muted-foreground text-sm">(optional)</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us more about your event..."
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="bg-background border-sage/50 focus:border-gold resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="gold"
            size="xl"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Request Quote"}
          </Button>
        </form>
      </div>
    </div>
  );
}
