const pool = require("../../config/database");
module.exports={
    create:(data, callback) => {
        pool.query(`insert into level(  name, people,mandatory ) values(?,?,?)`,
            [
                
                data.name,
                data.people,
                data.mandatory
                
                
            ],
            (error,results,fields) =>{
                if(error){
                   return callback(error);
                }
                return callback(null, results)
            }
        );
    },
    getLevel: callback =>{
        pool.query(`select *from level`,
        [],
        (error,results,fields) =>{
            if(error){
              return callback(error); 
            }
            return callback(null,results);
        }
        );
    },
    getLevelById: (id,callback) =>{
        pool.query(`select * from level where id=?`,
        [id],
        (error,results,fields) =>{
            if(error){
              return callback(error); 
            }
            return callback(null,results[0]);
        }
        );
    },
    updateLevel: (data, callBack) => {
        pool.query(
          `update level set name=?, people=?, mandatory=? where id = ?`,
          [
            data.name,
                data.people,
                data.mandatory,
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
      deleteLevel: (data, callBack) => {
        pool.query(
          `delete from level where id = ?`,
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