'use strict';

const express = require('express');
const app = (module.exports = express.Router());

const user = require('./user');

app.get('/', user.getAll);
