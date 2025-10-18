import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Botón flotante de WhatsApp global
 * Configuración vía variables de entorno (simuladas por ahora)
 */
const BotonWhatsApp = () => {
  const [mostrarPulso, setMostrarPulso] = useState(true);
  
  // Configuración WhatsApp
  const numero = "+584129395171"; // Variable de entorno: NEXT_PUBLIC_WHATSAPP_NUMERO
  const mensaje = encodeURIComponent("Hola, me gustaría solicitar información sobre sus productos.");
  const urlWhatsApp = `https://wa.me/${numero}?text=${mensaje}`;
  
  // Pulso sutil solo la primera vez
  useEffect(() => {
    const timer = setTimeout(() => setMostrarPulso(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <a
      href={urlWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className={`
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
        ${mostrarPulso ? "pulse-once" : ""}
      `}
      title="Contactar por WhatsApp"
    >
      <MessageCircle 
        className="w-7 h-7 md:w-8 md:h-8 text-white group-hover:rotate-12 transition-transform duration-300" 
        strokeWidth={2}
      />
      
      {/* Tooltip accesible */}
      <span className="
        absolute -top-12 left-1/2 -translate-x-1/2
        bg-secondary text-secondary-foreground
        px-3 py-1.5 rounded-lg text-sm font-medium
        whitespace-nowrap
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200
        pointer-events-none
        shadow-lg
        z-tooltip
      ">
        Contáctanos por WhatsApp
      </span>
    </a>
  );
};

export default BotonWhatsApp;
