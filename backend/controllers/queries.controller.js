const { queries } = require("../db/index");
const zod = require("zod");
const customError = require("../utils/customError");

const querySchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  useremail: zod.string().email("enter a valid email"),
  phoneNumber: zod.string().length(10, "phone number has to be of 10 digits."),
  message: zod.string().min(3, "query has to be atleast of 3 letters."),
});

const postQuery = async (req, res, next) => {
  try {
    const result = querySchema.safeParse(req.body);
    if (!result.success) {
      throw customError(411, result.error.errors[0].message);
    }
    const newQuery = req.body;
    console.log(newQuery);
    newQuery.userId = req.user.id;
    await queries.create(newQuery);
    res.json({
      message: "query submitted successfully",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postQuery,
};
