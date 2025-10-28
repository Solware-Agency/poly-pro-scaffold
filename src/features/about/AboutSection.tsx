import { ShieldCheck, Leaf, Factory, Award } from "lucide-react";
import TarjetaCaracteristica from "@/components/TarjetaCaracteristica";
import { useLanguage } from "@/context/LanguageContext";
import { ASSET_URLS } from "@/config/assets";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="py-12 sm:py-16 md:py-20 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground fade-in-title title-underline px-4">
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto fade-in-title px-4">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="glass-surface rounded-lg overflow-hidden hover-smooth">
            <img
              src={ASSET_URLS.about.image}
              alt="Instalaciones POLYPACK"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-justified">
              {t.about.description}
            </p>

            <div className="space-y-4">
              <div className="neuo-card p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground fade-in-title">
                  {t.about.mission}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground text-justified">
                  {t.about.missionText}
                </p>
              </div>

              <div className="neuo-card p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground fade-in-title">
                  {t.about.vision}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground text-justified">
                  {t.about.visionText}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground fade-in-title title-underline px-4">
            {t.features.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto fade-in-title px-4">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TarjetaCaracteristica
            icono={ShieldCheck}
            titulo={t.features.quality.title}
            descripcion={t.features.quality.description}
            variante="glass"
          />
          <TarjetaCaracteristica
            icono={Award}
            titulo={t.features.experience.title}
            descripcion={t.features.experience.description}
            variante="neuo"
          />
          <TarjetaCaracteristica
            icono={Factory}
            titulo={t.features.technology.title}
            descripcion={t.features.technology.description}
            variante="glass"
          />
          <TarjetaCaracteristica
            icono={Leaf}
            titulo={t.features.sustainability.title}
            descripcion={t.features.sustainability.description}
            variante="neuo"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
