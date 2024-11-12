const zod = require("zod");
const customError = require("../utils/customError");
const { post } = require("../db/index");

const UriSchema = zod.string().url();

const schema = zod.object({
  bannerImage: zod.string(),
  title: zod.string().min(3, "title needs to be of minimum 3 characters"),
  introduction: zod.string(),
  content: zod.string().min(1, "content cannot be empty!"),
  category: zod.string(),
  readingTime: zod.string(),
});

const createPost = async (req, res, next) => {
  try {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      throw customError(411, result.error.errors[0].message);
    }
    const { bannerImage: image, ...rest } = req.body;
    const newPost = rest;
    if (UriSchema.safeParse(req.body.bannerImage).success) {
      newPost.bannerImage = req.body.bannerImage;
    }
    newPost.userId = req.user.id;
    newPost.author = req.user.username;
    const createdPost = await post.create(newPost);
    res.json({
      message: "post created successfully",
      id: createdPost._id,
    });
  } catch (err) {
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const { bannerImage: image, ...rest } = req.body;
    const newPost = rest;
    if (UriSchema.safeParse(req.body.bannerImage).success) {
      newPost.bannerImage = req.body.bannerImage;
    }
    await post.findByIdAndUpdate(postId, { $set: newPost }, { new: true });
    res.json({
      message: "post updated successfully!",
    });
  } catch (err) {
    next(err);
  }
};

const getPostById = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    const result = await post.findById(postId);
    if (!result) {
      throw customError(413, `post by the id ${postId} does not exist!`);
    }
    res.json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  const postId = req.params.postId;
  try {
    await post.findByIdAndDelete(postId);
    console.log(result);
    res.json({
      message: "post deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};

const getPostByCategory = async (req, res, next) => {
  const category = req.params.category;
  const limit = req.params.limit;
  try {
    const result = await post
      .find({ category: category })
      .limit(Number.parseInt(limit));
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getPostById,
  getPostByCategory,
};
