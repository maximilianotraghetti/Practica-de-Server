import { Router } from "express";
import {
  allUsersCtrl,
  createUserCtrl,
  deleteUserCtrl,
  findUserByIdCtrl,
  updateUserCtrl,
} from "../controller/user.controllers.js";

const userRoutes = Router();

userRoutes.get("/", allUsersCtrl);
userRoutes.post("/", createUserCtrl);

userRoutes.get("/:id", findUserByIdCtrl);
userRoutes.patch("/:id", updateUserCtrl);
userRoutes.delete("/:id", deleteUserCtrl);

export { userRoutes };
