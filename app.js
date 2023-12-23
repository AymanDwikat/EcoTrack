const express = require("express");
const app = express();

const bodyparser = require("body-parser");
app.use(bodyparser.json());

app.use(require("./routers/user-router"));
app.use(require("./routers/score-router"));
app.use(require("./routers/report-router"));
app.use(require("./routers/datacollection_router"));
app.use(require("./routers/educational_router"));
app.use(require("./routers/weather_router(exAPI)"));
module.exports = app;
