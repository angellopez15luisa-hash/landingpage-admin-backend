import { body, param } from "express-validator";
import { z } from "zod";

export const updateCatalogCategorySchema = [
  param("id")
    .exists()
    .withMessage("El ID es obligatorio")
    .custom((val) => /^\d+$/.test(val))
    .withMessage("El ID debe ser un número válido")
    .toInt(),
  body("text")
    .exists()
    .withMessage("EL campo text es obligatorio")
    .isString()
    .withMessage("El text debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El text no puede ser vacio"),
];

export namespace CatalogCategorySchema {
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
  // Schema exclusivo para la creación (solo pide el texto)
  export const create = z.object({
    body: z.object({
      text: z
        .string({ error: "El text debe ser una cadena de texto" })
        .min(3, "EL text debe tener al menos 3 caracteres"),
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
        .min(3, "EL text debe tener al menos 3 caracteres")
        .optional(),
      isActive: z
        .boolean({
          error: "El campo is-active debe ser un booleano valido",
        })
        .optional(),
      isDefault: z
        .boolean({
          error: "El campo is-default debe ser un booleano valido",
        })
        .optional(),
    }),
  });
}
