const { user } = require("../db/index");
const customError = require("../utils/customError");

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

module.exports = {
  getAllUsers,
  getUserById,
};
