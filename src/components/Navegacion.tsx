import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoPolypack from "@/assets/logo-polypack.webp";

const Navegacion = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  
  const enlaces = [
    { nombre: "Inicio", href: "#inicio" },
    { nombre: "Nosotros", href: "#nosotros" },
    { nombre: "Productos", href: "#productos" },
    { nombre: "Tecnología", href: "#tecnologia" },
    { nombre: "Clientes", href: "#clientes" },
    { nombre: "Contacto", href: "#contacto" },
  ];
  
  const cerrarMenu = () => setMenuAbierto(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-header glass-surface">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center group">
            <img 
              src={logoPolypack} 
              alt="Logo POLYPACK" 
              className="h-10 md:h-12 w-auto group-hover:scale-105 transition-transform"
            />
          </a>
          
          {/* Enlaces desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {enlaces.map((enlace) => (
              <a
                key={enlace.nombre}
                href={enlace.href}
                className="text-foreground hover:text-primary font-medium transition-colors story-link"
              >
                {enlace.nombre}
              </a>
            ))}
          </div>
          
          {/* Botón menú móvil */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
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
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {enlaces.map((enlace) => (
                <a
                  key={enlace.nombre}
                  href={enlace.href}
                  onClick={cerrarMenu}
                  className="text-foreground hover:text-primary font-medium py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                >
                  {enlace.nombre}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navegacion;
