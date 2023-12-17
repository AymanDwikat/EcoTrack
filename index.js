const express = require("express");
const mydb = require("./config/db");
const app = require("./app");

app.use("/", (req, res, next) => {
  res.send("Hello Word!");
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
