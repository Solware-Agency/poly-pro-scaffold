import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/lib/analytics';
import { WHATSAPP_CONFIG } from '@/config/constants';

const BUTTON_CLASSES = `
  fixed bottom-20 right-4 sm:bottom-6 sm:right-6
  z-whatsapp
  w-14 h-14 sm:w-16 sm:h-16
  bg-[#25D366] hover:bg-[#20BA5A]
  rounded-full
  flex items-center justify-center
  shadow-xl hover:shadow-2xl
  transition-all duration-300
  hover:scale-110 active:scale-95
  focus:outline-none focus:ring-4 focus:ring-primary/50
  group
  pulse-subtle
`;

const TOOLTIP_CLASSES = `
  absolute -top-12 left-1/2 -translate-x-1/2
  bg-secondary text-secondary-foreground
  px-3 py-1.5 rounded-lg text-sm font-medium
  whitespace-nowrap
  opacity-0 group-hover:opacity-100
  transition-opacity duration-200
  pointer-events-none
  shadow-lg
  z-tooltip
`;

const SHOW_AFTER_PX = 240; // umbral de scroll para mostrar el botón

const BotonWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const message = encodeURIComponent(WHATSAPP_CONFIG.defaultMessage.es);
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${message}`;

  const handleClick = () => {
    trackWhatsAppClick();
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (y > SHOW_AFTER_PX) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Estado inicial por si se entra ya scrolleado
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Abrir chat de WhatsApp'
      className={`${BUTTON_CLASSES} ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
      title='Contactar por WhatsApp'
      onClick={handleClick}
    >
      <MessageCircle
        className='w-7 h-7 md:w-8 md:h-8 text-white group-hover:rotate-12 transition-transform duration-300'
        strokeWidth={2}
      />

      <span className={TOOLTIP_CLASSES}>Contáctanos por WhatsApp</span>
    </a>
  );
};

export default BotonWhatsApp;
