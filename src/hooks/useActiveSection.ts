import { useState, useEffect } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>("inicio");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Crear un array para almacenar las secciones visibles
      const visibleSections: { id: string; ratio: number }[] = [];

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          visibleSections.push({
            id: entry.target.id,
            ratio: entry.intersectionRatio,
          });
        }
      });

      // Si hay secciones visibles, seleccionar la que tenga mayor ratio de intersección
      if (visibleSections.length > 0) {
        const mostVisible = visibleSections.reduce((prev, current) =>
          current.ratio > prev.ratio ? current : prev,
        );
        setActiveSection(mostVisible.id);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observar todas las secciones
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
};
