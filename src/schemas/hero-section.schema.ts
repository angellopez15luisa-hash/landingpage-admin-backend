import { body, param } from "express-validator";

export const updateHeroSectionSchema = [
  param("id")
    .exists()
    .withMessage("El ID es obligatorio")
    .custom((val) => /^\d+$/.test(val))
    .withMessage("El ID debe ser un número válido")
    .toInt(),
  body("imagePath")
    .exists()
    .withMessage("El campo imagePath es obligatorio")
    .isString()
    .withMessage("El imagePath debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El imagePath no puede estar vacío"),
  body("tag")
    .exists()
    .withMessage("El campo tag es obligatorio")
    .isString()
    .withMessage("El tag debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El tag no puede estar vacío"),
  body("title")
    .exists()
    .withMessage("El campo title es obligatorio")
    .isString()
    .withMessage("El title debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El title no puede estar vacío"),
  body("highlightText")
    .exists()
    .withMessage("El campo highlightText es obligatorio")
    .isString()
    .withMessage("El highlightText debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El highlightText no puede estar vacío"),
  body("description")
    .exists()
    .withMessage("El campo description es obligatorio")
    .isString()
    .withMessage("El description debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El description no puede estar vacío"),
];


