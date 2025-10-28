import { MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";
import { BUTTON_STYLES } from "@/config/styles";
import { useLanguage } from "@/context/LanguageContext";

const BotonWhatsApp = () => {
  const { openWhatsApp } = useWhatsApp();
  const { language } = useLanguage();

  const tooltipText = language === 'es' ? 'Contáctanos por WhatsApp' : 'Contact us on WhatsApp';

  return (
    <button
      onClick={openWhatsApp}
      aria-label={tooltipText}
      className={BUTTON_STYLES.whatsapp}
      title={tooltipText}
    >
      <MessageCircle
        className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:rotate-12 transition-transform duration-300"
        strokeWidth={2}
      />

      <span className={BUTTON_STYLES.tooltip}>
        {tooltipText}
      </span>
    </button>
  );
};

export default BotonWhatsApp;
