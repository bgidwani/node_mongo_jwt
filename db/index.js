'use strict';

const mongoose = require('mongoose');

const init = () => {
    //try to connect to DB
    const {
        DB_USER,
        DB_PASSWORD,
        DB_HOST,
        DB_PORT,
        DB_NAME,
      } = process.env;
      
      module.exports = {
        
      };
    let connect_url = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`

    mongoose
        .connect(connect_url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Connected to DB');
        });
};

module.exports = { init };
