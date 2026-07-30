import { body, param } from "express-validator";

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
    .withMessage("El answer no puede estar vacío")
];