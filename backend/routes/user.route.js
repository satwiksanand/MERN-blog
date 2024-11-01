const { Router } = require("express");
const userRouter = Router();
const verifyUser = require("../middleware/verifyUser.middleware");
const { getUserById, getAllUsers } = require("../controllers/user.controller");

userRouter.get("/getUserById/:userId", verifyUser, getUserById);
userRouter.get("/getAllUsers", verifyUser, getAllUsers);

module.exports = userRouter;
