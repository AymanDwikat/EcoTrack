const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "echotrack",
});

db.getConnection(() => {
  console.log("connect to db successfully");
});

module.exports = db;
