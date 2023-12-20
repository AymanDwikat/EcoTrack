const express = require("express");
const mydb = require("./config/db");
const app = require("./app");

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
