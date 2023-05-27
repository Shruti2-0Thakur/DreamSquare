const pool = require("../../config/database");
module.exports = {
  create: (data, callback) => {
    pool.query(`insert into blog( title, description, body, verified, image, category) values(?,?,?,?,?,?)`,
      [
        data.title,
        data.description,
        data.body,
        data.verified,
        data.image,
        data.category
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results)
      }
    );
  },
  getBlog: callback => {
    pool.query(`select *from blog`,
      [],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getBlogById: (id, callback) => {
    pool.query(`select *from blog where id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  updateBlog: (data, callBack) => {
    pool.query(
      `update blog set ? where id = ?`,
      [
        data,
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
  deleteBlog: (data, callBack) => {
    pool.query(
      `delete from blog where id = ?`,
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
