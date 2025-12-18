import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WhatsAppButton() {
  const phoneNumber = '254700000000';
  const message = encodeURIComponent('Hello! I would like to enquire about GreenTulip Gardens.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-40',
        'flex items-center gap-3 px-5 py-3',
        'bg-[#25D366] text-white rounded-full',
        'shadow-large hover:shadow-glow',
        'transition-all duration-300 hover:scale-105',
        'group'
      )}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-medium hidden sm:inline group-hover:inline">
        WhatsApp Us
      </span>
    </a>
  );
}
