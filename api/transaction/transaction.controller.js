const bodyParser = require("body-parser");
const{ create,getTransaction,getTransactionById,updateTransaction,deleteTransaction}= require("./transaction.service");

module.exports={
    createTransaction:(req,res) =>{
      console.log(req.body);
      create(req.body, (err, results) => {
        if(err){
            console.log(err);
            res.status(500).json({
                success:0,
                message:"error in connection with database"

            });
        }
        res.status(200).json({
          success:1,
          data:results
        });
      });
    },
    getTransaction: (req, res) => {
      getTransaction((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    getTransactionById: (req, res) => {
      const id = req.params.id;
      getTransactionById(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not Found"
          });
        }
        results.password = undefined;
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    updateTransaction: (req, res) => {
      const body = req.body;
      updateTransaction(body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          message: "updated successfully"
        });
      });
    },
    deleteTransaction:(req,res)=>{
      const data = req.params;
     deleteTransaction(data, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found"
        });
      }
      return res.json({
        success: 1,
        message: "transaction deleted successfully"
      });
     });
    }

}
