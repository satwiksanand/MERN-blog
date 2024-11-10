const jwt = require("jsonwebtoken");
const customError = require("../utils/customError");

const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(token);
  try {
    if (!token) {
      throw customError(411, "Invalid Token!");
    }
    const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedUser) {
      throw customError(411, "Invalid Token");
    }
    req.user = decodedUser;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = verifyUser;
