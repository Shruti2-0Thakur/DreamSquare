const bodyParser = require("body-parser");
const{ create,getLevel,getLevelById,updateLevel,deleteLevel}= require("./level.service");

module.exports={
    createLevel:(req,res) =>{
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
    getLevel: (req, res) => {
      getLevel((err, results) => {
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
    getLevelById: (req, res) => {
      const id = req.params.id;
      getLevelById(id, (err, results) => {
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
    updateLevel: (req, res) => {
      const body = req.body;
      updateLevel(body, (err, results) => {
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
    deleteLevel:(req,res)=>{
      const data = req.params;
     deleteLevel(data, (err, results) => {
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
        message: "level deleted successfully"
      });
     });
    }

}
