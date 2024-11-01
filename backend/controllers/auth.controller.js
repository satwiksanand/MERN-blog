const customError = require("../utils/customError");
const zod = require("zod");
const bcryptjs = require("bcryptjs");
const { user } = require("../db/index");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;

const signupSchema = zod.object({
  username: zod.string(),
  useremail: zod.string().email(),
  password: zod.string().min(8),
});
const signinSchema = zod.object({
  useremail: zod.string().email(),
  password: zod.string().min(8),
});

const signup = async (req, res, next) => {
  const details = {
    username: req.body.username,
    useremail: req.body.useremail,
    password: req.body.password,
  };
  try {
    if (!signupSchema.safeParse(details).success) {
      throw customError(411, "Invalid Details!");
    }
    const hashedPassword = bcryptjs.hashSync(details.password, 10);
    const existingUser = await user.findOne({ useremail: details.useremail });
    if (existingUser) {
      throw customError(413, "Email already in use!");
    }
    details.password = hashedPassword;
    await user.create(details);
    res.json({
      message: "user added successfully!",
    });
  } catch (err) {
    next(err);
  }
};

const signin = async (req, res, next) => {
  const details = {
    useremail: req.body.useremail,
    password: req.body.password,
  };

  try {
    if (!signinSchema.safeParse(details).success) {
      throw customError(411, "Invalid details!");
    }
    const existingUser = await user.findOne({ useremail: details.useremail });
    if (!existingUser) {
      throw customError(411, "Email does not exist");
    }
    const validPassword = bcryptjs.compareSync(
      details.password,
      existingUser.password
    );
    if (!validPassword) {
      throw customError(411, "Wrong Password!");
    }
    const token = jwt.sign(
      {
        useremail: existingUser.useremail,
        username: existingUser.username,
        isAdmin: existingUser.isAdmin,
        id: existingUser._id,
      },
      secretKey
    );
    const { password: pass, ...rest } = existingUser._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signin,
  signup,
};
