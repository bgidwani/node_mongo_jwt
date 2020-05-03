'use strict';

const server = require('./server');
const db = require('../db');

const init = () => {
    server.init();

    db.init();
};

module.exports = { init };
