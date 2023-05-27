const{ createTransaction,getTransaction,getTransactionById,updateTransaction,deleteTransaction}= require("./transaction.controller");
const router = require("express").Router();

const multer = require("multer");
const upload = multer({ dest: 'uploads/' });


router.post("/",upload.none(), createTransaction);
router.get("/",getTransaction);
router.get("/:id",getTransactionById);
router.patch("/",upload.none(), updateTransaction);
router.delete("/:id", deleteTransaction);

module.exports= router;
