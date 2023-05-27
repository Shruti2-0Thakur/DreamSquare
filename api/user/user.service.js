const pool = require("../../config/database");
module.exports={
    create:(data, callback) => {
        pool.query(`insert into user( name, designation,mobile, e_mail, ref_no, image) values(?,?,?,?,?,?)`,
            [
               data.name,
               data.designation,
               data.mobile,
               data.e_mail,
               data.ref_no,
               data.image
            ],
            (error,results,fields) =>{
                if(error){
                   return callback(error);
                }
                return callback(null, results)
            }
        );
    },
    getUser: callback =>{
        pool.query(`select *from user`,
        [],
        (error,results,fields) =>{
            if(error){
              return callback(error); 
            }
            return callback(null,results);
        }
        );
    },
    getUserById: (id,callback) =>{
        pool.query(`select *from user where id=?`,
        [id],
        (error,results,fields) =>{
            if(error){
              return callback(error); 
            }
            return callback(null,results[0]);
        }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
          `update user set name=?, designation=?, mobile=?, e_mail=?, ref_no=?, image=? where id = ?`,
          [
            data.name,
            data.designation,
            data.mobile,
            data.e_mail,
            data.ref_no,
            data.image,
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
      deleteUser: (data, callBack) => {
        pool.query(
          `delete from user where id = ?`,
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