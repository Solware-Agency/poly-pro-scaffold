import { LucideIcon } from "lucide-react";

interface TarjetaCaracteristicaProps {
  icono: LucideIcon;
  titulo: string;
  descripcion: string;
  variante?: "glass" | "neuo";
}

const TarjetaCaracteristica = ({ 
  icono: Icono, 
  titulo, 
  descripcion,
  variante = "glass"
}: TarjetaCaracteristicaProps) => {
  const claseBase = "p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl";
  const claseVariante = variante === "glass" 
    ? "glass-surface" 
    : "neuo-card";
  
  return (
    <div className={`${claseBase} ${claseVariante}`}>
      <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
        <Icono className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">
        {titulo}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {descripcion}
      </p>
    </div>
  );
};

export default TarjetaCaracteristica;
