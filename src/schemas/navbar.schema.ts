import { body, param } from "express-validator";
import z from "zod";

// Validaciones para Crear (POST)
export const createNavbarSchema = [
  body("textLogo")
    .exists()
    .withMessage("El campo textLogo es obligatorio")
    .isString()
    .withMessage("El textLogo debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El textLogo no puede estar vacío"),

  body("hrefLogo")
    .exists()
    .withMessage("El campo hrefLogo es obligatorio")
    .isString()
    .withMessage("El hrefLogo debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El hrefLogo no puede estar vacío"),

  body("textBtn")
    .exists()
    .withMessage("El campo textBtn es obligatorio")
    .isString()
    .withMessage("El textBtn debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El textBtn no puede estar vacío"),

  body("hrefBtn")
    .exists()
    .withMessage("El campo hrefBtn es obligatorio")
    .isString()
    .withMessage("El hrefBtn debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El hrefBtn no puede estar vacío"),
];

// Validaciones para Actualizar (PUT) - Campos opcionales
export const updateNavbarSchema = [
  param("id")
    .exists()
    .withMessage("El ID es obligatorio")
    .custom((val) => /^\d+$/.test(val))
    .withMessage("El ID debe ser un número válido")
    .toInt(),

  body("textLogo")
    // .optional()
    .exists()
    .withMessage("El campo textLogo es obligatorio")
    .isString()
    .withMessage("El textLogo debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El textLogo no puede estar vacío"),

  body("hrefLogo")
    .exists()
    .withMessage("El campo hrefLogo es obligatorio")
    .isString()
    .withMessage("El hrefLogo debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El hrefLogo no puede estar vacío"),

  body("textBtn")
    .exists()
    .withMessage("El campo textBtn es obligatorio")
    .isString()
    .withMessage("El textBtn debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El textBtn no puede estar vacío"),

  body("hrefBtn")
    .exists()
    .withMessage("El campo hrefBtn es obligatorio")
    .isString()
    .withMessage("El hrefBtn debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El hrefBtn no puede estar vacío"),
];

export namespace NavbarSchema {
  export const update = z.object({
    params: z.object({
      id: z.string().transform((val, ctx) => {
        const parsed = Number(val);
        if (isNaN(parsed)) {
          ctx.addIssue({
            code: "custom",
            message: "El ID debe ser un numero valido",
          });
          return z.NEVER;
        }
        if (parsed <= 0) {
          ctx.addIssue({
            code: "custom",
            message: "El ID debe ser mayor a cero",
          });
          return z.NEVER;
        }
        return val;
      }),
    }),
    body: z.object({
      textLogo: z
        .string({ error: "El text-logo debe ser una cadena de texto" })
        .min(3, "El text-logo debe tener al menos tres caracteres")
        .optional(),
      hrefLogo: z
        .string({ error: "el href-logo debe ser una cadena de texto" })
        .min(3, "El href-logo debe tener al menos tres caracteres")
        .optional(),
      textBtn: z
        .string({ error: "El text-btn debe ser una cadena de texto" })
        .min(3, "El text-btn debe tener al menos tres caracteres")
        .optional(),
      hrefBtn: z
        .string({ error: "El href-btn debe ser una cadena de texto" })
        .min(3, "El href-btn debe tener al menos tres caracteres")
        .optional(),
    }),
  });
}
