import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-white/90" />
      <Button
        variant={language === 'es' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('es')}
        className={`h-8 px-3 ${language !== 'es' ? 'text-white hover:text-white/80' : ''}`}
      >
        ES
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`h-8 px-3 ${language !== 'en' ? 'text-white hover:text-white/80' : ''}`}
      >
        EN
      </Button>
    </div>
  );
};
