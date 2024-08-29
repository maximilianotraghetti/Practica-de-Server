import { Router } from "express";
import {
  allUsersCtrl,
  createUserCtrl,
  deleteUserCtrl,
  findUserByIdCtrl,
  updateUserCtrl,
} from "../controller/user.controllers.js";
import {
  createUserValidations,
  idUserValidations,
  updateUserValidations,
} from "../validations/user.validation.js";
import { applyValidations } from "../middlewares/validations.middlewares.js";

const userRoutes = Router();

userRoutes.get("/", allUsersCtrl);
userRoutes.post("/", createUserValidations, applyValidations, createUserCtrl);

userRoutes.get("/:id", idUserValidations, applyValidations, findUserByIdCtrl);
userRoutes.patch(
  "/:id",
  updateUserValidations,
  idUserValidations,
  applyValidations,
  updateUserCtrl
);
userRoutes.delete("/:id", idUserValidations, applyValidations, deleteUserCtrl);

export { userRoutes };
