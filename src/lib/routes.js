'use strict';

const express = require('express');

//import routes
const authRoute = require('../auth/routes');
const userRoute = require('../users/routes');

const acl = require('../lib/middleware/acl');

const router = express.Router();

// Signup route
router.use('/v1', authRoute);

router.use('/v1/users', acl.token.validate, userRoute);

//Routes for home page
router.get('/', (req, res) => {
    res.send('Welcome to NodeJS');
});

// catch 404 and forward to error handler
// note this is after all good routes and is not an error handler
// to get a 404, it has to fall through to this route - no error involved
router.use(function (req, res, next) {
    var err = new Error('You seems to be lost');
    err.status = 404;
    next(err);
});

module.exports = router;