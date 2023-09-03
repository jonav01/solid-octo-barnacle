const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "fileUpload");
  },
  fileName: (req, file, cb) => {
    console.log(new Date().toISOString().replace(/:/g, "-"));
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.orignalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") cb(null, true);
  else cb(null, false);
};

const fileUpload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = { fileUpload };
