import express from "express";
import { test as userTest } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/test", userTest);

export default userRouter;
