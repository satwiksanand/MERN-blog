const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const app = express();
const rootRouter = require("./routes/index");
const PORT = 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
