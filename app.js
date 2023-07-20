const express = require("express");
const mongooseconnectionDb = require("./config/dbconnection");
mongooseconnectionDb()

const routes = require('./routes/index');
const errorHandler = require("./middleware/errorHandler")
const app = express();

app.use(express.json());
app.use(errorHandler);

app.use('/', routes);
module.exports = app;