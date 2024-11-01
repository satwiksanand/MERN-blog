const mongoose = require("mongoose");
const connectionString = process.env.CONNECTION_STRING;
const userSchema = require("../models/users.model");
const postSchema = require("../models/posts.model");

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connection to database successfull!");
  })
  .catch((err) => {
    console.log(err);
  });

const user = mongoose.model("users", userSchema);
const post = mongoose.model("posts", postSchema);

module.exports = {
  user,
  post,
};
