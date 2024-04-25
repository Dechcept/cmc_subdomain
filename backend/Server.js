var express = require("express");
var dotenv = require("dotenv");
var morgan = require("morgan");
var connectDB = require("./configue/db.js");
var authRoute = require("./Routes/authRoute.js");
var jobRoute = require("./Routes/jobRoute.js");
var blogRoute = require("./Routes/blogRoute.js");
var cors = require("cors");
var multerMiddleware = require("./middleware/multer.middleware.js");
var url = require("url");
var pathModule = require("path");
var fs = require("fs");
var path = require("path");

//configue dotenv
dotenv.config();

//database configue
connectDB();

//rest object
var app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/detail", jobRoute);
app.use("/api/v2/blog", blogRoute);

//rest api
app.get("/", function (req, res) {
  res.send("<h1>Welcome to Demon World</h1>");
});

//PORT
var PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, function () {
  console.log("Server Running on " + process.env.DEV_MODE + " mode " + PORT);
});

