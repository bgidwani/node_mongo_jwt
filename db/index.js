'use strict';

const mongoose = require('mongoose');

const init = () => {
    //try to connect to DB
    mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
        console.log('Connected to DB')
    );
};

module.exports = { init };
