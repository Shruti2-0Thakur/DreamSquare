const{ createCourse,getCourse,getCourseById,updateCourse,deleteCourse}= require("./course.controller");
const router = require("express").Router();

const multer = require("multer");
const{ checkToken} = require ("../../auth/token_validation");

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file,cb){
            cb(null, "uploads")
        },
        filename: function (req, file, cb){
            cb(null, file.fieldname + "-"+ Date.now()+".jpg");
        }
    })
});

router.post("/",upload.single("thumbnail"), createCourse);
router.get("/",getCourse);
router.get("/:id",getCourseById);
router.patch("/",upload.single("thumbnail"), updateCourse);
router.delete("/:id", deleteCourse);

module.exports= router;
