import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const SeccionContacto = () => {
  const { t } = useLanguage();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  
  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      toast.error("Por favor completa todos los campos");
      return;
    }
    
    // Validación email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Por favor ingresa un email válido");
      return;
    }
    
    // Aquí iría la lógica de envío
    toast.success("Mensaje enviado. Nos pondremos en contacto pronto.");
    setNombre("");
    setEmail("");
    setMensaje("");
  };
  
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground fade-in-title">
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Información de contacto */}
          <div className="space-y-6">
            <div className="glass-surface p-6 rounded-lg transition-[transform,box-shadow] duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                {t.contact.info.title}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ubicación</p>
                    <p className="text-muted-foreground">Zona Industrial, Venezuela</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Teléfono</p>
                    <a 
                      href="tel:+584129395171" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +58 412-9395171
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:administracion@plasticospolypack.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      administracion@plasticospolypack.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Instagram</p>
                    <a 
                      href="https://instagram.com/polypack" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow story-link"
                    >
                      @polypack
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="neuo-card p-6 transition-[transform,box-shadow] duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1">
              <h4 className="font-bold text-lg mb-2 text-foreground">Horario de Atención</h4>
              <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
              <p className="text-muted-foreground">Sábados: 8:00 AM - 12:00 PM</p>
            </div>
          </div>
          
          {/* Formulario */}
          <div className="glass-surface p-6 md:p-8 rounded-lg transition-[transform,box-shadow] duration-500 ease-out hover:scale-[1.01] hover:shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              {t.contact.send}
            </h3>

            <form onSubmit={manejarEnvio} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-2 text-foreground">
                  {t.contact.name}
                </label>
                <Input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder={t.contact.name}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  {t.contact.email}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.contact.email}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-2 text-foreground">
                  {t.contact.message}
                </label>
                <Textarea
                  id="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder={t.contact.message}
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                className="w-full py-6 text-lg"
              >
                {t.contact.send}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeccionContacto;
