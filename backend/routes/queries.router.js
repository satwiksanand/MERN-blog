const { Router } = require("express");
const verifyUser = require("../middleware/verifyUser.middleware");
const { postQuery } = require("../controllers/queries.controller");

const queryRouter = Router();

queryRouter.post("/new", verifyUser, postQuery);

module.exports = queryRouter;
