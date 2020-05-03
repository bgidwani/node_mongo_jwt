'use strict';

const express = require('express');
const app = (module.exports = express.Router());

const auth = require('./auth');

app.route('/register').post(auth.signup);

app.route('/login').post(auth.login);

app.route('/').get((req, res) => {
    res.send('List of all users');
});

app.route('/register').get((req, res) => {
    res.send('What are you trying to do here?');
});
