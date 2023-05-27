const{ createEarning,getEarning,getEarningById,updateEarning,deleteEarning}= require("./earning.controller");
const router = require("express").Router();

const multer = require("multer");
const upload = multer({ dest: 'uploads/' });


router.post("/",upload.none(), createEarning);
router.get("/",getEarning);
router.get("/:id",getEarningById);
router.patch("/",upload.none(), updateEarning);
router.delete("/:id", deleteEarning);

module.exports= router;
