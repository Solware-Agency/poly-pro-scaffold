import { cn } from "@/lib/utils";
import { CARD_STYLES } from "@/config/styles";
import type { TarjetaCaracteristicaProps } from "@/types/components";

const TarjetaCaracteristica = ({
  icono: Icono,
  titulo,
  descripcion,
  variante = "glass"
}: TarjetaCaracteristicaProps) => {
  const varianteClasses = variante === "glass" ? "glass-surface" : "neuo-card";

  return (
    <div className={cn(CARD_STYLES.feature.base, varianteClasses)}>
      <div className={CARD_STYLES.feature.iconContainer}>
        <Icono className={CARD_STYLES.feature.icon} />
      </div>
      <h3 className={CARD_STYLES.feature.title}>
        {titulo}
      </h3>
      <p className={CARD_STYLES.feature.description}>
        {descripcion}
      </p>
    </div>
  );
};

export default TarjetaCaracteristica;
