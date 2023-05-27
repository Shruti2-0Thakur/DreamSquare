const{ createLevel,getLevel,getLevelById,updateLevel,deleteLevel}= require("./level.controller");
const router = require("express").Router();

const multer = require("multer");
const upload = multer({ dest: 'uploads/' });


router.post("/",upload.none(), createLevel);
router.get("/",getLevel);
router.get("/:id",getLevelById);
router.patch("/",upload.none(), updateLevel);
router.delete("/:id", deleteLevel);

module.exports= router;
