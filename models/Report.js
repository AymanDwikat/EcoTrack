const db = require("../config/db");

class ReportModel {
  reportType;
  description;
  location;

  static create_report(reportType, description, location, userId) {
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
            "INSERT INTO reports (reportType, description, location, userId) VALUES (?, ?, ?, ?)";
          const values = [reportType, description, location, userId];

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

  static delete_report(id) {
    return new Promise((resolve) => {
      const sql = "DELETE FROM reports WHERE reportId = ?";

      db.query(sql, [id], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  static update_report(id, reportType, description, location) {
    return new Promise((resolve) => {
      const sql =
        "UPDATE reports SET reportType = ?, description = ?, location = ? WHERE reportId = ?";
      const values = [reportType, description, location, id];

      db.query(sql, values, (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  static get_report_byId(id) {
    return new Promise((resolve) => {
      const sql = "SELECT * FROM reports WHERE reportId = ?";

      db.query(sql, [id], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  static async get_reports() {
    return new Promise((resolve) => {
      const sql = "SELECT * FROM reports";

      db.query(sql, [], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = ReportModel;
