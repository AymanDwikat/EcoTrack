
const db = require("../config/db");

class opendata {
    static async getdata() {
      return new Promise((resolve) => {
        const sql = "SELECT dataType, location, value, source, unit FROM datacollections";
  
        db.query(sql, [], (error, result) => {
          if (error) {
            resolve(error);
          } else {
            console.log(result);
            resolve(result);

          }
        });
      });
    }
  }
module.exports = opendata;