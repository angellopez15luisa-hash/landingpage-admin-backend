import { success, z } from "zod";

export class NavbarSchema {
  static createInputSchema = z.object({
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

  static updateInputSchema = z.object({
    body: this.createInputSchema.shape.body.partial(),
  });

  static updateParamsSchema = z.object({
    id: z
      .string()
      .regex(/^\d+$/, "El ID debe ser un número válido")
      .transform((val) => Number(val)),
  });

  static updateRouteSchema = z.object({
    params: this.updateParamsSchema,
    body: this.createInputSchema.shape.body.partial(),
  });

  static getResponseSchema = z.object({
    success: z.boolean(),
    navbar: z.object({
      id: z.number(),
      textLogo: z.string(),
      hrefLogo: z.string(),
      textBtn: z.string(),
      hrefBtn: z.string(),
    }),
  });

  static updateResponseSchema = z.object({
    message: z.string(),
    success: z.boolean(),
  });
}

// export const navbarGet
