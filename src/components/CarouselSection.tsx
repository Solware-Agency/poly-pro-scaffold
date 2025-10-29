import { useLanguage } from '@/context/LanguageContext';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

const images = [
  {
    name: 'Image 1',
    image:
      'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2002.webp',
  },
  {
    name: 'Image 2',
    image:
      'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2004.webp',
  },
  {
    name: 'Image 3',
    image:
      'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2005.webp',
  },
  {
    name: 'Image 4',
    image:
      'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2006.webp',
  },
  {
    name: 'Image 5',
    image:
      'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2007.webp',
  },
  {
    name: 'Image 6',
    image:
      'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2008.webp',
  },
  {
    name: 'Image 7',
    image:
      'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2009.webp',
  },
  {
    name: 'Image 8',
    image:
      'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2010.webp',
  },
  {
    name: 'Image 9',
    image:
      'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2011.webp',
  },
  {
    name: 'Image 10',
    image:
      'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2013.webp',
  },
  {
    name: 'Image 11',
    image:
      'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2015.webp',
  },
];

const CarouselSection = () => {
  const { t } = useLanguage();
  return (
    <section
      id='contacto'
      className='py-12 sm:py-16 md:py-20 bg-muted/30 w-full overflow-hidden'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground fade-in-title title-underline px-4'>
            {t.carousel.title}
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto fade-in-title px-4'>
            {t.carousel.subtitle}
          </p>
        </div>

        <InfiniteMovingCards items={images} direction='right' speed='slow' />
      </div>
    </section>
  );
};

export default CarouselSection;
