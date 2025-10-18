import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { validateContactForm, type ContactFormData } from "@/lib/validations";

const CONTACT_INFO = {
  phone: "+584129395171",
  email: "administracion@plasticospolypack.com",
  instagram: "https://instagram.com/polypack",
  instagramHandle: "@polypack",
  location: "Zona Industrial, Venezuela"
};

const SeccionContacto = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      toast.error(validation.error);
      return;
    }

    toast.success("Mensaje enviado. Nos pondremos en contacto pronto.");
    resetForm();
  };
  
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground fade-in-title title-underline">
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
                    <p className="font-semibold text-foreground">{t.contact.info.location}</p>
                    <p className="text-muted-foreground">{CONTACT_INFO.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.contact.info.phone}</p>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
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
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {CONTACT_INFO.email}
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
                      href={CONTACT_INFO.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow story-link"
                    >
                      {CONTACT_INFO.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="neuo-card p-6 transition-[transform,box-shadow] duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1">
              <h4 className="font-bold text-lg mb-2 text-foreground">{t.contact.info.schedule}</h4>
              <p className="text-muted-foreground">{t.contact.scheduleWeekdays}</p>
              <p className="text-muted-foreground">{t.contact.scheduleSaturday}</p>
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
                  value={formData.nombre}
                  onChange={(e) => handleInputChange("nombre", e.target.value)}
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
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
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
                  value={formData.mensaje}
                  onChange={(e) => handleInputChange("mensaje", e.target.value)}
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
