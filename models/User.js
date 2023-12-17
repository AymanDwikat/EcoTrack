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
          console.error("Error create user: ", error);
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
          console.error("Error get users : ", error);
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = UserModel;
