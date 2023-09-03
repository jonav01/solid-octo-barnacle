// imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const uploadRoutes = require("./routes/uploads.routes");
const bodyParser = require("body-parser");
dotenv.config();
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/fileUpload", express.static(path.join(__dirname, "/fileUploads")));
// routes
app.use("/api", uploadRoutes);

//db connection
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    throw new Error(err.message);
  });

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
