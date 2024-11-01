const mongoose = require("mongoose");
const connectionString = process.env.CONNECTION_STRING;
const userSchema = require("../models/users.model");

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connection to database successfull!");
  })
  .catch((err) => {
    console.log(err);
  });

const user = mongoose.model("users", userSchema);

module.exports = {
  user,
};
