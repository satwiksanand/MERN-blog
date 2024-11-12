const { Router } = require("express");
const postRouter = Router();

const {
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getPostByCategory,
} = require("../controllers/post.controller");
const verifyUser = require("../middleware/verifyUser.middleware");
const customError = require("../utils/customError");

//we will implement the basic crud operation for posts here!
postRouter.post("/create", verifyUser, createPost);
postRouter.put("/update/:postId", verifyUser, updatePost);
postRouter.delete("/delete/:postId", verifyUser, deletePost);
postRouter.get("/read/:postId", getPostById);
postRouter.get("/get/:category/:limit", verifyUser, getPostByCategory);

postRouter.use((req, res, next) => {
  return next(customError(404, "Route not found!"));
});

module.exports = postRouter;
