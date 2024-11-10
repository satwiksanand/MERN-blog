const { Router } = require("express");
const userRouter = Router();
const verifyUser = require("../middleware/verifyUser.middleware");
const {
  getUserById,
  getAllUsers,
  signout,
  updateUser,
  deleteUser,
  test,
} = require("../controllers/user.controller");

userRouter.get("/getUserById/:userId", verifyUser, getUserById);
userRouter.get("/getAllUsers", verifyUser, getAllUsers);
userRouter.post("/signout", signout);
userRouter.put("/update/:userId", verifyUser, updateUser);
userRouter.delete("/delete/:userId", verifyUser, deleteUser);
userRouter.get("/test", verifyUser, test);

module.exports = userRouter;
