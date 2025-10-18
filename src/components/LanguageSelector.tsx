import { useLanguage } from '@/context/LanguageContext';

interface LanguageSelectorProps {
  scrolled?: boolean;
  isMobile?: boolean;
}

export const LanguageSelector = ({ scrolled = false, isMobile = false }: LanguageSelectorProps) => {
  const { language, setLanguage } = useLanguage();

  const linkClasses = isMobile
    ? `font-medium py-2 px-4 rounded-lg transition-colors ${
        scrolled
          ? 'text-foreground hover:text-primary hover:bg-muted'
          : 'text-white hover:text-white/80 hover:bg-white/10'
      }`
    : `font-medium transition-all duration-500 story-link ${
        scrolled
          ? 'text-foreground hover:text-primary'
          : 'text-white hover:text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'
      }`;

  const activeClasses = isMobile
    ? ''
    : 'underline underline-offset-4';

  const containerClasses = isMobile
    ? 'flex gap-4'
    : 'flex items-center gap-4';

  return (
    <div className={containerClasses}>
      <button
        onClick={() => setLanguage('es')}
        className={`${linkClasses} ${language === 'es' ? activeClasses : ''}`}
      >
        ES
      </button>
      <span className={scrolled ? 'text-foreground/30' : 'text-white/30'}>|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`${linkClasses} ${language === 'en' ? activeClasses : ''}`}
      >
        EN
      </button>
    </div>
  );
};
