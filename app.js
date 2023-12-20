const express = require("express");
const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.json());

app.use(require("./routers/user-router"));
app.use(require("./routers/score-router"));
app.use(require("./routers/report-router"));

module.exports = app;
