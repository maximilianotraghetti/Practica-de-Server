import { Router } from "express";
import {
  allUsersCtrl,
  createUserCtrl,
  findUserByIdCtrl,
} from "../controller/user.controllers.js";

const userRoutes = Router();

userRoutes.get("/", allUsersCtrl);
userRoutes.post("/", createUserCtrl);

userRoutes.get("/:id", findUserByIdCtrl);
userRoutes.patch("/id:");
userRoutes.delete("/id:");

export { userRoutes };
