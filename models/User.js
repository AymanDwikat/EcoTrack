const db = require("../config/db");

class UserModel {
  name;
  email;
  password;
  location;
  role;
  interests;

  static create_user(
    userName,
    userEmail,
    userPassword,
    userLocation,
    userRole,
    userInterests
  ) {
    return new Promise((resolve) => {
      const insertUserQuery =
        "INSERT INTO users (name, email, password, location, role, interests) VALUES (?, ?, ?, ?, ?, ?)";
      const userValues = [
        userName,
        userEmail,
        userPassword,
        userLocation,
        userRole,
        userInterests,
      ];

      db.query(insertUserQuery, userValues, (error, userResult) => {
        if (error) {
          resolve(error);
        } else {
          const userId = userResult.insertId; // Get the generated userId

          const initialScoreValue = 0;
          const insertScoreQuery =
            "INSERT INTO scores (scoreValue, userId) VALUES (?, ?)";
          const scoreValues = [initialScoreValue, userId];

          db.query(insertScoreQuery, scoreValues, (error, scoreResult) => {
            if (error) {
              resolve(error);
            } else {
              resolve(userResult);
            }
          });
        }
      });
    });
  }

  static authenticateUser(email, password) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

      db.query(sql, [email, password], (error, results) => {
        if (error) {
          reject(error);
        } else {
          if (results.length > 0) {
            const user = results[0];
            resolve({
              userId: user.userId,
              username: user.name,
              location: user.location,
            });
          } else {
            resolve(null); // User not found or invalid credentials
          }
        }
      });
    });
  }

  static delete_user(id) {
    return new Promise(async (resolve) => {
      // Delete related records (e.g., scores) first
      await this.deleteRelatedScores(id);
      await this.deleteRelatedReports(id);
      await this.deleteRelatedDataCollections(id);

      // Then, delete the user
      const sql = "DELETE FROM users WHERE userId = ?";
      db.query(sql, [id], (error, result) => {
        if (error) {
          console.error("Error executing delete query:", error);
          resolve(error);
        } else {
          console.log("Delete query:", sql);
          console.log("User ID:", id);
          console.log("Delete result:", result);

          resolve(result);
        }
      });
    });
  }

  static deleteRelatedScores(userId) {
    return new Promise((resolve) => {
      // Modify this function to delete related records (e.g., scores) for the given user ID
      const deleteScoresQuery = "DELETE FROM scores WHERE userId = ?";
      db.query(deleteScoresQuery, [userId], (error, result) => {
        if (error) {
          console.error("Error deleting scores:", error);
          resolve(error);
        } else {
          console.log("Deleted scores for user ID:", userId);
          resolve(result);
        }
      });
    });
  }

  static deleteRelatedReports(userId) {
    return new Promise((resolve) => {
      // Modify this function to delete related records (e.g., scores) for the given user ID
      const deleteScoresQuery = "DELETE FROM reports WHERE userId = ?";
      db.query(deleteScoresQuery, [userId], (error, result) => {
        if (error) {
          console.error("Error deleting reports:", error);
          resolve(error);
        } else {
          console.log("Deleted reports for user ID:", userId);
          resolve(result);
        }
      });
    });
  }

  static deleteRelatedDataCollections(userId) {
    return new Promise((resolve) => {
      // Modify this function to delete related records (e.g., scores) for the given user ID
      const deleteScoresQuery = "DELETE FROM datacollections WHERE userId = ?";
      db.query(deleteScoresQuery, [userId], (error, result) => {
        if (error) {
          console.error("Error deleting data collections:", error);
          resolve(error);
        } else {
          console.log("Deleted data collections for user ID:", userId);
          resolve(result);
        }
      });
    });
  }

  static update_user(
    id,
    userName,
    userPassword,
    userLocation,
    userRole,
    userInerests
  ) {
    return new Promise((resolve) => {
      const sql =
        "UPDATE users SET name = ?, password = ?, location = ?, role = ?, interests = ? WHERE userId = ?";
      const values = [
        userName,
        userPassword,
        userLocation,
        userRole,
        userInerests,
        id,
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

  static get_user_byId(id) {
    return new Promise((resolve) => {
      const sql = "SELECT * FROM users WHERE userId = ?";

      db.query(sql, [id], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  static async get_users() {
    return new Promise((resolve) => {
      const sql = "SELECT * FROM users";

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

module.exports = UserModel;
