import express from "express";
import {
  updateUser,
  test as userTest,
} from "../controllers/user.controller.js";
import { verifyToken } from "../util/verifyUser.js";

const userRouter = express.Router();

userRouter.get("/test", userTest);
userRouter.put("/update/:userId", verifyToken, updateUser);

export default userRouter;
