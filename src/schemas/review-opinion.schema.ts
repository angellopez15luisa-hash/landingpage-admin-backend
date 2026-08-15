import { body, param } from "express-validator";
import z from "zod";

export const updateReviewOpinionSchema = [
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
  body("rating")
    .exists()
    .withMessage("El campo rating es obligatorio")
    .isInt()
    .withMessage("El rating debe ser un número entero")
    .toInt(),
  body("text")
    .exists()
    .withMessage("El campo text es obligatorio")
    .isString()
    .withMessage("El text debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El text no puede estar vacío"),
];

export namespace ReviewOpinionSchema {
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
      rating: z.coerce
        .number({ error: "El rating debe ser un numero" })
        .int("El rating debe ser un numero entero")
        .min(1, "El valor minimo es 1")
        .max(5, "El valor maximo es 5")
        .optional(),
      text: z
        .string({ error: "El text debe ser una cadena de texto" })
        .min(3, "El text debe tener al menos tres caracteres")
        .optional(),
    }),
  });
}
