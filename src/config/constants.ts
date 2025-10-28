import type { ContactInfo, WhatsAppConfig, ScrollConfig, AnalyticsConfig, ZIndexConfig } from '@/types';

export const CONTACT_CONFIG: ContactInfo = {
  phone: '+584129395171',
  email: 'administracion@plasticospolypack.com',
  instagram: 'https://instagram.com/polypack',
  instagramHandle: '@polypack',
  location: 'Calle La Pedrera, Edificio ENEVA, Piso Sótano 1, Local Sótano 1, Urbanización Industrial Guaicay, Las Minas de Baruta, Miranda',
} as const;

export const WHATSAPP_CONFIG: WhatsAppConfig = {
  number: '+584129395171',
  defaultMessage: {
    es: 'Hola, me gustaría solicitar información sobre sus productos.',
    en: 'Hello, I would like to request information about your products.',
  },
} as const;

export const SCROLL_CONFIG: ScrollConfig = {
  threshold: 50,
} as const;

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  gaTrackingId: 'G-MK1G5LR1J7',
} as const;

export const Z_INDEX: ZIndexConfig = {
  base: 0,
  header: 100,
  modal: 200,
  toast: 300,
  whatsapp: 400,
  tooltip: 500,
} as const;

export const NAV_SECTIONS = ["inicio", "nosotros", "productos", "contacto"] as const;

export type NavSection = typeof NAV_SECTIONS[number];
