const { Router } = require("express");
const userRouter = Router();
const verifyUser = require("../middleware/verifyUser.middleware");
const {
  getUserById,
  getAllUsers,
  signout,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

userRouter.get("/getUserById/:userId", verifyUser, getUserById);
userRouter.get("/getAllUsers", verifyUser, getAllUsers);
userRouter.post("/signout", signout);
userRouter.put("/update/:userId", verifyUser, updateUser);
userRouter.delete("/delete/:userId", verifyUser, deleteUser);

module.exports = userRouter;
