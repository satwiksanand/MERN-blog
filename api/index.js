import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const PORT = 3000;
const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("database is connected!");
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}!`);
});
