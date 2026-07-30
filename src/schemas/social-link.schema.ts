import { body, param } from "express-validator";

export const updateSocialLinkSchema = [
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
  body("url")
    .exists()
    .withMessage("El campo url es obligatorio")
    .isString()
    .withMessage("La url debe ser una cadena de texto")
    .notEmpty()
    .withMessage("La url no puede estar vacía"),
  body("icon")
    .exists()
    .withMessage("El campo icon es obligatorio")
    .isString()
    .withMessage("El icon debe ser una cadena de texto")
    .notEmpty()
    .withMessage("El icon no puede estar vacío"),
  body("flag")
    .exists()
    .withMessage("El campo flag es obligatorio")
    .isBoolean()
    .withMessage("El flag debe ser un valor booleano")
    .toBoolean()
];