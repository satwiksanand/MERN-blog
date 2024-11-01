const { Router } = require("express");
const authRouter = Router();
const { signin, signup } = require("../controllers/auth.controller");
const customError = require("../utils/customError");

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.use((req, res, next) => {
  try {
    throw customError(413, "Route not found!");
  } catch (err) {
    next(err);
  }
});

module.exports = authRouter;
