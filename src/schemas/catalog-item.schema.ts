import { body, param } from "express-validator";

export const updateCatalogItemSchema = [
  param("id")
    .exists()
    .withMessage("El ID es obligatorio")
    .custom((val) => /^\d+$/.test(val))
    .withMessage("El ID debe ser un número válido")
    .toInt(),
  body("title")
    .exists()
    .withMessage("El campo title es obligatorio")
    .isString()
    .withMessage("El title debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El title no puede estar vacío"),
  body("catalogCategoryId")
    .exists()
    .withMessage("El campo catalogCategoryId es obligatorio")
    .isInt()
    .withMessage("El catalogCategoryId debe ser un número entero")
    .toInt(),
  body("price")
    .exists()
    .withMessage("El campo price es obligatorio")
    .isNumeric()
    .withMessage("El price debe ser un valor numérico")
    .toFloat(),
  body("imagePath")
    .exists()
    .withMessage("El campo imagePath es obligatorio")
    .isString()
    .withMessage("El imagePath debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El imagePath no puede estar vacío"),
  body("badge")
    .exists()
    .withMessage("El campo badge es obligatorio")
    .isString()
    .withMessage("El badge debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El badge no puede estar vacío")
];