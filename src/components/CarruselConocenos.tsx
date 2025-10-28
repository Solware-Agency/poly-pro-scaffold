import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/context/LanguageContext";

const GALLERY_IMAGES = [
  "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2015.webp",
  "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2013.webp",
  "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2011.webp",
  "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2010.webp",
  "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2009.webp",
  "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2008.webp",
  "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2005.webp",
  "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2004.webp",
  "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2001%20.webp",
];

const CarruselConocenos = () => {
  const { t } = useLanguage();

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground fade-in-title title-underline px-4">
            {t.gallery.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto fade-in-title px-4">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {GALLERY_IMAGES.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="glass-surface rounded-lg overflow-hidden hover-smooth transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                    <div className="aspect-[4/3] w-full">
                      <img
                        src={image}
                        alt={`Instalaciones POLYPACK ${index + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CarruselConocenos;
