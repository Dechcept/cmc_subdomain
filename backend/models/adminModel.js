const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  role: {
    type: Number,
    default: 0,
  },
});

const admin = mongoose.model("admins", adminSchema);

module.exports = { admin };
