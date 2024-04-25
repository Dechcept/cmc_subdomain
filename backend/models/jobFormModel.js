const mongoose = require("mongoose");

const jobFormSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    mobile: {
      type: String,
      require: true,
    },
    PortfolioUrl: {
      type: String,
      require: true,
    },
    Nationality: {
      type: String,
      require: true,
    },
    Experience: {
      type: String,
      require: true,
    },
    policy: {
      type: String,
      require: true,
    },
    file: {
      type: String,
      trim: true
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("requestedforinquery", jobFormSchema);


// requestedforinquery
