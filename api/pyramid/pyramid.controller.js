const bodyParser = require("body-parser");
const{ create,getPyramid,getPyramidById,updatePyramid,deletePyramid}= require("./pyramid.service");

module.exports={
    createPyramid:(req,res) =>{
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
    getPyramid: (req, res) => {
      getPyramid((err, results) => {
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
    getPyramidById: (req, res) => {
      const id = req.params.id;
      getPyramidById(id, (err, results) => {
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
    updatePyramid: (req, res) => {
      const body = req.body;
      updatePyramid(body, (err, results) => {
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
    deletePyramid:(req,res)=>{
      const data = req.params;
     deletePyramid(data, (err, results) => {
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
        message: "pyramid deleted successfully"
      });
     });
    }

}
