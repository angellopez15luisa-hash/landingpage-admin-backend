import { body, param } from "express-validator";
import z from "zod";

export const updateOrderStepSchema = [
  param("id")
    .exists()
    .withMessage("El ID es obligatorio")
    .custom((val) => /^\d+$/.test(val))
    .withMessage("El ID debe ser un número válido")
    .toInt(),
  body("number")
    .exists()
    .withMessage("El campo number es obligatorio")
    .isString()
    .withMessage("El number debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El number no puede estar vacío"),
  body("title")
    .exists()
    .withMessage("El campo title es obligatorio")
    .isString()
    .withMessage("El title debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El title no puede estar vacío"),
  body("description")
    .exists()
    .withMessage("El campo description es obligatorio")
    .isString()
    .withMessage("El description debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El description no puede estar vacío"),
];

export namespace OrderStepSchema {
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
      number: z
        .string({ error: "El number debe ser una cadena de texto" })
        .length(2, "El number debe tener dos caracteres")
        .optional(),
      title: z
        .string({ error: "El title debe ser una cadena de texto" })
        .min(3, "El title debe tener al menos tres caracteres")
        .optional(),
      description: z
        .string({ error: "La description debe ser una cadena de texto" })
        .min(3, "La description debe tener al menos tres caracteres")
        .optional(),
    }),
  });
}
