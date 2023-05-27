const pool = require("../../config/database");
module.exports={
    create:(data, callback) => {
        pool.query(`insert into video( title, description, video_url, course_id) values(?,?,?,?)`,
            [
               data.title,
               data.description,
               data.video_url,
               data.course_id
            ],
            (error,results,fields) =>{
                if(error){
                   return callback(error);
                }
                return callback(null, results)
            }
        );
    },
    getVideo: callback =>{
        pool.query(`select *from video`,
        [],
        (error,results,fields) =>{
            if(error){
              return callback(error); 
            }
            return callback(null,results);
        }
        );
    },
    getVideoById: (id,callback) =>{
        pool.query(`select *from video where id=?`,
        [id],
        (error,results,fields) =>{
            if(error){
              return callback(error); 
            }
            return callback(null,results[0]);
        }
        );
    },
    updateVideo: (data, callBack) => {
        pool.query(
          `update video set title=?, description=?,  video_url=?, course_id=? where id = ?`,
          [
            data.title,
            data.description,
            data.video_url,
            data.course_id,
                data.id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      deleteVideo: (data, callBack) => {
        pool.query(
          `delete from video where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      
    }
    
    
};