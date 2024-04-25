var express = require("express");
var blogController = require("../controller/blogController.js");
var multer = require("multer");
var router = express.Router();

var storage = multer.memoryStorage();
var fileUpload = multer({ storage: storage });

router.post("/blogdataSend", fileUpload.single("file"), blogController.blogDataSend);
router.get("/getblogdata", blogController.blogDataGetController);
router.get("/get-single-blog/:id", blogController.blogSingleDataController);
router.delete("/blogdelete/:id", blogController.blogDeleteController);
router.put("/update-blog/:id", blogController.blogdataUpdater);

module.exports = router;

