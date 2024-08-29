import { body, param } from "express-validator";

export const createUserValidations = [
  body("Nombre")
    .isString()
    .withMessage("Nombre debe ser un string")
    .notEmpty()
    .withMessage("Nombre no puede estar vacio"),
  body("Apellido")
    .isString()
    .withMessage("Apellido debe ser un string")
    .notEmpty()
    .withMessage("Apellido no puede estar vacio"),
  body("DNI")
    .isNumeric()
    .withMessage("DNI debe ser un number")
    .notEmpty()
    .withMessage("DNI no puede estar vacio"),
];

export const updateUserValidations = [
  body("Nombre")
    .optional()
    .isString()
    .withMessage("Nombre debe ser un string")
    .notEmpty()
    .withMessage("Nombre no puede estar vacio"),
  body("Apellido")
    .optional()
    .isString()
    .withMessage("Apellido debe ser un string")
    .notEmpty()
    .withMessage("Apellido no puede estar vacio"),
  body("DNI")
    .optional()
    .isNumeric()
    .withMessage("DNI debe ser un number")
    .notEmpty()
    .withMessage("DNI no puede estar vacio"),
];

export const idUserValidations = [
  param("id")
    .isInt()
    .withMessage("El id del usuario debe ser un numero entero"),
];
