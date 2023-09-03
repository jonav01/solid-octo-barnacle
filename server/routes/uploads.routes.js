const express = require("express");
const { uploadFileController } = require("../controllers/uploads.controller");
const { fileUpload } = require("../middlewares/uploads.middleware");
const router = express.Router();

router.post("/uploads", fileUpload.single("file"), uploadFileController);

module.exports = router;
