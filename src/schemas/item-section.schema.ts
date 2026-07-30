import { body, param } from "express-validator";

export const updateItemSectionSchema = [
  param("id")
    .exists()
    .withMessage("El ID es obligatorio")
    .custom((val) => /^\d+$/.test(val))
    .withMessage("El ID debe ser un número válido")
    .toInt(),
  body("text")
    .exists()
    .withMessage("El campo text es obligatorio")
    .isString()
    .withMessage("El text debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El text no puede estar vacío"),
  body("href")
    .exists()
    .withMessage("El campo href es obligatorio")
    .isString()
    .withMessage("El href debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El href no puede estar vacío"),
  body("flagNavbar")
    .exists()
    .withMessage("El campo flagNavbar es obligatorio")
    .isBoolean()
    .withMessage("El flagNavbar debe ser un valor booleano (true o false)"),
  body("flagFooter")
    .exists()
    .withMessage("El campo flagFooter es obligatorio")
    .isBoolean()
    .withMessage("El flagFooter debe ser un valor booleano (true o false)"),
];
