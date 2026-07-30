import { body, param } from "express-validator";

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
    .withMessage("El text no puede estar vacío")
];