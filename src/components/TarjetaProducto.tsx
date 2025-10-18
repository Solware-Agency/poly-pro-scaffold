import { useLanguage } from "@/context/LanguageContext";

interface TarjetaProductoProps {
  titulo: string;
  descripcion: string;
  especificaciones: string[];
  imagen?: string;
}

const CARD_CLASSES = "glass-surface rounded-lg overflow-hidden hover:scale-[1.02] transition-[transform,box-shadow,backdrop-filter] duration-500 ease-out hover:shadow-xl will-change-transform w-full max-w-full";
const IMAGE_CONTAINER_CLASSES = "h-48 bg-muted overflow-hidden w-full";
const IMAGE_CLASSES = "w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105 max-w-full";

const TarjetaProducto = ({ titulo, descripcion, especificaciones, imagen }: TarjetaProductoProps) => {
  const { t } = useLanguage();
  return (
    <div className={CARD_CLASSES}>
      {imagen && (
        <div className={IMAGE_CONTAINER_CLASSES}>
          <img
            src={imagen}
            alt={titulo}
            className={IMAGE_CLASSES}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-foreground fade-in-title">
          {titulo}
        </h3>
        <p className="text-muted-foreground mb-4">
          {descripcion}
        </p>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">{t.products.specifications}</p>
          <ul className="space-y-1">
            {especificaciones.map((spec, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TarjetaProducto;
