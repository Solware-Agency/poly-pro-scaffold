import { useState, useCallback } from "react";
import { toast } from "sonner";
import { validateContactForm } from "@/lib/validations";
import { trackContactFormSubmit } from "@/lib/analytics";
import type { ContactFormData } from "@/types";

export const useContactForm = (successMessage: string) => {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    email: "",
    mensaje: ""
  });

  const handleInputChange = useCallback((field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({ nombre: "", email: "", mensaje: "" });
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      toast.error(validation.error);
      trackContactFormSubmit(false);
      return;
    }

    toast.success(successMessage);
    trackContactFormSubmit(true);
    resetForm();
  }, [formData, successMessage, resetForm]);

  return {
    formData,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};
