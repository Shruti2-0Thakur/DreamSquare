const{ createVideo,getVideo,getVideoById,updateVideo,deleteVideo}= require("./video.controller");
const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });

router.post("/",upload.none(), createVideo);
router.get("/",getVideo);
router.get("/:id",getVideoById);
router.patch("/",upload.none(), updateVideo);
router.delete("/",upload.none(), deleteVideo);

module.exports= router;