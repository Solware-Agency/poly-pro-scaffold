import { LucideIcon } from "lucide-react";

export interface TarjetaCaracteristicaProps {
  icono: LucideIcon;
  titulo: string;
  descripcion: string;
  variante?: "glass" | "neuo";
}

export interface TarjetaProductoProps {
  titulo: string;
  descripcion: string;
  especificaciones: string[];
  imagen?: string;
}

export interface LanguageSelectorProps {
  scrolled?: boolean;
  isMobile?: boolean;
}

export interface NavegacionProps {
  className?: string;
}
