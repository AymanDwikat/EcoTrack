const db = require("../config/db");

class ScoreModel {
  scoreValue;

  static create_score(scoreValue, userId) {
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
            "INSERT INTO scores (scoreValue, userId) VALUES (?, ?)";
          const values = [scoreValue, userId];

          db.query(insertQuery, values, (error, result) => {
            if (error) {
              resolve(error);
            } else {
              resolve(result);
            }
          });
        }
      });
    });
  }

  static delete_score(id) {
    return new Promise((resolve) => {
      const sql = "DELETE FROM scores WHERE scoreId = ?";

      db.query(sql, [id], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  static update_score(id, score) {
    return new Promise((resolve) => {
      const sql = "UPDATE scores SET scoreValue = ? WHERE scoreId = ?";
      const values = [score, id];

      db.query(sql, values, (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  static get_score_byId(id) {
    return new Promise((resolve) => {
      const sql = "SELECT * FROM scores WHERE scoreId = ?";

      db.query(sql, [id], (error, result) => {
        if (error) {
          resolve(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  static async get_scores() {
    return new Promise((resolve) => {
      const sql = "SELECT * FROM scores";

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

module.exports = ScoreModel;
