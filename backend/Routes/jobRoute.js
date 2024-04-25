const express = require("express");
const {
  SingleDetailsController,
  createjobDetailsController,
  deleteDetailsController,
  jobDetailsController,
  jobDetailsUpdateController,
} = require("../controller/JobDetailController.js");

const router = express.Router();

router.post("/job", createjobDetailsController);
router.put("/update-Job/:id", jobDetailsUpdateController);
router.get("/getJobdetail", jobDetailsController);
router.get("/get-single-data/:id", SingleDetailsController);
router.delete("/delete-data/:id", deleteDetailsController);
module.exports = router;
