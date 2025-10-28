import { ASSET_URLS } from "@/config/assets";

const FactoryGalleryPreview = () => {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-muted/30 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-surface rounded-lg overflow-hidden hover-smooth">
            <img
              src={ASSET_URLS.factory.extrusion}
              alt="Proceso de extrusión"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="glass-surface rounded-lg overflow-hidden hover-smooth">
            <img
              src={ASSET_URLS.factory.gallery}
              alt="Planta de producción"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryGalleryPreview;
