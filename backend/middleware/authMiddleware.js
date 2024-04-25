const JWT = require("jsonwebtoken");
const { admin } = require("../models/adminModel.js");
// import { admin } from "../models/adminM";

//protected route token base
exports.requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const user = await admin.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unathorization access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
