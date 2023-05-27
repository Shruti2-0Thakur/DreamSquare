const bodyParser = require("body-parser");
const{ create,getStaff,getStaffById,updateStaff,getStaffByEmail,deleteStaff}= require("./staff.service");
const { genSaltSync, hashSync, compareSync }  = require("bcrypt");
 const { sign } = require ("jsonwebtoken");

module.exports={
    createStaff:(req,res) =>{
      console.log(req);
      console.log(req.file);
      req.body.image = req.file.destination +'/'+req.file.filename;
      const salt =  genSaltSync(10);
      req.body.password = hashSync(req.body.password,salt)
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
    getStaff: (req, res) => {
      getStaff((err, results) => {
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
    getStaffById: (req, res) => {
      const id = req.params.id;
      getStaffById(id, (err, results) => {
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
    updateStaff: (req, res) => {
      const body = req.body;
      console.log(req.file);
      body.image = req.file.destination +'/'+req.file.filename;

      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      updateStaff(body, (err, results) => {
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
    deleteStaff:(req,res)=>{
      const data = req.params;
     deleteStaff(data, (err, results) => {
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
        message: "staff deleted successfully"
      });
     });
    },
    login: (req, res) => {
      const body = req.body;
      getStaffByEmail( body.e_mail,( err, results) =>{
        console.log(body)
        if (err) {
          console.log(err);
        }
        if ( !results || !results[0]){
          return res.json({
            success: 0,
            data: " invalidd email or password"
          });

        }
        console.log(results[0].password);
         const result = compareSync(body.password.toString(), results[0].password);
         console.log(body.password);
         if (result){
          results.password = undefined;
          const jsonwebtoken = sign ({ result: results}, process.env.SALT );
          return res.json({
            success: 1,
            message: "login succesfully",
            token: jsonwebtoken
          });
         } else {
           return res.json({
            success: 0,
            data:"Invalid email or password "
           });
         }

      }

      )
    }

}
