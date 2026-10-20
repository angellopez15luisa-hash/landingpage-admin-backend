import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "El nombre completo es obligatorio")
    .min(3, "El nombre debe tener al menos 3 caracteres"),

  email: z
    .string()
    .trim()
    .min(1, "El correo electrónico es obligatorio")
    .email("Ingresa un correo electrónico válido"),

  phone: z
    .string()
    .trim()
    .min(1, "El teléfono es obligatorio")
    .regex(
      /^(\+?\d{1,4}[-.\s]?)?\d{7,14}$/,
      "Ingresa un número de teléfono válido",
    ),

  message: z
    .string()
    .trim()
    .min(1, "El mensaje es obligatorio")
    .min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export const contactSendEmailSchema = z.object({
  body: contactSchema.pick({
    name: true,
    email: true,
    phone: true,
    message: true,
  }),
});
