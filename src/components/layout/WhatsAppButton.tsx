import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import companyData from "@/data/company.json";
import WhatsappLogo from "@/assets/whatsapp.webp";

export function WhatsAppButton() {
  const { company } = companyData;
  const phoneNumber = company.contact.phone;
  const message = encodeURIComponent(
    "Hello! I would like to enquire about GreenTulip Gardens."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-10 right-8 z-40",
        "flex items-center gap-3 p-3",
        "rounded-full",
        "shadow-large hover:shadow-glow",
        "transition-all duration-300 hover:scale-105",
        "group"
      )}
      aria-label="Chat on WhatsApp"
    >
      <img width={70} src={WhatsappLogo} alt={whatsappUrl} />
    </a>
  );
}
