const bodyParser = require("body-parser");
const{ create,getUser,getUserById,updateUser,deleteUser}= require("./user.service");

module.exports={
    createUser:(req,res) =>{
      console.log(req);
      console.log(req.file);
      req.body.image = req.file.destination +'/'+req.file.filename;

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
    getUser: (req, res) => {
      getUser((err, results) => {
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
    getUserById: (req, res) => {
      const id = req.params.id;
      getUserById(id, (err, results) => {
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
    updateUser: (req, res) => {
      const body = req.body;
      updateUser(body, (err, results) => {
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
    deleteUser:(req,res)=>{
      const data = req.params;
     deleteUser(data, (err, results) => {
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
        message: "user deleted successfully"
      });
     });
    }

}
