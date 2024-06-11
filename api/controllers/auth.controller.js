import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { userName, userEmail, password } = req.body;

  //if the any of the fields is empty then return an error before saving it in the database.
  if (!userEmail || !userName || !password) {
    res.status(500).send({ message: "Fields cannot be empty!" });
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
    res.status(500).send({ message: err.message });
  }
};
