const{ createUser,getUser,getUserById,updateUser,deleteUser}= require("./user.controller");
const router = require("express").Router();

const multer = require("multer");

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

router.post("/",upload.single('image'),  createUser);
router.get("/",getUser);
router.get("/:id",getUserById);
router.patch("/",upload.single('image'),  updateUser);
router.delete("/:id", deleteUser);

module.exports= router;
