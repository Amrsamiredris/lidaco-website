import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "989000000000";
  const message = encodeURIComponent(
    "Hello, I am interested in your export products."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-7 bottom-7 z-[80] w-14 h-14 rounded-full bg-lid-olive-600 text-white grid place-items-center shadow-[var(--shadow-hover)] transition-all duration-[240ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-0.5 hover:bg-lid-olive-400"
      aria-label="WhatsApp enquiry"
      title="WhatsApp enquiry"
    >
      <MessageCircle size={28} strokeWidth={1.5} />
    </a>
  );
}
