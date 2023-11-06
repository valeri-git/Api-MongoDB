import { Router } from "express";
import {
  userControllerDELETE,
  userControllerGET,
  userControllerPOST,
  userControllerUPDATE,
} from "../controllers/user.controllers.js";

export const userRouter = Router();

userRouter.get("/", userControllerGET);
userRouter.post("/", userControllerPOST);
userRouter.put("/", userControllerUPDATE);
userRouter.delete("/", userControllerDELETE);
