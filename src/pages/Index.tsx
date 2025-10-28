import Navegacion from "@/components/Navegacion";
import BotonWhatsApp from "@/components/BotonWhatsApp";
import Footer from "@/components/Footer";
import HeroSection from "@/features/hero/HeroSection";
import AboutSection from "@/features/about/AboutSection";
import FactoryGalleryPreview from "@/features/about/FactoryGalleryPreview";
import ProductsSection from "@/features/products/ProductsSection";
import GallerySection from "@/features/gallery/GallerySection";
import ContactSection from "@/features/contact/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Navegacion />
      <BotonWhatsApp />
      <HeroSection />
      <AboutSection />
      <FactoryGalleryPreview />
      <ProductsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
