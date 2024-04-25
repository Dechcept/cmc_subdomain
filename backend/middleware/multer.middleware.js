const multer = require("multer");
const jobFormModel = require("../models/jobFormModel.js");

const generateFilename = (originalname) => {
  const timestamp = Date.now();
  return `${timestamp}_${originalname}`;
};

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    const uniqueFilename = generateFilename(file.originalname);
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage: storage });

module.exports = { generateFilename, upload };