import { z } from 'zod'

export const createNavbarSchema = z.object({
  body: z.object({
    textLogo: z
      .string()
      .min(3, "El texto del logo debe tener al menos 3 caracteres")
      .max(50, "El texto del logo no puede superar los 50 caracteres"),
    hrefLogo: z.string().min(1, "El enlace del logo es obligatorio"),
    textBtn: z
      .string()
      .min(2, "El texto del botón debe tener al menos 2 caracteres")
      .max(20, "El texto del boton no puede superar los 20 caracteres"),
    hrefBtn: z.string().min(1, "El enlace del boton es obligatorio"),
  }),
});

export const updateNavbarSchema = z.object({
  body: createNavbarSchema.shape.body.partial(),
});



