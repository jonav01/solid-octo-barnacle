const { File } = require("../models/allFiles");

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) return;
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + "-" + sizes[index]
  );
};
const uploadFileController = async (req, res) => {
  try {
    const file = new File({
      fileName: req.file.originalname,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2),
    });
    await file.save();
    res.status(200).json({ msg: "File Received Successfully" });
  } catch (error) {
    res.status(401).json(error.message);
  }
};

module.exports = { uploadFileController };
