import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { trackWhatsAppClick } from "@/lib/analytics";
import { WHATSAPP_CONFIG } from "@/config/constants";
import { ASSET_URLS } from "@/config/assets";

const HeroSection = () => {
  const { t } = useLanguage();

  const openWhatsApp = () => {
    trackWhatsAppClick();
    const message = encodeURIComponent(WHATSAPP_CONFIG.defaultMessage.es);
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-end overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover max-w-full"
        poster={ASSET_URLS.hero.image}
      >
        <source src={ASSET_URLS.hero.video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pb-16 md:pb-20">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 fade-in-title drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] leading-relaxed">
            {t.hero.subtitle}
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={openWhatsApp}
            className="text-sm md:text-base px-6 py-5 drop-shadow-2xl"
          >
            {t.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
