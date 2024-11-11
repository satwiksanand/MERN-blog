const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  //well idiot change the schema if needed, add more complexities.
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  bannerImage: {
    type: String,
    default:
      "https://tse2.mm.bing.net/th/id/OIP.qB_8LAwkSXRR_57c-5r-WAHaCX?rs=1&pid=ImgDetMain",
  },
  title: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: String,
    default: new Date().toDateString().split(" ").slice(1).join("-"),
  },
  category: {
    type: String,
    default: "uncategorized",
  },
  readingTime: {
    type: String,
    default: "10min",
  },
  author: {
    type: String,
    default: "Anonymous",
  },
  likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  shares: {
    type: Number,
    default: 0,
  },
});

module.exports = postSchema;
