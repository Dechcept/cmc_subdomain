const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    jobType: {
      type: String,
      require: true,
      trim: true,
    },
    jobTitle: {
      type: String,
      require: true,
      trim: true,
    },
    jobLocation: {
      type: String,
      require: true,
      trim: true,
    },
    jobDescription: {
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

module.exports = mongoose.model("jobDetail", jobSchema);