import { Factory, Layers, ShieldCheck, Users, Recycle } from "lucide-react";
import Navegacion from "@/components/Navegacion";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import TarjetaCaracteristica from "@/components/TarjetaCaracteristica";
import TarjetaProducto from "@/components/TarjetaProducto";
import SeccionContacto from "@/components/SeccionContacto";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/factory-hero.webp";
import extrusionImage from "@/assets/factory-extrusion.webp";
import nosotrosImage from "@/assets/factory-nosotros.webp";
import product1Image from "@/assets/product-1.webp";
import product2Image from "@/assets/product-2.webp";
import product3Image from "@/assets/product-3.webp";
import galleryImage from "@/assets/factory-gallery.webp";
import logoPolypack from "@/assets/logo-polypack-new.webp";

const Index = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navegacion />
      <BotonWhatsApp />
      
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video de fondo */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={heroImage}
            className="w-full h-full object-cover"
            aria-label="Video de planta industrial POLYPACK"
          >
            <source
              src="https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Video_polypack.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/60 via-secondary/50 to-primary/40" />
        </div>

        {/* Contenido Hero */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-2 drop-shadow-2xl">
              {t.hero.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-2xl mx-auto px-4 drop-shadow-lg">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>
      
      {/* Sección Nosotros */}
      <section id="nosotros" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {t.about.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.about.subtitle}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <TarjetaCaracteristica
                icono={Factory}
                titulo={t.features.feature1.title}
                descripcion={t.features.feature1.description}
                variante="glass"
              />
              <TarjetaCaracteristica
                icono={ShieldCheck}
                titulo={t.features.feature2.title}
                descripcion={t.features.feature2.description}
                variante="neuo"
              />
              <TarjetaCaracteristica
                icono={Recycle}
                titulo={t.features.feature3.title}
                descripcion={t.features.feature3.description}
                variante="glass"
              />
            </div>
            
            <div className="glass-surface p-8 md:p-12 rounded-lg relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-5 bg-cover bg-center"
                style={{ backgroundImage: `url(${nosotrosImage})` }}
              />
              <div className="prose prose-lg max-w-none relative z-10">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t.about.text1}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t.about.text2}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.text3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección Productos */}
      <section id="productos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t.products.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <TarjetaProducto
              titulo={t.products.item1.title}
              descripcion={t.products.item1.description}
              especificaciones={[
                "Densidad: 0.40",
                "Grosor personalizable",
                "Hasta 12 capas de extrusión",
                "Resistencia al desgarro",
                "Sellado hermético"
              ]}
              imagen={product1Image}
            />
            <TarjetaProducto
              titulo={t.products.item2.title}
              descripcion={t.products.item2.description}
              especificaciones={[
                "Mayor resistencia al impacto",
                "Transparencia superior",
                "Sellado más fuerte",
                "Ideal para congelados",
                "Menor espesor, igual resistencia"
              ]}
              imagen={product2Image}
            />
            <TarjetaProducto
              titulo={t.products.item3.title}
              descripcion={t.products.item3.description}
              especificaciones={[
                "Barreras personalizadas",
                "Protección UV opcional",
                "Control de permeabilidad",
                "Aplicaciones alimentarias",
                "Máxima durabilidad"
              ]}
              imagen={product3Image}
            />
          </div>
        </div>
      </section>
      
      {/* Sección Tecnología */}
      <section id="tecnologia" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Tecnología de Extrusión Avanzada
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nuestros sistemas de extrusión multicapa permiten crear estructuras complejas 
                  que combinan diferentes resinas para lograr propiedades específicas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg mt-1">
                      <Layers className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Hasta 12 Capas</h4>
                      <p className="text-muted-foreground">
                        Capacidad de extrusión multicapa para máxima versatilidad
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg mt-1">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Control de Calidad</h4>
                      <p className="text-muted-foreground">
                        Monitoreo constante en cada etapa del proceso productivo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg mt-1">
                      <Factory className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Producción Eficiente</h4>
                      <p className="text-muted-foreground">
                        Procesos optimizados para grandes volúmenes industriales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="neuo-card p-4 rounded-lg overflow-hidden">
                  <img 
                    src={extrusionImage} 
                    alt="Proceso de extrusión POLYPACK"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección Clientes */}
      <section id="clientes" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {t.gallery.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.features.title}
            </p>
          </div>
          
          <div className="mb-16">
            <div className="glass-surface rounded-lg overflow-hidden hover:scale-[1.02] transition-all duration-300">
              <img 
                src={galleryImage} 
                alt="Vista de nuestras instalaciones de producción POLYPACK"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Empresas que Confían en Nosotros
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Más de tres décadas respaldando a la industria nacional
            </p>
          </div>
          
          <div className="glass-surface p-12 rounded-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Users className="w-12 h-12 text-primary" />
              <h3 className="text-3xl font-bold text-foreground">+30 años</h3>
            </div>
            <p className="text-center text-lg text-muted-foreground mb-8">
              Sirviendo a la industria venezolana con productos de calidad internacional. 
              Nuestros clientes incluyen empresas de alimentos, químicos, construcción y más.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="neuo-card p-6 rounded-lg flex items-center justify-center h-24">
                  <span className="text-muted-foreground font-medium">Cliente {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección Contacto */}
      <SeccionContacto />
      
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src={logoPolypack} 
                alt="Logo POLYPACK" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-secondary-foreground/80 mb-2">
              {t.about.subtitle}
            </p>
            <p className="text-sm text-secondary-foreground/60">
              © 2025 POLYPACK. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
