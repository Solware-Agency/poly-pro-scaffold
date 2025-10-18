import { ShieldCheck, Leaf, Factory, Award } from "lucide-react";
import Navegacion from "@/components/Navegacion";
import TarjetaCaracteristica from "@/components/TarjetaCaracteristica";
import TarjetaProducto from "@/components/TarjetaProducto";
import SeccionContacto from "@/components/SeccionContacto";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/factory-hero.webp";
import aboutImage from "@/assets/factory-nosotros.webp";
import extrusionImage from "@/assets/factory-extrusion.webp";
import galleryImage from "@/assets/factory-gallery.webp";
import product1 from "@/assets/product-1.webp";
import product2 from "@/assets/product-2.webp";
import product3 from "@/assets/product-3.webp";

const Index = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navegacion />
      <BotonWhatsApp />

      <section
        id="inicio"
        className="relative h-screen flex items-end overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={heroImage}
        >
          <source src="https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Video_polypack.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 container mx-auto px-6 pb-16 md:pb-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 fade-in-title drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              {t.hero.title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/95 mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {t.hero.subtitle}
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="text-sm md:text-base px-6 py-5 drop-shadow-2xl"
            >
              {t.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground fade-in-title">
              {t.about.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="glass-surface rounded-lg overflow-hidden hover-smooth">
              <img
                src={aboutImage}
                alt="Instalaciones POLYPACK"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>

              <div className="space-y-4">
                <div className="neuo-card p-6 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {t.about.mission}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.about.missionText}
                  </p>
                </div>

                <div className="neuo-card p-6 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {t.about.vision}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.about.visionText}
                  </p>
                </div>

                <div className="neuo-card p-6 transition-all duration-300 hover:scale-[1.02]">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {t.about.values}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.about.valuesText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground fade-in-title">
              {t.features.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-surface rounded-lg overflow-hidden hover-smooth">
              <img
                src={extrusionImage}
                alt="Proceso de extrusión"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="glass-surface rounded-lg overflow-hidden hover-smooth">
              <img
                src={galleryImage}
                alt="Planta de producción"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground fade-in-title">
              {t.products.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TarjetaProducto
              titulo={t.products.tubular.title}
              descripcion={t.products.tubular.description}
              especificaciones={t.products.tubular.specs}
              imagen={product1}
            />
            <TarjetaProducto
              titulo={t.products.industrial.title}
              descripcion={t.products.industrial.description}
              especificaciones={t.products.industrial.specs}
              imagen={product2}
            />
            <TarjetaProducto
              titulo={t.products.custom.title}
              descripcion={t.products.custom.description}
              especificaciones={t.products.custom.specs}
              imagen={product3}
            />
          </div>
        </div>
      </section>

      <SeccionContacto />

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} POLYPACK. {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
