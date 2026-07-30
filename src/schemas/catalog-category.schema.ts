import { body, param } from "express-validator";

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
