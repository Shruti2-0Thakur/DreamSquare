const pool = require("../../config/database");
module.exports = {
  create: (data, callback) => {
    pool.query(`insert into course( name, description, url, thumbnail, vurl) values(?,?,?,?,?)`,
      [
        data.name,
        data.description,
        data.url,
        data.image,
        data.vurl
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results)
      }
    );
  },
  getCourse: callback => {
    pool.query(`select *from course`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getCourseById: (id, callback) => {
    pool.query(`select *from course where id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateCourse: (data, callBack) => {
    pool.query(
      `update course set name=?, description=?, url=?, thumbnail=?, vurl=? where id = ?`,
      [
        data.name,
        data.description,
        data.url,
        data.thumbnail,
        data.vurl,
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
  deleteCourse: (data, callBack) => {
    pool.query(
      `delete from course where id = ?`,
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
