import TarjetaProducto from "@/components/TarjetaProducto";
import { useLanguage } from "@/context/LanguageContext";
import { ASSET_URLS } from "@/config/assets";

const ProductsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="productos" className="py-12 sm:py-16 md:py-20 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground fade-in-title title-underline px-4">
            {t.products.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto fade-in-title px-4">
            {t.products.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <TarjetaProducto
            titulo={t.products.tubular.title}
            descripcion={t.products.tubular.description}
            especificaciones={t.products.tubular.specs}
            imagen={ASSET_URLS.products.product1}
          />
          <TarjetaProducto
            titulo={t.products.industrial.title}
            descripcion={t.products.industrial.description}
            especificaciones={t.products.industrial.specs}
            imagen={ASSET_URLS.products.product2}
          />
          <TarjetaProducto
            titulo={t.products.custom.title}
            descripcion={t.products.custom.description}
            especificaciones={t.products.custom.specs}
            imagen={ASSET_URLS.products.product3}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
