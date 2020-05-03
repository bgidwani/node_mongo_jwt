'use strict';

const express = require('express');

//import routes
const authRoute = require('../app/auth/routes');
const userRoute = require('../app/users/routes');

const acl = require('../app/middleware/acl');

const app = (module.exports = express.Router());

// Signup route
app.use('/v1', authRoute);

app.use('/v1/users', acl.token.validate, userRoute);

//Routes for home page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to my site</h1>');
});

// catch 404 and forward to error handler
// note this is after all good routes and is not an error handler
// to get a 404, it has to fall through to this route - no error involved
app.use(function (req, res, next) {
    var err = new Error('You seems to be lost');
    err.status = 404;
    next(err);
});
