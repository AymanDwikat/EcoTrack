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
    userInerests
  ) {
    return new Promise((resolve) => {
      const sql =
        "INSERT INTO users (name, email, password, location, role, interests) VALUES (?, ?, ?, ?, ?, ?)";
      const values = [
        userName,
        userEmail,
        userPassword,
        userLocation,
        userRole,
        userInerests,
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

  static delete_user(id) {
    return new Promise((resolve) => {
      const sql = "DELETE FROM users WHERE userId = ?";

      db.query(sql, [id], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
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
              location: user.location  
            });
          } else {
            resolve(null); // User not found or invalid credentials
          }
        }
      });
    });
  }
  static update_user(
    id,
    userName,
    userEmail,
    userPassword,
    userLocation,
    userRole,
    userInerests
  ) {
    return new Promise((resolve) => {
      const sql =
        "UPDATE users SET name = ?, email = ?, password = ?, location = ?, role = ?, interests = ? WHERE userId = ?";
      const values = [
        userName,
        userEmail,
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
