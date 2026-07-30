import { body, param } from "express-validator";

// Validaciones para Crear (POST)
export const createNavbarSchema = [
  body("textLogo")
    .exists()
    .withMessage("El campo textLogo es obligatorio")
    .isString()
    .withMessage("El textLogo debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El textLogo no puede estar vacío"),

  body("hrefLogo")
    .exists()
    .withMessage("El campo hrefLogo es obligatorio")
    .isString()
    .withMessage("El hrefLogo debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El hrefLogo no puede estar vacío"),

  body("textBtn")
    .exists()
    .withMessage("El campo textBtn es obligatorio")
    .isString()
    .withMessage("El textBtn debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El textBtn no puede estar vacío"),

  body("hrefBtn")
    .exists()
    .withMessage("El campo hrefBtn es obligatorio")
    .isString()
    .withMessage("El hrefBtn debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El hrefBtn no puede estar vacío"),
];

// Validaciones para Actualizar (PUT) - Campos opcionales
export const updateNavbarSchema = [
  param("id")
    .exists()
    .withMessage("El ID es obligatorio")
    .custom((val) => /^\d+$/.test(val))
    .withMessage("El ID debe ser un número válido")
    .toInt(),

  body("textLogo")
    // .optional()
    .exists()
    .withMessage("El campo textLogo es obligatorio")
    .isString()
    .withMessage("El textLogo debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El textLogo no puede estar vacío"),

  body("hrefLogo")
    .exists()
    .withMessage("El campo hrefLogo es obligatorio")
    .isString()
    .withMessage("El hrefLogo debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El hrefLogo no puede estar vacío"),

  body("textBtn")
    .exists()
    .withMessage("El campo textBtn es obligatorio")
    .isString()
    .withMessage("El textBtn debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El textBtn no puede estar vacío"),

  body("hrefBtn")
    .exists()
    .withMessage("El campo hrefBtn es obligatorio")
    .isString()
    .withMessage("El hrefBtn debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El hrefBtn no puede estar vacío"),
];
