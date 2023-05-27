const{ createPyramid,getPyramid,getPyramidById,updatePyramid,deletePyramid}= require("./pyramid.controller");
const router = require("express").Router();


const multer = require("multer");
const upload = multer({ dest: 'uploads/' });


router.post("/",upload.none(), createPyramid);
router.get("/",getPyramid);
router.get("/:id",getPyramidById);
router.patch("/",upload.none(), updatePyramid);
router.delete("/:id", deletePyramid);

module.exports= router;
