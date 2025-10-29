import { Router } from "express";
import { signUp } from "../controller/user.controller.js";

const UserRouter = Router();

UserRouter.post("/", signUp);

export default UserRouter;
