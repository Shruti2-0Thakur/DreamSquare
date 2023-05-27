const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const cors = require('cors')

require("dotenv").config();


const courseRouter= require("./api/course/course.router");
const earningRouter= require("./api/earning/earning.router");
const levelRouter= require("./api/level/level.router");
const pyramidRouter= require("./api/pyramid/pyramid.router");
const staffRouter= require("./api/staff/staff.router");
const transactionRouter= require("./api/transaction/transaction.router");
const userRouter= require("./api/user/user.router");
const blogRouter= require("./api/blog/blog.router");
const videoRouter= require("./api/video/video.router");



var app = express();

app.use(express.json());
app.use(cors());

app.set('view engine', 'js');
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/course", courseRouter);
app.use("/api/earning", earningRouter);
app.use("/api/level", levelRouter);
app.use("/api/pyramid", pyramidRouter);
app.use("/api/staff", staffRouter);
app.use("/api/transaction", transactionRouter);
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
app.use("/api/video", videoRouter);
app.use("/uploads", express.static('uploads'));



app.use(express.static("public"));

app.get("/",function(req, res){
  res.render("index");
});


app.listen(process.env.APP_PORT, function () {
    console.log("Server is running on port : ", process.env.APP_PORT);
  });