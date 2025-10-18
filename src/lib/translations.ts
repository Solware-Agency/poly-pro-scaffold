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
    developed: string;
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
      cta: 'Conectemos!',
    },
    about: {
      title: 'Sobre POLYPACK',
      subtitle: 'Líderes en fabricación de empaques plásticos',
      description: 'POLYPACK es una empresa venezolana con más de 30 años de experiencia en la fabricación de empaques plásticos de alta calidad. Nos especializamos en películas tubulares de polietileno para diversos sectores industriales.',
      mission: 'Nuestra Misión',
      missionText: 'Fabricar empaques plásticos de excelente calidad que superen las expectativas de nuestros clientes, utilizando tecnología de punta y procesos sostenibles.',
      vision: 'Nuestra Visión',
      visionText: 'Ser la empresa líder en soluciones de empaque plástico en Venezuela y expandir nuestra presencia en el mercado latinoamericano.',
      values: 'Nuestros Valores',
      valuesText: 'Calidad, compromiso, innovación y responsabilidad ambiental guían cada uno de nuestros procesos productivos.',
    },
    features: {
      title: '¿Por Qué Elegirnos?',
      subtitle: 'Experiencia, calidad y compromiso',
      quality: {
        title: 'Calidad Garantizada',
        description: 'Productos fabricados bajo estrictos estándares de calidad, con materias primas certificadas y controles rigurosos en cada etapa.',
      },
      experience: {
        title: '+30 Años de Experiencia',
        description: 'Tres décadas perfeccionando nuestros procesos y satisfaciendo las necesidades de clientes en diversos sectores industriales.',
      },
      technology: {
        title: 'Tecnología Avanzada',
        description: 'Maquinaria de extrusión de última generación que garantiza productos uniformes y de alta resistencia.',
      },
      sustainability: {
        title: 'Compromiso Ambiental',
        description: 'Procesos productivos responsables con el medio ambiente, utilizando materiales reciclables y reduciendo desperdicios.',
      },
    },
    products: {
      title: 'Nuestros Productos',
      subtitle: 'Soluciones a medida para cada industria',
      specifications: 'Especificaciones:',
      tubular: {
        title: 'Película Tubular',
        description: 'Películas de polietileno de alta y baja densidad, ideal para empaques industriales y comerciales.',
        specs: [
          'Calibres desde 2 hasta 8 milésimas',
          'Anchos de 10 cm hasta 150 cm',
          'Alta resistencia y durabilidad',
          'Transparente o pigmentada',
        ],
      },
      industrial: {
        title: 'Bolsas Industriales',
        description: 'Bolsas de alta resistencia para sectores agrícola, alimenticio, químico y construcción.',
        specs: [
          'Diversas capacidades y tamaños',
          'Con o sin impresión personalizada',
          'Resistentes a condiciones extremas',
          'Certificadas para alimentos',
        ],
      },
      custom: {
        title: 'Soluciones Personalizadas',
        description: 'Desarrollamos productos a medida según las especificaciones y necesidades de cada cliente.',
        specs: [
          'Diseño y desarrollo conjunto',
          'Muestras y prototipos',
          'Asesoría técnica especializada',
          'Producción escalable',
        ],
      },
    },
    contact: {
      title: 'Conectemos!',
      subtitle: 'Estamos aquí para ayudarte',
      info: {
        title: 'Tengamos una reunión',
        location: 'Ubicación',
        phone: 'Teléfono',
        schedule: 'Horario de Atención',
      },
      name: 'Nombre',
      email: 'Correo Electrónico',
      message: 'Mensaje',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'johndoe@gmail.com',
      messagePlaceholder: 'Déjanos tu comentario',
      send: 'Te contactaremos pronto',
      scheduleWeekdays: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
      scheduleSaturday: 'Sábados: 8:00 AM - 12:00 PM',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      developed: 'Desarrollado con',
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
      description: 'POLYPACK is a Venezuelan company with over 30 years of experience in manufacturing high-quality plastic packaging. We specialize in polyethylene tubular films for various industrial sectors.',
      mission: 'Our Mission',
      missionText: 'To manufacture excellent quality plastic packaging that exceeds our customers\' expectations, using cutting-edge technology and sustainable processes.',
      vision: 'Our Vision',
      visionText: 'To be the leading company in plastic packaging solutions in Venezuela and expand our presence in the Latin American market.',
      values: 'Our Values',
      valuesText: 'Quality, commitment, innovation and environmental responsibility guide each of our production processes.',
    },
    features: {
      title: 'Why Choose Us?',
      subtitle: 'Experience, quality and commitment',
      quality: {
        title: 'Guaranteed Quality',
        description: 'Products manufactured under strict quality standards, with certified raw materials and rigorous controls at every stage.',
      },
      experience: {
        title: '+30 Years of Experience',
        description: 'Three decades perfecting our processes and meeting the needs of customers in various industrial sectors.',
      },
      technology: {
        title: 'Advanced Technology',
        description: 'State-of-the-art extrusion machinery that guarantees uniform and highly resistant products.',
      },
      sustainability: {
        title: 'Environmental Commitment',
        description: 'Environmentally responsible production processes, using recyclable materials and reducing waste.',
      },
    },
    products: {
      title: 'Our Products',
      subtitle: 'Customized solutions for every industry',
      specifications: 'Specifications:',
      tubular: {
        title: 'Tubular Film',
        description: 'High and low density polyethylene films, ideal for industrial and commercial packaging.',
        specs: [
          'Gauges from 2 to 8 thousandths',
          'Widths from 10 cm to 150 cm',
          'High strength and durability',
          'Transparent or pigmented',
        ],
      },
      industrial: {
        title: 'Industrial Bags',
        description: 'High-strength bags for agricultural, food, chemical and construction sectors.',
        specs: [
          'Various capacities and sizes',
          'With or without custom printing',
          'Resistant to extreme conditions',
          'Food-grade certified',
        ],
      },
      custom: {
        title: 'Custom Solutions',
        description: 'We develop custom products according to each client\'s specifications and needs.',
        specs: [
          'Joint design and development',
          'Samples and prototypes',
          'Specialized technical advice',
          'Scalable production',
        ],
      },
    },
    contact: {
      title: 'Let\'s Connect!',
      subtitle: 'We are here to help you',
      info: {
        title: 'Let\'s have a meeting',
        location: 'Location',
        phone: 'Phone',
        schedule: 'Business Hours',
      },
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'johndoe@gmail.com',
      messagePlaceholder: 'Leave us your comment',
      send: 'We\'ll contact you soon',
      scheduleWeekdays: 'Monday to Friday: 8:00 AM - 5:00 PM',
      scheduleSaturday: 'Saturdays: 8:00 AM - 12:00 PM',
    },
    footer: {
      rights: 'All rights reserved.',
      developed: 'Developed with',
    },
  },
};
