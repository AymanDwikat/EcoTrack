const db = require("../config/db");

class Datacollection {
  static insertdata(dataId, dataType, datakey, location, value, source, unit, userId) {
    return new Promise((resolve) => {
      // Check if the user exists in the users table
      const userCheckQuery = "SELECT * FROM users WHERE userId = ?";
      db.query(userCheckQuery, [userId], (error, result) => {
        if (error) {
          resolve(error);
        } else if (result.length === 0) {
          // User does not exist
          resolve({ message: "The user does not exist" });
        } else {
          const insertQuery =
            "INSERT INTO datacollections (dataType, datakey, location, value, source, unit, userId) VALUES (?,?,?,?,?,?,?)";
          const values = [dataType, datakey, location, value, source, unit, userId];
          db.query(insertQuery, values, (error, result) => {
            if (error) {
              resolve(error);
            } else {
              // Increment the scorevalue by one
              const incrementQuery =
                "UPDATE scores SET scorevalue = scorevalue + 1 WHERE userId = ?";
              db.query(incrementQuery, [userId], (error, result) => {
                if (error) {
                  resolve(error);
                } else {
                  resolve(result);
                }
              });
            }
          });
        }
      });
    });
  }
  static getData(userId) {
    return new Promise((resolve) => {
      const getDataQuery = "SELECT * FROM datacollections WHERE userId = ?";
      db.query(getDataQuery, [userId], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  static updatedata(dataid, dataType, datakey, location, value, source, unit ,userId) {
    return new Promise((resolve) => {
      const sql =
        "UPDATE datacollections SET dataType = ?, datakey = ?, location=?, value=?, source=?, unit=? , userid=? WHERE dataId=?";
        const values = [dataType, datakey, location, value, source, unit, userId ,dataid];
      db.query(sql, values, (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  static deletedata(dataId) {
    return new Promise((resolve) => {
      const sql = "DELETE FROM datacollections WHERE dataId = ? ";

      db.query(sql, [dataId], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}
    module.exports = Datacollection;