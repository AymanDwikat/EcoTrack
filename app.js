const express = require("express");
const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.json());

app.use(require("./routers/user-router"));

module.exports = app;
