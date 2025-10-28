export const BUTTON_STYLES = {
  whatsapp: `
    fixed bottom-20 right-4 sm:bottom-6 sm:right-6
    z-whatsapp
    w-14 h-14 sm:w-16 sm:h-16
    bg-[#25D366] hover:bg-[#20BA5A]
    rounded-full
    flex items-center justify-center
    shadow-xl hover:shadow-2xl
    transition-all duration-300
    hover:scale-110 active:scale-95
    focus:outline-none focus:ring-4 focus:ring-primary/50
    group
    pulse-subtle
  `,
  tooltip: `
    absolute -top-12 left-1/2 -translate-x-1/2
    bg-secondary text-secondary-foreground
    px-3 py-1.5 rounded-lg text-sm font-medium
    whitespace-nowrap
    opacity-0 group-hover:opacity-100
    transition-opacity duration-200
    pointer-events-none
    shadow-lg
    z-tooltip
  `,
} as const;

export const CARD_STYLES = {
  feature: {
    base: "p-4 sm:p-6 rounded-lg transition-[transform,box-shadow,background-color] duration-500 ease-out hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 w-full max-w-full",
    iconContainer: "mb-3 sm:mb-4 inline-flex p-2 sm:p-3 bg-primary/10 rounded-lg transition-transform duration-300 hover:scale-110",
    icon: "w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0",
    title: "text-lg sm:text-xl font-bold mb-2 text-foreground fade-in-title break-words leading-tight",
    description: "text-sm sm:text-base text-muted-foreground leading-relaxed break-words text-justified",
  },
  product: {
    base: "glass-surface rounded-lg overflow-hidden hover:scale-[1.02] transition-[transform,box-shadow,backdrop-filter] duration-500 ease-out hover:shadow-xl will-change-transform w-full max-w-full",
    imageContainer: "h-40 sm:h-48 bg-muted overflow-hidden w-full",
    image: "w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105 max-w-full",
  },
} as const;

export const NAV_STYLES = {
  getNavClasses: (scrolled: boolean) =>
    `fixed top-0 left-0 right-0 z-header ${scrolled ? 'glass-surface' : 'glass-transparent'}`,

  getTextClasses: (scrolled: boolean) =>
    scrolled
      ? 'text-foreground hover:text-primary'
      : 'text-white hover:text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]',

  getLogoClasses: (scrolled: boolean) =>
    `h-10 md:h-12 w-auto group-hover:scale-105 transition-all duration-500 ${
      scrolled ? 'drop-shadow-none' : 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'
    }`,

  getButtonClasses: (scrolled: boolean) =>
    `md:hidden p-2 rounded-lg transition-all duration-500 ${
      scrolled
        ? 'hover:bg-muted text-foreground'
        : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:bg-white/10'
    }`,

  getMobileMenuClasses: (scrolled: boolean) =>
    `md:hidden pb-4 animate-fade-in ${scrolled ? '' : 'bg-black/50 backdrop-blur-md rounded-lg'}`,

  getMobileLinkClasses: (scrolled: boolean) =>
    `font-medium py-2 px-4 rounded-lg transition-colors ${
      scrolled
        ? 'text-foreground hover:text-primary hover:bg-muted'
        : 'text-white hover:text-white/80 hover:bg-white/10'
    }`,
} as const;
