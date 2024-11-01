const { Router } = require("express");
const authRouter = require("./auth.router");
const userRouter = require("./user.route");
const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/user", userRouter);

rootRouter.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    message: err.message || "Something wrong with the server at the moment!",
  });
});

module.exports = rootRouter;
