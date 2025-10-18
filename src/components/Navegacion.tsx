import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoPolypack from "@/assets/logo-polypack-new.webp";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

const Navegacion = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const enlaces = [
    { nombre: t.nav.home, href: "#inicio" },
    { nombre: t.nav.about, href: "#nosotros" },
    { nombre: t.nav.products, href: "#productos" },
    { nombre: t.nav.contact, href: "#contacto" },
  ];

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-header ${
        scrolled ? 'glass-surface' : 'glass-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center group">
            <img
              src={logoPolypack}
              alt="Logo POLYPACK"
              className={`h-10 md:h-12 w-auto group-hover:scale-105 transition-all duration-500 ${
                scrolled ? 'drop-shadow-none' : 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
              }`}
            />
          </a>

          {/* Enlaces desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {enlaces.map((enlace) => (
              <a
                key={enlace.nombre}
                href={enlace.href}
                className={`font-medium transition-all duration-500 story-link ${
                  scrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-white hover:text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
                }`}
              >
                {enlace.nombre}
              </a>
            ))}
            <div className={`transition-all duration-500 ${
              scrolled ? '' : 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
            }`}>
              <LanguageSelector />
            </div>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className={`md:hidden p-2 rounded-lg transition-all duration-500 ${
              scrolled
                ? 'hover:bg-muted text-foreground'
                : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:bg-white/10'
            }`}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          >
            {menuAbierto ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        {menuAbierto && (
          <div className={`md:hidden pb-4 animate-fade-in ${
            scrolled ? '' : 'bg-black/50 backdrop-blur-md rounded-lg'
          }`}>
            <div className="flex flex-col space-y-3">
              {enlaces.map((enlace) => (
                <a
                  key={enlace.nombre}
                  href={enlace.href}
                  onClick={cerrarMenu}
                  className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                    scrolled
                      ? 'text-foreground hover:text-primary hover:bg-muted'
                      : 'text-white hover:text-white/80 hover:bg-white/10'
                  }`}
                >
                  {enlace.nombre}
                </a>
              ))}
              <div className="py-2 px-4">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navegacion;
