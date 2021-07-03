// It deals with the express router for each model
const express = require('express');
const { httpGetExamples } = require('./examples.controller');

const examplesRouter = express.Router();

examplesRouter.get('/',httpGetExamples);

module.exports = examplesRouter;