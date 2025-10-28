export interface ContactFormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export interface ProductSpec {
  title: string;
  description: string;
  specs: string[];
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  location: string;
}

export interface WhatsAppConfig {
  number: string;
  defaultMessage: {
    es: string;
    en: string;
  };
}

export interface ScrollConfig {
  threshold: number;
}

export interface AnalyticsConfig {
  gaTrackingId: string;
}

export interface ZIndexConfig {
  base: number;
  header: number;
  modal: number;
  toast: number;
  whatsapp: number;
  tooltip: number;
}
