const mongoose = require("mongoose");
const { mongo } = require("mongoose");

const blogschema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },

    introducation: {
      type: String,
      require: true,
      trim: true,
    },

    file: {
      type: String,
      require: true,
      trim: true,
    },
    content: {
      type: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("blogData", blogschema);

module.exports = { blogModel };
