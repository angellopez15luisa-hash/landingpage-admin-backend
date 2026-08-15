import { body, param } from "express-validator";
import z from "zod";

export const updateFooterSectionSchema = [
  param("id")
    .exists()
    .withMessage("El ID es obligatorio")
    .custom((val) => /^\d+$/.test(val))
    .withMessage("El ID debe ser un número válido")
    .toInt(),
  body("textLogo")
    .exists()
    .withMessage("El campo textLogo es obligatorio")
    .isString()
    .withMessage("El textLogo debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El textLogo no puede estar vacío"),
  body("description")
    .exists()
    .withMessage("El campo description es obligatorio")
    .isString()
    .withMessage("La description debe ser una cadena de texto")
    .notEmpty()
    .withMessage("La description no puede estar vacía"),
  body("phone")
    .exists()
    .withMessage("El campo phone es obligatorio")
    .isString()
    .withMessage("El phone debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El phone no puede estar vacío"),
  body("iconPhone")
    .exists()
    .withMessage("El campo iconPhone es obligatorio")
    .isString()
    .withMessage("El iconPhone debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El iconPhone no puede estar vacío"),
  body("email")
    .exists()
    .withMessage("El campo email es obligatorio")
    .isString()
    .withMessage("El email debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El email no puede estar vacío"),
  body("iconEmail")
    .exists()
    .withMessage("El campo iconEmail es obligatorio")
    .isString()
    .withMessage("El iconEmail debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El iconEmail no puede estar vacío"),
  body("address")
    .exists()
    .withMessage("El campo address es obligatorio")
    .isString()
    .withMessage("La address debe ser una cadena de texto")
    .notEmpty()
    .withMessage("La address no puede estar vacía"),
  body("iconAddress")
    .exists()
    .withMessage("El campo iconAddress es obligatorio")
    .isString()
    .withMessage("El iconAddress debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El iconAddress no puede estar vacío"),
  body("hours")
    .exists()
    .withMessage("El campo hours es obligatorio")
    .isString()
    .withMessage("Las hours deben ser una cadena de texto")
    .notEmpty()
    .withMessage("Las hours no pueden estar vacías"),
  body("iconHours")
    .exists()
    .withMessage("El campo iconHours es obligatorio")
    .isString()
    .withMessage("El iconHours debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El iconHours no puede estar vacío"),
];

export namespace FooterSectionSchema {
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
        .string({
          error: "El text-logo debe ser una cadena de texto",
        })
        .min(3, "El text-logo debe tener al menos tres caracteres")
        .optional(),
      description: z
        .string({
          error: "La description debe ser una cadena de texto",
        })
        .min(3, "La description debe tener al menos tres caracteres")
        .optional(),
      phone: z
        .string({ error: "El phone debe ser una cadena de texto" })
        .min(1, "El phone es requerido")
        .optional(),
      iconPhone: z
        .string({
          error: "El iconPhone debe ser una cadena de texto",
        })
        .min(1, "El iconPhone es requerido")
        .optional(),
      email: z
        .string({
          error: "El email debe ser una cadena de texto",
        })
        .email("El email debe ser un correo válido") // Opcional, pero muy recomendado para campos de tipo email
        .min(1, "El email es requerido")
        .optional(),
      iconEmail: z
        .string({
          error: "El iconEmail debe ser una cadena de texto",
        })
        .min(1, "El iconEmail es requerido")
        .optional(),
      address: z
        .string({
          error: "La address debe ser una cadena de texto",
        })
        .min(1, "La address es requerida")
        .optional(),
      iconAddress: z
        .string({
          error: "El iconAddress debe ser una cadena de texto",
        })
        .min(1, "El iconAddress es requerido")
        .optional(),
      hours: z
        .string({
          error: "Las hours deben ser una cadena de texto",
        })
        .min(1, "Las hours son requeridas")
        .optional(),
      iconHours: z
        .string({
          error: "El iconHours debe ser una cadena de texto",
        })
        .min(1, "El iconHours es requerido")
        .optional(),
    }),
  });
}
