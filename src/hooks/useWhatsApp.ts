import { useCallback } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { WHATSAPP_CONFIG } from "@/config/constants";
import { useLanguage } from "@/context/LanguageContext";

export const useWhatsApp = () => {
  const { language } = useLanguage();

  const openWhatsApp = useCallback(() => {
    trackWhatsAppClick();
    const message = encodeURIComponent(WHATSAPP_CONFIG.defaultMessage[language]);
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }, [language]);

  return { openWhatsApp };
};
