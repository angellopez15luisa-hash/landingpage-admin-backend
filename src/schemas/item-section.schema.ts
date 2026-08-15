import { body, param } from "express-validator";
import z from "zod";

export const updateItemSectionSchema = [
  param("id")
    .exists()
    .withMessage("El ID es obligatorio")
    .custom((val) => /^\d+$/.test(val))
    .withMessage("El ID debe ser un número válido")
    .toInt(),
  body("text")
    .exists()
    .withMessage("El campo text es obligatorio")
    .isString()
    .withMessage("El text debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El text no puede estar vacío"),
  body("href")
    .exists()
    .withMessage("El campo href es obligatorio")
    .isString()
    .withMessage("El href debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El href no puede estar vacío"),
  body("flagNavbar")
    .exists()
    .withMessage("El campo flagNavbar es obligatorio")
    .isBoolean()
    .withMessage("El flagNavbar debe ser un valor booleano (true o false)"),
  body("flagFooter")
    .exists()
    .withMessage("El campo flagFooter es obligatorio")
    .isBoolean()
    .withMessage("El flagFooter debe ser un valor booleano (true o false)"),
];

export namespace ItemSectionSchema {
  export const getById = z.object({
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
  });

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
      text: z
        .string({ error: "El text debe ser una cadena de texto" })
        .min(3, "El text debe tener al menos tres caracteres")
        .optional(),
      href: z
        .string({ error: "El href debe ser una cadena de texto" })
        .min(3, "El href debe tener al menos tres caracteres")
        .optional(),
      flagNavbar: z
        .boolean({
          error: "El campo flag-navbar debe ser un booleano valido",
        })
        .optional(),
      flagFooter: z
        .boolean({
          error: "El campo flag-footer debe ser un booleano valido",
        })
        .optional(),
    }),
  });
}
