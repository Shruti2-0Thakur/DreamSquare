const{ createBlog,getBlog,getBlogById,updateBlog,deleteBlog}= require("./blog.controller");
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

router.post("/",upload.single("image"), createBlog);
router.get("/",getBlog);
router.get("/:id",getBlogById);
router.patch("/",upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

module.exports= router;