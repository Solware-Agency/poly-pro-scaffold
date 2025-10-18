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
  const claseBase = "p-6 rounded-lg transition-[transform,box-shadow,background-color] duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1";
  const claseVariante = variante === "glass"
    ? "glass-surface"
    : "neuo-card";

  return (
    <div className={`${claseBase} ${claseVariante}`}>
      <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg transition-transform duration-300 hover:scale-110">
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
