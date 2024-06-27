import User from "../models/user.model.js";
import { errorHandler } from "../util/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.send({ message: "API is working!" });
};

export const updateUser = async (req, res, next) => {
  const userToken = req.user.userId;
  const token = req.params.userId;
  if (userToken !== token) {
    return next(
      errorHandler(401, "You are not allowed to update the user credentials!")
    );
  }
  // i am only allowing to change the user password.
  if (!req.body.password) {
    return next(errorHandler(401, "Password cannot be empty!"));
  } else {
    //the user wants to change the password then.
    if (req.body.password.length < 6) {
      return next(
        errorHandler(401, "Password must be more than 6 characters!")
      );
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  try {
    const newUser = await User.findByIdAndUpdate(
      token,
      {
        $set: {
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password: pass, ...rest } = newUser._doc;
    res.status(200).json(rest);
  } catch (err) {
    next(err);
  }
};
