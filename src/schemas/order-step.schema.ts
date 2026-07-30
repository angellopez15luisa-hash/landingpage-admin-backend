import { body, param } from "express-validator";

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
