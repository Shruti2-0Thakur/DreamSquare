const bodyParser = require("body-parser");
const{ create,getCourse,getCourseById,updateCourse,deleteCourse}= require("./course.service");

module.exports={
    createCourse:(req,res) =>{
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
    getCourse: (req, res) => {
      getCourse((err, results) => {
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
    getCourseById: (req, res) => {
      const id = req.params.id;
      getCourseById(id, (err, results) => {
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
    updateCourse: (req, res) => {
      const body = req.body;
      if(req.file){
        body.image = req.file.destination +'/'+req.file.filename;
      }
      updateCourse(body, (err, results) => {
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
    deleteCourse:(req,res)=>{
      const data = req.params;
     deleteCourse(data, (err, results) => {
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
        message: "course deleted successfully"
      });
     });
    }

}
