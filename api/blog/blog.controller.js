const bodyParser = require("body-parser");
const{ create,getBlog,getBlogById,updateBlog,deleteBlog}= require("./blog.service");

module.exports={
    createBlog:(req,res) =>{
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
    getBlog: (req, res) => {
      getBlog((err, results) => {
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
    getBlogById: (req, res) => {
      const id = req.params.id;
      getBlogById(id, (err, results) => {
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
    updateBlog: (req, res) => {
      const body = req.body;
      if(req.file){
        body.image = req.file.destination +'/'+req.file.filename;
      }
      updateBlog(body, (err, results) => {
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
    deleteBlog:(req,res)=>{
      const data = req.params;
      
     deleteBlog(data, (err, results) => {
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
        message: "blog deleted successfully"
      });
     });
    }

}

