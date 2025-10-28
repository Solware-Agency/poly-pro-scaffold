import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { validateContactForm } from "@/lib/validations";
import { trackContactFormSubmit } from "@/lib/analytics";
import { CONTACT_CONFIG } from "@/config/constants";
import type { ContactFormData } from "@/types";

const ContactSection = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      toast.error(validation.error);
      trackContactFormSubmit(false);
      return;
    }

    toast.success(t.contact.send);
    trackContactFormSubmit(true);
    resetForm();
  };

  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-20 bg-muted/30 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground fade-in-title title-underline px-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto fade-in-title px-4">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6 w-full max-w-full">
            <div className="glass-surface p-4 sm:p-6 rounded-lg transition-[transform,box-shadow] duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 w-full max-w-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground fade-in-title">
                {t.contact.info.title}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground text-sm sm:text-base">{t.contact.info.location}</p>
                    <p className="text-muted-foreground text-sm break-words">{CONTACT_CONFIG.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground text-sm sm:text-base">{t.contact.info.phone}</p>
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+584129395171"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                      >
                        +58 412-9395171
                      </a>
                      <a
                        href="tel:+582129459445"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                      >
                        0212-9459445
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground text-sm sm:text-base">Email</p>
                    <a
                      href={`mailto:${CONTACT_CONFIG.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm break-all"
                    >
                      {CONTACT_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground text-sm sm:text-base">Instagram</p>
                    <a
                      href={CONTACT_CONFIG.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow story-link text-sm break-all"
                    >
                      {CONTACT_CONFIG.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="neuo-card p-4 sm:p-6 transition-[transform,box-shadow] duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 w-full max-w-full">
              <h4 className="font-bold text-base sm:text-lg mb-2 text-foreground">{t.contact.info.schedule}</h4>
              <p className="text-muted-foreground text-sm sm:text-base">{t.contact.scheduleWeekdays}</p>
              <p className="text-muted-foreground text-sm sm:text-base">{t.contact.scheduleSaturday}</p>
            </div>
          </div>
          <div className="glass-surface p-4 sm:p-6 md:p-8 rounded-lg transition-[transform,box-shadow] duration-500 ease-out hover:scale-[1.01] hover:shadow-xl w-full max-w-full">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground fade-in-title">
              {t.contact.send}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-2 text-foreground">
                  {t.contact.name}
                </label>
                <Input
                  id="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange("nombre", e.target.value)}
                  placeholder={t.contact.namePlaceholder}
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
                  placeholder={t.contact.emailPlaceholder}
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
                  placeholder={t.contact.messagePlaceholder}
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

export default ContactSection;
