'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.route('/register').post(controller.signup);

router.route('/login').post(controller.login);

module.exports = router;
