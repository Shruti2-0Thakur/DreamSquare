const pool = require("../../config/database");
module.exports={
    create:(data, callback) => {
        pool.query(`insert into earning(  user_id, amount, transaction_id) values(?,?,?)`,
            [
                
                data.user_id,
                data.amount,
                data.transaction_id
                
                
            ],
            (error,results,fields) =>{
                if(error){
                   return callback(error);
                }
                return callback(null, results)
            }
        );
    },
    getEarning: callback =>{
        pool.query(`select *from earning`,
        [],
        (error,results,fields) =>{
            if(error){
              return callback(error); 
            }
            return callback(null,results);
        }
        );
    },
    getEarningById: (id,callback) =>{
        pool.query(`select * from earning where id=?`,
        [id],
        (error,results,fields) =>{
            if(error){
              return callback(error); 
            }
            return callback(null,results);
        }
        );
    },
    updateEarning: (data, callBack) => {
        pool.query(
          `update earning set user_id=?, amount=?, transaction_id=? where id = ?`,
          [
            data.user_id,
                data.amount,
                data.transaction_id,
            
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
      deleteEarning: (data, callBack) => {
        pool.query(
          `delete from earning where id = ?`,
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