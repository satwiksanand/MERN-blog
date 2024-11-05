const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const app = express();
const rootRouter = require("./routes/index");
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
