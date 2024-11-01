const { user } = require("../db/index");
const customError = require("../utils/customError");
const bcryptjs = require("bcryptjs");
const getUserById = async (req, res, next) => {
  //the functionality to look for a certain user should only be allowed for the admin.
  const userId = req.params.userId;
  try {
    if (req.user.id != userId && !req.user.isAdmin) {
      throw customError(411, "Unauthorized!");
    }
    const result = await user.findById(userId);
    if (!result) {
      throw customError(411, "User not found!");
    }
    const { password: pass, ...rest } = result._doc;
    res.json(rest);
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req, res, next) => {
  //return all the users without the password.
  try {
    if (!req.user.isAdmin) {
      throw customError(413, "Unauthorized!");
    }
    const allUsers = await user.find({});
    const allUsersWithoutPassword = allUsers.map((curr) => {
      const { password: pass, ...rest } = curr._doc;
      return rest;
    });
    res.json({ data: allUsersWithoutPassword });
  } catch (err) {
    next(err);
  }
};

const signout = (req, res, next) => {
  try {
    res.clearCookie("access_token").json({
      message: "signout successfull!",
    });
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    if (req.user.id != userId && !req.user.isAdmin) {
      throw customError(411, "you are not allowed to update the user!");
    }
    if (req.body.password) {
      if (req.body.password.length < 8) {
        throw customError(413, "Password must be more than 8 characters!");
      }
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username) {
      //find a user with the requested username
      if (req.body.username.includes(" ")) {
        throw customError(400, "Username cannot contain spaces");
      }
      if (req.body.username !== req.body.username.toLowerCase()) {
        throw customError(400, "Username must be lowercase");
      }
      if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
        throw customError(400, "Username can only contain letters and numbers");
      }
      const existingUser = await user.findOne({ username: req.body.username });
      if (existingUser && existingUser._id != req.user.id) {
        throw customError(411, "Username already in use");
      }
    }
    const updatedUser = await user.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          username: req.body.username,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );

    const { password: pass, ...rest } = updatedUser._doc;
    res.json(rest);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    if (req.user.id != userId && !req.user.isAdmin) {
      throw customError(411, "you are not allowed to delete the user!");
    }
    await user.findByIdAndDelete(userId);
    res.json({
      message: "User has been deleted!",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  signout,
  updateUser,
  deleteUser,
};
