import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoPolypack from "@/assets/logo-polypack-new.webp";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SCROLL_CONFIG, NAV_SECTIONS } from "@/config/constants";
import { NAV_STYLES } from "@/config/styles";

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

  const navClasses = NAV_STYLES.getNavClasses(scrolled);
  const textClasses = NAV_STYLES.getTextClasses(scrolled);
  const logoClasses = NAV_STYLES.getLogoClasses(scrolled);
  const buttonClasses = NAV_STYLES.getButtonClasses(scrolled);
  const mobileMenuClasses = NAV_STYLES.getMobileMenuClasses(scrolled);
  const mobileLinkClasses = NAV_STYLES.getMobileLinkClasses(scrolled);

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
