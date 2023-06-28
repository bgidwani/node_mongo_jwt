'use strict';

const express = require('express');
const app = (module.exports = express.Router());

const auth = require('./auth');

app.route('/register').post(auth.signup);

app.route('/login').post(auth.login);

app.route('/').get((req, res) => {
    res.send('v1 route');
});