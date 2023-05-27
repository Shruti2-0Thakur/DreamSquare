const bodyParser = require("body-parser");
const{ create,getEarning,getEarningById,updateEarning,deleteEarning}= require("./earning.service");

module.exports={
    createEarning:(req,res) =>{
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
    getEarning: (req, res) => {
      getEarning((err, results) => {
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
    getEarningById: (req, res) => {
      const id = req.params.id;
      getEarningById(id, (err, results) => {
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
    updateEarning: (req, res) => {
      const body = req.body;
      updateEarning(body, (err, results) => {
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
    deleteEarning:(req,res)=>{
      const data = req.params;
     deleteEarning(data, (err, results) => {
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
        message: "earning deleted successfully"
      });
     });
    }

}
