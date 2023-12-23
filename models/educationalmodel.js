const db = require("../config/db");
class educationalmodel {


static async geteduacationaldata() {
    return new Promise((resolve) => {
      const sql = "SELECT * FROM educationals";
      db.query(sql, [], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  static insertedudata(
title,description,url,category
  ) {
    return new Promise((resolve) => {
      const sql =
        "INSERT INTO educationals (title,description,url,category) VALUES (?, ?, ?, ? )";
      const values = [
   title,description,url,category
      ];

      db.query(sql, values, (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  static updateedudata(
    educationalid,title,description,url,category) {
    return new Promise((resolve) => {
      const sql =
        "UPDATE educationals SET title = ?, description = ?, url=?, category=?  WHERE  educationalid = ?";
        const values =[title,description,url,category,educationalid];
        db.query(sql, values, (error, result) => {
        if (error) {
            resolve(error);
        } else {
          resolve(result);
        }

      });
    });
  }
  static deleteedudata(eduid) {
    return new Promise((resolve) => {
      const sql = "DELETE FROM educationals WHERE educationalid = ? ";

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