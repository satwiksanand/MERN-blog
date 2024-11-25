const express = require("express");
const { urlencoded } = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const rootRouter = require("./routes/index");
const PORT = 3000;

__dirname = path.resolve();

app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.URL,
    // origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", rootRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
