import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-sm">
          © {new Date().getFullYear()} POLYPACK. {t.footer.rights}
        </p>
        <p className="text-sm">
          {t.footer.rif}
        </p>
        <p className="text-sm">
          {t.footer.developedBy}{" "}
          <a
            href="https://www.solware.agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium transition-all"
          >
            Solware
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
