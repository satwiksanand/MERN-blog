import express from "express";
import {
  updateUser,
  test as userTest,
  deleteUser,
  signout,
} from "../controllers/user.controller.js";
import { verifyToken } from "../util/verifyUser.js";

const userRouter = express.Router();

userRouter.get("/test", userTest);
userRouter.put("/update/:userId", verifyToken, updateUser);
userRouter.delete("/delete/:userId", verifyToken, deleteUser);
userRouter.post("/signout", signout);

export default userRouter;
