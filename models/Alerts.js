const db = require("../config/db");

class AlertModel {
  static create_alert(alertType, threshold, userId) {
    return new Promise((resolve) => {
      const userCheckQuery = "SELECT * FROM users WHERE userId = ?";
      db.query(userCheckQuery, [userId], (error, userResult) => {
        if (error) {
          resolve(error);
        } else if (userResult.length === 0) {
          // User does not exist
          resolve({ message: "The user does not exist" });
        } else {
          const insertQuery =
            "INSERT INTO alerts (alertType, threshold, userId) VALUES (?, ?, ?)";
          const values = [alertType, threshold, userId];

          db.query(insertQuery, values, (error, reportResult) => {
            if (error) {
              resolve(error);
            } else {
              resolve(reportResult);
            }
          });
        }
      });
    });
  }

  static delete_alert(id) {
    return new Promise((resolve) => {
      const sql = "DELETE FROM alerts WHERE alertId = ?";

      db.query(sql, [id], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  static update_alert(id, threshold) {
    return new Promise((resolve) => {
      const sql = "UPDATE alerts SET threshold = ? WHERE alertId = ?";
      const values = [threshold, id];

      db.query(sql, values, (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  static get_alert_byId(id) {
    return new Promise((resolve) => {
      const sql = "SELECT * FROM alerts WHERE alertId = ?";

      db.query(sql, [id], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}
module.exports = AlertModel;
