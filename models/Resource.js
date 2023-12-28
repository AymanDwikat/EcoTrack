const db = require("../config/db");

class educationalmodel {
  static async get_resources() {
    return new Promise((resolve) => {
      const sql = "SELECT * FROM resources";
      db.query(sql, [], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  static insert_resource(title, description, url, category) {
    return new Promise((resolve) => {
      const sql =
        "INSERT INTO resources (title ,description ,url ,category) VALUES (?, ?, ?, ? )";
      const values = [title, description, url, category];

      db.query(sql, values, (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  
  static update_resource(educationalid, title, description, url, category) {
    return new Promise((resolve) => {
      const sql =
        "UPDATE resources SET title = ?, description = ?, url=?, category=?  WHERE  resourceId = ?";
      const values = [title, description, url, category, educationalid];
      db.query(sql, values, (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  static delete_resource(eduid) {
    return new Promise((resolve) => {
      const sql = "DELETE FROM resources WHERE resourceId = ? ";

      db.query(sql, [eduid], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}
module.exports = educationalmodel;
