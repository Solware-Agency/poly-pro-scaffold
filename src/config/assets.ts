import heroImage from "@/assets/factory-hero.webp";
import extrusionImage from "@/assets/factory-extrusion.webp";

export const ASSET_URLS = {
  hero: {
    image: heroImage,
    video: "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Polypack%20Vid.%20Final%20(1)%20(1).mp4",
  },
  about: {
    image: "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2014.webp",
  },
  factory: {
    extrusion: extrusionImage,
    gallery: "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2003.webp",
  },
  products: {
    product1: "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2016.webp",
    product2: "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2012.webp",
    product3: "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2001%20.webp",
  },
  gallery: [
    "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2015.webp",
    "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2013.webp",
    "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2011.webp",
    "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2010.webp",
    "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2009.webp",
    "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2008.webp",
    "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2005.webp",
    "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2004.webp",
    "https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/Polypack/Foto%2001%20.webp",
  ],
} as const;
