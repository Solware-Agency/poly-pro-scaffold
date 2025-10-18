import { Factory, Layers, ShieldCheck, Users, Recycle, ArrowRight } from "lucide-react";
import Navegacion from "@/components/Navegacion";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import TarjetaCaracteristica from "@/components/TarjetaCaracteristica";
import TarjetaProducto from "@/components/TarjetaProducto";
import SeccionContacto from "@/components/SeccionContacto";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/factory-hero.webp";
import extrusionImage from "@/assets/factory-extrusion.webp";
import nosotrosImage from "@/assets/factory-nosotros.webp";
import product1Image from "@/assets/product-1.webp";
import product2Image from "@/assets/product-2.webp";
import product3Image from "@/assets/product-3.webp";
import galleryImage from "@/assets/factory-gallery.webp";
import logoPolypack from "@/assets/logo-polypack-new.webp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navegacion />
      <BotonWhatsApp />
      
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Planta industrial POLYPACK"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/80 to-primary/70" />
        </div>
        
        {/* Contenido Hero */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-2">
              Bolsas Plásticas Industriales con{" "}
              <span className="text-primary-glow">Precisión y Confianza</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto px-4">
              Más de 30 años de experiencia en extrusión de alta calidad. 
              Procesos hasta 12 capas, baja densidad (0.40) y lineales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                variant="hero"
                className="text-lg px-8 py-6"
                asChild
              >
                <a href="#productos">
                  Ver Productos
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="glass"
                className="text-lg px-8 py-6"
                asChild
              >
                <a href="#contacto">Contactar</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección Nosotros */}
      <section id="nosotros" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Nuestra Historia
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Tres décadas liderando la industria venezolana de empaques plásticos
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <TarjetaCaracteristica
                icono={Factory}
                titulo="Extrusión de hasta 12 capas"
                descripcion="Tecnología de punta para procesos multicapa que garantizan resistencia y durabilidad excepcionales."
                variante="glass"
              />
              <TarjetaCaracteristica
                icono={ShieldCheck}
                titulo="Materia prima certificada"
                descripcion="Importamos material activo de petroleras estadounidenses con trazabilidad completa y certificación de calidad."
                variante="neuo"
              />
              <TarjetaCaracteristica
                icono={Recycle}
                titulo="Producción sectorizada"
                descripcion="Procesos optimizados por sectores para máxima eficiencia y control de calidad en cada etapa."
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
                  Desde hace más de 30 años, <span className="font-bold text-foreground">POLYPACK</span> ha sido sinónimo de 
                  calidad y confiabilidad en la fabricación de bolsas plásticas industriales en Venezuela. 
                  Nuestra experiencia nos ha permitido desarrollar procesos de extrusión de vanguardia, 
                  capaces de producir hasta 12 capas de material.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Trabajamos exclusivamente con materia prima importada de las principales petroleras de Estados Unidos, 
                  garantizando trazabilidad y calidad en cada producto. Nuestros procesos de baja densidad (0.40) y 
                  lineales están diseñados para satisfacer las demandas más exigentes de la industria.
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
              Nuestros Productos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones de empaque industrial adaptadas a sus necesidades específicas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <TarjetaProducto
              titulo="Bolsas Baja Densidad"
              descripcion="Bolsas de polietileno de baja densidad, ideales para productos que requieren flexibilidad y resistencia."
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
              titulo="Bolsas Lineales"
              descripcion="Polietileno lineal de baja densidad para aplicaciones industriales de alto rendimiento."
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
              titulo="Soluciones Multicapa"
              descripcion="Estructuras complejas de hasta 12 capas para requisitos especializados."
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
              Nuestra Planta en Acción
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Instalaciones de vanguardia donde la calidad cobra vida
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
              Más de 30 años fabricando calidad en Venezuela
            </p>
            <p className="text-sm text-secondary-foreground/60">
              © 2025 POLYPACK. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
