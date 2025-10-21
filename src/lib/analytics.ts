declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-MK1G5LR1J7', {
      page_path: path,
      page_title: title,
    });
  }
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: 'WhatsApp Button',
  });
};

export const trackContactFormSubmit = (success: boolean) => {
  trackEvent('contact_form_submit', {
    event_category: 'lead_generation',
    event_label: success ? 'Success' : 'Error',
    value: success ? 1 : 0,
  });
};

export const trackLanguageChange = (language: string) => {
  trackEvent('language_change', {
    event_category: 'engagement',
    event_label: language,
  });
};

export const trackProductView = (productName: string) => {
  trackEvent('product_view', {
    event_category: 'engagement',
    event_label: productName,
  });
};
