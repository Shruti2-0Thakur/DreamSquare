const{ createStaff,getStaff,getStaffById,updateStaff,deleteStaff,login}= require("./staff.controller");
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

router.post("/", upload.single('image'), createStaff);
router.get("/", getStaff);
router.get("/:id",getStaffById);
router.patch("/",upload.single('image'),   updateStaff);
router.delete("/:id", deleteStaff);
router.post("/login",upload.none(),login);

module.exports= router;
