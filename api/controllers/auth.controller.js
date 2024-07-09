import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../util/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { userName, userEmail, password } = req.body;

  //if the any of the fields is empty then return an error before saving it in the database.
  if (!userEmail || !userName || !password) {
    return next(errorHandler(400, "Fields cannot be empty!"));
  }

  const encryptedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    userName,
    userEmail,
    password: encryptedPassword,
  });

  try {
    await newUser.save();
    res.send({ message: "Signup Successfull!" });
  } catch (err) {
    return next(err);
  }
};

export const signin = async (req, res, next) => {
  const { userEmail, password } = req.body;

  if (!userEmail || !password || userEmail == "" || password == "") {
    return next(errorHandler(400, "Fields cannot be empty!"));
  }

  try {
    const user = await User.findOne({ userEmail });
    //if user does not exist with this email return an error
    if (!user) {
      return next(errorHandler(400, "Wrong Credentials!"));
    }
    //user email exist so check the password;
    //the password is stored in encrypted format so check it using encryption.
    const correctPassword = bcryptjs.compareSync(password, user.password);
    if (!correctPassword) {
      //if the password is incorrect.
      return next(errorHandler(400, "Wrong Credentials!"));
    }
    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET_KEY
    );
    const { password: pass, ...rest } = user._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (err) {
    next(err);
  }
};

export const google = async (req, res, next) => {
  const { userName, userEmail, userPhotoUrl } = req.body;
  try {
    const user = await User.findOne({ userEmail });
    console.log({ userName, userEmail, userPhotoUrl });
    // console.log(user);
    if (user) {
      //the user already exist then sign in.
      const token = jwt.sign(
        { userId: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET_KEY
      );
      const { password: pass, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json(rest);
    } else {
      //the user doesn't exist create the new user first and then send the tokens and other stuff.
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        userName:
          userName.toLowerCase().split(" ").join("") +
          Math.random().toString(9).slice(-4),
        userEmail,
        password: hashedPassword,
        userPhotoUrl,
      });

      await newUser.save();
      // console.log(newUser);
      // console.log(newUser._id);
      //now the new user is added to the database.
      const token = jwt.sign(
        { userId: newUser._id, isAdmin: newUser.isAdmin },
        process.env.JWT_SECRET_KEY
      );
      const { password: pass, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, { httpOnly: true })
        .json(rest);
    }
  } catch (err) {
    next(err);
  }
};
