export type Language = 'es' | 'en';

export interface Translations {
  nav: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  products: {
    title: string;
    subtitle: string;
    cta: string;
    item1: {
      title: string;
      description: string;
    };
    item2: {
      title: string;
      description: string;
    };
    item3: {
      title: string;
      description: string;
    };
  };
  features: {
    title: string;
    feature1: {
      title: string;
      description: string;
    };
    feature2: {
      title: string;
      description: string;
    };
    feature3: {
      title: string;
      description: string;
    };
    feature4: {
      title: string;
      description: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    text1: string;
    text2: string;
    text3: string;
  };
  gallery: {
    title: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    info: {
      title: string;
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      products: 'Productos',
      about: 'Nosotros',
      contact: 'Contacto',
    },
    hero: {
      title: 'Innovación en Plásticos',
      subtitle: 'Soluciones de alta calidad en extrusión de plástico para la industria',
      cta: 'Contáctanos',
    },
    products: {
      title: 'Nuestros Productos',
      subtitle: 'Fabricamos una amplia gama de productos plásticos',
      cta: 'Solicitar Cotización',
      item1: {
        title: 'Película Stretch',
        description: 'Película de alta resistencia para paletizado y embalaje industrial',
      },
      item2: {
        title: 'Bolsas Industriales',
        description: 'Bolsas de polietileno de alta y baja densidad para diferentes aplicaciones',
      },
      item3: {
        title: 'Plástico Termoencogible',
        description: 'Soluciones de empaque termoencogible para múltiples industrias',
      },
    },
    features: {
      title: 'Por qué elegirnos',
      feature1: {
        title: 'Calidad Garantizada',
        description: 'Productos certificados que cumplen con los más altos estándares',
      },
      feature2: {
        title: 'Entrega Rápida',
        description: 'Logística eficiente para cumplir con tus plazos',
      },
      feature3: {
        title: 'Precios Competitivos',
        description: 'Las mejores tarifas del mercado sin comprometer calidad',
      },
      feature4: {
        title: 'Asesoría Técnica',
        description: 'Expertos que te ayudan a elegir la mejor solución',
      },
    },
    about: {
      title: 'Sobre Nosotros',
      subtitle: 'Líderes en la industria del plástico',
      text1: 'Con más de 25 años de experiencia en el mercado, somos una empresa líder en la fabricación de productos plásticos de alta calidad.',
      text2: 'Nuestra planta cuenta con tecnología de punta en extrusión de plástico, lo que nos permite ofrecer productos innovadores y personalizados para cada cliente.',
      text3: 'Nos comprometemos con la calidad, el servicio y la innovación continua para satisfacer las necesidades de nuestros clientes en diversas industrias.',
    },
    gallery: {
      title: 'Nuestra Planta',
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tienes alguna pregunta? Estamos aquí para ayudarte',
      name: 'Nombre',
      email: 'Correo Electrónico',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      info: {
        title: 'Información de Contacto',
        address: 'Av. Industrial #123, Zona Industrial',
        phone: '+52 (55) 1234-5678',
        email: 'contacto@polypack.com',
        hours: 'Lunes a Viernes: 8:00 - 18:00',
      },
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Innovation in Plastics',
      subtitle: 'High-quality plastic extrusion solutions for industry',
      cta: 'Contact Us',
    },
    products: {
      title: 'Our Products',
      subtitle: 'We manufacture a wide range of plastic products',
      cta: 'Request Quote',
      item1: {
        title: 'Stretch Film',
        description: 'High-strength film for palletizing and industrial packaging',
      },
      item2: {
        title: 'Industrial Bags',
        description: 'High and low-density polyethylene bags for different applications',
      },
      item3: {
        title: 'Shrink Wrap',
        description: 'Heat-shrink packaging solutions for multiple industries',
      },
    },
    features: {
      title: 'Why Choose Us',
      feature1: {
        title: 'Guaranteed Quality',
        description: 'Certified products that meet the highest standards',
      },
      feature2: {
        title: 'Fast Delivery',
        description: 'Efficient logistics to meet your deadlines',
      },
      feature3: {
        title: 'Competitive Prices',
        description: 'Best market rates without compromising quality',
      },
      feature4: {
        title: 'Technical Advice',
        description: 'Experts who help you choose the best solution',
      },
    },
    about: {
      title: 'About Us',
      subtitle: 'Leaders in the plastics industry',
      text1: 'With over 25 years of experience in the market, we are a leading company in the manufacturing of high-quality plastic products.',
      text2: 'Our plant features state-of-the-art plastic extrusion technology, which allows us to offer innovative and customized products for each customer.',
      text3: 'We are committed to quality, service, and continuous innovation to meet the needs of our customers in various industries.',
    },
    gallery: {
      title: 'Our Plant',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have any questions? We are here to help',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      info: {
        title: 'Contact Information',
        address: '123 Industrial Ave, Industrial Zone',
        phone: '+52 (55) 1234-5678',
        email: 'contact@polypack.com',
        hours: 'Monday to Friday: 8:00 AM - 6:00 PM',
      },
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};
