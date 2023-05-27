const pool = require("../../config/database");
module.exports={
    create:(data, callback) => {
        pool.query(`insert into transaction( transaction_id,course_id, amount, verified) values(?,?,?,?)`,
            [
               data.transaction_id,
               data.course_id,
               data.amount,
               data.verified
            ],
            (error,results,fields) =>{
                if(error){
                   return callback(error);
                }
                return callback(null, results)
            }
        );
    },
    getTransaction: callback =>{
        pool.query(`select *from transaction`,
        [],
        (error,results,fields) =>{
            if(error){
              return callback(error);
            }
            return callback(null,results);
        }
        );
    },
    getTransactionById: (id,callback) =>{
        pool.query(`select *from transaction where id=?`,
        [id],
        (error,results,fields) =>{
            if(error){
              return callback(error);
            }
            return callback(null,results[0]);
        }
        );
    },
    updateTransaction: (data, callBack) => {
        pool.query(
          `update transaction set transaction_id=?,course_id=?, amount=?, verified=? where id = ?`,
          [
            data.transaction_id,
            data.course_id,
            data.amount,
            data.verified,
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
      deleteTransaction: (data, callBack) => {
        pool.query(
          `delete from transaction where id = ?`,
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
