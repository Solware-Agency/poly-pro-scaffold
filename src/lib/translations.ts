export type Language = 'es' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    mission: string;
    missionText: string;
    vision: string;
    visionText: string;
    values: string;
    valuesText: string;
  };
  features: {
    title: string;
    subtitle: string;
    quality: {
      title: string;
      description: string;
    };
    experience: {
      title: string;
      description: string;
    };
    technology: {
      title: string;
      description: string;
    };
    sustainability: {
      title: string;
      description: string;
    };
  };
  products: {
    title: string;
    subtitle: string;
    tubular: {
      title: string;
      description: string;
      specs: string[];
    };
    industrial: {
      title: string;
      description: string;
      specs: string[];
    };
    custom: {
      title: string;
      description: string;
      specs: string[];
    };
  };
  contact: {
    title: string;
    subtitle: string;
    info: {
      title: string;
      location: string;
      phone: string;
      schedule: string;
    };
    name: string;
    email: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    scheduleWeekdays: string;
    scheduleSaturday: string;
  };
  products: {
    title: string;
    subtitle: string;
    specifications: string;
    tubular: {
      title: string;
      description: string;
      specs: string[];
    };
    industrial: {
      title: string;
      description: string;
      specs: string[];
    };
    custom: {
      title: string;
      description: string;
      specs: string[];
    };
  };
  footer: {
    rights: string;
    rif: string;
    developedBy: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      products: 'Productos',
      contact: 'Contacto',
    },
    hero: {
      title: 'Soluciones Innovadoras en Plásticos',
      subtitle: 'Más de 30 años fabricando empaques plásticos de alta calidad para la industria venezolana',
      cta: '¡Conectemos!',
    },
    about: {
      title: 'Sobre POLYPACK',
      subtitle: 'Líderes en la fabricación de empaques plásticos',
      description: 'Empresa familiar venezolana con más de 30 años fabricando empaques y bolsas plásticas de calidad, con procesos controlados y mejora constante.',
      mission: 'Nuestra Misión',
      missionText: 'Fabricar empaques plásticos resistentes y confiables, adaptados a las necesidades de cada cliente. Nuestra misión es optimizar los procesos productivos, mantener el control de calidad y aprovechar cada mejora tecnológica para reducir costos y desperdicios.',
      vision: 'Nuestra Visión',
      visionText: 'Consolidarnos como una empresa venezolana de referencia. Nuestra visión es seguir invirtiendo en el país, renovando la maquinaria para reducir desperdicios y aumentar la eficiencia de producción.',
      values: 'Nuestros Valores',
      valuesText: 'Calidad, compromiso, innovación y responsabilidad ambiental guían cada uno de nuestros procesos productivos.',
    },
    features: {
      title: '¿Por Qué Elegirnos?',
      subtitle: 'Experiencia, calidad y compromiso',
      quality: {
        title: 'Calidad Garantizada',
        description: 'Fabricamos con materia prima premium y reciclada de nuestra planta, controlando cada etapa para garantizar calidad, resistencia y uniformidad.',
      },
      experience: {
        title: 'Más de 30 Años de Experiencia',
        description: 'Más de tres décadas de trabajo familiar, perfeccionando procesos y fortaleciendo la confianza de nuestros clientes en todo el país.',
      },
      technology: {
        title: 'Tecnología Avanzada',
        description: 'Contamos con equipos modernos en sellado y extrusión que optimizan la precisión, reducen desperdicios y mejoran la eficiencia productiva.',
      },
      sustainability: {
        title: 'Compromiso Ambiental',
        description: 'Reutilizamos el 100% de nuestros propios residuos, evitando químicos y reduciendo el impacto ambiental de nuestra producción.',
      },
    },
    products: {
      title: 'Nuestros Productos',
      subtitle: 'Soluciones a medida para cada industria',
      specifications: 'Especificaciones:',
      tubular: {
        title: 'Película Tubular',
        description: 'Películas tubulares fabricadas a medida, con espesores y anchos ajustados según la necesidad de cada cliente.',
        specs: [
          'Calibres desde 2 hasta 8 milésimas',
          'Anchos de 10 cm hasta 150 cm',
          'Alta resistencia y durabilidad',
          'Transparente o pigmentada',
        ],
      },
      industrial: {
        title: 'Bolsas Industriales',
        description: 'Bolsas fabricadas con mezclas técnicas según el uso, garantizando sellado firme, resistencia y excelente presentación.',
        specs: [
          'Diversas capacidades y tamaños',
          'Con o sin impresión personalizada',
          'Resistentes a condiciones extremas',
          'Certificadas para alimentos',
        ],
      },
      custom: {
        title: 'Distribución Nacional',
        description: 'Entregamos a nivel nacional con tiempos confiables y atención directa para cada cliente.',
        specs: [
          'Distribución directa a comercios',
          'Cobertura a nivel nacional',
          'Entregas puntuales y confiables',
          'Atención personalizada',
        ],
      },
    },
    contact: {
      title: '¡Conectemos!',
      subtitle: 'Estamos aquí para ayudarte',
      info: {
        title: 'Información de Contacto',
        location: 'Ubicación',
        phone: 'Teléfono',
        schedule: 'Horario de Atención',
      },
      name: 'Nombre',
      email: 'Correo Electrónico',
      message: 'Mensaje',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'johndoe@gmail.com',
      messagePlaceholder: 'Escribe tu mensaje aquí',
      send: 'Te contactaremos pronto',
      scheduleWeekdays: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
      scheduleSaturday: 'Sábados: 8:00 AM - 12:00 PM',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      rif: 'RIF: J-502691910',
      developedBy: 'Desarrollado por',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      contact: 'Contact',
    },
    hero: {
      title: 'Innovative Plastic Solutions',
      subtitle: 'Over 30 years manufacturing high-quality plastic packaging for Venezuelan industry',
      cta: 'Let\'s Connect!',
    },
    about: {
      title: 'About POLYPACK',
      subtitle: 'Leaders in plastic packaging manufacturing',
      description: 'Venezuelan family business with over 30 years manufacturing quality plastic packaging and bags, with controlled processes and continuous improvement.',
      mission: 'Our Mission',
      missionText: 'To manufacture resistant and reliable plastic packaging, adapted to each client\'s needs. Our mission is to optimize production processes, maintain quality control, and leverage every technological improvement to reduce costs and waste.',
      vision: 'Our Vision',
      visionText: 'To consolidate ourselves as a leading Venezuelan company. Our vision is to continue investing in the country, renewing machinery to reduce waste and increase production efficiency.',
      values: 'Our Values',
      valuesText: 'Quality, commitment, innovation and environmental responsibility guide each of our production processes.',
    },
    features: {
      title: 'Why Choose Us?',
      subtitle: 'Experience, quality and commitment',
      quality: {
        title: 'Guaranteed Quality',
        description: 'We manufacture with premium and recycled raw materials from our plant, controlling every stage to guarantee quality, strength, and uniformity.',
      },
      experience: {
        title: 'Over 30 Years of Experience',
        description: 'Over three decades of family work, perfecting processes and strengthening the trust of our clients throughout the country.',
      },
      technology: {
        title: 'Advanced Technology',
        description: 'We have modern sealing and extrusion equipment that optimizes precision, reduces waste, and improves production efficiency.',
      },
      sustainability: {
        title: 'Environmental Commitment',
        description: 'We reuse 100% of our own waste, avoiding chemicals and reducing the environmental impact of our production.',
      },
    },
    products: {
      title: 'Our Products',
      subtitle: 'Customized solutions for every industry',
      specifications: 'Specifications:',
      tubular: {
        title: 'Tubular Film',
        description: 'Tubular films manufactured to measure, with thicknesses and widths adjusted according to each client\'s needs.',
        specs: [
          'Gauges from 2 to 8 thousandths',
          'Widths from 10 cm to 150 cm',
          'High strength and durability',
          'Transparent or pigmented',
        ],
      },
      industrial: {
        title: 'Industrial Bags',
        description: 'Bags manufactured with technical blends according to use, guaranteeing firm sealing, strength, and excellent presentation.',
        specs: [
          'Various capacities and sizes',
          'With or without custom printing',
          'Resistant to extreme conditions',
          'Food-grade certified',
        ],
      },
      custom: {
        title: 'National Distribution',
        description: 'We deliver nationwide with reliable timelines and direct attention for each client.',
        specs: [
          'Direct distribution to businesses',
          'Nationwide coverage',
          'Punctual and reliable deliveries',
          'Personalized service',
        ],
      },
    },
    contact: {
      title: 'Let\'s Connect!',
      subtitle: 'We are here to help you',
      info: {
        title: 'Contact Information',
        location: 'Location',
        phone: 'Phone',
        schedule: 'Business Hours',
      },
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'johndoe@gmail.com',
      messagePlaceholder: 'Write your message here',
      send: 'We Will Contact You Soon',
      scheduleWeekdays: 'Monday to Friday: 8:00 AM - 5:00 PM',
      scheduleSaturday: 'Saturdays: 8:00 AM - 12:00 PM',
    },
    footer: {
      rights: 'All rights reserved.',
      rif: 'RIF: J-502691910',
      developedBy: 'Developed by',
    },
  },
};
