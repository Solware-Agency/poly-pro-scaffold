export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export interface ContactFormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateContactForm = (data: ContactFormData): ValidationResult => {
  if (!validateRequired(data.nombre)) {
    return {
      isValid: false,
      error: "Por favor ingresa tu nombre"
    };
  }

  if (!validateRequired(data.email)) {
    return {
      isValid: false,
      error: "Por favor ingresa tu email"
    };
  }

  if (!validateEmail(data.email)) {
    return {
      isValid: false,
      error: "Por favor ingresa un email válido"
    };
  }

  if (!validateRequired(data.mensaje)) {
    return {
      isValid: false,
      error: "Por favor ingresa tu mensaje"
    };
  }

  return { isValid: true };
};
