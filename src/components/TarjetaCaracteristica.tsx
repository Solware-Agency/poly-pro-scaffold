import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TarjetaCaracteristicaProps {
  icono: LucideIcon;
  titulo: string;
  descripcion: string;
  variante?: "glass" | "neuo";
}

const BASE_CLASSES = "p-6 rounded-lg transition-[transform,box-shadow,background-color] duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1";
const ICON_CONTAINER_CLASSES = "mb-4 inline-flex p-3 bg-primary/10 rounded-lg transition-transform duration-300 hover:scale-110";
const ICON_CLASSES = "w-6 h-6 text-primary";
const TITLE_CLASSES = "text-xl font-bold mb-2 text-foreground fade-in-title";
const DESCRIPTION_CLASSES = "text-muted-foreground leading-relaxed";

const TarjetaCaracteristica = ({
  icono: Icono,
  titulo,
  descripcion,
  variante = "glass"
}: TarjetaCaracteristicaProps) => {
  const varianteClasses = variante === "glass" ? "glass-surface" : "neuo-card";

  return (
    <div className={cn(BASE_CLASSES, varianteClasses)}>
      <div className={ICON_CONTAINER_CLASSES}>
        <Icono className={ICON_CLASSES} />
      </div>
      <h3 className={TITLE_CLASSES}>
        {titulo}
      </h3>
      <p className={DESCRIPTION_CLASSES}>
        {descripcion}
      </p>
    </div>
  );
};

export default TarjetaCaracteristica;
