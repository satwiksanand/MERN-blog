import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

// const pass = "#King#";
// console.log(encodeURIComponent(pass));

// connect to the database.
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("database is connected!");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}!`);
});

//user routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Internal Server Error!";
  res.status(statusCode).json({
    success: false,
    errorMessage,
    statusCode,
  });
});
