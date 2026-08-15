import { body, param } from "express-validator";
import z from "zod";

export const updateFaqItemQuestionSchema = [
  param("id")
    .exists()
    .withMessage("El ID es obligatorio")
    .custom((val) => /^\d+$/.test(val))
    .withMessage("El ID debe ser un número válido")
    .toInt(),
  body("question")
    .exists()
    .withMessage("El campo question es obligatorio")
    .isString()
    .withMessage("El question debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El question no puede estar vacío"),
  body("answer")
    .exists()
    .withMessage("El campo answer es obligatorio")
    .isString()
    .withMessage("El answer debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El answer no puede estar vacío"),
];

export namespace FaqItemQuestionSchema {
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
      question: z
        .string({ error: "El question debe ser una cadena de texto" })
        .min(3, "El question debe tener al menos tres caracteres")
        .optional(),
      answer: z
        .string({ error: "El answer debe ser una cadena de texto" })
        .min(3, "El answer debe tener al menos tres caracteres")
        .optional(),
    }),
  });
}
