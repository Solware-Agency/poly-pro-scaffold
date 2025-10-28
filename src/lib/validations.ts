import type { ContactFormData, ValidationResult } from '@/types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

const ERROR_MESSAGES = {
  nameRequired: "Por favor, ingresa tu nombre",
  emailRequired: "Por favor, ingresa tu correo electrónico",
  emailInvalid: "Por favor, ingresa un correo electrónico válido",
  messageRequired: "Por favor, escribe un mensaje",
} as const;

export const validateContactForm = (data: ContactFormData): ValidationResult => {
  if (!validateRequired(data.nombre)) {
    return {
      isValid: false,
      error: ERROR_MESSAGES.nameRequired,
    };
  }

  if (!validateRequired(data.email)) {
    return {
      isValid: false,
      error: ERROR_MESSAGES.emailRequired,
    };
  }

  if (!validateEmail(data.email)) {
    return {
      isValid: false,
      error: ERROR_MESSAGES.emailInvalid,
    };
  }

  if (!validateRequired(data.mensaje)) {
    return {
      isValid: false,
      error: ERROR_MESSAGES.messageRequired,
    };
  }

  return { isValid: true };
};
