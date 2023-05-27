const pool = require("../../config/database");
module.exports={
    create:(data, callback) => {
        pool.query(`insert into staff(  name, designation, aadhaar, address, dob, mobile, e_mail, password, image ) values(?,?,?,?,?,?,?,?,?)`,
            [
                
                data.name,
                data.designation,
                data.aadhaar,
                data.address,
                data.dob,
                data.mobile,
                data.e_mail,
                data.password,
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
    getStaff: callback =>{
        pool.query(`select *from staff`,
        [],
        (error,results,fields) =>{
            if(error){
              return callback(error); 
            }
            return callback(null,results);
        }
        );
    },
    getStaffById: (id,callback) =>{
        pool.query(`select * from staff where id=?`,
        [id],
        (error,results,fields) =>{
            if(error){
              return callback(error); 
            }
            return callback(null,results[0]);
        }
        );
    },
    updateStaff: (data, callBack) => {
        pool.query(
          `update staff set name=?, designation=?, aadhaar=?, address=?, dob=?, mobile=?, e_mail=?, password=?,  image=? where id = ?`,
          [
            data.name,
                data.designation,
                data.aadhaar,
                data.address,
                data.dob,
                data.mobile,
                data.e_mail,
                data.password,
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
      getStaffByEmail: (id,callback) =>{
        pool.query(`select * from staff where e_mail=?`,
        [id],
        (error,results,fields) =>{
            console.log(`select * from staff where e_mail=?`+id);
            if(error){
              return callback(error); 
            }
            return callback(null,results);
        }
        );
    },
      deleteStaff: (data, callBack) => {
        pool.query(
          `delete from staff where id = ?`,
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