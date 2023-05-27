const pool = require("../../config/database");
module.exports={
    create:(data, callback) => {
        pool.query(`insert into pyramid( name, percentage) values(?,?)`,
            [
               data.name,
               data.percentage
            ],
            (error,results,fields) =>{
                if(error){
                   return callback(error);
                }
                return callback(null, results)
            }
        );
    },
    getPyramid: callback =>{
        pool.query(`select *from pyramid`,
        [],
        (error,results,fields) =>{
            if(error){
              return callback(error); 
            }
            return callback(null,results);
        }
        );
    },
    getPyramidById: (id,callback) =>{
        pool.query(`select *from pyramid where id=?`,
        [id],
        (error,results,fields) =>{
            if(error){
              return callback(error); 
            }
            return callback(null,results[0]);
        }
        );
    },
    updatePyramid: (data, callBack) => {
        pool.query(
          `update pyramid set name=?, percentage=? where id = ?`,
          [
            data.name,
               data.percentage,
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
      deletePyramid: (data, callBack) => {
        pool.query(
          `delete from pyramid where id = ?`,
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