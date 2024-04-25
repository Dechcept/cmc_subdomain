const express = require("express");
const {
  jobApplicationController,
  jobInQueryController,
  loginController,
  registerController,
  testController,
} = require("../controller/authController.js");
const { isAdmin, requireSignIn } = require("../middleware/authMiddleware.js");
const multer = require("multer");

const storage = multer.memoryStorage();
const fileUpload = multer({ storage: storage });

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/test", requireSignIn, isAdmin, testController);
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
router.post(
  "/request-for-job",
  fileUpload.single("file"),
  jobInQueryController
);
router.get("/job-application", jobApplicationController);

module.exports = router;
