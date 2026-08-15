import { body, param } from "express-validator";
import z from "zod";

export const updateSocialLinkSchema = [
  param("id")
    .exists()
    .withMessage("El ID es obligatorio")
    .custom((val) => /^\d+$/.test(val))
    .withMessage("El ID debe ser un número válido")
    .toInt(),
  body("name")
    .exists()
    .withMessage("El campo name es obligatorio")
    .isString()
    .withMessage("El name debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El name no puede estar vacío"),
  body("url")
    .exists()
    .withMessage("El campo url es obligatorio")
    .isString()
    .withMessage("La url debe ser una cadena de texto")
    .notEmpty()
    .withMessage("La url no puede estar vacía"),
  body("icon")
    .exists()
    .withMessage("El campo icon es obligatorio")
    .isString()
    .withMessage("El icon debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El icon no puede estar vacío"),
  body("flag")
    .exists()
    .withMessage("El campo flag es obligatorio")
    .isBoolean()
    .withMessage("El flag debe ser un valor booleano")
    .toBoolean(),
];

export namespace SocialLinkSchema {
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
      name: z
        .string({ error: "El name debe ser una cadena de texto" })
        .min(3, "El name debe tener al menos tres caracteres")
        .optional(),
      url: z
        .string({ error: "El url debe ser una cadena de texto" })
        .min(1, "El url es requerido")
        .optional(),
      icon: z
        .string({ error: "El icon debe ser una cadena de texto" })
        .min(3, "El icon debe tener al menos tres caracteres")
        .optional(),
      flag: z
        .boolean({
          error: "El campo flag debe ser un booleano valido",
        })
        .optional(),
    }),
  });
}
