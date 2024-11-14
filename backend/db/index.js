const mongoose = require("mongoose");
const connectionString = process.env.CONNECTION_STRING;
const userSchema = require("../models/users.model");
const postSchema = require("../models/posts.model");
const queriesSchema = require("../models/queries.model");

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
const queries = mongoose.model("queries", queriesSchema);

module.exports = {
  user,
  post,
  queries,
};
