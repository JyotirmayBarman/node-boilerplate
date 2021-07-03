const express = require('express');
const examplesRouter = require('./routes/examples/examples.router');
const app = express();

app.use('/',examplesRouter);


module.exports = app;