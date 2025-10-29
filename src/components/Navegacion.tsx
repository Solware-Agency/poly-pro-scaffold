import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoPolypack from "@/assets/logo-polypack-new.webp";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SCROLL_CONFIG } from "@/config/constants";

const NAV_SECTIONS = ["inicio", "nosotros", "productos", "contacto"];

const Navegacion = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const activeSection = useActiveSection(NAV_SECTIONS);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_CONFIG.threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.about, href: "#nosotros" },
    { label: t.nav.products, href: "#productos" },
    { label: t.nav.contact, href: "#contacto" },
  ];

  const toggleMenu = () => setMenuAbierto(prev => !prev);
  const closeMenu = () => setMenuAbierto(false);

  const isActiveLink = (href: string): boolean => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };

  const navClasses = `fixed top-0 left-0 right-0 z-header ${
    scrolled ? 'glass-surface' : 'glass-transparent'
  }`;

  const textClasses = scrolled
    ? 'text-foreground hover:text-primary'
    : 'text-white hover:text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]';

  const logoClasses = `h-10 md:h-12 w-auto group-hover:scale-105 transition-all duration-500 ${
    scrolled ? 'drop-shadow-none' : 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
  }`;

  const buttonClasses = `md:hidden p-2 rounded-lg transition-all duration-500 ${
    scrolled
      ? 'hover:bg-muted text-foreground'
      : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:bg-white/10'
  }`;

  const mobileMenuClasses = `md:hidden pb-4 animate-fade-in ${
    scrolled ? '' : 'bg-black/50 backdrop-blur-md rounded-lg'
  }`;

  const mobileLinkClasses = `font-medium py-2 px-4 rounded-lg transition-colors ${
    scrolled
      ? 'text-foreground hover:text-primary hover:bg-muted'
      : 'text-white hover:text-white/80 hover:bg-white/10'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 w-full max-w-full">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center group">
            <img
              src={logoPolypack}
              alt="Logo POLYPACK"
              className={logoClasses}
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition-all duration-500 story-link ${
                    scrolled ? '' : 'story-link-light'
                  } ${textClasses} ${isActive ? 'story-link-active' : ''}`}
                >
                  {link.label}
                </a>
              );
            })}
            <LanguageSelector scrolled={scrolled} />
          </div>

          <button
            onClick={toggleMenu}
            className={buttonClasses}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          >
            {menuAbierto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuAbierto && (
          <div className={mobileMenuClasses}>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`${mobileLinkClasses} ${
                    isActiveLink(link.href) ? 'mobile-link-active' : ''
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <LanguageSelector scrolled={scrolled} isMobile={true} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navegacion;
